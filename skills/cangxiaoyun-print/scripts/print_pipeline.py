#!/usr/bin/env python3
"""仓小云印刷 V1.1：Real-ESRGAN 可选超分、SVG 矢量叠加与 ICC 预检。"""
import argparse, io, json, shutil, subprocess, tempfile
from pathlib import Path
from PIL import Image, ImageCms, ImageOps
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader
from reportlab.graphics import renderPDF
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.cidfonts import UnicodeCIDFont
from svglib.svglib import svg2rlg
import fitz

CM_PT=72/2.54

def main():
 p=argparse.ArgumentParser()
 p.add_argument('image',type=Path)
 p.add_argument('--width-cm',type=float,required=True)
 p.add_argument('--height-cm',type=float,required=True)
 p.add_argument('--target-ppi',type=float,default=100)
 p.add_argument('--output-dir',type=Path,default=Path('print-output'))
 p.add_argument('--svg-overlay',type=Path)
 p.add_argument('--upscale',action='store_true')
 p.add_argument('--realesrgan-bin',type=Path)
 p.add_argument('--upscale-model',default='realesrgan-x4plus')
 p.add_argument('--bleed-mm',type=float,default=0)
 a=p.parse_args()
 if min(a.width_cm,a.height_cm,a.target_ppi)<=0:p.error('尺寸和 PPI 须为正')
 if a.bleed_mm:p.error('不自动生成出血；请由设计师提供延展出血原稿')
 a.output_dir.mkdir(parents=True,exist_ok=True)
 im=ImageOps.exif_transpose(Image.open(a.image));original=im.size
 if abs(im.width/im.height/(a.width_cm/a.height_cm)-1)>.005:p.error('图像长宽比例不符，禁止强制拉伸')
 icc=im.info.get('icc_profile');profile_name=None;warnings=[]
 if icc:
  try:profile_name=ImageCms.getProfileName(ImageCms.ImageCmsProfile(io.BytesIO(icc))).strip()
  except Exception:warnings.append('嵌入 ICC 无法识别')
 else:warnings.append('未嵌入 ICC，需与印厂确认输出色彩标准')
 before=min(im.width*2.54/a.width_cm,im.height*2.54/a.height_cm)
 used_ai=False
 if a.upscale:
  exe=shutil.which(str(a.realesrgan_bin)) if a.realesrgan_bin else shutil.which('realesrgan-ncnn-vulkan')
  if not exe:p.error('Real-ESRGAN 未安装，需配置 --realesrgan-bin')
  with tempfile.TemporaryDirectory() as d:
   inp=Path(d)/'input.png';out=Path(d)/'upscaled.png';im.convert('RGB').save(inp)
   result=subprocess.run([exe,'-i',str(inp),'-o',str(out),'-n',a.upscale_model],capture_output=True,text=True,timeout=1800)
   if result.returncode or not out.exists():p.error('Real-ESRGAN 处理失败：'+result.stderr[-400:])
   im=Image.open(out);im.load();used_ai=True
  warnings.append('AI 超分可能产生虚构细节：必须核查文字、Logo 与产品形态')
 if im.mode!='RGB':warnings.append(f'图像模式 {im.mode} 转换为 RGB，请检查色彩');im=im.convert('RGB')
 after=min(im.width*2.54/a.width_cm,im.height*2.54/a.height_cm)
 if after<a.target_ppi:warnings.append(f'有效 PPI {after:.1f} 低于目标 {a.target_ppi:g}')
 sw=a.width_cm*CM_PT;sh=a.height_cm*CM_PT;scale=10 if max(sw,sh)>14000 else 1
 stream=io.BytesIO();im.save(stream,format='PNG');stream.seek(0)
 path=a.output_dir/'PRINT.pdf';pdf=canvas.Canvas(str(path),pagesize=(sw/scale,sh/scale))
 pdf.drawImage(ImageReader(stream),0,0,width=sw/scale,height=sh/scale)
 if a.svg_overlay:
  vec=svg2rlg(str(a.svg_overlay))
  if vec is None or min(vec.width,vec.height)<=0:p.error('SVG 格式或尺寸无效')
  pdf.saveState();pdf.scale(sw/scale/vec.width,sh/scale/vec.height);renderPDF.draw(vec,pdf,0,0);pdf.restoreState()
  warnings.append('已叠加矢量图形；需检查字体、路径及透明效果')
 pdf.setTitle('仓小云印刷 V1.1');pdf.setSubject(f'{a.width_cm}x{a.height_cm}cm at 1:{scale}');pdf.showPage();pdf.save()
 document=fitz.open(path);r=document[0].rect;document.close()
 assert abs(r.width-sw/scale)<2 and abs(r.height-sh/scale)<2
 preview=im.copy();preview.thumbnail((1600,1600));preview.save(a.output_dir/'PREVIEW.jpg',quality=90)
 warnings.append('需印厂确认材质、色彩配置、出血包边、RIP 与实物打样')
 qc={'skill':'仓小云印刷 V1.1','source_pixels':original,'output_pixels':im.size,'finished_cm':[a.width_cm,a.height_cm],'original_ppi':round(before,1),'final_ppi':round(after,1),'target_ppi':a.target_ppi,'ICC_profile':profile_name,'real_esrgan_used':used_ai,'svg_overlay':bool(a.svg_overlay),'scale':f'1:{scale}','CMYK_converted':False,'status':'REVIEW REQUIRED','warnings':warnings}
 (a.output_dir/'QC.json').write_text(json.dumps(qc,ensure_ascii=False,indent=2),encoding='utf-8')
 pdfmetrics.registerFont(UnicodeCIDFont('STSong-Light'));report=canvas.Canvas(str(a.output_dir/'QC.pdf'),pagesize=(595,842));report.setFont('STSong-Light',16);report.drawString(40,785,'仓小云印刷 V1.1 - 印前质检');report.setFont('STSong-Light',10);y=750
 for line in [f'成品尺寸 {a.width_cm} × {a.height_cm} cm',f'原图有效PPI {before:.1f} / 最终 {after:.1f}',f'AI超分 {used_ai} / 矢量叠加 {bool(a.svg_overlay)} / PDF 1:{scale}',f'ICC: {profile_name or "无"}']+warnings:
  while line:
   report.drawString(40,y,line[:45]);line=line[45:];y-=19
   if y<60:report.showPage();report.setFont('STSong-Light',10);y=785
 report.save();print(json.dumps(qc,ensure_ascii=False))

if __name__=='__main__':main()

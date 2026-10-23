# 仓小云印刷 V1.1
将 AI 设计稿制作成印前 PDF，支持可选 Real-ESRGAN 高清增强、SVG 矢量叠加、ICC 预检。

## 安装
```bash
python -m pip install -r requirements.txt
```

## 示例
```bash
python scripts/print_pipeline.py poster.png --width-cm 200 --height-cm 180 --target-ppi 150 --output-dir output
python scripts/print_pipeline.py poster.png --width-cm 200 --height-cm 180 --svg-overlay brand.svg --output-dir output
python scripts/print_pipeline.py poster.png --width-cm 200 --height-cm 180 --upscale --realesrgan-bin /path/to/realesrgan-ncnn-vulkan --output-dir output
```

Real-ESRGAN **不包含在这个仓库**。请自行安装 `realesrgan-ncnn-vulkan` 并提供程序路径；增强失败将显式报错，而不会静默降级。SVG 仅作为独立矢量层叠加到 PDF，推荐使用与成品同比例的 SVG viewBox。色彩检查只能识别 ICC 是否存在及当前图像模式，不会擅自转换 CMYK。输出 PRINT.pdf、PREVIEW.jpg、QC.json、QC.pdf。

## 限制
印厂可能要求出血、包边、拼版、专用 ICC、RIP 设备验证。不能自动完成专业色彩软打样和实物打样；输出文件需要印刷厂审核。
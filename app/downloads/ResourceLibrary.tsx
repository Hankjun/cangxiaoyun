"use client";
import {useState} from "react";
import {sitePath} from "../site-path";
import {resourceCategories,resources,type ResourceCategory} from "./resources";
export default function ResourceLibrary(){
 const [category,setCategory]=useState<ResourceCategory|"all">("all");
 const selected=resourceCategories.find(c=>c.id===category);
 const shown=resources.filter(r=>category==="all"||r.category===category);
 return <>
  <div className="docs-filters" role="group" aria-label="按资料分类筛选">
   <button type="button" aria-pressed={category==="all"} onClick={()=>setCategory("all")}>全部资料 <span>{resources.length}</span></button>
   {resourceCategories.map(c=><button key={c.id} type="button" aria-pressed={category===c.id} onClick={()=>setCategory(c.id)}>{c.name}<span>{resources.filter(r=>r.category===c.id).length}</span></button>)}
  </div>
  <div className="docs-library-heading"><h2 id="library-title">{selected?.name||"全部资料"}</h2><span role="status" aria-live="polite">{shown.length} 份资料{selected?` / ${selected.description}`:" / 五类资料持续更新"}</span></div>
  <div className="docs-results">
   {shown.length?shown.map(r=><article className={`docs-feature${r.coverShape==="square"?" docs-image-resource":""}`} id={r.id} key={r.id}>
    <a className="docs-cover" href={sitePath(r.file)} target="_blank" rel="noreferrer" aria-label={`查看原文件：${r.title}（新窗口）`}><img src={sitePath(r.cover)} width={r.coverShape==="square"?512:960} height={r.coverShape==="square"?512:540} alt={r.title} loading="lazy"/><span>查看原文件 <b aria-hidden="true">↗</b></span></a>
    <div className="docs-detail"><p className="docs-category">{resourceCategories.find(c=>c.id===r.category)?.name}{r.updated?` · ${r.updated} 更新`:""}</p><h3>{r.title}</h3><p className="docs-summary">{r.summary}</p><dl className="docs-meta"><div><dt>文件格式</dt><dd>{r.format}</dd></div>{r.pages&&<div><dt>文档页数</dt><dd>{r.pages} 页</dd></div>}<div><dt>文件大小</dt><dd>{r.size}</dd></div></dl><div className="docs-actions"><a className="brand-button" href={sitePath(r.file)} download={r.filename}>下载原文件 <span aria-hidden="true">↓</span><span className="docs-sr">：{r.title}</span></a><a className="docs-read" href={sitePath(r.file)} target="_blank" rel="noreferrer">{r.format==="PDF"?"在线阅读":"查看原图"} <span aria-hidden="true">↗</span><span className="docs-sr">：{r.title}（新窗口）</span></a></div><p className="docs-note">{r.note}</p></div>
   </article>):<div className="docs-empty"><span aria-hidden="true">＋</span><h3>{selected?.name}，持续整理中。</h3><p>本分类暂未发布资料，后续将在这里更新。</p><button type="button" onClick={()=>setCategory("all")}>查看已有资料 <span aria-hidden="true">↗</span></button></div>}
  </div>
 </>;
}

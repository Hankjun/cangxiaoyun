import type {Metadata} from "next";
import {sitePath} from "../site-path";
import ResourceLibrary from "./ResourceLibrary";
import "./downloads.css";
export const metadata:Metadata={title:"资料下载｜中域云仓 3.0",description:"中域云仓资料中心，汇集品牌资料、视觉资料、业务资料、行业资料与 AI 资料。在线查看或下载原版文件，持续更新。"};
export default function DownloadsPage(){return <main className="downloads-page">
 <section className="docs-intro"><p className="brand-kicker"><span/>中域云仓 3.0 / RESOURCE LIBRARY</p><h1>把有用的资料，<br/><em>放在一起。</em></h1><p>品牌、视觉、业务、行业与 AI，五类资料持续汇集。<br/>从了解中域云仓，到把方法带回现场。</p><a href="#document-library" className="docs-jump">浏览资料 <span aria-hidden="true">↓</span></a></section>
 <section className="docs-library" id="document-library" aria-labelledby="library-title"><ResourceLibrary/></section>
 <section className="docs-values"><p>资料持续更新 · 方法共同积累</p><h2>从了解，到一起做好。</h2><a href={sitePath("/standard-warehouse")}>走进标准仓，了解仓网共建 <span aria-hidden="true">↗</span></a></section>
 </main>;}

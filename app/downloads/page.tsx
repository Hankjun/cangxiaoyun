import type { Metadata } from "next";
import { sitePath } from "../site-path";
import "./downloads.css";

export const metadata: Metadata = {
  title: "文档下载｜中域玖壹企业文化",
  description: "在线阅读或下载《中域玖壹企业文化解读》原版 PDF，了解生机、图腾、上善与中域人的成长理念。",
};
const chapters = [
  ["01", "文化是什么", "从起源与语境出发，理解文化如何成为做事的习惯。"],
  ["02", "我们是谁，在做什么", "回看中域玖壹的企业定位、组织架构与业务版图。"],
  ["03", "我们的意义", "走近生机、图腾、上善，以及使命、精神、愿景与价值观。"],
  ["04", "未来与成长", "了解长期愿景，以及每一位中域人的成长之路。"],
];
export default function DownloadsPage() {
  const pdf = sitePath("/documents/zhongyu-jiuyi-culture.pdf");
  return <main className="downloads-page">
    <section className="docs-intro"><p className="brand-kicker"><span/>资料中心 / DOCUMENTS</p><h1>把共同的信念，<br/><em>留在每一次行动里。</em></h1><p>从企业文化出发，认识中域的初心、做事方式与成长理念。<br/>在这里，阅读与下载我们的品牌资料。</p><a href="#document-library" className="docs-jump">浏览文档 <span aria-hidden="true">↓</span></a></section>
    <section className="docs-library" id="document-library" aria-labelledby="library-title">
      <div className="docs-library-heading"><h2 id="library-title">文档下载</h2><span>01 份资料 / 企业文化</span></div>
      <article className="docs-feature">
        <a className="docs-cover" href={pdf} target="_blank" rel="noreferrer" aria-label="打开原版 PDF：《中域玖壹企业文化解读》（新窗口）"><img src={sitePath("/documents/culture-cover.webp")} width="960" height="540" alt="中域玖壹企业文化解读，生机 · 图腾 · 上善"/><span>打开原版 PDF <b aria-hidden="true">↗</b></span></a>
        <div className="docs-detail"><p className="docs-category">企业文化 · 历史资料</p><h3>中域玖壹<br/>企业文化解读</h3><p className="docs-summary">从“文化是什么”到“我们将走向哪里”，用一份手册，读懂中域人的共同信念。</p><dl className="docs-meta"><div><dt>文件格式</dt><dd>PDF</dd></div><div><dt>文档页数</dt><dd>12 页</dd></div><div><dt>文件大小</dt><dd>1.3 MB</dd></div></dl><div className="docs-actions"><a className="brand-button" href={pdf} download="中域玖壹企业文化解读.pdf">下载原版 PDF <span aria-hidden="true">↓</span></a><a className="docs-read" href={pdf} target="_blank" rel="noreferrer">在线阅读 <span aria-hidden="true">↗</span><span className="docs-sr">（新窗口）</span></a></div><p className="docs-note">保留原文完整内容。文中企业数据、组织与规划为原文历史表述。</p></div>
      </article>
      <div className="docs-contents"><div><p className="brand-kicker"><span/>阅读导览</p><h2>一份手册，<br/>四个理解我们的入口。</h2></div><ol>{chapters.map(([n,title,detail])=><li key={n}><span>{n}</span><div><h3>{title}</h3><p>{detail}</p></div></li>)}</ol></div>
    </section>
    <section className="docs-values"><p>生机 · 图腾 · 上善</p><h2>信念，在行动中生长。</h2><a href={sitePath("/standard-warehouse")}>走进标准仓，了解仓网共建 <span aria-hidden="true">↗</span></a></section>
  </main>;
}

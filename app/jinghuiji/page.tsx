import type { Metadata } from "next";
import Marketplace from "./Marketplace";
import "./marketplace.css";

export const metadata:Metadata={title:"鲸汇集｜中域云仓售卖中心",description:"三个展厅，覆盖摊位、帐篷、桌椅、观演结构、安保隔离、地面保护与电力系统。可租、可买、可置换，按需整理你的选品清单。",openGraph:{title:"鲸汇集｜可租可卖可换",description:"中域云仓售卖中心 · 三个展厅，一站选品。"}};

export default function Jinghuiji(){return <main className="whale-page" id="market-top">
 <a className="market-skip" href="#showrooms">跳到展厅</a>
 <header className="market-header"><a className="market-brand" href="/jinghuiji"><svg viewBox="0 0 50 36" aria-hidden="true"><path d="M5 19c0-8 7-13 18-13 10 0 16 5 17 11l5-5 1 10-8 2c-4 9-23 12-30 5-3-3-4-6-3-10Z"/><path d="M11 23c5 5 15 5 21 1M26 9l-3-6M32 9l2-6"/><circle cx="12" cy="17" r="1.5"/></svg><span>鲸汇集<small>中域云仓 · 售卖中心</small></span></a><nav aria-label="鲸汇集导航"><a href="/">首页</a><a href="/standard-warehouse">标准仓</a><a href="/jinghuiji" aria-current="page">鲸汇集</a></nav><a className="market-header-link" href="#catalog">全品类选品 <span aria-hidden="true">↗</span></a></header>
 <section className="market-hero"><div><p className="market-kicker">好物汇集，价值流转</p><h1>可租，可买，<br/>也可<span>置换。</span></h1></div><div className="market-hero-side"><p>从活动物料的按需配置，<br/>到闲置资源的再次流转。<br/>三个展厅，一站找到所需。</p><div className="market-hero-modes"><span>租<small>按需使用</small></span><span>买<small>长期持有</small></span><span>换<small>资源互通</small></span></div></div></section>
 <Marketplace/>
 <section className="market-guide"><div><p className="market-kicker">找到适合你的方式</p><h2>同一件好物，<br/>可以有不同的相遇。</h2><p>先确认用途和时间，再选择交易方式。把品类、数量和需求整理清楚，让后续沟通更直接。</p></div><div className="market-guide-rows"><article><b>租</b><div><h3>一场活动，按需配置</h3><p>适合阶段性使用。确认活动城市、使用日期、规格数量与进撤场安排。</p></div></article><article><b>买</b><div><h3>高频使用，长期持有</h3><p>适合持续运营。确认规格、数量、使用条件与交付方式。</p></div></article><article><b>换</b><div><h3>盘活闲置，各取所需</h3><p>说明可提供物料的品类、规格、数量与成色，再对齐目标物料和置换条件。</p></div></article></div></section>
 <footer className="market-footer"><a href="/jinghuiji">鲸汇集<small>中域云仓 · 售卖中心</small></a><p>三个展厅 · 七大品类 · 租买换选品<br/>页面为品类展示，具体库存、价格和置换条件按需求确认。</p><div><a href="/">返回首页 ↗</a><a href="/standard-warehouse">了解标准仓 ↗</a></div></footer>
 </main>;}

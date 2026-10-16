import { sitePath } from "../site-path";
import type { Metadata } from "next";
import Marketplace from "./Marketplace";
import "./marketplace.css";

export const metadata:Metadata={title:"鲸汇集｜中域云仓售卖中心",description:"三个展厅，覆盖摊位、帐篷、桌椅、观演结构、安保隔离、地面保护与电力系统。可租、可买、可置换，按需整理你的选品清单。",openGraph:{title:"鲸汇集｜可租可卖可换",description:"中域云仓售卖中心 · 三个展厅，一站选品。"}};

export default function Jinghuiji(){return <main className="whale-page" id="market-top">
 <a className="market-skip" href="#showrooms">跳到展厅</a>

 <section className="market-hero"><div><p className="market-kicker">好物汇集，价值流转</p><h1>可租，可买，<br/>也可<span>置换。</span></h1></div><div className="market-hero-side"><p>从活动物料的按需配置，<br/>到闲置资源的再次流转。<br/>三个展厅，一站找到所需。</p><div className="market-hero-modes"><span>租<small>按需使用</small></span><span>买<small>长期持有</small></span><span>换<small>资源互通</small></span></div></div></section>
 <Marketplace/>
 <section className="market-guide"><div><p className="market-kicker">找到适合你的方式</p><h2>同一件好物，<br/>可以有不同的相遇。</h2><p>先确认用途和时间，再选择交易方式。把品类、数量和需求整理清楚，让后续沟通更直接。</p></div><div className="market-guide-rows"><article><b>租</b><div><h3>一场活动，按需配置</h3><p>适合阶段性使用。确认活动城市、使用日期、规格数量与进撤场安排。</p></div></article><article><b>买</b><div><h3>高频使用，长期持有</h3><p>适合持续运营。确认规格、数量、使用条件与交付方式。</p></div></article><article><b>换</b><div><h3>盘活闲置，各取所需</h3><p>说明可提供物料的品类、规格、数量与成色，再对齐目标物料和置换条件。</p></div></article></div></section>

 </main>;}

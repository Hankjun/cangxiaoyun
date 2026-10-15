import type { Metadata } from "next";
import WarehouseModel from "./WarehouseModel";
import "./warehouse.css";

export const metadata:Metadata={
  title:"标准仓｜中域云仓仓网共建",
  description:"从空间、流程、编码到视觉，让每一座合作仓成为可以协作的仓网节点。了解中域云仓标准仓的七区流程、五个空间系统与共建路径。",
  openGraph:{title:"标准仓｜中域云仓仓网共建",description:"一套标准，连接每一座仓。面向合作仓与仓网伙伴的标准仓共建指南。"},
};

const systems=[
  ["01","室内主仓","存储、夹层、主通道与客服","让物料分类、位置地址和作业状态对应起来。"],
  ["02","近门装卸","回仓待检、出库与车次集结","回仓与待发各有边界，共用门洞也能有序交接。"],
  ["03","室外周转","大件、框架与临时待发","用 O 类位置管理室外，明确保护方式和取放方向。"],
  ["04","园区通行","来访、送货、停车与共享边界","每一条到达路径都有目的地，尊重园区的实际使用范围。"],
  ["05","楼层与电梯","楼栋入口、梯厅与目标门口","从入口到仓门连续确认，同一目的地保持同一名称。"],
];

export default function StandardWarehouse(){
 return <main className="warehouse-page" id="warehouse-top">
  <a className="wh-skip" href="#warehouse-content">跳到主要内容</a>
  <header className="wh-header"><a className="wh-brand" href="/" aria-label="仓小云 中域云仓 · 仓网共建 首页"><span className="wh-brand-icon" aria-hidden="true"><svg viewBox="0 0 32 26" width="25" height="24"><path d="M6 7h19M10 12h13M12 12L7 21h19l-4-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>仓小云<small>中域云仓 · 仓网共建</small></span></a><nav aria-label="标准仓导航"><a href="/">首页</a><a href="/standard-warehouse" aria-current="page">标准仓</a><a href="#network">仓网价值</a></nav><a className="wh-header-cta" href="#join">了解接入 <span aria-hidden="true">↗</span></a></header>
  <section className="wh-hero" id="warehouse-content">
   <div className="wh-hero-copy"><p className="wh-kicker">中域云仓 · 标准仓计划</p><h1>把一座仓，<br/>建成<span>仓网节点。</span></h1><p className="wh-hero-intro">让不同城市的仓库，用同一套标准完成找货、备货与交接。标准仓，是中域云仓拓展仓网的基础单元。</p><a className="wh-primary" href="#join">成为仓网共建伙伴 <span aria-hidden="true">↗</span></a><div className="wh-hero-foot"><span>空间有序</span><span>作业同标</span><span>多仓协作</span></div><div className="wh-margin-note"><b>标准统一，因仓适配。</b><p>复制流程、名称与字段；<br/>把真实建筑条件留给每一座仓。</p></div></div>
   <WarehouseModel/>
  </section>
  <section className="wh-network" id="network">
   <div className="wh-network-copy"><p className="wh-kicker">仓网的共同语言</p><h2>统一一套标准，<br/>连接更多座仓。</h2><p>当区域名称、物料分类、位置地址和交接字段一致，跨仓协同就有了清晰的基础。总部维护母版，各仓映射现场；每新增一个节点，都沿用这套可维护的规则。</p><a href="#replication" className="wh-text-link">看标准如何复制 <span aria-hidden="true">↓</span></a></div>
   <div className="wh-network-map" role="img" aria-label="仓网共建关系示意：总部标准体系连接试点标准仓、既有仓升级、新仓接入与跨仓协作；为合作模式示意，并非实时仓网地图。"><svg viewBox="0 0 620 385" aria-hidden="true"><g className="wh-net-lines"><path d="M310 175L100 85M310 175L520 85M310 175L95 300M310 175L525 300"/><path d="M100 85L95 300M520 85L525 300M95 300L525 300" className="wh-net-secondary"/></g><g className="wh-net-node"><rect x="216" y="120" width="188" height="104" rx="4"/><text x="310" y="160" className="wh-net-title">总部标准体系</text><text x="310" y="187">母版 · 字段 · 维护机制</text></g>{[[100,85,"试点标准仓","完整作业段验证"],[520,85,"既有仓升级","映射真实点位"],[95,300,"新仓接入","按标准建立节点"],[525,300,"跨仓协作","按规则完成交接"]].map(([x,y,title,note])=><g key={String(title)} transform={`translate(${x},${y})`}><circle r="7"/><text y="-23" className="wh-net-label">{title}</text><text y="31" className="wh-net-note">{note}</text></g>)}</svg><p>共建关系示意 · 不代表实时仓网分布或接入数量</p></div>
  </section>
  <section className="wh-systems" id="systems"><div className="wh-section-heading"><h2>标准覆盖的，<br/>是仓库里的每一次交接。</h2><p>从园区入口到具体货位，五个空间系统共同回答：我在哪、货在哪、下一步做什么、谁负责。</p></div><div className="wh-system-list">{systems.map(([n,name,scope,text])=><article key={n}><span>{n}</span><h3>{name}</h3><div><b>{scope}</b><p>{text}</p></div><span className="wh-row-mark" aria-hidden="true">↳</span></article>)}</div></section>
  <section className="wh-language" id="replication"><div className="wh-language-heading"><h2>功能、品类、地址，<br/>各自说清一件事。</h2><p>一致的命名和编码，让人员、标签与库存系统对得上。地址保持稳定，状态随物料更新。</p></div><div className="wh-label-example"><div className="wh-label-top"><b>C</b><div><strong>标准存储区</strong><span>STORAGE / T03 桌椅家具</span></div><span className="wh-example-tag">格式示例</span></div><div className="wh-address">WX01-L01-I03<br/><b>02-04-01</b></div><div className="wh-address-key">仓库 / 楼层 / 位置组 / 排 / 位 / 层位</div><div className="wh-label-status"><span><i/>可用</span><span>状态另行记录</span></div></div><div className="wh-language-notes"><article><span>功能 A–G</span><h3>正在做什么</h3><p>收货、检验、存储、备货、展示、出库与装车，各有职责。</p></article><article><span>品类 T01–T07</span><h3>存的是什么</h3><p>摊位、帐篷、桌椅、安保、地面、观演结构与电力，按类别组织。</p></article><article><span>地址 I / O</span><h3>具体在哪里</h3><p>室内与室外分别建码。功能、类别与状态不拼进永久地址。</p></article><small>类别与地址格式为 V0.1 建议，示例不代表已核定仓号或真实库存。</small></div></section>
  <section className="wh-vi"><div><h2>看得懂的秩序，<br/>也是统一的品牌。</h2><p>深蓝指引区域与方向，暖橙强调交付节点，米白为信息留出清晰背景。远处看区，近处看位，操作时看状态。</p><div className="wh-palette" aria-label="手册品牌工作色：深蓝、暖橙、米黄"><span>深蓝<small>#2A4A8C</small></span><span>暖橙<small>#F39C44</small></span><span>米黄<small>#F5EAD8</small></span></div></div><div className="wh-sign-stack"><div className="wh-sign wh-sign-large"><b>C</b><span>标准存储区<small>STANDARD STORAGE</small></span><strong aria-hidden="true">↗</strong></div><div className="wh-sign wh-sign-small"><b>I03</b><span>桌椅家具位置组<small>类别 T03 / 地址见位号</small></span></div><p>品牌导视与安全标识分层设置，状态信息同时使用文字说明。</p></div></section>
  <section className="wh-join" id="join"><div className="wh-join-heading"><p className="wh-kicker">面向合作仓与仓网伙伴</p><h2>从一个作业段，<br/>开始共建一张仓网。</h2><p>现有仓可从升级入手，新仓可从建码开始。先把一条真实链路跑通，再把标准扩展到全仓。</p></div><ol className="wh-join-steps"><li><span>01</span><div><h3>对齐现场与命名</h3><p>准备仓库所在城市、现有物料、出入口、楼层与空间底图，梳理实际作业条件。</p></div></li><li><span>02</span><div><h3>选择一段完整链路试点</h3><p>沿入口、存储、备货到出库制作样张，测试找位、转运、交接和日常维护。</p></div></li><li><span>03</span><div><h3>完成全仓映射</h3><p>将确认后的标准落实到室内、室外和到达路径，保留旧码与新码的对应记录。</p></div></li><li><span>04</span><div><h3>进入多仓协作</h3><p>总部维护母版与字段字典，各仓明确负责人，持续复核位置、标识与交接规则。</p></div></li></ol><div className="wh-join-bottom"><b>共建前，先准备这三份资料</b><p>实测空间底图　/　物料与位置清单　/　现有作业与交接流程</p><a href="#warehouse-top">回看标准仓空间 <span aria-hidden="true">↑</span></a></div></section>
  <footer className="wh-footer"><a href="/" className="wh-footer-brand">仓小云<span>中域云仓 · 仓网共建</span></a><p>内容参考《标准仓空间与 VI 视觉手册》V0.1<br/>功能示意与工作色板，实际布局、承载与安全条件由各仓核定。</p><a href="/">返回首页 ↗</a></footer>
 </main>;
}

import NetworkExplorer from "./network/NetworkExplorer";
import ScenePlanner from "./ScenePlanner";
import { sitePath } from "./site-path";
export default function Home() {
  const inventory = [
    ["桁架 / 雷亚舞台", "舞台搭建 · 灯光架 · 主视觉区"],
    ["桌椅 / 帐篷 / 摊位", "市集 · 啤酒节 · 商业外摆"],
    ["铁马 / 看台 / PE 板", "动线管理 · 观众区 · 地面保护"],
    ["临时配电 / 应急物料", "现场供电 · 安全保障 · 快速补位"],
  ];

  const faqs = [
    ["开业庆典需要租哪些活动物料？", "通常从仪式区、接待区、观众区和导视四部分梳理。仓小云会根据人数、场地与流程，组合舞台、桁架、红毯、桌椅、围栏及临时配电等必要物料。"],
    ["美食节活动物料清单怎么配？", "先明确摊位数量与用电需求，再配置桌椅、帐篷、铁马、垃圾桶、导视及地面保护。物料应同时满足高峰客流、夜间照明和撤场节奏。"],
    ["临时配电箱租赁要注意什么？", "需要先确认总功率、回路分配、用电设备和进场时间；现场应预留配电路径与防雨措施，并让电缆走线避开主要人流。"],
    ["长三角跨城活动物料配送怎么安排？", "建议在活动前确定城市、进场窗口、装卸条件和撤场时间。仓小云以无锡、常州、扬州、苏州为协同节点，按项目距离与现场条件安排调度。"],
    ["300 人企业活动的桌椅和舞台怎么估？", "先确认活动是以观看、用餐还是互动为主。桌椅数量要围绕实际入座、通道和备用率安排；舞台尺寸则需要结合节目形式、背景画面、观众视距与场地净高共同确定。"],
    ["铁马和一米栏有什么区别？", "两者都用于现场边界和动线管理，但适用场景不同。配置前要先画出检票、排队、疏散与物料装卸路线，并根据人流密度、视线需求和现场地面条件选择。"],
    ["户外活动下雨，物料要怎么调整？", "优先复核帐篷、配电、防滑、地面保护和排水路线。电缆与配电区域应做防雨与避让安排，室外桌椅和导视的摆放也要为临时转场留出空间。"],
    ["租赁和购买活动物料，怎么判断更合适？", "一次性或低频活动通常更看重灵活配置、运输与撤场成本；高频、标准化且储存条件成熟的物料可评估购买。判断时应同时比较使用频率、存储、人力、损耗与现场变化成本。"],
  ];

  const guideItems = [
    ["人流与功能", "先划分舞台、签到、互动、用餐、排队与后勤区，再由功能推算物料。"],
    ["场地与进场", "确认装卸通道、楼层、电梯、地面、净高和可进场时间，避免物料到场后无法展开。"],
    ["用电与天气", "提前梳理设备功率和线路路径；户外项目同步预案帐篷、防雨、防滑与地面保护。"],
    ["搭建与撤场", "把安装顺序、交接节点和撤场窗口写入行动单，让每一段现场工作可确认、可追溯。"],
  ];
  const structuredData = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "中域云仓活动物料与会展道具租赁解决方案",
      description: "面向长三角活动执行团队，提供活动物料配置、城市仓配送、现场搭建、应急补货与撤场回收支持。",
      areaServed: ["无锡", "常州", "扬州", "苏州", "长三角"],
      serviceType: ["会展道具租赁", "活动物料租赁", "活动现场搭建", "跨城物料配送"],
      provider: { "@type": "Organization", name: "中域云仓" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })),
    },
  ]);

  return (
    <main className="site-home">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData }} />
      <section className="hero" id="top">


        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span />中域云仓 · 现场执行系统</p>
            <h1>活动物料<br />执行中枢</h1>
            <p className="hero-intro">把“该配什么、去哪租、多少钱、怎么执行”变成一张可落地的行动单。仓小云连接长三角仓网、现场搭建与应急补货。</p>
            <div className="hero-actions">
              <a className="button primary" href="#field-guide">查看配置清单 <span>→</span></a>
              <a className="button ghost" href="#solutions">查看方案库</a>
            </div>
            <a className="home-warehouse-link" href={sitePath("/standard-warehouse")}>标准仓 · 仓网共建 <span aria-hidden="true">↗</span></a>
            <a className="home-warehouse-link home-market-link" href={sitePath("/jinghuiji")}>鲸汇集 · 可租可买可换 <span aria-hidden="true">↗</span></a>
          </div>

          <a className="home-character" href={sitePath("/ip")}><div className="home-character-photo"><span>你的现场伙伴</span><img src={sitePath("/ip/welcome-transparent.webp")} width="960" height="1200" alt="金橙绒毛、蓝色工装的仓小云，正竖起大拇指欢迎你" fetchPriority="high"/></div><div className="home-character-caption"><span>你好，我是仓小云。<small>让你放心，替你干活。</small></span><b aria-hidden="true">↗</b></div></a>
        </div>
        <div className="ticker"><span>物料配置</span><span>跨城配送</span><span>现场搭建</span><span>应急补货</span><span>安全撤场</span></div>
      </section>

      <section className="section signal" id="solutions">
        <div className="section-head"><p className="eyebrow"><span />从需求到落地</p><h2>不是租清单，<br /><i>是给现场一套解法。</i></h2></div>
        <div className="problem-grid">
          <a href="#knowledge" className="answer-card featured"><p>仓小云问答 01</p><h3>300 人活动<br />舞台要多大？</h3><b>→</b><span>人数 · 视距 · 演出形式</span></a>
          <a href="#knowledge" className="answer-card"><p>仓小云问答 02</p><h3>美食节物料<br />怎么配才不漏？</h3><b>→</b><span>摊位 · 桌椅 · 配电 · 动线</span></a>
          <a href="#knowledge" className="answer-card"><p>仓小云问答 03</p><h3>跨城市配送<br />怎么安排？</h3><b>→</b><span>城市仓 · 时效 · 进场窗口</span></a>
        </div>
      </section>

      <section className="section inventory" id="dispatch">
        <div className="section-head split"><div><p className="eyebrow"><span />仓储 × 交付</p><h2>一仓备货，<br /><i>多城响应。</i></h2></div><p>中域云仓把核心物料、交付节点与现场风险做成一套协同系统。你看到的不只是库存，而是能按时到位的执行力。</p></div>
        <div className="inventory-list">
          {inventory.map(([title, detail], index) => <div className="inventory-row" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{detail}</p><b>↗</b></div>)}
        </div>
        <div className="cities"><p>城市仓网络</p><div><b>无锡</b><b>常州</b><b>扬州</b><b>苏州</b><strong>长三角多城联动</strong></div></div>
      </section>

      <NetworkExplorer compact/>

      <section className="section scenes">
        <p className="eyebrow"><span />场景方案</p><div className="scene-header"><h2>每一个现场，<br /><i>都有标准解法。</i></h2><p>从清单到进场，仓小云用可执行的物料组合，帮助活动团队更快做决定。</p></div>
        <ScenePlanner/>
      </section>

      <section className="section field-guide" id="field-guide" aria-labelledby="guide-title">
        <div className="guide-top"><div><p className="eyebrow"><span />选型手册 / 现场范本</p><h2 id="guide-title">先看场地，再配物料。<br /><i>一张行动单，少走很多弯路。</i></h2></div><p>以下以 300 人企业活动为例，展示仓小云在活动筹备阶段会优先核对的信息。这不是固定套餐，而是一套可根据城市、场地、预算和流程调整的判断框架。</p></div>
        <div className="guide-layout">
          <article className="guide-example"><div className="guide-label">范本 / 300 人企业活动</div><h3>基础配置的<br />四个工作区</h3><ol><li><b>01</b><span><strong>舞台与主视觉区</strong>舞台、桁架、背景结构、台阶与必要的地面保护。</span></li><li><b>02</b><span><strong>签到与接待区</strong>签到桌、椅子、导视、排队围栏与临时存放点。</span></li><li><b>03</b><span><strong>观众与互动区</strong>桌椅、帐篷、互动道具、通道边界与安全提示。</span></li><li><b>04</b><span><strong>后勤与配电区</strong>临时配电、电缆走线、设备遮护和物料周转空间。</span></li></ol><small>实际数量与规格须以现场测量、活动流程及安全要求为准。</small></article>
          <div className="guide-checks">{guideItems.map(([title, content], index) => <article key={title}><span>核对项 0{index + 1}</span><h3>{title}</h3><p>{content}</p></article>)}</div>
        </div>
      </section>

      <section className="section answer-library" id="knowledge">
        <div className="library-head">
          <div><p className="eyebrow"><span />仓小云答案库</p><h2>客户问什么，<br /><i>这里就答什么。</i></h2></div>
          <aside><b>服务范围</b><p>中域云仓是一家面向长三角活动执行团队的会展道具与活动物料租赁解决方案服务方，覆盖物料配置、城市仓配送、现场搭建、应急补货与撤场回收。</p></aside>
        </div>
        <div className="faq-grid">
          {faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary><span>0{index + 1}</span>{question}<b>+</b></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
        <div className="city-cards" aria-label="城市服务覆盖">
          {["无锡", "常州", "扬州", "苏州"].map((city, index) => <article key={city}><span>城市节点 0{index + 1}</span><h3>{city}活动物料租赁</h3><p>舞台、桁架、桌椅、铁马、帐篷、临时配电及现场执行支持。</p><a href="#field-guide">查看城市配置思路 ↗</a></article>)}
        </div>
      </section>

      <section className="section evidence" id="proof">
        <div><p className="eyebrow"><span />可信交付</p><h2>从清单到交付。<br /><i>每一步，都有章可循。</i></h2></div>
        <div className="metric-grid"><article><b>7</b><span>鲸汇集物料品类</span></article><article><b>3</b><span>主题展厅</span></article><article><b>7</b><span>标准仓协作功能区</span></article><article><b>3</b><span>标准仓作业与来访动线</span></article></div>
      </section>

      <section className="section playbook">
        <div><p className="eyebrow"><span />执行方法</p><h2>让每一个节点，<br /><i>都有下一步。</i></h2></div>
        <div className="playbook-steps"><article><span>T - 7 天</span><h3>确认需求</h3><p>活动规模、城市、场地、时间、流程与用电需求，形成首版物料范围。</p></article><article><span>T - 3 天</span><h3>锁定行动单</h3><p>确认物料规格、进场窗口、装卸条件、搭建顺序与现场联络方式。</p></article><article><span>T - 1 天</span><h3>仓内备货</h3><p>按行动单复核物料，安排车辆、人员与应急补位的响应链路。</p></article><article><span>活动当天</span><h3>搭建与交接</h3><p>按区域进场，完成现场搭建、动线核查与撤场衔接。</p></article></div>
      </section>

      <section className="section home-documents" aria-labelledby="home-documents-title">
        <div><p className="eyebrow"><span />文档下载 / 企业文化</p><h2 id="home-documents-title">理解我们，<br /><i>从共同的信念开始。</i></h2><p>阅读《中域玖壹企业文化解读》，了解“生机 · 图腾 · 上善”背后的文化与成长理念。</p><a className="brand-button" href={sitePath("/downloads")}>进入文档下载区 <span aria-hidden="true">↗</span></a></div>
        <a className="home-document-cover" href={sitePath("/downloads")}><img src={sitePath("/documents/culture-cover.webp")} width="960" height="540" alt="《中域玖壹企业文化解读》封面" loading="lazy"/><span>企业文化手册 <small>PDF · 12 页 · 在线阅读 / 原版下载</small><b aria-hidden="true">↗</b></span></a>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow"><span />准备开始</p><h2>让仓小云帮你<br /><i>把现场跑起来。</i></h2>
        <p>先准备城市、人数、场地、时间、活动流程和用电需求六项信息，再从选型手册开始梳理物料范围。</p>
        <a className="button primary" href="#field-guide">查看配置清单 <span>→</span></a>
      </section>

    </main>
  );
}

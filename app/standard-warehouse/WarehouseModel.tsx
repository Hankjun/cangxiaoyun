"use client";

import { useState } from "react";

type Point = [number, number, number?];
type Flow = "overview" | "return" | "dispatch" | "visitor";
const v = (name: string) => `var(--color-${name})`;
const p = ([x, y, z = 0]: Point) => [430 + (x - y) * .86, 150 + (x + y) * .40 - z];
const pts = (points: Point[]) => points.map(q => p(q).join(",")).join(" ");

function Plane({ points, fill, stroke = "none", ...props }: { points: Point[]; fill: string; stroke?: string; className?: string; strokeWidth?: number; strokeDasharray?: string }) {
  return <polygon points={pts(points)} fill={fill} stroke={stroke} {...props} />;
}

function Box({ x, y, z = 0, w, d, h, tone = "box" }: { x: number; y: number; z?: number; w: number; d: number; h: number; tone?: string }) {
  return <g>
    <Plane points={[[x,y,z+h],[x+w,y,z+h],[x+w,y+d,z+h],[x,y+d,z+h]]} fill={v(`${tone}-top`)} />
    <Plane points={[[x,y+d,z],[x+w,y+d,z],[x+w,y+d,z+h],[x,y+d,z+h]]} fill={v(`${tone}-front`)} />
    <Plane points={[[x+w,y,z],[x+w,y+d,z],[x+w,y+d,z+h],[x+w,y,z+h]]} fill={v(`${tone}-side`)} />
  </g>;
}

function Rack({ x, y }: { x: number; y: number }) {
  return <g>
    {[7, 39, 72].map(z => <g key={z}>
      <Box x={x} y={y} z={z} w={68} d={28} h={3} tone="rack" />
      {[4, 25, 46].map((dx, i) => <Box key={dx} x={x+dx} y={y+3} z={z+3} w={17} d={20} h={i===1?21:16} tone={i===1?"crate":"box"} />)}
    </g>)}
    {[[0,0],[66,0],[0,26],[66,26]].map(([dx,dy],i) => <Box key={i} x={x+dx} y={y+dy} w={2} d={2} h={96} tone="steel" />)}
    <Plane points={[[x,y+28,8],[x+68,y+28,72],[x+68,y+28,8],[x,y+28,72]]} fill="none" stroke={v("steel-front")} strokeWidth={1.2} />
  </g>;
}

function Label({ x, y, z = 0, code, text, orange = false }: { x:number; y:number; z?:number; code:string; text?:string; orange?:boolean }) {
  const [sx,sy] = p([x,y,z]);
  return <g transform={`translate(${sx},${sy})`}>
    <rect x={-16} y={-21} width={32} height={30} rx={3} fill={v(orange?"orange":"blue")} />
    <text textAnchor="middle" y={1} fill={v(orange?"ink":"white")} fontSize={20} fontWeight={800}>{code}</text>
    {text && <text textAnchor="middle" y={27} fill={v("ink")} fontSize={13} fontWeight={700} paintOrder="stroke" stroke={v("paper")} strokeWidth={4}>{text}</text>}
  </g>;
}

function Person({x,y,orange=false}:{x:number;y:number;orange?:boolean}) {
  const [sx,sy]=p([x,y]);
  return <g transform={`translate(${sx},${sy})`}>
    <ellipse cx={2} cy={1} rx={10} ry={4} fill={v("shadow")} />
    <path d="M-3 -13 L-4 0 M4 -13 L5 0" stroke={v("steel-side")} strokeWidth={4} strokeLinecap="round"/>
    <path d="M0 -25 L0 -12 M-1 -23 L-7 -15 M1 -23 L7 -17" stroke={v(orange?"orange":"blue")} strokeWidth={7} strokeLinecap="round"/>
    <circle cy={-32} r={5} fill={v("box-top")}/><path d="M-6 -32 A6 6 0 0 1 6 -32" fill={v("orange")} />
  </g>;
}

const zones = [
  {code:"A",name:"收货回仓",rule:"未验不入库",text:"回仓物料先清点、登记批次与差异，再交给 B 区检验，和待发订单分开组织。",hand:"交接：来源、数量、待检状态与经办人。"},
  {code:"B",name:"检验保养",rule:"状态先于入库",text:"完成清洁、保养与判定。待修和隔离物料单独标记，复验合格后再进入可用库存。",hand:"交接：检查记录、状态、异常原因与下一步。"},
  {code:"C",name:"标准存储",rule:"一位一码，按类存储",text:"七类物料按尺寸、套件和周转频次组织。物料类别与真实货位地址分别管理。",hand:"交接：可用库存、位置地址与主配件关系。"},
  {code:"D",name:"拣货备货",rule:"一单一组，齐套确认",text:"围绕订单集货，把主件、配件、待补项和完成状态放在一起，备齐后移交 F 区复核。",hand:"交接：订单号、齐套清单、待补项与负责人。"},
  {code:"E",name:"爆款展示",rule:"高频前置与服务支路",text:"连接选型展示、客服与高频备货。样品用途与可租库存分别标明，不是每笔订单的必经站。",hand:"交接：样品规格、可用地址与选型结果。"},
  {code:"F",name:"标准出库",rule:"一单一签，核单再走",text:"备货完成后再次核对数量、包装和订单，清晰区分“已经备好”和“确认出库”。",hand:"交接：核单清单、确认状态与交接记录。"},
  {code:"G",name:"装车发运",rule:"一车次一组",text:"按车次集结并交接，装卸空间与停靠方式因仓落实；回仓批次不混入已确认发运货。",hand:"交接：车次、装载安排、清单与签收。"},
];

const flows:Record<Flow,{label:string;route:string;note:string;zones:string[];points:Point[]}> = {
  overview:{label:"空间总览",route:"七区协作，三类动线",note:"选择下方 A–G 功能区，查看它在标准仓中的职责。",zones:[],points:[]},
  return:{label:"回仓线",route:"现场 → A 回仓 → B 检验 → C 存储",note:"需维修的物料进入隔离支路，复验合格后回到 C。",zones:["A","B","C"],points:[[45,410,7],[65,300,7],[80,235,7],[85,170,7],[175,160,7]]},
  dispatch:{label:"发运线",route:"C 存储 → D 备货 → F 出库 → G 装车",note:"按订单核对主件与配件；E 可为高频备货提供前置库存。",zones:["C","D","F","G"],points:[[260,160,7],[275,225,7],[300,295,7],[435,315,7],[450,430,7]]},
  visitor:{label:"客户线",route:"来访 → 客服 → E 展示 → 指定交接点",note:"客户在指定位置咨询和看货，与仓内装卸作业保持边界。",zones:["E"],points:[[620,260,7],[515,245,7],[450,210,7],[395,235,7]]},
};

export default function WarehouseModel() {
  const [flow,setFlow]=useState<Flow>("overview");
  const [zone,setZone]=useState("C");
  const current=zones.find(z=>z.code===zone)!;
  const route=flows[flow];
  const active=(code:string)=>flow==="overview"?code===zone:route.zones.includes(code);
  const zoneClass=(code:string)=>`wh-model-zone${active(code)?" is-selected":""}${flow!=="overview"&&!active(code)?" is-muted":""}`;
  return <div className="wh-explorer" id="warehouse-model">
    <div className="wh-model-toolbar"><span><span className="wh-orange-dot"/>标准仓 · 空间剖视</span><span>2.5D / 功能示意</span></div>
    <figure className="wh-model-figure" aria-label="标准仓 2.5D 空间模型，包含存储货架、检验备货、展示、出库装车与室外周转。下方按钮可查看各区及动线。">
      <svg viewBox="-5 0 1010 625" className="wh-model-svg" aria-hidden="true">
        <defs>
          <filter id="wh-ground-shadow" x="-30%" y="-30%" width="160%" height="180%"><feGaussianBlur stdDeviation="12"/></filter>
          <marker id="wh-route-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill={v(flow==="visitor"?"route-visitor":"orange-deep")}/></marker>
        </defs>
        <g transform="translate(0,23)" opacity=".14" filter="url(#wh-ground-shadow)"><Plane points={[[-20,-15],[560,-15],[560,465],[-20,465]]} fill={v("blue")}/></g>
        <Box x={-24} y={-16} z={-16} w={590} d={480} h={13} tone="base"/>
        <Plane points={[[0,0],[540,0],[540,350],[0,350]]} fill={v("floor")} stroke={v("floor-line")} strokeWidth={1.2}/>
        {[60,120,180,240,300].map(y=><Plane key={y} points={[[0,y],[540,y]]} fill="none" stroke={v("floor-line")} strokeWidth={.7}/>)}
        {[90,180,270,360,450].map(x=><Plane key={x} points={[[x,0],[x,350]]} fill="none" stroke={v("floor-line")} strokeWidth={.7}/>)}
        <Box x={0} y={-8} w={540} d={8} h={124} tone="wall"/>
        <Box x={-8} y={0} w={8} d={350} h={124} tone="wall"/>
        <Plane points={[[0,0,96],[540,0,96],[540,0,118],[0,0,118]]} fill={v("blue")}/>
        <g transform={`translate(${p([245,1,103]).join(',')}) matrix(.86,.40,0,1,0,0)`}><text fill={v("white")} fontSize={20} fontWeight={800}>中域云仓</text><text x={106} y={0} fill={v("white")} fontSize={9} letterSpacing={1}>STANDARD WAREHOUSE</text></g>
        {[20,145,270].map(y=><Box key={y} x={0} y={y} w={9} d={9} h={128} tone="column"/>)}
        {[85,245,465].map(x=><Box key={x} x={x} y={1} w={8} d={9} h={128} tone="column"/>)}
        <g className={zoneClass("C")}>
          <Plane points={[[32,20],[365,20],[365,160],[32,160]]} fill={v("zone-blue")} stroke={v("blue-line")} strokeWidth={1.2}/>
          {[32,118].map(y=><g key={y}>{[48,130,212,294].map(x=><Rack key={x} x={x} y={y}/>)}</g>)}
          <Box x={385} y={20} w={132} d={110} h={64} tone="mezz"/>
          {[395,440,485].map(x=><Box key={x} x={x} y={30} z={64} w={23} d={30} h={16} tone="box"/>)}
          {[385,505].map(x=><Box key={x} x={x} y={130} w={4} d={4} h={94} tone="steel"/>)}
          <Plane points={[[385,134,94],[510,134,94],[510,134,65],[385,134,65]]} fill="none" stroke={v("steel-front")} strokeWidth={2}/>
          {[0,1,2,3,4,5].map(i=><Box key={i} x={420} y={136+i*6} w={45} d={6} h={64-i*9} tone="stair"/>)}
          <Label x={195} y={178} code="C" text="标准存储"/>
        </g>
        <g className={zoneClass("B")}>
          <Plane points={[[24,190],[145,190],[145,270],[24,270]]} fill={v("zone-blue")} stroke={v("blue-line")} strokeWidth={1.3}/>
          <Box x={45} y={205} w={65} d={32} h={29} tone="bench"/>
          <Box x={51} y={212} z={29} w={24} d={16} h={13} tone="crate"/>
          <Box x={113} y={210} w={20} d={28} h={18} tone="steel"/>
          <Label x={48} y={259} code="B" text="检验保养"/>
        </g>
        <g className={zoneClass("D")}>
          <Plane points={[[175,195],[326,195],[326,270],[175,270]]} fill={v("zone-blue")} stroke={v("blue-line")} strokeWidth={1.3}/>
          {[192,255].map(x=><g key={x}><Box x={x} y={208} w={44} d={38} h={5} tone="pallet"/><Box x={x+3} y={211} z={5} w={36} d={29} h={20}/><Box x={x+6} y={213} z={25} w={29} d={23} h={17} tone="crate"/></g>)}
          <Label x={225} y={267} code="D" text="拣货备货"/>
        </g>
        <g className={zoneClass("E")}>
          <Plane points={[[352,182],[443,182],[443,275],[352,275]]} fill={v("zone-orange")} stroke={v("orange-deep")} strokeWidth={1.3}/>
          <Box x={361} y={195} w={67} d={16} h={45} tone="display"/>
          <Box x={368} y={196} z={45} w={12} d={12} h={18} tone="crate"/>
          {[362,402].map(x=><g key={x}><Box x={x} y={230} w={22} d={20} h={17} tone="chair"/><Box x={x} y={230} z={17} w={22} d={4} h={22} tone="chair"/></g>)}
          <Label x={405} y={274} code="E" text="爆款展示" orange/>
        </g>
        <g>
          <Box x={458} y={175} w={72} d={100} h={12} tone="mezz"/>
          <Box x={468} y={188} z={12} w={50} d={20} h={32} tone="bench"/>
          <Plane points={[[458,175,60],[530,175,60],[530,175,12],[458,175,12]]} fill={v("glass")} stroke={v("blue-line")} strokeWidth={1}/>
          <Box x={458} y={175} z={60} w={72} d={8} h={8} tone="column"/>
          <text x={p([493,237])[0]} y={p([493,237])[1]} textAnchor="middle" fill={v("blue")} fontSize={13} fontWeight={700}>客户服务</text>
        </g>
        <g className={zoneClass("A")}>
          <Plane points={[[20,295],[153,295],[153,350],[20,350]]} fill={v("zone-blue")} stroke={v("blue-line")} strokeWidth={1.3}/>
          {[33,77].map(x=><g key={x}><Box x={x} y={307} w={33} d={25} h={5} tone="pallet"/><Box x={x+2} y={309} z={5} w={29} d={21} h={17}/></g>)}
          <Label x={74} y={358} code="A" text="收货回仓"/>
        </g>
        <g className={zoneClass("F")}>
          <Plane points={[[198,296],[335,296],[335,350],[198,350]]} fill={v("zone-orange")} stroke={v("orange-deep")} strokeWidth={1.3}/>
          <Box x={220} y={307} w={60} d={28} h={5} tone="pallet"/><Box x={224} y={310} z={5} w={24} d={22} h={23}/><Box x={253} y={310} z={5} w={23} d={22} h={28} tone="crate"/>
          <Label x={272} y={363} code="F" text="标准出库" orange/>
        </g>
        <Box x={0} y={348} w={20} d={4} h={34} tone="column"/>
        <Box x={154} y={348} w={30} d={4} h={34} tone="column"/>
        <Box x={336} y={348} w={16} d={4} h={34} tone="column"/>
        <Box x={535} y={270} w={5} d={80} h={24} tone="column"/>
        <g className={zoneClass("G")}>
          <Plane points={[[365,295],[515,295],[515,453],[365,453]]} fill={v("zone-orange")} stroke={v("orange-deep")} strokeWidth={1.5} strokeDasharray="5 4"/>
          <Box x={388} y={320} w={28} d={30} h={24} tone="crate"/>
          <Box x={427} y={356} z={14} w={59} d={91} h={54} tone="truck"/>
          <Box x={427} y={447} z={14} w={59} d={35} h={39} tone="cab"/>
          <Plane points={[[430,480,48],[483,480,48],[483,480,31],[430,480,31]]} fill={v("window")}/>
          {[434,478].map(x=><g key={x}>{[375,464].map(y=><Box key={y} x={x} y={y} z={2} w={9} d={18} h={15} tone="tire"/>)}</g>)}
          <g transform={`translate(${p([444,449,36]).join(',')}) matrix(.86,.40,0,1,0,0)`}><text fill={v("white")} fontSize={10} fontWeight={700}>中域云仓</text></g>
          <Label x={374} y={421} code="G" text="装车发运" orange/>
        </g>
        <g>
          <Plane points={[[30,390],[165,390],[165,449],[30,449]]} fill={v("outdoor")} stroke={v("blue-line")} strokeWidth={1} strokeDasharray="4 4"/>
          {[0,1,2].map(i=><Box key={i} x={47} y={400} z={i*6} w={77} d={25} h={5} tone="steel"/>)}
          <text x={p([93,463])[0]} y={p([93,463])[1]} textAnchor="middle" fill={v("muted")} fontSize={12}>O · 室外周转</text>
        </g>
        <Person x={150} y={228} orange/><Person x={340} y={300} orange/><Person x={527} y={258}/>
        <g opacity=".6"><Plane points={[[0,0,131],[540,0,131],[540,350,131]]} fill="none" stroke={v("blue-line")} strokeWidth={1} strokeDasharray="5 5"/></g>
        {flow!=="overview"&&<g className="wh-route-line"><polyline points={pts(route.points)} fill="none" stroke={v("white")} strokeWidth={10} strokeLinejoin="round" strokeLinecap="round"/><polyline points={pts(route.points)} fill="none" stroke={v(flow==="visitor"?"route-visitor":"orange-deep")} strokeWidth={5} strokeLinejoin="round" strokeLinecap="round" markerEnd="url(#wh-route-arrow)"/></g>}
      </svg>
      <figcaption>空间关系示意 · 区域、门洞与尺寸按各仓实测映射</figcaption>
    </figure>
    <div className="wh-flow-controls" role="group" aria-label="查看仓内动线">
      {(Object.entries(flows) as [Flow,typeof route][]).map(([key,item])=><button key={key} type="button" aria-pressed={flow===key} onClick={()=>setFlow(key)}><span className={`wh-flow-dot wh-flow-dot-${key}`}/>{item.label}</button>)}
    </div>
    <div className="wh-route-description" aria-live="polite"><strong>{route.route}</strong><p>{route.note}</p></div>
    <div className="wh-zone-controls" role="group" aria-label="查看七个功能区">
      {zones.map(item=><button type="button" key={item.code} aria-pressed={zone===item.code} onClick={()=>{setZone(item.code);setFlow("overview");}}><b>{item.code}</b><span>{item.name}</span></button>)}
    </div>
    <div className="wh-zone-detail" aria-live="polite"><div><span>{current.code}</span><h2>{current.rule}</h2></div><p>{current.text}</p><small>{current.hand}</small></div>
  </div>;
}

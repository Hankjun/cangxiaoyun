"use client";
import { useState } from "react";
import { sitePath } from "./site-path";
const scenes=[
 {name:"开业庆典",materials:"舞台、桁架、签到桌、围栏",focus:"仪式流程与接待动线",note:"先确认主视觉、嘉宾区与进场窗口，再匹配舞台和接待配置。"},
 {name:"美食市集",materials:"摊位、帐篷、桌椅、配电",focus:"摊位数量与用电需求",note:"梳理各摊位功率、公共通道和收场安排，预留后勤周转空间。"},
 {name:"啤酒节",materials:"桌椅、帐篷、舞台、围栏",focus:"高峰客流与夜间运营",note:"兼顾就座、排队、舞台观演和临时用电，核对雨天与撤场安排。"},
 {name:"音乐节",materials:"舞台、桁架、观演结构、隔离",focus:"观演区域与现场边界",note:"结合演出流程梳理观众、后台、设备和车辆动线，再确认结构配置。"},
 {name:"赛事活动",materials:"围栏、帐篷、导视、配电",focus:"参赛与观众动线",note:"区分签到、候场、比赛与补给区域，匹配各区域的物料与交付顺序。"},
 {name:"企业团建",materials:"桌椅、帐篷、舞台、互动道具",focus:"人数、场地与活动节奏",note:"围绕观看、用餐、互动三类需求配置，核对备用物料与现场周转。"},
];
export default function ScenePlanner(){const [selected,setSelected]=useState(2);const scene=scenes[selected];return <><div className="scene-pills" role="group" aria-label="选择活动场景">{scenes.map((s,i)=><button type="button" aria-pressed={selected===i} key={s.name} onClick={()=>setSelected(i)}>{String(i+1).padStart(2,"0")} · {s.name}</button>)}</div><div className="scenario-panel" aria-live="polite"><div><p>配置思路 / {scene.name}</p><h3>{scene.materials}</h3><p className="scenario-description">{scene.note}</p><a href={sitePath("/jinghuiji")}>去鲸汇集整理需求 →</a></div><aside className="scenario-focus"><span>优先确认</span><strong>{scene.focus}</strong><small>物料范围为配置思路，数量与规格按现场确认。</small><a href="#field-guide">查看配置指南 ↗</a></aside></div></>;}

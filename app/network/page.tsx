import type { Metadata } from "next";
import NetworkExplorer from "./NetworkExplorer";
export const metadata:Metadata={title:"长三角仓网｜城市与县域展示中心",description:"按沪苏浙皖城市与区县浏览仓网地理索引，搜索区域、选择节点、查看协同与标准仓接入信息。"};
export default function NetworkPage(){return <main className="network-page"><NetworkExplorer/></main>;}

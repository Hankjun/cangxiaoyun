import type { Metadata } from "next";
import CharacterShowcase from "./CharacterShowcase";
import "./ip.css";
export const metadata:Metadata={title:"仓小云 IP｜把可爱，做成靠谱",description:"认识中域云仓的服务伙伴仓小云。金橙绒毛、蓝色工装，用认真、热心的动作走进每一种活动现场。"};
export default function CharacterPage(){return <main className="ip-page"><CharacterShowcase/></main>;}

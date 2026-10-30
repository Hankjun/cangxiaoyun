export const resourceCategories = [
 {id:"brand",name:"品牌资料",description:"企业介绍、文化与品牌表达"},
 {id:"visual",name:"视觉资料",description:"Logo、IP 形象与视觉规范"},
 {id:"business",name:"业务资料",description:"仓网协作、物料与交付方法"},
 {id:"industry",name:"行业资料",description:"行业观察、研究与实践参考"},
 {id:"ai",name:"AI 资料",description:"AI 工具、方法与应用资料"},
] as const;
export type ResourceCategory = (typeof resourceCategories)[number]["id"];
export type Resource = {id:string;category:ResourceCategory;title:string;summary:string;file:string;cover:string;filename:string;format:string;size:string;pages?:number;coverShape?:"square";note:string;updated?:string;};
/** Append an uploaded file here after placing its original and cover in public/. */
export const resources:Resource[] = [
 {id:"creative-life",category:"brand",title:"中域玖壹—用道具创造创意生活（优化版）",summary:"了解中域玖壹的品牌与业务架构、道具行业的需求，以及智能仓库、线上平台、物流与研发的协作方式。",file:"/documents/zhongyu-creative-life.pdf",cover:"/documents/creative-life-cover.webp",filename:"中域玖壹—用道具创造创意生活（优化版）.pdf",format:"PDF",size:"2.8 MB",pages:18,note:"保留优化版完整内容。文中业务数据与发展情况以原文所载时期为准。"},
 {id:"culture",category:"brand",title:"中域玖壹企业文化解读",summary:"从“文化是什么”到“我们将走向哪里”，读懂生机、图腾、上善背后的共同信念与成长理念。",file:"/documents/zhongyu-jiuyi-culture.pdf",cover:"/documents/culture-cover.webp",filename:"中域玖壹企业文化解读.pdf",format:"PDF",size:"1.3 MB",pages:12,note:"保留原文完整内容。文中企业数据、组织与规划为原文历史表述。"},
 {id:"brand-logo",coverShape:"square",category:"visual",title:"中域云仓 Logo 标准版",summary:"中域云仓最新标准 Logo，可用于品牌展示与视觉应用。下载文件为上传的 PNG 原图。",file:"/brand/zhongyu-logo-2026-10-30.png",cover:"/brand/zhongyu-logo-preview.png",filename:"中域云仓 logo 标准版 （10 月 30 日更新）.png",format:"PNG",size:"1.2 MB",updated:"2026.10.30",note:"使用时保持原有比例与配色。"},
 {id:"logo-guidelines",category:"visual",title:"中域云仓 Logo 使用规范 V1.0",summary:"设计协作参考：标准 Logo、标准颜色、尺寸比例、安全留白、文件与背景，以及正确使用和禁止使用示例。",file:"/brand/zhongyu-logo-guidelines-v1.png",cover:"/brand/zhongyu-logo-guidelines-cover.webp",filename:"中域云仓 Logo 使用规范 V1.0.png",format:"PNG",size:"1.4 MB",note:"按提供的规范原图归档，下载保留完整画面与原始分辨率。"},
];

# 中域云仓 3.0｜活动物料执行中枢

中域云仓的网站源码，包含活动物料服务、标准仓、鲸汇集售卖中心与仓小云 IP 形象作品。

## 在线访问

- Sites：https://cangxiaoyun.zaqprmhm56595.chatgpt.site/
- GitHub Pages：https://hankjun.github.io/cangxiaoyun/

## 页面与交互

| 路径 | 内容 |
| --- | --- |
| `/` | 活动物料服务、场景方案与配置指南 |
| `/standard-warehouse` | 标准仓、2.5D 仓库模型、区域与动线切换 |
| `/jinghuiji` | 三个展厅、七大品类、租买换选品与需求清单导出 |
| `/network` | 长三角 41 城市与 305 区县地理索引，省份/层级筛选、搜索、地图拖动缩放、节点选择 |
| `/downloads` | 品牌、视觉、业务、行业与 AI 资料分类，原文件查看与下载 |
| `/ip` | 官方形象、四种动作、作品分类与键盘可操作的大图浏览 |

六个页面共享深色/浅色主题、主导航、移动菜单和回到顶部。主题默认跟随系统，可手动切换并保存在浏览器。`?theme=light` 与 `?theme=dark` 可直接预览对应版本。

鲸汇集清单保存在当前浏览器，支持混合交易方式、数量与备注；当前未接入支付、订单或实时库存。具体库存、价格和置换条件需按需求确认。

## 本地开发

需要 Node.js >=22.13.0。

```bash
npm ci
npm run dev
```

Sites / Vinext 构建：

```bash
npm run build
npm run start
```

GitHub Pages 静态导出：

```bash
npm run build:pages
```

输出至 `out/`，使用 `/cangxiaoyun` 项目路径。推送 `main` 会通过 `.github/workflows/pages.yml` 自动构建、部署 Pages；工作流也可手动触发。Sites 由独立发布流程更新。

## 目录与配置

- `app/`：页面和交互；`SiteChrome.tsx` 管理导航与主题控件
- `app/site.css`：深浅主题、全站框架与首页优化样式
- `app/site-path.ts`：统一 Sites / Pages 导航和静态资源路径
- `public/ip/`：从用户提供的《仓小云 IP 形象作品集》（2026.10.15）提取的原始形象，按需压缩为 WebP，保留原有透明通道；点赞主形象和推车形象已使用 Imagegen 去底生成透明版本，导航使用单独的小尺寸透明资源
- `tokens.css`：标准仓模型的品牌与空间配色
- `worker/`、`build/`：Cloudflare Workers 与 Sites 构建集成
- `.openai/hosting.json`：现有 Sites 项目标识及存储声明
- `next.config.ts`：仅在 Pages 构建开启静态导出与项目路径

主题场景图为品牌视觉表达。不要将角色海报当作真实交付案例或即时库存。

`tests/rendered-html.test.mjs` 是保留的初始模板测试，尚未适配当前网站。请通过生产构建、页面与交互验证检查当前实现。

不要提交访问令牌、`.env`、依赖目录或构建产物。仓库和 GitHub Pages 按所有者要求公开；Sites 访问权限独立管理。

## 仓网地图数据

首页与 `/network` 复用 `app/network/NetworkExplorer.tsx`。`network-data.json` 保存从 DataV.GeoAtlas 公开区划数据提取的城市/区县名称、行政区中心与地图路径，运行时无需地图 API 或密钥。

地图为地理索引：41 个城市、305 个区县级区域，不等于运营仓数量。无锡、常州、苏州、扬州仅作为既有页面的协同参考；所有真实仓库地址、接入状态、库存与时效均待业务资料确认。连线仅表示协同关系，非道路或调度轨迹。

地图来源：https://datav.aliyun.com/portal/school/atlas/area_selector
区域口径参考：https://www.stats.gov.cn/zs/tjws/tjjc/202301/t20230101_1903966.html

## 文档下载

`public/documents/zhongyu-jiuyi-culture.pdf` 为用户提供的《中域玖壹企业文化解读》完整原版（12 页），首页、主导航和页脚均提供文档区入口。文中数据、组织与规划属于原文历史表述，不能作为当前仓网运营资料。新增文档时同步维护页面元信息与导览；PDF 和资源地址须通过 `sitePath` 适配两个托管环境。

新增《中域玖壹—用道具创造创意生活（优化版）》原版 PDF（18 页，`public/documents/zhongyu-creative-life.pdf`），下载区提供独立封面、文件信息、在线阅读与中文文件名下载。文中业务数据以原文所载时期为准。

## 中域云仓 3.0 品牌与资料更新（2026-10-30）

全站主品牌使用中域云仓与小字 3.0；仓小云保留为服务 IP。public/brand/zhongyu-logo-2026-10-30.png 为用户提供的完整原版 Logo，UI 与分享缩略图为等比尺寸优化版本。

资料下载沿用 /downloads 地址。app/downloads/resources.ts 是分类与文件清单：后续将原文件和封面放入 public 后，追加条目即可。五个分类为品牌资料、视觉资料、业务资料、行业资料、AI 资料；缺少资料的分类显示空状态，不虚构文件。不包含面向访客的上传或后台管理功能。

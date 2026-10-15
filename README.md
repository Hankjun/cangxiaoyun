# 仓小云｜活动物料执行中枢

中域云仓的网站源码，包含活动物料服务、标准仓及鲸汇集售卖中心。

当前站点：https://cangxiaoyun.zaqprmhm56595.chatgpt.site/

## 页面

| 路径 | 内容 |
| --- | --- |
| `/` | 活动物料服务与仓配执行首页 |
| `/standard-warehouse` | 标准仓、2.5D 仓库模型与仓网合作介绍 |
| `/jinghuiji` | 市集活动馆、舞台演艺馆、现场保障馆，七大品类租买换选品 |

鲸汇集支持品类筛选、混合交易方式选品、数量调整、需求备注和文本清单导出。清单保存在当前浏览器；具体库存、价格和置换条件需另行确认。当前未接入支付、订单或实时库存服务。

## 本地开发

需要 Node.js >=22.13.0。

```bash
npm ci
npm run dev
```

生产构建与本地启动：

```bash
npm run build
npm run start
```

使用 React 19、Next.js 16 API、Vinext、Vite 和 Cloudflare Workers 运行环境。依赖版本以 `package-lock.json` 为准。

## 目录

- `app/`：页面、交互组件和样式
- `public/`：静态资源
- `tokens.css`：视觉基础变量
- `worker/`、`build/`：运行与 Sites 构建集成
- `.openai/hosting.json`：现有 Sites 项目标识及存储绑定声明

## 发布与验证

网站同时支持 Sites 与 GitHub Pages：

- Sites：https://cangxiaoyun.zaqprmhm56595.chatgpt.site/
- GitHub Pages：https://hankjun.github.io/cangxiaoyun/

推送 `main` 后，`.github/workflows/pages.yml` 自动运行 `npm ci`、`npm run build:pages` 并发布 `out/`。工作流也支持手动触发。Pages 构建使用 Next.js 静态导出，固定项目路径 `/cangxiaoyun`，包含三页 HTML、样式及客户端交互。`app/site-path.ts` 统一页面导航路径；元数据在静态构建时使用 GitHub 域名。

默认 `npm run build` 保留 Vinext / Sites 构建。GitHub 推送不会自动更新独立的 Sites 版本。

源码基线对应已发布提交 `44573d8587bda027051d7b69a8a43c69c0166277`。该版本已完成生产构建、鲸汇集交互和手机布局验证。

`tests/rendered-html.test.mjs` 是保留的初始模板测试，尚未适配当前网站；当前验证使用 `npm run build` 和浏览器检查。

请勿提交 `.env`、访问令牌、`node_modules` 或构建产物。仓库及 GitHub Pages 已按所有者要求公开；Sites 访问权限由 Sites 独立管理。

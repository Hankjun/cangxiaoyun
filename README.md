# 仓小云｜活动物料执行中枢

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
| `/ip` | 官方形象、四种动作、作品分类与键盘可操作的大图浏览 |

四个页面共享深色/浅色主题、主导航、移动菜单和回到顶部。主题默认跟随系统，可手动切换并保存在浏览器。`?theme=light` 与 `?theme=dark` 可直接预览对应版本。

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

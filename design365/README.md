# design365 · 每日设计灵感小程序

一个原生微信小程序脚手架：每天推荐一个设计灵感（配色 / 渐变 / 深色主题），
可浏览设计集、查看配色详情并复制色值、收藏喜欢的作品。

> 定位为「每日一设计」的灵感速览工具，数据当前为本地 mock，方便离线预览与二次开发。

## 功能

- **今日设计**：按启动日计算「Day N / 365」，每天稳定切换一个设计。
- **设计集**：按「渐变 / 配色 / 深色」分类浏览，卡片式网格。
- **设计详情**：查看描述、标签，点击配色即可复制色值到剪贴板。
- **我的**：收藏列表 + 坚持天数、收藏数统计，收藏持久化在本地 `Storage`。

## 目录结构

```
design365/
├── project.config.json          # 微信开发者工具项目配置（miniprogramRoot = miniprogram/）
└── miniprogram/
    ├── app.js / app.json / app.wxss   # 入口、路由/ tabBar、全局样式
    ├── sitemap.json
    ├── pages/
    │   ├── index/     今日设计
    │   ├── gallery/   设计集（分类筛选）
    │   ├── detail/    设计详情（复制色值）
    │   └── mine/      我的收藏
    ├── components/
    │   └── design-card/   可复用设计卡片组件
    ├── utils/
    │   ├── data.js    设计数据源与查询辅助
    │   └── store.js   收藏的本地读写
    └── assets/tab/    tabBar 图标（脚本生成的 PNG）
```

## 本地运行

1. 用[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
   打开本目录（`design365/`）。
2. 项目 AppID 当前填的是测试号 `touristappid`，可直接以「测试号」预览；
   正式发布时在 `project.config.json` 里替换成你自己的 AppID。
3. 编译即可预览。所有数据均为本地 mock，无需后端。

## 二次开发提示

- **换数据**：编辑 `miniprogram/utils/data.js` 的 `DESIGNS` 数组即可；
  每个设计用一组渐变色作为视觉，无需图片资源。
- **接后端**：把 `data.js` 里的查询函数改为 `wx.request`（记得在小程序后台配置合法域名）。
- **改起始日**：`app.js` 的 `globalData.launchDate` 决定「今天是第几天」。
- **图标**：`assets/tab/` 下的 PNG 由脚本以纯色几何图形生成，可替换为品牌图标。

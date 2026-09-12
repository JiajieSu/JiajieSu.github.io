# SU Jiajie 学术网站 — 维护手册

> 这是你的个人学术网站的完整代码。**不需要安装任何软件就能本地预览**:双击 `index.html` 即可在浏览器打开。
> 修改任何文件后,刷新浏览器就能看到效果。改坏了随时找 AI 帮你恢复。

## 文件夹地图(改哪里)

```
website/
├─ index.html          ← 首页(文字直接改这里的引号内容)
├─ about.html          ← 关于我(个人故事、时间线、技能)
├─ research.html       ← 科研经历(内容来自 data/research.js,这个文件基本不用动)
├─ projects.html       ← 项目档案(内容来自 data/projects.js)
├─ publications.html   ← 论文与专利(内容来自 data/publications.js)
├─ cv.html             ← 网页版简历
├─ contact.html        ← 联系方式
│
├─ css/
│  ├─ base.css         ← 底层样式,不用动
│  └─ style.css        ← 所有样式。开头两个区块就是配色和字体,想换色只改那里
│
├─ js/
│  ├─ main.js          ← 明暗模式切换、手机菜单,不用动
│  └─ render.js        ← 自动把 data/ 文件变成卡片,不用动
│
├─ data/               ← ★ 你最常改的文件夹 ★
│  ├─ research.js      ← 科研项目卡片(增删改项目在这里)
│  ├─ projects.js      ← 工程与竞赛项目卡片
│  └─ publications.js  ← 论文和专利
│
├─ images/             ← 所有图片,按项目命名(如 microrobot-tracking.webp)
├─ files/
│  └─ SU-Jiajie-CV.pdf ← 下载按钮指向的简历 PDF
└─ assets/logo.svg     ← 网站 logo(桥形标记)
```

## 常见修改怎么做

### 1. 改一段文字(如首页定位句)
打开 `index.html`,按 `Ctrl+F` 搜到那句话,改引号或标签之间的文字,保存刷新。

### 2. 增加一个科研项目
1. 打开 `data/research.js`,找到想放入的主题(A 人因 / B 计算建模 / C 人机系统);
2. 复制任何一个 `{ ... }` 整块,粘贴到同一主题的 `projects` 列表末尾;
3. 逐项改内容:`title` 标题、`role` 角色、`period` 时间、`question` 研究问题、
   `methods` 方法列表、`contribution` 我的贡献列表、`outcomes` 成果、`skills` 标签、`why` 与博士方向的关系;
4. 图片:先放进 `images/` 文件夹,再把 `"image": null` 改成 `"image": "你的图片名.webp"`;
5. 想让卡片显示大图排版,把 `"featured": false` 改成 `true`。
⚠ 逗号规则:块与块之间要有逗号,块内最后一行后面不要逗号。改完刷新看效果,报错就把刚改动的地方恢复。

### 3. 换一张图片
把新图(建议先用 [tinypng.com](https://tinypng.com) 或 [squoosh.app](https://squoosh.app) 压缩)放进 `images/`,
文件名改成和 `data/` 里写的名字一致即可,旧图可删除。

### 4. 改颜色 / 字体
打开 `css/style.css`,文件开头有两个区块:
- `COLOR TOKENS — LIGHT MODE`(浅色模式)
- `COLOR TOKENS — DARK MODE`(深色模式)
改 `--color-primary`(墨蓝主色)、`--color-accent`(深青强调色)、`--color-bg`(米白背景)的十六进制值即可,全站自动生效。
字体在 `FONTS` 区块改(同时要去每个 html 的 `<head>` 里换 Google Fonts 链接,这步建议让 AI 做)。

### 5. 删掉一个项目/奖项
在对应 `data/*.js` 里删掉整个 `{ ... }` 块;CV 页的奖项在 `cv.html` 里改。

### 6. 更新简历 PDF
把新 PDF 命名为 `SU-Jiajie-CV.pdf` 覆盖 `files/` 里的同名文件即可。

## 明暗模式切换
右上角按钮自动切换,跟随系统设置。不需要你维护。

## 部署状态:已上线 ✔

网站已于 2026-09-12 部署到 GitHub Pages:

- **仓库**:https://github.com/JiajieSu/JiajieSu.github.io
- **网址**:https://jiajiesu.github.io

### 以后怎么更新网站(两种方法)

**方法 A:直接在 GitHub 网页上改(最简单)**
1. 打开仓库页面,点击要改的文件(比如 `data/research.js`);
2. 点右上角铅笔图标 ✏️,直接修改文字;
3. 点绿色 Commit changes 按钮,等 1–2 分钟网站自动更新。

**方法 B:改本地文件再上传**
1. 双击本地 `index.html` 预览、修改;
2. 把改过的文件拖到仓库页面的 Add file → Upload files,Commit 即可。

## 中英文切换(下一阶段)
等英文内容定稿后,AI 会加一个语言切换按钮:所有界面文字放进一个 `data/i18n.js` 对照表,一键切换。

## 记录
- 2026-09-12 初版由 AI 生成(英文版,含 12 张项目图、明暗模式、滚动渐入动画);同日部署上线至 https://jiajiesu.github.io。
- 待你确认后可改:RA 起始月份(现用 Mar 2026)、钉钉杯奖项等级(现写 Second Prize)、晕动症项目的配图。

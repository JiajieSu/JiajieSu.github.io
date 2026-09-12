# SU Jiajie 学术网站 — 维护手册

> 这是你的个人学术网站的完整代码。**不需要安装任何软件就能本地预览**:双击 `index.html` 即可在浏览器打开。
> 修改任何文件后,刷新浏览器就能看到效果。改坏了随时找 AI 帮你恢复。

## 文件夹地图(改哪里)

```
website/
├─ index.html          ← 首页(英文文字直接改这里的引号内容)
├─ about.html          ← 关于我(个人故事、时间线、技能、CV 下载按钮)
├─ research.html       ← 科研经历(深色页面,内容来自 data/research.js)
├─ projects.html       ← 工程项目(深色页面,内容来自 data/projects.js)
├─ publications.html   ← 论文与专利(深色页面,内容来自 data/publications.js)
├─ contact.html        ← 联系方式
│
├─ css/
│  ├─ base.css         ← 底层样式,不用动
│  └─ style.css        ← 所有样式。开头两个区块就是配色和字体,想换色只改那里
│
├─ js/
│  ├─ lang.js          ← 语言开关的底层逻辑,不用动
│  ├─ main.js          ← 明暗模式、中英切换、翻译应用,不用动
│  └─ render.js        ← 自动把 data/ 文件变成卡片,不用动
│
├─ data/               ← ★ 你最常改的文件夹 ★
│  ├─ i18n.js          ← 全站固定文字的中文对照表(改中文文案在这里)
│  ├─ research.js      ← 科研项目卡片(增删改项目在这里,每项含英文+中文 zh 块)
│  ├─ projects.js      ← 工程与竞赛项目卡片(同上)
│  └─ publications.js  ← 论文和专利
│
├─ images/             ← 所有图片,按项目命名(如 microrobot-tracking.webp)
├─ files/
│  └─ SU-Jiajie-CV.pdf ← CV 按钮指向的简历 PDF
└─ assets/logo.svg     ← 网站 logo(桥形标记)
```

## 常见修改怎么做

### 1. 改一段文字(如首页定位句)
- **改英文**:打开对应 html,按 `Ctrl+F` 搜到那句话,改标签之间的文字。
- **改中文**:打开 `data/i18n.js`,按 `Ctrl+F` 搜对应中文句子,改引号里的内容即可。

### 2. 增加一个科研项目
1. 打开 `data/research.js`,找到想放入的主题(A 人因 / B 计算建模 / C 人机系统);
2. 复制任何一个 `{ ... }` 整块,粘贴到同一主题的 `projects` 列表末尾;
3. 逐项改内容:`title` 标题、`role` 角色、`period` 时间、`question` 研究问题、
   `methods` 方法列表、`contribution` 我的贡献列表、`outcomes` 成果、`skills` 标签、`why` 与博士方向的关系;
4. **中文版**:同一块里的 `zh: { ... }` 是中文文案,对应改写;没有 zh 的字段会自动回退显示英文;
5. 图片:先放进 `images/` 文件夹,再把 `"image": null` 改成 `"image": "你的图片名.webp"`;
   多张图用 `"images": [ { "src": "...", "caption": "英文说明", "zhCaption": "中文说明" }, ... ]`,
   每张图会自动占满卡片宽度、上下排列、完整不裁剪;
6. 想让卡片显示大图排版,把 `"featured": false` 改成 `true`。

⚠ 逗号规则:块与块之间要有逗号,块内最后一行后面不要逗号。改完刷新看效果,报错就把刚改动的地方恢复。

### 3. 换一张图片
把新图(建议先用 [tinypng.com](https://tinypng.com) 或 [squoosh.app](https://squoosh.app) 压缩)放进 `images/`,
文件名改成和 `data/` 里写的名字一致即可,旧图可删除。
网站会自动按原图比例完整显示,不会裁剪,不用调尺寸。

### 4. 改颜色 / 字体
打开 `css/style.css`,文件开头有两个区块:
- `COLOR TOKENS — LIGHT MODE`(浅色模式)
- `COLOR TOKENS — DARK MODE`(深色模式)
改 `--color-primary`(墨蓝主色)、`--color-accent`(深青强调色)、`--color-bg`(米白背景)的十六进制值即可,全站自动生效。
字体在 `FONTS` 区块改(同时要去每个 html 的 `<head>` 里换 Google Fonts 链接,这步建议让 AI 做)。

### 5. 删掉一个项目
在对应 `data/*.js` 里删掉整个 `{ ... }` 块(连同它的 `zh: { ... }`),刷新即可。

### 6. 更新简历 PDF
把新 PDF 命名为 `SU-Jiajie-CV.pdf` 覆盖 `files/` 里的同名文件即可。
网站已没有独立 CV 页面;CV 按钮在首页、关于我、联系方式三个页面都能一键查看/下载。

## 明暗模式与中英文切换
- 首页 / 关于我 / 联系方式:浅色(米白),右上角月亮图标可切深色;
- 科研经历 / 工程项目 / 论文与专利:固定深色(更显高级,明暗按钮自动隐藏);
- 右上角「中文 / EN」按钮一键切换语言,选择会被记住。布局、图片、动画在两种语言下完全一致。

## 部署状态:已上线 ✔

网站已于 2026-09-12 部署到 GitHub Pages,2026-09-12 更新(图片上下排列版):

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

## 记录
- 2026-09-12 初版由 AI 生成(英文版,含 12 张项目图、明暗模式、滚动渐入动画);同日部署上线至 https://jiajiesu.github.io。
- 2026-09-12 二次更新:① RA 起始时间改为 April 2026;② 钉钉杯明确为二等奖(Second Prize);
  ③ Projects / Research 全部图片改为上下排列、完整原图比例、铺满内容宽度,不再裁剪;
  ④ 晕动症研究不配图,纯文字卡片,无占位符;
  ⑤ 删除独立 CV 页,关于我页新增醒目 CV 查看/下载按钮;
  ⑥ Research / Projects / Publications 三个详情页固定深色;
  ⑦ 新增「中文 / EN」一键切换,中文为自然学术表达,非逐字直译。

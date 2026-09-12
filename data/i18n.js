/* ============================================================
   STATIC-PAGE TRANSLATIONS — 中文文案 for every fixed text on
   the six pages. Dynamic project text lives in data/research.js,
   data/projects.js and data/publications.js (each item's zh block).

   HOW IT WORKS: every translatable element in the HTML carries
   data-i18n="key.name". When the site is switched to 中文,
   js/main.js replaces the element's text with the matching value
   below. English is simply what's written in the HTML itself.

   想改中文文案?直接改下面引号里的字即可,页面会自动使用。
   ============================================================ */

window.I18N = {
  zh: {
    /* ---------- labels used by rendered cards ---------- */
    "label.question": "研究问题",
    "label.methods": "方法",
    "label.contribution": "我的贡献",
    "label.outcomes": "成果",
    "label.skills": "技能",
    "label.why": "这如何指向我的博士方向",
    "label.viewPub": "查看论文",
    "label.newest": "最新",
    "label.coinventor": "共同发明人",

    /* ---------- shared: header & footer ---------- */
    "brand.name": "苏家洁",
    "brand.sub": "人因工程 · 心理学 × 工程学",
    "doc.home": "苏家洁 — 人因工程 · 心理学 × 工程学",
    "doc.about": "关于我 — 苏家洁",
    "doc.research": "科研经历 — 苏家洁",
    "doc.projects": "工程项目 — 苏家洁",
    "doc.publications": "论文与专利 — 苏家洁",
    "doc.contact": "联系方式 — 苏家洁",
    "nav.about": "关于我",
    "nav.research": "科研经历",
    "nav.projects": "工程项目",
    "nav.publications": "论文与专利",
    "nav.contact": "联系方式",
    "footer.role": "深圳大学心理学院科研助理",
    "footer.rights": " · 苏家洁 · 更新于 2026 年 9 月",
    "skip": "跳到主要内容",

    /* ---------- home ---------- */
    "home.eyebrow": "科研助理 · 深圳大学心理学院",
    "home.name": "苏家洁",
    "home.statement":
      "我用工程、传感与计算建模的方法,研究人在复杂技术系统中的反应——目前的重点是 VR 与自动驾驶中的晕动症。",
    "home.meta1": "人因工程与晕动症",
    "home.meta2": "DTI 脑网络 × 机器学习",
    "home.meta3": "VR 与六自由度运动平台",
    "home.btnCV": "查看 / 下载 CV(PDF)",
    "home.btnResearch": "浏览我的科研经历",
    "home.interests.overline": "研究兴趣",
    "home.interests.title": "驱动我研究的三个问题",
    "home.interests.intro":
      "从机械工程走向心理学,而下面每一个问题,都需要这两种背景的同时在场。",
    "home.ic1.title": "人因工程",
    "home.ic1.text":
      "为什么 VR 和自动驾驶会让人晕?我用 DTI 脑网络特征预测个体的晕动症易感性,并研究成人与儿童在相关脑区上的差异。",
    "home.ic2.title": "人与技术的交互",
    "home.ic2.text":
      "界面设计——可预测性线索、非驾驶任务、反馈——如何塑造人在 VR、车辆与机器人系统中的舒适度和表现?",
    "home.ic3.title": "面向人类研究的工程方法",
    "home.ic3.text":
      "实验需要装置。我负责搭建心理学实验赖以运行的 VR 环境、六自由度运动平台与数据处理流程。",
    "home.traj.overline": "发展轨迹",
    "home.traj.title": "一条连续的能力线,四个阶段",
    "home.traj.intro":
      "不是转行,而是持续积累:系统构建、数据建模、人类反应测量,最后落到以人为本的设计。",
    "home.t1.period": "2020 – 2024",
    "home.t1.title": "机械工程",
    "home.t1.text": "东莞理工学院 工学学士——专业排名 1/194,国家奖学金,7 项专利,国家级大创项目负责人。",
    "home.t2.period": "2024 – 2025",
    "home.t2.title": "机器人与人工智能",
    "home.t2.text":
      "香港中文大学硕士(课题等级 A−)与中科院香港 CAIR 实习:遥操作机械臂、灵巧手、机器视觉集群追踪。",
    "home.t3.period": "2026 – 至今",
    "home.t3.title": "心理学 · 科研",
    "home.t3.text":
      "深圳大学心理学院科研助理:晕动症、DTI 脑网络、EEG、VR 与六自由度运动平台。",
    "home.t4.period": "下一站",
    "home.t4.title": "人因工程博士",
    "home.t4.text": "申请人因工程与人机交互方向的博士项目。",
    "home.feat.overline": "精选研究",
    "home.feat.title": "三个讲完整故事的项目",
    "home.feat.intro":
      "基于脑网络的晕动症预测、实时机器感知、精密遥操作——从人类数据到工程系统的完整跨度。",
    "home.feat.all": "查看全部科研经历 →",
    "home.phd.label": "展望未来",
    "home.phd.title": "我正在寻找人因工程 / 人机交互方向的博士职位。",
    "home.phd.text":
      "如果您的实验室从事晕动症、VR/AR 人机工效、交通人因或神经人因工效研究,期待与您交流——CV、论文与完整项目档案都在一键之遥。",
    "home.phd.btn": "联系我",

    /* ---------- about ---------- */
    "about.overline": "关于我",
    "about.title": "从造机器,到研究使用机器的人",
    "about.intro":
      "工程师出身、人因方向的研究者——我工作在装置、数据与人类体验交汇的地方。",
    "about.p1":
      "我是深圳大学心理学院的科研助理,研究方向是晕动症:用机器学习基于 DTI 脑网络预测个体易感性,并考察自动驾驶中预测性线索与非驾驶相关任务的交互作用。日常工作横跨 EEG 实验、VR 环境开发,以及支撑各项研究的六自由度运动平台。",
    "about.p2":
      "转向心理学之前,我受了五年机械工程训练:在东莞理工学院取得工学学士学位(专业排名 1/194),随后在香港中文大学攻读硕士,搭建了用于微型机器人集群追踪的 YOLOv8 + DeepSORT 流水线;又在中科院香港创新人工智能与机器人中心(CAIR)实习,从事遥操作机械臂与已申请专利的 IMU 动作捕捉数据手套。在给机器人做手眼标定、设计读取手指动作的手套之间,我意识到:我最关心的问题不在机器,而在操作机器的人。",
    "about.p3":
      "这个念头有非常实际的一面:关于技术的心理学研究,需要能亲手造技术的人。晕动症实验需要 VR 环境与运动平台,神经数据研究需要可复现的处理流程。我的博士目标是人因工程与人机交互方向——继续研究人在复杂系统中的反应,同时握有心理学的实验方法,和把实验所需装置亲手造出来的工程能力。",
    "about.cv.title": "完整简历",
    "about.cv.text":
      "网页之外,您还可以下载或直接查看包含全部经历的 PDF 版简历——教育、科研、项目、获奖、专利一应俱全。",
    "about.cv.btn": "查看 / 下载 CV(PDF)",
    "about.timeline.overline": "完整时间线",
    "about.timeline.title": "教育与经历(按时间排序)",
    "about.tl1.period": "2026 年 4 月至今",
    "about.tl1.title": "科研助理",
    "about.tl1.org": "深圳大学心理学院",
    "about.tl1.text":
      "晕动症研究(DTI 脑网络、预测性线索 × NDRT)、EEG 实验、VR 环境与六自由度运动平台开发、指导研究生。",
    "about.tl2.period": "2024 – 2025",
    "about.tl2.title": "机械与自动化工程 研究型硕士",
    "about.tl2.org": "香港中文大学",
    "about.tl2.text":
      "GPA 3.4/4.0 · 课题等级 A−。微型机器人集群的 YOLOv8 + DeepSORT 轨迹追踪。",
    "about.tl3.period": "2024 年 9 月 – 2025 年 8 月",
    "about.tl3.title": "机电设计实习生",
    "about.tl3.org": "中科院香港创新人工智能与机器人中心(CAIR)",
    "about.tl3.text":
      "遥操作机械臂、灵巧手仿真、手眼标定;共同发明 IMU 数据手套(已申请专利)。",
    "about.tl4.period": "2024 年 8 月 – 2025 年 5 月",
    "about.tl4.title": "插管机器人项目 学生助理",
    "about.tl4.org": "指导老师:任鸿亮教授",
    "about.tl4.text":
      "基于 RoboMaster 开发板与 CAN 通信的内窥镜伸缩控制;3D 打印平台设计与相机标定。",
    "about.tl5.period": "2023 年 4 月 – 2024 年 1 月",
    "about.tl5.title": "科研实习生 · 精准医工",
    "about.tl5.org": "松山湖材料实验室",
    "about.tl5.text":
      "为 NMR 信号产生编写软件定义无线电程序;在真实样品上设计并运行 NMR 实验。",
    "about.tl6.period": "2020 – 2024",
    "about.tl6.title": "机械设计制造及其自动化 工学学士",
    "about.tl6.org": "东莞理工学院",
    "about.tl6.text":
      "GPA 3.8/5.0 · 专业排名 1/194 · 国家奖学金、杨振宁奖学金 · 国家级大创项目负责人 · 7 项专利 · 4 项国家级/省级建模奖项。",
    "about.skills.overline": "技能矩阵",
    "about.skills.title": "我能为实验室带来什么",
    "about.sk1.title": "工程与设计",
    "about.sk2.title": "编程与数据",
    "about.sk3.title": "研究方法",
    "about.sk4.title": "语言",
    "about.lang1": "普通话(母语)",
    "about.lang2": "客家话(母语)",
    "about.lang3": "潮汕话(母语)",
    "about.lang4": "粤语(基础)",
    "about.lang5": "英语 — 雅思 6.5,大学英语六级",
    "about.skills.note":
      "其他:高级中学教师资格证 · 200+ 志愿时长 · 国家奖学金与杨振宁奖学金获得者。",

    /* ---------- research ---------- */
    "research.overline": "科研经历",
    "research.title": "按主题组织,而非按时间",
    "research.intro":
      "每个项目都用同样的结构呈现——研究问题、方法、我的贡献、成果,以及它如何指向人因工程方向。",

    /* ---------- projects ---------- */
    "projects.overline": "工程项目",
    "projects.title": "完整档案",
    "projects.intro":
      "科研经历见“科研经历”页;这里是完整的工程档案——造过的系统、打过的比赛。",

    /* ---------- publications ---------- */
    "pubs.overline": "论文与专利",
    "pubs.title": "同行评审成果与专利申请",
    "pubs.intro":
      "2 篇合作论文与 8 项专利申请——心理学与工程学之桥两侧的证据。",
    "pubs.journals.overline": "期刊论文",
    "pubs.journals.title": "论文",
    "pubs.patents.overline": "专利",
    "pubs.patents.title": "专利申请(8 项)",
    "pubs.table.title": "发明名称",
    "pubs.table.number": "申请号",
    "pubs.table.org": "申请人",
    "pubs.table.date": "时间",
    "pubs.figure.cap":
      "专利证书与申请文件,涵盖可穿戴设备、传送机构与无人机成像平台。",

    /* ---------- contact ---------- */
    "contact.overline": "联系方式",
    "contact.title": "打个招呼——尤其是研究“系统中的人”的你",
    "contact.intro":
      "无论您是潜在的博士导师、同行研究者,还是提问题的同学,每封邮件我都会读。",
    "contact.email": "邮箱",
    "contact.location": "所在地",
    "contact.role": "身份",
    "contact.seeking": "正在寻找",
    "contact.loc.value": "深圳大学,广东",
    "contact.role.value": "心理学院科研助理",
    "contact.seeking.value": "人因工程 / 人机交互方向博士职位",
    "contact.btnEmail": "给我写邮件",
    "contact.btnCV": "查看 / 下载 CV(PDF)",
  },
};

/* ============================================================
   ENGINEERING & COMPETITION PROJECTS — powers the Projects page
   ------------------------------------------------------------
   Same editing rules as research.js:
   - each block inside "projects: [ ... ]" is one card
   - "images: [...]" = multiple pictures; each becomes one
     full-width row with its own caption (stacked vertically)
   - "image": "file.webp" = a single picture above the text
   - delete a block to remove a project; copy-paste to add one
   - 每个项目的 zh: { ... } 块是中文文案,切换语言时自动使用
   ⚠ Keep the commas between blocks.
   ============================================================ */

window.PROJECT_GROUPS = [
  {
    id: "robotics",
    title: "Robotics & Automation Systems",
    blurb: "Complete builds — mechanical design, control, software, and virtual commissioning.",
    zh: {
      title: "机器人与自动化系统",
      blurb: "完整的建造——机械设计、控制、软件与虚拟调试。",
    },
    projects: [
      {
        id: "superconducting-cavity",
        featured: true,
        kicker: "National Innovation Project",
        title: "Part-Monitoring System for a Superconducting-Cavity Assembly Line",
        role: "Project Lead · National Innovation & Entrepreneurship Training Program",
        period: "Jul 2022 – Jul 2023",
        question:
          "How can a mobile robot reliably monitor parts on an automated assembly line — and be virtually commissioned before deployment?",
        methods: [
          "Dual-posture picking device (patent filed)",
          "ROS control stack",
          "Unity virtual scene & simulation",
          "TCP/IP server–client, WinForms integration",
        ],
        contribution: [
          "Led the project as principal investigator: designed the model structure and proposed a dual-posture picking device adaptable across scenarios (patent filed)",
          "Conducted finite-element analysis of the robot chassis to validate feasibility",
          "Embedded models into Unity, building the virtual scene and simulating environments",
          "Established SSH & ROS control links, implemented server–client TCP/IP communication, and integrated it into WinForms software",
        ],
        outcomes:
          "A full monitoring system (hardware + software + digital twin), one patent application, and a completed national-level project.",
        skills: ["ROS", "Unity", "FEA", "WinForms", "TCP/IP"],
        images: [
          { src: "mobile-manipulator.webp", caption: "Mobile manipulator: four-wheel chassis, articulated arm, and multi-probe end effector.", zhCaption: "移动机械臂:四轮底盘、关节臂与多探头末端执行器。" },
          { src: "motor-monitor-gui.webp", caption: "Monitoring software interface: login page and real-time telemetry for eight motors.", zhCaption: "监控软件界面:登录页与八路电机的实时遥测。" },
          { src: "digital-twin-network.webp", caption: "System architecture: TCP/IP links between the physical robot, server, and digital twin.", zhCaption: "系统架构:物理机器人、服务器与数字孪生之间的 TCP/IP 连接。" },
          { src: "unity-simulation.webp", caption: "Unity virtual commissioning scene with planned navigation waypoints.", zhCaption: "Unity 虚拟调试场景与规划的导航路径点。" },
        ],
        links: [{ label: "See patent details", zhLabel: "查看专利详情", url: "publications.html#patents" }],
        why: "",
        zh: {
          kicker: "国家级大创项目",
          title: "超导腔装配线的零件监测系统",
          role: "项目负责人 · 国家级大学生创新创业训练计划",
          period: "2022 年 7 月 – 2023 年 7 月",
          question: "移动机器人如何在自动化装配线上可靠地监测零件——并在部署之前完成虚拟调试?",
          methods: [
            "双姿态拾取装置(已申请专利)",
            "ROS 控制库",
            "Unity 虚拟场景与仿真",
            "TCP/IP 服务器–客户端与 WinForms 集成",
          ],
          contribution: [
            "作为负责人主持项目:设计模型结构,提出可跨场景适应的双姿态拾取装置(已申请专利)",
            "对机器人底盘进行有限元分析,验证可行性",
            "将模型嵌入 Unity,搭建虚拟场景并仿真环境",
            "建立 SSH 与 ROS 控制链路,完成服务器与客户端的 TCP/IP 通信并集成至 WinForms 软件",
          ],
          outcomes: "硬件 + 软件 + 数字孪生的完整监测系统,一项专利申请,国家级项目结题。",
          why: "",
        },
      },
    ],
  },

  {
    id: "modeling",
    title: "Competitions & Mathematical Modeling",
    blurb: "Four award-winning modeling cycles: formulate, validate, write, defend — all under deadline.",
    zh: {
      title: "竞赛与数学建模",
      blurb: "四次获奖的建模周期:建模、验证、写作、答辩——都在截止日期之前。",
    },
    projects: [
      {
        id: "mcm-ggdp",
        featured: true,
        kicker: "MCM/ICM · Honorable Mention",
        title: "Green GDP (GGDP) Model — Energy-Intensity Factors",
        role: "Team Leader · Mathematical Contest in Modeling",
        period: "Feb 2023",
        question:
          "What is the relationship between GDP growth and energy consumption and emissions — and can a multi-factor green-GDP indicator be built from it?",
        methods: ["Data mining", "Multi-factor analysis", "MATLAB curve fitting"],
        contribution: [
          "Constructed the GGDP model based on energy-intensity factors; responsible for MATLAB data mining and factor-relationship analysis",
        ],
        outcomes: "MCM/ICM 2023 Honorable Mention (H Award).",
        skills: ["MATLAB", "Modeling", "Data Mining"],
        image: "ggdp-modeling.webp",
        imageCaption:
          "GGDP modeling pipeline: CO₂–GDP curve fitting and GGDP–N₂O regression analysis.",
        links: [],
        why: "",
        zh: {
          kicker: "MCM/ICM · H 奖",
          title: "绿色 GDP(GGDP)模型——能源强度因子",
          role: "队长 · 美国大学生数学建模竞赛(MCM/ICM)",
          period: "2023 年 2 月",
          question: "GDP 增长与能源消耗、排放之间是什么关系?能否据此构建多因素的绿色 GDP 指标?",
          methods: ["数据挖掘", "多因素分析", "MATLAB 曲线拟合"],
          contribution: ["基于能源强度因子构建 GGDP 模型,负责 MATLAB 数据挖掘与因子关系分析"],
          outcomes: "2023 年美国大学生数学建模竞赛 H 奖(Honorable Mention)。",
          caption: "GGDP 建模流程:CO₂–GDP 曲线拟合与 GGDP–N₂O 回归分析。",
          why: "",
        },
      },
      {
        id: "national-geometry",
        featured: true,
        kicker: "Guangdong · 2nd Prize",
        title: "Geometric-Feature Positioning for Spatial-Structure Scheduling",
        role: "Team Leader · CUMCM (National Contest, Guangdong Division)",
        period: "Sep 2022",
        question:
          "How can members of a spatial scheduling structure be located using circular geometry and angular constraints?",
        methods: ["Geometric modeling", "Simulation", "LaTeX paper writing"],
        contribution: [
          "Built positioning models from geometric-feature analysis, simulated structural scheduling, and co-wrote the competition paper",
        ],
        outcomes: "2nd Prize, Guangdong Division, 2022 National College Mathematical Contest in Modeling.",
        skills: ["Geometry", "Simulation", "Paper Writing"],
        image: "geometric-positioning.webp",
        imageCaption:
          "Circular positioning geometry: Model I (member excluded from the circle) and Model II (member included).",
        links: [],
        why: "",
        zh: {
          kicker: "广东赛区 · 二等奖",
          title: "面向空间结构调度的几何特征定位",
          role: "队长 · 全国大学生数学建模竞赛(广东赛区)",
          period: "2022 年 9 月",
          question: "如何利用圆形几何与角度约束,在空间调度结构中定位成员?",
          methods: ["几何建模", "仿真", "LaTeX 论文写作"],
          contribution: ["基于几何特征分析建立定位模型,仿真结构调度,并合作撰写竞赛论文"],
          outcomes: "2022 年全国大学生数学建模竞赛广东赛区二等奖。",
          caption: "圆形定位几何:模型 I(成员不包含于圆内)与模型 II(成员包含于圆内)。",
          why: "",
        },
      },
      {
        id: "forecasting",
        featured: true,
        kicker: "May 1 Contest · 2nd Prize",
        title: "Purchasing Strategy & Demand Forecasting Models",
        role: "Team Leader · May 1 Mathematical Modeling Contest / DingTalk Big-Data Challenge",
        period: "2022",
        question:
          "How should a purchasing strategy be planned when demand must be forecast from noisy time series?",
        methods: ["ARIMA forecasting", "Lingo optimization", "Time-series analysis", "Large-sample fitting"],
        contribution: [
          "May 1 Contest: built the purchasing-strategy model, wrote Lingo demand-planning code, and developed ARIMA demand forecasting",
          "DingTalk Big-Data Challenge: built flight-delay prediction models using large-sample fitting and time-series analysis",
        ],
        outcomes:
          "2nd Prize, 2022 May 1 Mathematical Modeling Contest; 2nd Prize, 2022 DingTalk Big-Data Challenge.",
        skills: ["ARIMA", "Lingo", "Time Series"],
        image: "timeseries-forecast.webp",
        imageCaption:
          "Differenced series, Q-Q normality plots, and ARIMA forecast curves from the purchasing-strategy model.",
        links: [],
        why: "",
        zh: {
          kicker: "五一竞赛 · 二等奖",
          title: "采购策略与需求预测模型",
          role: "队长 · 五一数学建模竞赛 / 钉钉杯大数据挑战赛",
          period: "2022 年",
          question: "当需求必须从含噪时间序列中预测时,采购策略应如何规划?",
          methods: ["ARIMA 预测", "Lingo 优化", "时间序列分析", "大样本拟合"],
          contribution: [
            "五一竞赛:构建采购策略模型,编写 Lingo 需求规划代码,建立 ARIMA 需求预测",
            "钉钉杯大数据挑战赛:基于大样本拟合与时序分析构建航班延误预测模型",
          ],
          outcomes: "2022 年五一数学建模竞赛二等奖;2022 年钉钉杯大数据挑战赛二等奖。",
          caption: "采购策略模型中的差分序列、Q-Q 正态检验图与 ARIMA 预测曲线。",
          why: "",
        },
      },
      {
        id: "internet-plus",
        featured: false,
        kicker: "Internet+ · National Silver",
        title: "Fangke Energy — Biomass Thermal-Energy System",
        role: "Team member, simulation & field research",
        period: "May 2022 – Oct 2023",
        question:
          "How can simulation and field research de-risk a biomass energy plant project before execution?",
        methods: ["Unity simulation", "SolidWorks", "Field research", "Operations assessment"],
        contribution: [
          "Simulated scenarios in Unity and SolidWorks to identify execution risks in advance",
          "Conducted field research evaluating operations against performance criteria for project delivery",
        ],
        outcomes:
          "National Silver Award, 8th China International 'Internet+' College Students Innovation Competition (2023); Guangdong Silver (2022).",
        skills: ["SolidWorks", "Unity", "Field Research"],
        image: null,
        imageCaption: "",
        links: [],
        why: "",
        zh: {
          kicker: "互联网+ · 国家级银奖",
          title: "方科能源——生物质热能系统",
          role: "队员,负责仿真与实地调研",
          period: "2022 年 5 月 – 2023 年 10 月",
          question: "如何通过仿真与实地调研,在执行之前化解生物质能源厂项目的风险?",
          methods: ["Unity 仿真", "SolidWorks", "实地调研", "运营评估"],
          contribution: [
            "用 Unity 与 SolidWorks 进行场景仿真,提前识别执行风险",
            "开展实地调研,对照绩效标准评估运营情况与项目交付",
          ],
          outcomes: "第八届中国国际“互联网+”大学生创新创业大赛国家级银奖(2023);广东省银奖(2022)。",
          why: "",
        },
      },
    ],
  },

  {
    id: "campus",
    title: "Campus & Community",
    blurb: "Organization, communication, and service — the human-facing half of a researcher's training.",
    zh: {
      title: "校园与社会",
      blurb: "组织、沟通与服务——研究者身上面向人的那一半。",
    },
    compact: [
      {
        title: "ASUS Campus Partner",
        org: "New-media operations & event planning",
        text: "Ran new-media platforms and video editing; planned and joined city training camps; trained in enterprise project organization and professional communication.",
        zh: {
          title: "ASUS 校园合伙人",
          org: "新媒体运营与活动策划",
          text: "运营新媒体平台与视频剪辑;策划并参与城市训练营;接受企业项目组织与职业化沟通培训。",
        },
      },
      {
        title: "University Debate Team Member",
        org: "Argumentation & critical thinking",
        text: "Competed in university debate tournaments, training critical thinking, logical reasoning, and defending a position under pressure.",
        zh: {
          title: "校辩论队队员",
          org: "论辩与批判性思维",
          text: "参加校级辩论赛,训练批判性思维、逻辑推理与高压下的观点表达。",
        },
      },
      {
        title: "AutoGo Lab Member",
        org: "Undergraduate research lab",
        text: "Worked with C++, C#, Python, and Linux/ROS; drew and refined 50+ engineering drawings supporting graduate students' national superconducting-cavity production projects.",
        zh: {
          title: "AutoGo 实验室成员",
          org: "本科科研实验室",
          text: "掌握 C++、C#、Python 与 Linux/ROS;绘制并优化 50+ 工程图纸,支持研究生的国家超导腔生产项目。",
        },
      },
      {
        title: "Social Practice & Volunteering",
        org: "Field research & public service (200+ volunteer hours)",
        text: "Smart-agriculture field research in Qingyuan and Dongguan; red-heritage VR shooting research; COVID-response volunteering in Puning, recognized as an Outstanding Anti-Epidemic Volunteer.",
        zh: {
          title: "社会实践与志愿服务",
          org: "实地调研与公共服务(200+ 志愿时长)",
          text: "清远、东莞的智慧农业实地调研;红色遗址 VR 拍摄调研;普宁抗疫志愿者,获“疫情防控优秀志愿者”称号。",
        },
      },
    ],
  },
];

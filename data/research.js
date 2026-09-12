/* ============================================================
   RESEARCH PROJECTS — edit this file to update the Research page
   ------------------------------------------------------------
   HOW TO ADD / EDIT / REMOVE A PROJECT:
   1. Each project inside "projects: [ ... ]" is one card. The
      fields (title, role, period, question, methods, contribution,
      outcomes, skills, why) become the text on the card.
   2. "image" points to a file in the images/ folder. Put your
      picture there first, then write its file name here.
      Set "image": null if a project has no picture — the card
      simply shows text, no placeholder is displayed.
   3. To REMOVE a project: delete its whole { ... } block.
   4. To ADD a project: copy an existing block, paste it, and
      rewrite the text between the quotes.
   5. "featured": true shows a large card (image above the text);
      "featured": false shows a text-only card.
   6. 每个项目还有一个 zh: { ... } 块,放中文文案。
      网站切到中文时自动使用;没有 zh 的字段会回退显示英文。
   ⚠ Keep the commas between blocks. Save, refresh, done.
   ============================================================ */

window.RESEARCH_THEMES = [
  {
    id: "human-factors",
    num: "A",
    title: "Human Factors",
    blurb:
      "My current work at Shenzhen University: understanding why humans get motion-sick in VR and automated driving, how it can be predicted from the brain's structural connectivity, and how interface and task design can mitigate it.",
    zh: {
      title: "人因工程",
      blurb:
        "我在深圳大学的当前工作:理解人为什么在 VR 与自动驾驶中晕动、如何通过大脑结构连接预测个体易感性,以及界面与任务设计如何缓解它。",
    },
    projects: [
      {
        id: "dti-motion-sickness",
        featured: true,
        kicker: "Current Research",
        title: "Predicting Motion Sickness from Brain-Network Structure",
        role: "Research Assistant, School of Psychology, Shenzhen University",
        period: "Apr 2026 – Present",
        question:
          "Can the structural connectome — measured with diffusion tensor imaging (DTI) — predict who is susceptible to motion sickness, and do adults and children differ in the brain regions involved?",
        methods: [
          "Diffusion Tensor Imaging (DTI)",
          "Brain network construction",
          "Machine learning classification",
          "Group comparison (adults vs. children)",
        ],
        contribution: [
          "Preprocessed and organized DTI-derived brain-network data for the machine-learning pipeline",
          "Trained predictive models of motion-sickness susceptibility from connectome features",
          "Compared brain-region contributions between adult and child samples",
        ],
        outcomes:
          "Predictive models linking structural brain networks to motion-sickness susceptibility, with age-group differences in contributing regions.",
        skills: ["DTI", "Machine Learning", "Data Preprocessing", "Neuroimaging"],
        image: null,
        imageCaption: "",
        links: [],
        why: "This is the core of my PhD direction: using computational methods on neural data to forecast a human response before it happens — the essence of human-factors engineering.",
        zh: {
          kicker: "当前研究",
          title: "基于 DTI 脑网络结构的晕动症易感性预测",
          role: "深圳大学心理学院科研助理",
          period: "2026 年 4 月至今",
          question:
            "通过弥散张量成像(DTI)测得的大脑结构连接组,能否预测谁更容易晕动?成人与儿童所涉及的脑区是否不同?",
          methods: [
            "弥散张量成像(DTI)",
            "脑网络构建",
            "机器学习分类",
            "成人与儿童分组比较",
          ],
          contribution: [
            "完成 DTI 脑网络数据的预处理与组织,为机器学习流程提供输入",
            "基于连接组特征训练晕动症易感性预测模型",
            "对比成人与儿童样本中各脑区的贡献差异",
          ],
          outcomes:
            "建立了大脑结构网络与晕动症易感性之间的预测模型,并发现不同年龄组的贡献脑区存在差异。",
          why:
            "这是我博士方向的核心:用计算方法处理神经数据,在人的反应发生之前做出预测——这正是人因工程的本质。",
        },
      },
      {
        id: "ndrt-predictability",
        featured: false,
        kicker: "Current Research",
        title: "Predictability Cues & Non-Driving-Related Tasks in Motion Sickness",
        role: "Research Assistant, School of Psychology, Shenzhen University",
        period: "2026 – Present",
        question:
          "How do predictability cues (forewarning of vehicle motion) and non-driving-related tasks (NDRTs) interact in shaping motion sickness in automated driving?",
        methods: [
          "Experimental design (factorial, cue × task)",
          "Six-axis motion platform",
          "Motion-sickness measurement",
          "Statistical analysis (SPSS)",
        ],
        contribution: [
          "Supported experimental preparation and data preprocessing for the crossover design",
          "Helped build the VR environments used to deliver cue and task manipulations",
        ],
        outcomes:
          "Ongoing study on the interaction between motion predictability and engagement in secondary tasks.",
        skills: ["Experimental Design", "VR", "SPSS", "Data Analysis"],
        image: null,
        imageCaption: "",
        links: [],
        why: "A classical human-factors question — how task design and information design jointly shape user comfort — studied with the exact tools (VR, motion platform) my engineering background lets me build.",
        zh: {
          kicker: "当前研究",
          title: "预测性线索与非驾驶相关任务对晕动症的影响",
          role: "深圳大学心理学院科研助理",
          period: "2026 年至今",
          question:
            "在自动驾驶场景中,运动预测性线索(对车辆运动的提前告知)与非驾驶相关任务(NDRT)如何交互地影响晕动症?",
          methods: [
            "析因实验设计(线索 × 任务)",
            "六自由度运动平台",
            "晕动测量",
            "SPSS 统计分析",
          ],
          contribution: [
            "支撑交叉设计实验的准备与数据预处理",
            "参与搭建用于呈现线索与任务操纵的 VR 环境",
          ],
          outcomes: "正在进行的研究:运动可预测性与次任务参与的交互作用。",
          why:
            "一个经典的人因问题——信息设计与任务设计如何共同塑造用户舒适度——而研究工具(VR、运动平台)恰是我的工程背景所能建造的。",
        },
      },
      {
        id: "szulab-work",
        featured: false,
        kicker: "Lab Role",
        title: "Laboratory Methods & Platform Development",
        role: "Research Assistant, School of Psychology, Shenzhen University",
        period: "Apr 2026 – Present",
        question:
          "How can an engineering skill set accelerate a psychology lab — from apparatus to analysis pipelines?",
        methods: [
          "EEG stimulation experiments & data processing",
          "VR environment development",
          "Six-axis motion platform",
          "Equipment debugging & scripting",
        ],
        contribution: [
          "Assist and mentor graduate students with equipment debugging and requirement-driven coding",
          "Lead preprocessing and organization of project data across lab studies",
          "Support EEG stimulation experiments and EEG data processing",
          "Develop VR environments and operate the six-axis motion platform for motion-sickness studies",
        ],
        outcomes:
          "A lab infrastructure role that spans hardware, software, and human-subject measurement.",
        skills: ["EEG", "VR Development", "Mentoring", "Python"],
        image: null,
        imageCaption: "",
        links: [],
        why: "I am the lab member who can both run the human-subject study and build the apparatus it runs on.",
        zh: {
          kicker: "实验室角色",
          title: "实验室方法与平台建设",
          role: "深圳大学心理学院科研助理",
          period: "2026 年 4 月至今",
          question: "一套工程能力如何加速一个心理学实验室——从实验装置到分析流程?",
          methods: [
            "EEG 刺激实验与数据处理",
            "VR 环境开发",
            "六自由度运动平台",
            "设备调试与脚本编写",
          ],
          contribution: [
            "协助并指导研究生进行设备调试与面向需求的编程",
            "负责各课题数据的预处理与组织",
            "支持 EEG 刺激实验与 EEG 数据处理",
            "开发 VR 环境并运行六自由度运动平台,服务晕动症研究",
          ],
          outcomes: "一份横跨硬件、软件与人类被试测量的实验室建设角色。",
          why: "我是实验室里那个既能跑人类被试实验、又能搭建实验装置的人。",
        },
      },
    ],
  },

  {
    id: "computational",
    num: "B",
    title: "Computational Modeling & AI",
    blurb:
      "Methods work: computer-vision tracking, machine learning for psychological measurement, and mathematical modeling. This is the bridge my engineering training built toward behavioral and neural research.",
    zh: {
      title: "计算建模与人工智能",
      blurb:
        "方法层面:机器视觉追踪、面向心理测量的机器学习、数学建模——这是我用工程训练为行为与神经研究架起的桥。",
    },
    projects: [
      {
        id: "microrobot-swarm",
        featured: true,
        kicker: "Master's Thesis Project",
        title: "AI-Based Trajectory Judgment & Generation for Micro-Robot Swarms",
        role: "Graduate Researcher, Zhang Li Group, The Chinese University of Hong Kong",
        period: "Jan 2025 – May 2025 · Grade A−",
        question:
          "How can dense swarms of micro-robots be tracked continuously and turned into smooth, usable navigation maps for micro-assembly?",
        methods: [
          "YOLOv8-seg instance segmentation",
          "DeepSORT multi-object tracking",
          "Hot-update mapping algorithm",
        ],
        contribution: [
          "Built a real-time tracking framework combining YOLOv8 and DeepSORT for micro-robot swarms in dense environments",
          "Proposed a hot-update mapping algorithm fusing real-time segmentation masks with decaying historical trajectories, reducing fragmentation",
          "Generated smooth trajectory heatmaps for downstream navigation and inspection decisions",
        ],
        outcomes:
          "A complete perception-to-map pipeline for swarm-based micro-assembly (M.Sc. project, grade A−).",
        skills: ["YOLOv8", "DeepSORT", "Computer Vision", "Python"],
        image: "microrobot-tracking.webp",
        imageCaption:
          "Micro-robot swarm detection, continuous tracking, and trajectory coverage map from the YOLOv8-seg + DeepSORT pipeline.",
        links: [],
        why: "Real-time machine perception of moving agents in cluttered scenes — the same family of methods I now apply to human movement and physiological signals.",
        zh: {
          kicker: "硕士课题",
          title: "微型机器人集群的 AI 轨迹判定与生成",
          role: "香港中文大学张力课题组 研究生",
          period: "2025 年 1 月 – 5 月 · 课题等级 A−",
          question: "密集的微型机器人集群如何被持续追踪,并转化为平滑可用的导航地图,服务于微装配?",
          methods: [
            "YOLOv8-seg 实例分割",
            "DeepSORT 多目标追踪",
            "热更新建图算法",
          ],
          contribution: [
            "构建了融合 YOLOv8 与 DeepSORT 的密集场景微型机器人实时追踪框架",
            "提出将实时分割掩膜与历史衰减轨迹相融合的热更新建图算法,降低轨迹碎片化",
            "生成平滑的轨迹热力图,服务下游导航与巡检决策",
          ],
          outcomes: "一条从感知到地图的完整流水线(硕士课题,等级 A−)。",
          caption: "YOLOv8-seg + DeepSORT 流程输出的微型机器人集群检测、持续追踪与轨迹覆盖图。",
          why: "复杂场景中对移动主体的实时机器感知——同一族方法,如今被我用于人类动作与生理信号。",
        },
      },
      {
        id: "scl90-ml",
        featured: false,
        kicker: "Publication",
        title: "Machine-Learning Simplification of the SCL-90 Symptom Checklist",
        role: "Co-author",
        period: "Journal of Affective Disorders, 2024",
        question:
          "Can a 90-item psychological symptom checklist be shortened with machine learning while preserving its screening power?",
        methods: [
          "Machine-learning feature selection",
          "Psychometric validation",
          "Scale development",
        ],
        contribution: [
          "Co-authored the study simplifying the Symptom Checklist-90 with machine-learning techniques",
        ],
        outcomes:
          "A substantially shortened checklist that retains assessment efficiency (J. Affective Disorders, 2024, 366, 181–188).",
        skills: ["Machine Learning", "Psychometrics", "Clinical Screening"],
        image: null,
        imageCaption: "",
        links: [
          { label: "Read the paper (ScienceDirect)", zhLabel: "在 ScienceDirect 阅读论文", url: "https://www.sciencedirect.com/science/article/abs/pii/S016503272401351X" },
        ],
        why: "My first formal proof that engineering methods can improve psychological measurement — the moment the two disciplines connected for me.",
        zh: {
          kicker: "论文",
          title: "基于 SCL-90 的机器学习量表简化",
          role: "共同作者",
          period: "《Journal of Affective Disorders》,2024",
          question: "90 项心理症状自评量表,能否在保持筛查效力的前提下用机器学习完成简化?",
          methods: ["机器学习特征选择", "心理测量学验证", "量表开发"],
          contribution: ["合作完成了用机器学习技术简化 SCL-90 症状自评量表的研究"],
          outcomes: "一个大幅精简且保持评估效率的量表(J. Affective Disorders, 2024, 366, 181–188)。",
          why: "工程方法能够改进心理测量——我的第一个正式证据,两个学科在此刻为我连通。",
        },
      },
      {
        id: "math-modeling",
        featured: false,
        kicker: "Competitive Modeling",
        title: "Mathematical Modeling Series (MCM/ICM & National Contests)",
        role: "Team Leader",
        period: "2022 – 2023",
        question:
          "How do you translate messy real-world problems — green GDP, spatial scheduling, flight delays, purchasing strategy — into models with testable behavior?",
        methods: [
          "MATLAB data mining",
          "Time-series (ARIMA) forecasting",
          "Multi-factor & geometric modeling",
          "Lingo optimization",
        ],
        contribution: [
          "MCM/ICM (Honorable Mention): built the green-GDP (GGDP) model from energy-intensity factors with MATLAB",
          "National Contest, Guangdong (2nd Prize): geometric-feature positioning models for spatial-structure scheduling",
          "May 1 Contest (2nd Prize): purchasing-strategy model with ARIMA demand forecasting",
          "DingTalk Big-Data Challenge (2nd Prize): flight-delay prediction with large-sample fitting and time-series analysis",
        ],
        outcomes:
          "Four national/provincial modeling awards, each a full build-model-validate-report cycle.",
        skills: ["MATLAB", "ARIMA", "Optimization", "Data Mining"],
        image: null,
        imageCaption: "",
        links: [{ label: "See figures on the Projects page", zhLabel: "在工程项目页查看图示", url: "projects.html#modeling" }],
        why: "Modeling competitions trained the habit I rely on daily: abstract a system, quantify it, test it, and communicate it.",
        zh: {
          kicker: "数学建模竞赛",
          title: "数学建模系列(MCM/ICM 与全国竞赛)",
          role: "队长",
          period: "2022 – 2023",
          question: "如何把杂乱的真实问题——绿色 GDP、空间调度、航班延误、采购策略——转化为可检验行为的模型?",
          methods: ["MATLAB 数据挖掘", "时间序列(ARIMA)预测", "多因素与几何建模", "Lingo 优化"],
          contribution: [
            "MCM/ICM(H 奖):基于能源强度因子,用 MATLAB 构建绿色 GDP(GGDP)模型",
            "全国大学生数学建模竞赛广东赛区(二等奖):面向空间结构调度的几何特征定位模型",
            "五一数学建模竞赛(二等奖):结合 ARIMA 需求预测的采购策略模型",
            "钉钉杯大数据挑战赛(二等奖):基于大样本拟合与时序分析的航班延误预测",
          ],
          outcomes: "四项国家级/省级建模奖项,每一项都是完整的建模—验证—报告闭环。",
          why: "建模竞赛训练了我如今每天依赖的习惯:抽象系统、量化、检验、表达。",
        },
      },
    ],
  },

  {
    id: "human-machine",
    num: "C",
    title: "Human–Machine & Medical Systems",
    blurb:
      "Engineering experience that later motivated my move toward the human side: teleoperated robots, wearable sensing, medical devices, and precision instruments.",
    zh: {
      title: "人机与医疗系统",
      blurb:
        "后来推动我转向“人”这一侧的工程经历:遥操作机器人、可穿戴传感、医疗器械与精密仪器。",
    },
    projects: [
      {
        id: "cair-teleoperation",
        featured: true,
        kicker: "Internship",
        title: "Teleoperated Robotic Arm & Dexterous-Hand Simulation",
        role: "Mechatronics Design Intern, CAS Hong Kong Centre for AI & Robotics (CAIR)",
        period: "Sep 2024 – Aug 2025",
        question:
          "How do you make a teleoperated arm-and-dexterous-hand system accurate enough for fine manipulation?",
        methods: [
          "7-DoF robotic arm control",
          "Hand-eye calibration",
          "Neural-network aided 3D model generation",
          "Automated data collection & server automation",
        ],
        contribution: [
          "Completed data simulation for dexterous-hand models based on teleoperated arm control",
          "Assisted hand-eye calibration refinement and structural optimization toward high precision",
          "Built a 7-DoF automated pick-and-place system",
          "Automated large-scale 3D model generation (automated data collection + server access) and trained neural networks to guarantee system accuracy",
        ],
        outcomes:
          "A functioning teleoperation pipeline plus a co-filed patent on an IMU motion-capture data glove.",
        skills: ["Robotics", "Calibration", "Python", "Automation"],
        image: "mechanism-structure.webp",
        imageCaption:
          "Mechatronic design work: geared actuator assembly and motorized linear stage developed during the internship.",
        links: [],
        why: "Months of making robots move taught me how much engineering skill matters for precision — and how much the human operator's perception matters too.",
        zh: {
          kicker: "实习",
          title: "遥操作机械臂与灵巧手仿真",
          role: "中科院香港创新人工智能与机器人中心(CAIR)机电设计实习生",
          period: "2024 年 9 月 – 2025 年 8 月",
          question: "如何让遥操作的机械臂与灵巧手系统,精确到足以完成精细操作?",
          methods: [
            "七自由度机械臂控制",
            "手眼标定",
            "神经网络辅助 3D 模型生成",
            "自动化数据采集与服务器",
          ],
          contribution: [
            "基于遥操作机械臂控制,完成灵巧手模型的数据仿真",
            "参与手眼标定的优化与结构改进,提升系统精度",
            "搭建七自由度自动抓放系统",
            "实现大规模 3D 模型的自动化生成(自动化数据采集 + 服务器),并用神经网络保障系统精度",
          ],
          outcomes: "一条可运行的遥操作流水线,以及共同申请的 IMU 动作捕捉数据手套专利。",
          caption: "实习期间完成的机电设计:齿轮驱动组件装配体与电动直线平台。",
          why: "让机器人动起来的数月让我明白:工程精度有多重要,操作者的感知就有多重要。",
        },
      },
      {
        id: "imu-glove",
        featured: false,
        kicker: "Patent Project",
        title: "IMU-Based Motion-Capture Data Glove",
        role: "Co-inventor, CAS Hong Kong CAIR & Institute of Automation",
        period: "Filed 2025",
        question:
          "How can human hand motion be captured cheaply and accurately enough for robot training and gesture analysis?",
        methods: [
          "IMU sensing (ICM-42688)",
          "Wearable mechanical design",
          "Custom PCB & firmware",
        ],
        contribution: [
          "Co-developed the wearable glove's mechanical exoskeleton, IMU layout, and circuit design",
        ],
        outcomes:
          "Chinese invention patent application (No. 202510644498.3, filed Oct 2025).",
        skills: ["Wearables", "IMU", "PCB Design", "CAD"],
        image: "data-glove-imu.webp",
        imageCaption:
          "Data-glove patent figures: finger-tracking exoskeleton, joint details, custom PCB, and the physical prototype worn on a hand.",
        links: [{ label: "See patent details", zhLabel: "查看专利详情", url: "publications.html#patents" }],
        why: "A direct human–machine interface: engineering a device whose only job is reading human movement — my current research reads the same signals at brain level.",
        zh: {
          kicker: "专利项目",
          title: "基于 IMU 的动作捕捉数据手套",
          role: "共同发明人,中科院香港 CAIR 与自动化研究所",
          period: "2025 年申请",
          question: "人的手部动作,能否被低成本、高精度地捕捉,用于机器人训练与手势分析?",
          methods: ["IMU 传感(ICM-42688)", "可穿戴机械设计", "定制 PCB 与固件"],
          contribution: ["共同开发可穿戴手套的机械外骨架、IMU 布局与电路设计"],
          outcomes: "中国发明专利申请(申请号 202510644498.3,2025 年 10 月提交)。",
          caption: "数据手套专利附图:手指追踪外骨架、关节细节、定制 PCB 与手部实物样机。",
          why: "一种直接的人机接口:工程一个只为读取人类动作而生的装置——我如今的研究,在同一类信号的脑层面展开。",
        },
      },
      {
        id: "intubation-robot",
        featured: false,
        kicker: "Research Project",
        title: "Intubation Robot — Endoscope Extension Control",
        role: "Student Assistant, supervised by Prof. Hongliang Ren",
        period: "Aug 2024 – May 2025",
        question:
          "How can an endoscope's telescopic motion be controlled precisely and safely for robot-assisted intubation?",
        methods: [
          "RoboMaster development board",
          "CAN bus motor control",
          "3D-printed platform design",
          "Camera calibration",
        ],
        contribution: [
          "Controlled endoscope extension via the RoboMaster board, implementing motor models and data computation over CAN communication",
          "Designed and 3D-printed the endoscope platform; completed image calibration",
        ],
        outcomes: "A working actuated endoscope platform for the medical-robotics project.",
        skills: ["Embedded Control", "CAN", "3D Printing", "CAD"],
        image: null,
        imageCaption: "",
        links: [],
        why: "Medical devices live or die by how safely a human can operate them — my first taste of human-centered medical engineering.",
        zh: {
          kicker: "科研项目",
          title: "插管机器人——内窥镜伸缩控制",
          role: "学生助理,指导老师:任鸿亮教授",
          period: "2024 年 8 月 – 2025 年 5 月",
          question: "如何为机器人辅助插管,精确且安全地控制内窥镜的伸缩运动?",
          methods: ["RoboMaster 开发板", "CAN 总线电机控制", "3D 打印平台设计", "相机标定"],
          contribution: [
            "基于 RoboMaster 开发板控制内窥镜伸缩,通过 CAN 通信实现电机模型与数据计算",
            "设计并 3D 打印内窥镜平台,完成图像标定",
          ],
          outcomes: "一个可运行的电动内窥镜平台,服务于医疗机器人项目。",
          why: "医疗设备的生死,取决于人能否安全地操作它——我第一次真正接触以人为中心的医疗工程。",
        },
      },
      {
        id: "nmr-sdr",
        featured: false,
        kicker: "Research Internship",
        title: "Software-Defined Radio for NMR Signal Generation",
        role: "Research Intern, Precision Medical Engineering Team, Songshan Lake Materials Laboratory",
        period: "Apr 2023 – Jan 2024",
        question:
          "Can a low-cost SDR replace conventional hardware to generate and process NMR signals for benchtop measurement?",
        methods: [
          "LimeSDR programming",
          "RF chain design (PA/LNA/duplexer)",
          "NMR spectroscopy",
          "Experiment design",
        ],
        contribution: [
          "Programmed software-defined radios to generate NMR signals required by the instrument, improving signal-processing and analysis efficiency",
          "Designed and conducted NMR experiments on real samples (blood, rice) for performance measurement",
          "Conducted extensive literature review, research training, and report writing",
        ],
        outcomes:
          "A working SDR-based NMR measurement setup plus training in formal scientific workflow.",
        skills: ["SDR", "Signal Processing", "Experimentation", "Literature Review"],
        image: "nmr-sdr-system.webp",
        imageCaption:
          "NMR probe and sample coil geometry with the LimeSDR RF transceiver chain (PA, LNA, duplexer) and amplified signal waveforms.",
        links: [],
        why: "My first genuine research apprenticeship — instrument building, real samples, literature, and scientific writing.",
        zh: {
          kicker: "科研实习",
          title: "用于 NMR 信号产生的软件定义无线电",
          role: "松山湖材料实验室 精准医工团队 科研实习生",
          period: "2023 年 4 月 – 2024 年 1 月",
          question: "低成本的 SDR 能否替代传统硬件,为台式测量产生并处理 NMR 信号?",
          methods: ["LimeSDR 编程", "射频链路设计(PA/LNA/双工器)", "NMR 波谱", "实验设计"],
          contribution: [
            "编程实现软件定义无线电,生成仪器所需的 NMR 信号,提升信号处理与分析效率",
            "在真实样品(血液、大米)上设计并执行 NMR 实验,测量系统性能",
            "完成系统的文献调研、科研训练与报告写作",
          ],
          outcomes: "一套可用的 SDR 核磁测量系统,以及正式科研流程的训练。",
          caption: "NMR 探头与样品线圈结构,以及 LimeSDR 射频链路(PA、LNA、双工器)与放大后的信号波形。",
          why: "我第一次真正意义上的科研学徒经历——造仪器、跑真实样品、读文献、写报告。",
        },
      },
    ],
  },
];

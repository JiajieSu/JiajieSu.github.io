/* ============================================================
   RESEARCH PROJECTS — edit this file to update the Research page
   ------------------------------------------------------------
   HOW TO ADD / EDIT / REMOVE A PROJECT:
   1. Each project inside "projects: [ ... ]" is one card. The
      fields (title, role, period, question, methods, contribution,
      outcomes, skills, why) become the text on the card.
   2. "image" points to a file in the images/ folder. Put your
      picture there first, then write its file name here.
      Set "image": null if a project has no picture yet.
   3. To REMOVE a project: delete its whole { ... } block.
   4. To ADD a project: copy an existing block, paste it, and
      rewrite the text between the quotes.
   5. "featured": true shows a large card with the image beside
      the text. "featured": false shows a text-only card.
   ⚠ Keep the commas between blocks. Save, refresh, done.
   ============================================================ */

window.RESEARCH_THEMES = [
  {
    id: "human-factors",
    num: "A",
    title: "Human Factors & Motion Sickness",
    blurb:
      "My current work at Shenzhen University: understanding why humans get motion-sick in VR and automated driving, how it can be predicted from the brain's structural connectivity, and how interface and task design can mitigate it.",
    projects: [
      {
        id: "dti-motion-sickness",
        featured: true,
        kicker: "Current Research",
        title: "Predicting Motion Sickness from Brain-Network Structure",
        role: "Research Assistant, School of Psychology, Shenzhen University",
        period: "2026 – Present",
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
        image: null, /* ← put a figure here when available, e.g. "dti-network.webp" */
        imageCaption:
          "Placeholder for a brain-network figure — photo can be added once lab materials are approved for sharing.",
        links: [],
        why: "This is the core of my PhD direction: using computational methods on neural data to forecast a human response before it happens — the essence of human-factors engineering.",
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
      },
      {
        id: "szulab-work",
        featured: false,
        kicker: "Lab Role",
        title: "Laboratory Methods & Platform Development",
        role: "Research Assistant, School of Psychology, Shenzhen University",
        period: "Mar 2026 – Present",
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
      },
    ],
  },

  {
    id: "computational",
    num: "B",
    title: "Computational Modeling & AI",
    blurb:
      "Methods work: computer-vision tracking, machine learning for psychological measurement, and mathematical modeling. This is the bridge my engineering training built toward behavioral and neural research.",
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
          { label: "Read the paper (ScienceDirect)", url: "https://www.sciencedirect.com/science/article/abs/pii/S016503272401351X" },
        ],
        why: "My first formal proof that engineering methods can improve psychological measurement — the moment the two disciplines connected for me.",
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
          "DingTalk Big-Data Challenge: flight-delay prediction with large-sample fitting and time-series analysis",
        ],
        outcomes:
          "Four national/provincial modeling awards, each a full build-model-validate-report cycle.",
        skills: ["MATLAB", "ARIMA", "Optimization", "Data Mining"],
        image: null,
        imageCaption: "",
        links: [{ label: "See figures on the Projects page", url: "projects.html#modeling" }],
        why: "Modeling competitions trained the habit I rely on daily: abstract a system, quantify it, test it, and communicate it.",
      },
    ],
  },

  {
    id: "human-machine",
    num: "C",
    title: "Human–Machine & Medical Systems",
    blurb:
      "Engineering experience that later motivated my move toward the human side: teleoperated robots, wearable sensing, medical devices, and precision instruments.",
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
          "Web-scraping & server automation",
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
        links: [{ label: "See patent details", url: "publications.html#patents" }],
        why: "A direct human–machine interface: engineering a device whose only job is reading human movement — my current research reads the same signals at brain level.",
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
      },
    ],
  },
];

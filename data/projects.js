/* ============================================================
   ENGINEERING & COMPETITION PROJECTS — powers the Projects page
   Same editing rules as data/research.js:
   copy a block to add, delete a block to remove, keep commas.
   "images" may hold 1–4 pictures; each is a file in images/.
   ============================================================ */

window.PROJECT_GROUPS = [
  {
    id: "robotics",
    title: "Robotics & Automation Systems",
    blurb:
      "Complete builds — mechanical design, control, software, and virtual commissioning.",
    projects: [
      {
        id: "superconducting-cavity",
        featured: true,
        kicker: "National Innovation Program",
        title: "Part-Monitoring System for Superconducting-Cavity Assembly Lines",
        role: "Project Lead · National College Students' Innovation & Entrepreneurship Training Program",
        period: "Aug 2022 – Feb 2023",
        question:
          "How can mobile robots reliably monitor parts on an automated assembly line — and be commissioned virtually before deployment?",
        methods: [
          "Dual-posture picking device (patented)",
          "ROS control libraries",
          "Unity virtual scene & simulation",
          "TCP/IP server–client, WinForms integration",
        ],
        contribution: [
          "Led the project as host; designed the model structure and proposed a dual-posture picking device for cross-scenario adaptability (patent filed)",
          "Performed finite-element analysis on the robot chassis to confirm feasibility",
          "Embedded models into Unity to build the virtual scene and simulate the environment",
          "Established SSH and ROS control links; connected server and client over TCP/IP and integrated everything into WinForms software",
        ],
        outcomes:
          "A full hardware + software + digital-twin monitoring system, one filed patent, and national-level program completion.",
        skills: ["ROS", "Unity", "TCP/IP", "FEA", "Project Leadership"],
        images: [
          { src: "mobile-manipulator.webp", caption: "Mobile manipulator: 4-wheel chassis, articulated arm, and multi-probe end-effector." },
          { src: "motor-monitor-gui.webp", caption: "Monitoring software GUI: login page and real-time telemetry of eight motors." },
          { src: "digital-twin-network.webp", caption: "System architecture: TCP/IP connection between the physical robot, server, and digital twin." },
          { src: "unity-simulation.webp", caption: "Unity virtual commissioning scene with planned navigation waypoints." },
        ],
        links: [{ label: "See patent details", url: "publications.html#patents" }],
        why: "My first experience as a project lead — and the Unity + physical-robot loop was my introduction to simulating systems before putting humans near them.",
      },
    ],
  },

  {
    id: "modeling",
    title: "Competitions & Mathematical Modeling",
    blurb:
      "Four award-winning modeling cycles: build, validate, write, defend — under deadline.",
    projects: [
      {
        id: "mcm-ggdp",
        featured: false,
        kicker: "MCM/ICM · Honorable Mention",
        title: "Green GDP (GGDP) Model — Energy-Intensity Factors",
        role: "Team Leader · Mathematical Contest in Modeling",
        period: "Feb 2023",
        question:
          "How does GDP growth relate to energy use and emissions, and can a green-GDP indicator be built from multi-factor data?",
        methods: ["Data mining", "Multi-factor analysis", "MATLAB curve fitting"],
        contribution: [
          "Built the GGDP model from energy-intensity factors; responsible for data mining and factor-relationship analysis in MATLAB",
        ],
        outcomes: "Honorable Mention, MCM/ICM 2023.",
        skills: ["MATLAB", "Regression", "Data Mining"],
        images: [{ src: "ggdp-modeling.webp", caption: "GGDP modeling workflow with CO₂–GDP curve fitting and GGDP–N₂O regression." }],
        links: [],
        why: "",
      },
      {
        id: "national-geometry",
        featured: false,
        kicker: "Guangdong · 2nd Prize",
        title: "Geometric-Feature Positioning for Spatial-Structure Scheduling",
        role: "Team Leader · CUMCM (National Contest, Guangdong)",
        period: "Sep 2022",
        question:
          "How can circular geometry and angle constraints position agents within a spatial scheduling structure?",
        methods: ["Geometric modeling", "Simulation", "Paper writing"],
        contribution: [
          "Established the positioning model based on geometric-feature analysis; simulated structure scheduling and wrote the competition paper",
        ],
        outcomes: "Second Prize, National Contest, Guangdong Division 2022.",
        skills: ["Geometry", "Simulation", "Academic Writing"],
        images: [{ src: "geometric-positioning.webp", caption: "Circular positioning geometry with Model I (non-inclusive) and Model II (inclusive) cases." }],
        links: [],
        why: "",
      },
      {
        id: "forecasting",
        featured: false,
        kicker: "May 1 · 2nd Prize",
        title: "Purchasing-Strategy & Demand-Forecasting Models",
        role: "Team Leader · May 1 Contest / DingTalk Big-Data Challenge",
        period: "May – Jul 2022",
        question:
          "How should a purchasing strategy be planned when demand must be forecast from noisy time series?",
        methods: ["ARIMA time-series", "Lingo multi-objective planning", "Excel & MATLAB"],
        contribution: [
          "May 1 Contest: built the purchasing-strategy model, wrote Lingo code for requirements planning, and set up an ARIMA demand forecast",
          "DingTalk Challenge: built a flight-delay prediction model with large-sample fitting and time-series analysis",
        ],
        outcomes: "Second Prize, May 1 Contest 2022; provincial award, DingTalk Challenge 2022.",
        skills: ["ARIMA", "Lingo", "Time Series"],
        images: [{ src: "timeseries-forecast.webp", caption: "Differenced series, Q-Q normality plot, and ARIMA forecast curve with predictions highlighted." }],
        links: [],
        why: "",
      },
      {
        id: "internet-plus",
        featured: false,
        kicker: "Internet+ · National Silver",
        title: "Fangke Energy — Biomass Thermal-Energy Systems",
        role: "Team Member, Simulation & Field Research",
        period: "May – Nov 2022",
        question:
          "How can simulation and field investigation de-risk a biomass-energy factory project before execution?",
        methods: ["Unity & SolidWorks simulation", "Field investigation", "Project evaluation"],
        contribution: [
          "Ran Unity and SolidWorks scenario simulations to identify execution risks early",
          "Conducted on-site investigation, assessed operations, and evaluated project delivery against performance standards",
        ],
        outcomes: "National Silver Award, 8th China International College Students' 'Internet+' Competition (2023); Guangdong Silver (2022).",
        skills: ["SolidWorks", "Unity", "Risk Analysis"],
        images: [],
        links: [],
        why: "",
      },
    ],
  },

  {
    id: "campus",
    title: "Campus & Community",
    blurb: "Leadership, communication, and service — the human-facing half of a researcher.",
    compact: [
      {
        title: "ASUS Campus Partner",
        org: "New media operations & event planning",
        text: "Managed new-media platforms and video editing; planned and participated in an urban training camp; trained in enterprise project organization and professional communication.",
      },
      {
        title: "College Debate Team Member",
        org: "Argumentation & critical thinking",
        text: "Competed in university debate competitions, building skills in critical thinking, logical reasoning, and defending ideas under pressure.",
      },
      {
        title: "AutoGo Laboratory Member",
        org: "Undergraduate research lab",
        text: "Developed proficiency in C++, C#, Python, and Linux-based ROS; produced and optimized 50+ engineering drawings supporting graduate students on the National Superconducting Cavity Production Line project.",
      },
      {
        title: "Social Practice & Volunteering",
        org: "Field research & public service (200+ volunteer hours)",
        text: "Smart-Agriculture field investigations in Qingyuan and Dongguan; revolutionary-heritage site research with VR-based filming; COVID-19 response volunteer in Puning, honored as 'Outstanding Epidemic Prevention Volunteer'.",
      },
    ],
  },
];

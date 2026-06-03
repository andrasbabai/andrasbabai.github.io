import vidaViva from "./assets/project-vida-viva.svg";
import autoHighlights from "./assets/project-autohighlights.svg";
import lanMessaging from "./assets/project-lan.svg";
import lockText from "./assets/project-locktext.svg";
import conhacks from "./assets/project-conhacks.svg";
import librarySystem from "./assets/project-library.svg";

export const profile = {
  name: "András Babai",
  shortName: "András Babai",
  role: "Electrical Engineering Student",
  location: "Hungary",
  email: "babai.andras.istvan@edu.bme.hu",
  github: " https://github.com/andrasbabai",
  linkedin: " https://linkedin.com/in/andrasistvanbabai",
  tagline:
    "Electrical engineering student.",
  summaryShort:
    "I'm an electrical engineering student based in Hungary.",
  summaryLong:
    "I'm an electrical engineering student from Hungary"
};

export const skills = {
  languages: ["Python", "C", "C#", "SQL", "HTML/CSS"],
  frameworks: [
    ".NET Core",
    "Django",
    "NumPy",
    "Pandas",
    "PyTorch",
    "Kivy",
    "SQLAlchemy"
  ],
  tools: [
    "Docker",
    "Kubernetes",
    "AWS",
    "Git",
    "CI/CD pipelines",
    "SQL Server",
    "MongoDB",
    "Firebase",
    "Linux"
  ],
  interests: [
    "Backend development",
    "Python development",
    "Cybersecurity",
    "Artificial intelligence",
    "Ethical hacking"
  ]
}; 

export const timeline = [
  {
    title: "A Dynamic Model of the Central European Power Grid",
    link: "",
    link_read: "/pdf/A_Dynamic_Model_of_the_Central_European_Power_Grid_2026.pdf",
    org: "BME",
    location: "Budapest, Hungary",
    period: "2026",
    description:
      "Project Laboratory outcome, research supervised by Dr. Csaba Farkas.",
    type: "project"
  },

  {
    title: "Implementation of Synthetic Inertia Emulation in the WECC Generic Model for Large-Scale PV Plants",
    link: "",
    link_read: "/pdf/PECI_2026_final_01.pdf",
    org: "BME",
    location: "Budapest, Hungary",
    period: "2026",
    description:
      "Accepted for publication (not yet published). Research supervised by Dr. Csaba Farkas.",
    type: "paper"
  },
    {
    title: "Investigations on the rate of change of frequency",
    link: "https://diplomaterv.vik.bme.hu/hu/Theses/A-frekvenciavaltozas-meredeksegere-vett1",
    link_read: "/pdf/Andras_Babai_Thesis_BSc_energy_engineering.pdf",
    org: "BME",
    location: "Budapest, Hungary",
    period: "2025",
    description:
      "Undergraduate thesis on frequency variation during system failures.",
    type: "thesis"
  },
  {
    title: "The Effect of Inertia on Frequency Variation During System Failures",
    link: "https://tdk.bme.hu/conference/VIK/2025/sessions/energ/paper/Az-inercia-hatasa-a-frekvenciavaltozasra",
    link_read: "/pdf/Az_inercia_hatasa_a_frekvenciavaltozasra_rendszerbomlasok_eseten.pdf",
    org: "BME",
    location: "Budapest, Hungary",
    period: "2025",
    description:
      "2nd place at the Scientific Students' Associations Conference (TDK), Faculty of Electrical Engineering and Informatics.",
    type: "TDK"
  },
  {
    title: "Inductive Effects in the Railway Environment",
    link: "https://tdk.bme.hu/conference/VIK/2024/sessions/energ/paper/Indukalohatas-vasuti-kornyezetben-elmelet-es",
    link_read: "/pdf/Indukalohatas-vasuti-kornyezetben-elmelet-es-gyakorlat.pdf",
    org: "BME",
    location: "Budapest, Hungary",
    period: "2024 – 2025",
    description:
      "1st place at TDK (2024), 1st place at OTDK (2025), and Special Award from the Hungarian Chamber of Engineers – Energy Section. Research supervised by Dr. József Ladányi.",
    type: "TDK"
  },
  {
    title: "Evaluation of Steel Tape Armour and Copper Screening in Railway Signaling Cables",
    link: "https://ieeexplore.ieee.org/document/11155056/",
    link_read: "/pdf/Evaluation_of_steel_tape_armour_and_copper_screening_in_railway_signaling_cables_impact_on_screening_factor.pdf",
    org: "BME",
    location: "Budapest, Hungary",
    period: "2025",
    description:
      "IEEE conference publication based on research in railway cable screening.",
    type: "paper"
  },
  {
    title: "The Effect of the Relative Permeability of Steel Armour on the Inner Screening Factor",
    link: "https://ieeexplore.ieee.org/document/11155012/",
    link_read: "/pdf/The_Effect_of_the_Relative_Permeability_of_Steel_Armour_on_the_Inner_Screening_Factor.pdf",
    org: "BME",
    location: "Budapest, Hungary",
    period: "2025",
    description:
      "IEEE conference publication analyzing the impact of material properties on screening effectiveness.",
    type: "paper"
  },
];

export const projects = [
  {
    name: "Sistema VidaViva",
    description:
      "Desktop platform for patient, supplementation, and materials registration. Built for offline resilience and fast daily operations.",
    stack: ["Python", "Kivy", "Local storage"],
    link: "https://github.com/Pichara/Sistema-VidaViva",
    image: vidaViva
  },
  {
    name: "AutoHighlights",
    description:
      "Automated Twitch highlights pipeline that detects hype spikes, records clips, and streamlines review and upload.",
    stack: ["Python", "Playwright", "Selenium", "MoviePy"],
    link: "https://github.com/Pichara/AutoHighlights",
    image: autoHighlights
  },
  {
    name: "OOP-Project (LAN Messaging)",
    description:
      "LAN-based messaging system demonstrating TCP/IP communication with a WPF desktop UI.",
    stack: ["C#", "WPF", "TCP/IP"],
    link: "https://github.com/Pichara/OOP-Project",
    image: lanMessaging
  },
  {
    name: "LockText",
    description:
      "Caesar cipher utility with encrypt, decrypt, and brute-force capabilities in a Kivy UI.",
    stack: ["Python", "Kivy"],
    link: "https://github.com/Pichara/LockText",
    image: lockText
  },
  {
    name: "Library System",
    description:
      "Data structures project implementing a library management system with linked lists, hash tables, and BSTs.",
    stack: ["C", "Data Structures"],
    link: "https://github.com/Pichara",
    image: librarySystem
  },
  {
    name: "ConHacks 2025 – AI Lab Report Analyzer",
    description:
      "Hackathon web app that analyzes lab report images and delivers structured HTML insights with OCR + AI.",
    stack: ["C#", "Blazor", "OpenAI"],
    link: "https://github.com/Pichara/ConHacks-2025",
    image: conhacks
  }
];

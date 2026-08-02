import attendance from "../assets/images/attendance.png";
import clinic from "../assets/images/clinic.png";
import subtitle from "../assets/images/subtitle.png";

const projects = [
  {
    id: 1,
    title: "Smart Attendance Guard",

    image: attendance,

    description:
      "Developed a secure attendance management system using Dynamic QR Codes and Geofencing to eliminate proxy attendance. Implemented role-based authentication, real-time attendance monitoring, QR verification, and analytics dashboards.",

    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "SQLite",
      "JWT",
      "QR Code",
      "Geolocation API",
    ],

    github: "#",

    demo: "#",

    paper: "#",
  },

  {
    id: 2,

    title: "Clinic Management System",

    image: clinic,

    description:
      "Built a clinic management application with Python and MySQL for managing patients, doctors, appointments, billing, and medical records using stored procedures and triggers.",

    technologies: [
      "Python",
      "MySQL",
      "SQL",
      "Stored Procedures",
      "Triggers",
    ],

    github: "#",

    demo: "#",
  },

  {
    id: 3,

    title: "AI Subtitle Generator",

    image: subtitle,

    description:
      "Developed an AI-powered subtitle generator using OpenAI Whisper with multilingual subtitle translation and subtitle embedding using FFmpeg and MoviePy.",

    technologies: [
      "Python",
      "Streamlit",
      "OpenAI Whisper",
      "MoviePy",
      "FFmpeg",
      "Google Translate API",
    ],

    github: "#",

    demo: "#",
  },
];

export default projects;
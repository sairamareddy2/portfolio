import attendance from "../assets/images/attendance.png";
import manuscript from "../assets/research/manuscript.pdf";

const projects = [
  {
    id: 1,
    title: "Smart Attendance Guard",

    image: attendance,

    description:
      "Developed a secure attendance management system using Dynamic QR Codes and Geofencing to eliminate proxy attendance. Implemented role-based authentication, real-time attendance monitoring, automatic QR verification, and attendance analytics.",

    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "SQLite",
      "JWT",
      "QR Code",
      "Geolocation API",
    ],

    github: "https://github.com/sairamareddy2/Smart-Attendance-Guard",
    paper: manuscript,
  },

  {
    id: 2,

    title: "Clinic Management System",

    image: null,

    description:
      "Developed a clinic management application with Python and MySQL to manage patients, doctors, appointments, billing, and medical records using stored procedures and triggers.",

    technologies: [
      "Python",
      "MySQL",
      "SQL",
      "Stored Procedures",
      "Triggers",
    ],

    github: "https://github.com/sairamareddy2/Clinic-Management-System",
  },

  {
    id: 3,

    title: "AI Subtitle Generator",

    image: null,

    description:
      "Created an AI-powered subtitle generator using OpenAI Whisper with multilingual subtitle translation and subtitle embedding using FFmpeg and MoviePy through Streamlit.",

    technologies: [
      "Python",
      "Streamlit",
      "OpenAI Whisper",
      "MoviePy",
      "FFmpeg",
      "Google Translate API",
    ],

    github: "https://github.com/sairamareddy2/AI_SUBTITLE_GENERATOR",
  },
];

export default projects;
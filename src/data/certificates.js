import agentic from "../assets/certificates/agentic-ai.pdf";
import deloitte from "../assets/certificates/deloitte.pdf";
import iot from "../assets/certificates/iot.pdf";
import datacom from "../assets/certificates/datacom.pdf";

const certificates = [
  {
    id: 1,
    title: "Industry Based Training Program on Agentic AI and LLMs",
    issuer: "Training Program",
    year: "2025",
    category: "Artificial Intelligence",
    link: agentic,
  },
  {
    id: 2,
    title: "Deloitte Data Analytics Job Simulation",
    issuer: "Deloitte",
    year: "2025",
    category: "Data Analytics",
    link: deloitte,
  },
  {
    id: 3,
    title: "NPTEL - Introduction to IoT (Elite Silver)",
    issuer: "NPTEL",
    year: "2025",
    category: "NPTEL",
    link: iot,
  },
  {
    id: 4,
    title: "Partnering with AI in the Workplace Job Simulation",
    issuer: "Forage",
    year: "2026",
    category: "Forage",
    link: datacom,
  },
];

export default certificates;
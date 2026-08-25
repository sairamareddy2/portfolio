import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certificates from "./components/Certificates";
import Stats from "./components/Stats";
import BackToTop from "./components/BackToTop";
import CursorGlow from "./components/CursorGlow";
import InteractiveRobot from "./components/InteractiveRobot";
import FloatingAssistant from "./components/FloatingAssistant";

function App() {
  return (
    <>
      <CursorGlow />

      <Navbar />

      <InteractiveRobot />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />

      <FloatingAssistant />
    </>
  );
}

export default App;
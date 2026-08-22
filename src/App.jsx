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

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-white">

      {/* Custom glowing cursor */}
      <CursorGlow />

      {/* Interactive 3D AI Dashboard */}
      <InteractiveRobot />

      {/* Navigation */}
      <Navbar />

      {/* Portfolio Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Stats />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      {/* Back to Top */}
      <BackToTop />

    </div>
  );
}

export default App;
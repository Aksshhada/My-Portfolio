import Navbar from "./components/navbar";
import Particle from "./components/particle";
import Home from "./components/pages/home";
import Aboutme from "./components/pages/aboutme";
import Projects from "./components/pages/projects";
import Contact from "./components/pages/contact";

function App() {
  return (
    <>
      <Navbar />
      <Particle />
      <div className="container">
        {/* Create sections with IDs corresponding to the navbar links */}
        <section id="home">
          <Home />
        </section>
        <section id="aboutme">
          <Aboutme />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;

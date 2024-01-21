import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/pages/home";
import Aboutme from "./components/pages/aboutme";
import Projects from "./components/pages/projects"
import Contact from "./components/pages/contact";
import { Route, Routes } from "react-router-dom";
import Particle from './components/particle';

function App() {
  return (
    <>
      <Navbar />
      <Particle />
      <div className="container">
      {/* <ParticleBackground /> */}
        <Routes>
          <Route path="/home" element = {<Home />} />
          <Route path="/aboutme" element = {<Aboutme />} />
          <Route path="/projects" element = {<Projects />} />
          <Route path="/contact" element = {<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App;

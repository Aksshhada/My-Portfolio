import React, { useEffect } from "react";
import { Gi3dGlasses } from "react-icons/gi";
import "./aboutme.css";

const AboutMe = () => {
  useEffect(() => {
    const aboutDivs = document.querySelectorAll(".about_div");
    const aboutMe = document.querySelector(".AboutMe");


    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.5 } 
    );

    aboutDivs.forEach((div) => observer.observe(div));
    if (aboutMe) observer.observe(aboutMe);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="aboutstyle">
      <div className="about_boxes">
        <h3 className="about_h2">ABOUT ME</h3>

        <div className="AboutMe">
          <p className="AboutMe2">
            I am a final-year Engineering Student from NBNSTIC Pune. I am
            interested in fullstack web development, AI/ML, and Blockchain
            technologies.
          </p>
        </div>

        <div className="about_div">
          <h3>Frontend Developer</h3>
          <p>
            I am a frontend developer with one year of experience, dedicated to
            building user-friendly interfaces.
          </p>
        </div>

        <div className="about_div">
          <h3>Backend Developer</h3>
          <p>
            As a beginner backend developer, I am enthusiastic about building
            robust server-side applications.
          </p>
        </div>

        <div className="glasses">
          <Gi3dGlasses style={{ fontSize: "100px", color: "FF4545" }} />
        </div>

        <div className="about_div">
          <h3>UI Designer</h3>
          <p>
            I am a UI designer with a year of experience creating visually
            appealing and user-friendly designs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
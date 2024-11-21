// import React from "react";
// import "./aboutme.css";

// const aboutme = () => {
//   return (
//     <section className="aboutstyle">
//       <h3 className="about_h2">ABOUT ME</h3>

//       <div className="AboutMe">
//         <p className="AboutMe2">
//         I am final year Engineering Student from NBNSTIC Pune.
//         I am interested in fullstack web development, AI/ML, Blockchain technologies.
//         </p>
//       </div>

//       <div className="about_div">
//         <h3>Frontend Developer</h3>
//         <p className="about_h3">
//           I am a frontend developer with one year of experience. Proficient in
//           HTML, CSS, and JavaScript, I specialize in crafting dynamic and
//           visually appealing user interfaces. My expertise extends to leveraging
//           the React library to build scalable and efficient web applications.
//         </p>
//       </div>

//       <div className="about_div">
//         <h3 className="about_h3">Backend Developer</h3>
//         <p className="about_h3">
//           As a beginner backend developer, I am enthusiastic about building
//           robust and efficient server-side applications. My primary technology
//           stack revolves around Node.js, a powerful and versatile runtime that
//           enables JavaScript to be used for server-side development.
//         </p>
//       </div>

//       <div className="about_div">
//         <h3 className="about_h3">UI Designer</h3>
//         <p className="about_h3">
//           I am a UI designer with a year of experience in the field. Proficient
//           in leveraging design tools such as Figma and Canva.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default aboutme;






import React, { useEffect } from "react";
import "./aboutme.css";

const AboutMe = () => {
  useEffect(() => {
    // Select all about_div and AboutMe elements
    const aboutDivs = document.querySelectorAll('.about_div');
    const aboutMe = document.querySelectorAll('.AboutMe');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Add 'visible' class when the section is in view
        }
      });
    }, {
      threshold: 0.5, // Trigger when 50% of the element is in view
    });

    // Observe both .about_div and .AboutMe elements
    aboutDivs.forEach(div => observer.observe(div));
    aboutMe.forEach(div => observer.observe(div));
  }, []);

  return (
    <section className="aboutstyle">
      <h3 className="about_h2">ABOUT ME</h3>

      <div className="AboutMe">
        <p className="AboutMe2">
          I am final year Engineering Student from NBNSTIC Pune. I am interested in fullstack web development, AI/ML, Blockchain technologies.
        </p>
      </div>
      <div className="about_boxes">
      <div className="about_div">
        <h3>Frontend Developer</h3>
        <p className="about_h3">
          I am a frontend developer with one year of experience...
        </p>
      </div>

      <div className="about_div">
        <h3 className="about_h3">Backend Developer</h3>
        <p className="about_h3">
          As a beginner backend developer, I am enthusiastic...
        </p>
      </div>
      </div>



      <div className="about_div">
        <h3 className="about_h3">UI Designer</h3>
        <p className="about_h3">
          I am a UI designer with a year of experience...
        </p>
      </div>
    </section>
  );
};

export default AboutMe;

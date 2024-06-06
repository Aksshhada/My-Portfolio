// import React from 'react';
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import './home.css';

// const Home = () => {
//   return (
//     <section id='home' className='home'>
//       <div id='particles-js'></div> 
//       <div className='content'>
//         <div className='home'>
//           <h1>
//             Hello! I'm Akshada Kadam.
//             I am a Fullstack Web Developer.
//             Cybersecurity enthusiasts.
//           </h1>
//         </div>

//         <div className='icons'>
//           <ul>
//             <li>
//               <a href='https://github.com/Aksshhada'>
//                 <FaGithub />
//               </a>
//             </li>

//             <li>
//               <a href='https://www.linkedin.com/in/akshada-kadam-4375b6254/'>
//                 <FaLinkedin />
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Home;











import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import './home.css';

const Home = () => {
  useEffect(() => {
    const sentences = document.querySelectorAll('.sentence');
    sentences.forEach((sentence, index) => {
      setTimeout(() => {
        sentence.classList.add('visible');
      }, index * 1500); // Adjust the timing as needed
    });
  }, []);

  return (
    <section id='home' className='home'>
      <div id='particles-js'></div>
      <div className='content'>
        <div className='home-text'>
          <h1>
            <span className='sentence'>Hello!</span>
            <span className='sentence'>I'm Akshada Kadam.</span>
            <span className='sentence'>I am a Fullstack Web Developer.</span>
            <span className='sentence'>Cybersecurity Enthusiast.</span>
          </h1>
        </div>
        <div className='icons'>
          <ul>
            <li>
              <a href='https://github.com/Aksshhada'>
                <FaGithub />
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/akshada-kadam-4375b6254/'>
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Home;

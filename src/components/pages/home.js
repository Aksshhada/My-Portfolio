import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import './home.css';

const Home = () => {
  return (
    <section id='home' className='home'>
      <div id='particles-js'></div> 
      <div className='content'>
        <div className='home'>
          <h1>
            Hello! I'm Akshada Kadam
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

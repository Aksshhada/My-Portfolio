import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";
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
          
            <span className='sentence2'><h1>Akshada Kadam</h1></span>
            <span className='sentence'><h3>Hi !</h3></span>
            <span className='sentence'><h3>I am a Fullstack Web Developer.</h3></span>
            <span className='sentence'><h3>Cybersecurity Enthusiast.</h3></span>
          
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
          <div className='downArrow'>
            <ul>
              <li><GoChevronDown />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
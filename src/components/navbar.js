// import React from 'react'
// import { Link } from 'react-router-dom'

// const navbar = () => {
//   return (
//     <>
//     <nav className='nav'>
//         <div className='menu-link'>
//             <ul>
//                 <li>
//                     <Link to='home'>HOME</Link>
//                 </li>
//                 <li>
//                     <Link to='aboutme'>ABOUT ME</Link>
//                 </li>
//                 <li>
//                     <Link to='projects'>PROJECTS</Link>
//                 </li>
//                 <li>
//                     <Link to='contact'>CONNECT</Link>
//                 </li>
//             </ul>
//         </div>
//     </nav>
//     </>
//   )
// }

// export default navbar






import React from 'react';

const navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="nav">
      <div className="menu-link">
        <ul>
          <li onClick={() => scrollToSection('home')}>HOME</li>
          <li onClick={() => scrollToSection('aboutme')}>ABOUT ME</li>
          <li onClick={() => scrollToSection('projects')}>PROJECTS</li>
          <li onClick={() => scrollToSection('contact')}>CONNECT</li>
        </ul>
      </div>
    </nav>
  );
};

export default navbar;
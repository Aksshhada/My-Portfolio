import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <>
    <nav className='nav'>
        <div className='menu-link'>
            <ul>
                <li>
                    <Link to='home'>HOME</Link>
                </li>
                <li>
                    <Link to='aboutme'>ABOUT ME</Link>
                </li>
                <li>
                    <Link to='projects'>PROJECTS</Link>
                </li>
                <li>
                    <Link to='contact'>CONTACT</Link>
                </li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default navbar
import React from 'react'
import { NavLink } from 'react-router-dom'
import { github, linkedinlogo, twitter } from '../assets/icons'

const NavBar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className="blue-gradient_text">MC</p>
        </NavLink>
        <nav className='flex text-lg gap-4 items-center font-medium'>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                About
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                Projects
            </NavLink>
            <NavLink to="https://github.com/matecauci15">
                <img className='w-7 h-8' src={github} alt="Github" />
            </NavLink>
            <NavLink to="https://www.linkedin.com/in/mateo-caucino/">
                <img className='w-8 h-8' src={linkedinlogo} alt="LinkedIn" />
            </NavLink>
            <NavLink to="https://twitter.com/mateocaucino">
                <img className='w-8 h-8' src={twitter} alt="Twitte" />
            </NavLink>
        </nav>
    </header>
  )
}

export default NavBar
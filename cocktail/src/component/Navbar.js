import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
function Navbar() {
  return (
    <div className='navbar'>
      <Link to='/'>
        <img src={logo} alt='logo' className='logo' />
      </Link>
      <div className='nav-links'>
        <Link to='/' className='link'>
          Home
        </Link>
        <Link to='/about' className='link'>
          About
        </Link>
      </div>
    </div>
  )
}

export default Navbar

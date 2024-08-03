import React from 'react'
import './Navbar.css';
function Navbar() {
  return (
    <div>
      <nav className='navbar'>
        <div className='logo'>
            Food Hub
        </div>
        <ul>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#food'>Foods</a></li>
            <li><a href='#contact'>Contact</a></li>

        </ul>
      </nav>
    </div>
  )
}

export default Navbar

import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>

      <nav>
        <div className='div1'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/About'>About</NavLink>
          <NavLink to='/Scholarship'>Scholarship</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </div>
        <div className='nav-btn-end'>

          <button type='Login' className='sing'>sing up</button>
          <button type='Login' className='Log'>Log in</button>
        </div>
      </nav>
    </>

  )
}

export default Navbar
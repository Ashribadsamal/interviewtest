import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'

function Nav() {
    return (
        <div className="mt-3">
        <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' >
            TRVL
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' >
            <i className='fas fa-times' />
          </div>
          <ul className= 'nav-menu active' >
            <li className='nav-item'>
              <Link to='/' className='nav-links' >
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                
              >
                Sign Up
              </Link>
            </li>
          </ul>
          
        </div>
      </nav>
        </div>
    )
}

export default Nav

import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className='navbar1'>
                <div className='navbar1-container'>
                <Link to="/"  className='navbar-logo'>
                    envatomarket
                </Link>
                <button className="btn btn-primary" buttonStyle='btn--outline'>SIGN UP</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar

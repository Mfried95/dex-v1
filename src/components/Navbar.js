import React from 'react'
import "../styles/navbar.css"
import { Link } from 'react-router-dom'



function Navbar() {
  return (
    <div className='navbar'>
        <h1>Crypto Dex</h1>
        <div className="nav-links">
            <Link to="/">Home</Link>  
            <Link to="/Coins">Cryptocurencies</Link>
            <Link to="/News">News</Link>
        </div>
        
    </div>
  )
}


export default Navbar
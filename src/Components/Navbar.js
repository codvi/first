import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <header id="header" className="d-flex flex-column justify-content-center">

    <nav id="navbar" className="navbar nav-menu">
      <ul>
        <li><Link to={"/Home"}className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></Link></li>
        <li><Link to={"/About"} className="nav-link scrollto active"><i className="bx bx-home"></i> <span>About</span></Link></li>
        <li><Link to={"/Resume"} className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></Link></li>
        <li><Link to={"/Portfolio"} className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></Link></li>
        <li><Link to={"/Services"} className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></Link></li>
        <li><Link to={"/Contact"} className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></Link></li>
        </ul>
    </nav>

  </header>
  </>
  )
}

export default Navbar
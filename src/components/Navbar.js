import React from "react";
import Link from "gatsby-link";
import {FaAlignJustify} from 'react-icons/fa'

const Navlayout = class extends React.Component {

  componentDidMount(){
    function classToggle() {
      const navs = document.querySelectorAll('.Navbar__Items')
      
      navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
    }
    document.querySelector('.Navbar__Link-toggle')
    .addEventListener('click', classToggle);
  }

 render() {
   return (
  
  <div className="Navbar fixed-top">
    <div className="Navbar__Link Navbar__Link-brand">
      <Link className="navbar-brand" to="/"  activeStyle={{ color: "black" }} title="bettinah">
          BETTINAH TIANAH
      </Link>
    </div>
    <div
      className={`Navbar__Link Navbar__Link-toggle`} 
    >
      <FaAlignJustify  />
    </div>
    <nav
      id="navMenu"
      className={`Navbar__Items Navbar__Items--right `}
    >
      <div className="Navbar__Link">
        <Link className="nav-link navigation__navlinks"  onClick={this.closeNavbar}  activeStyle={{ color: "black" }}  to="/about">
          ABOUT ME
        </Link>
      </div>
      <div className="Navbar__Link">
        <Link className="nav-link navigation__navlinks"  onClick={this.closeNavbar}  activeStyle={{ color: "black" }} to="/contact">
          CONTACT
        </Link>
      </div>
      <div className="Navbar__Link">
        <Link className="nav-link navigation__navlinks"  onClick={this.closeNavbar} activeStyle={{ color: "black" }} to="/portfolio">
          PORTFOLIO
        </Link>
      </div>
      <div className="Navbar__Link">
        <Link className="nav-link navigation__navlinks"  onClick={this.closeNavbar} activeStyle={{ color: "black" }} to="/blog">
          BLOGS
        </Link>
      </div>
      <div className="Navbar__Link">
        <Link className="nav-link navigation__navlinks"  onClick={this.closeNavbar}  activeStyle={{ color: "black" }} to="/news">
          BETTINAHTIANAH NEWS
        </Link>
      </div>
    </nav>
  </div>
  )}
}

export default Navlayout

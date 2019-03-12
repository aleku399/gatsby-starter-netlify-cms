import React from "react";
import Link from "gatsby-link";

const Navlayout = class extends React.Component {
  constructor(props) {
    super(props);
  }

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
      data-target="navMenu" 
    >
       <i className="fas fa-bars"></i>
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
        <Link className="nav-link navigation__navlinks"  onClick={this.closeNavbar}  activeStyle={{ color: "black" }} to="/news">
          BETTINAHTIANAH NEWS
        </Link>
      </div>
    </nav>
  </div>
  )}
}

export default Navlayout

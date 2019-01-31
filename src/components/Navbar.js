import React from 'react'
import { Link } from 'gatsby'

const Navbar = class extends React.Component {

//   componentDidMount() {
//     // Get all "navbar-burger" elements
//    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-toggler'), 0);
//     // Check if there are any navbar burgers
//    if ($navbarBurgers.length > 0) {
 
//      // Add a click event on each of them
//      $navbarBurgers.forEach( el => {
//        el.addEventListener('click', () => {
 
//          // Get the target from the "data-target" attribute
//          const target = el.dataset.target;
//          const $target = document.getElementById(target);
//           console.log(target)
//          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
//          el.classList.toggle('is-active');
//          $target.classList.toggle('is-active');
 
//        });
//      });
//    }
//  }
 
 render() {
   return (
  
  <nav className="navbar navbar-expand-md navbar-white fixed-top bg-white" role="navigation" >
          <Link className="navbar-brand" to="/" title="bettinah">
              BETTINAH TIANAH
          </Link>
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#myNavbar" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
      <div id="myNavbar" className="collapse navbar-collapse flex-grow-1 text-left">
        <ul className="navbar-nav ml-auto flex-nowrap">
          <li className="navbar-item">
            <Link  className="nav-link m-2 menu-item nav-active"  to="/about">
                ABOUT ME
            </Link>
          </li>
          <li className="navbar-item">
            <Link  className="nav-link m-2 menu-item" to="/contact">
                CONTACT
              </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link m-2 menu-item" to="/portfolio">
                PORTFOLIO
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link m-2 menu-item" to="/news">
                BETTINAHTIANAH NEWS
            </Link>
          </li>
        </ul>
      </div>
  </nav>
  )}
}

export default Navbar
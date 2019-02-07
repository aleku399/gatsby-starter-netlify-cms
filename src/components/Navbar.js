import React from "react";
import Link from "gatsby-link";
import {
Collapse,
Container,
Navbar,
NavbarBrand,
NavbarToggler,
Nav,
NavItem
} from "reactstrap";

const Navlayout = class extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.closeNavbar = this.closeNavbar.bind(this);
    this.state = {
    collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
    collapsed: !this.state.collapsed
    });
  }

  closeNavbar() {
    if (this.state.collapsed !== true) {
    this.toggleNavbar();
    }
  }

 render() {
   return (
  
  <Navbar  className="navigation__navbar" color="white" expand="md" sticky="top">
    <NavbarBrand>
      <Link className="navbar-brand" to="/" activeClassName="active" title="bettinah">
          BETTINAH TIANAH
      </Link>
    </NavbarBrand>
    <NavbarToggler onClick={this.toggleNavbar} />
    <Collapse isOpen={!this.state.collapsed} navbar>
      <Nav className="ml-auto" navbar>
          <NavItem>
            <Link className="nav-link navigation__navlinks"  onClick={this.closeNavbar} activeClassName="active"  to="/about">
                ABOUT ME
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link navigation__navlinks"  onClick={this.closeNavbar}  activeClassName="active" to="/contact">
                CONTACT
              </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link navigation__navlinks"  onClick={this.closeNavbar}  activeClassName="active" to="/portfolio">
                PORTFOLIO
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link navigation__navlinks"  onClick={this.closeNavbar}  activeClassName="active" to="/news">
                BETTINAHTIANAH NEWS
            </Link>
          </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
  )}
}

export default Navlayout
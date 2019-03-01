import React, { Component } from "react";
import { MDBContainer, MDBNav, MDBTabPane, MDBTabContent, MDBNavItem, MDBNavLink } from "mdbreact";
import Creative from './Creative';
import Fashion from './Fashion';
import Travel from './Travel';
import Portraits from './Portraits';

class TabsPage extends Component {
state = {
  activeItemClassicTabs1: "1",
}

toggleClassicTabs1 = tab => () => {
  if (this.state.activeItemClassicTabs1 !== tab) {
  this.setState({
    activeItemClassicTabs1: tab
  });
  }
}

render() {
  return (
      <MDBContainer>
        <div className="classic-tabs">
          <MDBNav classicTabs color="cyan">
            <MDBNavItem>
              <MDBNavLink  className={this.state.activeItemClassicTabs1==="1" ? "active" : "" } onClick={this.toggleClassicTabs1("1")}>
                CREATIVE
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink  className={this.state.activeItemClassicTabs1==="2" ? "active" : "" } onClick={this.toggleClassicTabs1("2")}>
                FASHION
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink  className={this.state.activeItemClassicTabs1==="3" ? "active" : "" } onClick={this.toggleClassicTabs1("3")}>
                FASHION AND TRAVEL
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink  className={this.state.activeItemClassicTabs1==="4" ? "active" : "" } onClick={this.toggleClassicTabs1("4")}>
                PORTRAITS
              </MDBNavLink>
            </MDBNavItem>
          </MDBNav>
          <MDBTabContent className="card" activeItem={this.state.activeItemClassicTabs1}>
            <MDBTabPane tabId="1">
                <Creative />
            </MDBTabPane>
            <MDBTabPane tabId="2">
                <Fashion />
            </MDBTabPane>
            <MDBTabPane tabId="3">
                <Travel />
            </MDBTabPane>
            <MDBTabPane tabId="4">
                <Portraits />
            </MDBTabPane>
          </MDBTabContent>
        </div>
      </MDBContainer>
    );
  }
}

export default TabsPage;

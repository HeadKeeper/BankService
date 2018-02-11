import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

import Navbar from "react-bootstrap/lib/Navbar";
import Nav from "react-bootstrap/lib/Nav";
import NavItem from "react-bootstrap/lib/NavItem";

import { selectApplicationName } from "../../../modules/App";

class NavigationBarContainer extends Component {
  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" activestyle={{color: "#33e0ff"}}>
              <div/>
              <span>{this.props.appName}</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>

        <Navbar.Collapse eventkey={0}>
          <Nav navbar>
            <LinkContainer to="/home">
              <NavItem eventkey={1}>Home</NavItem>
            </LinkContainer>
            <LinkContainer to="/clients">
              <NavItem eventkey={2}>Clients</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export const Navigation = connect(
  (state) => ({
    appName  : selectApplicationName(state),
  }),
  (dispatch) => ({
    actions: bindActionCreators({
    }, dispatch)
  })
)(NavigationBarContainer);

import React, { Component } from "react";

import Navbar from "react-bootstrap/lib/Navbar";

class FooterContainer extends Component {
  render() {
    return (
      <Navbar fixedBottom>
        <p className="container text-center">Bank Service client app</p>
        <p className="container text-center">2018</p>
      </Navbar>
    );
  }
}

export const Footer = FooterContainer;

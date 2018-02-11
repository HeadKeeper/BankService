import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class HomeContainer extends Component {

  render() {
    return (
      <div className="container-fluid">
        <h4>
          <Link to={"/clients"}>Show all clients</Link>
        </h4>
        <h4>
          <Link to={"/clients/add"}>Create new one</Link>
        </h4>
      </div>
    );
  }
}


export const Home = connect()(HomeContainer);

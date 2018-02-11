import React, {Component} from "react";
import {connect} from "react-redux";

import {Home} from "../Home";

class AppContainer extends Component {
  render() {
    return (
      <div className="app container">
        <Home/>
      </div>
    );
  }
}

export const App = connect(
  (state) => ({})
)(AppContainer);

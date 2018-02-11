import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {Link} from "react-router-dom";

import {ClientAddComponent} from "../../components";

import {
  createClient
} from "../../modules/Client"

class EntityContainer extends Component {

  sendClient(data) {
    console.log(data);
    this.props.actions.createClient(data)
  }

  render() {
    return (
      <div className="container">
        <label>
          <Link to={"/"}>Back</Link>
        </label>

        <h3>New client</h3>

        <div className="text-center">
          <div className="row">
            <ClientAddComponent
              processSubmit={this.sendClient.bind(this)}
            />
          </div>
        </div>
      </div>
    )
  }
}

export const ClientAdd = connect(
  (state) => ({}),
  (dispatch) => ({
    actions: bindActionCreators({
      createClient
    }, dispatch)
  })
)(EntityContainer);

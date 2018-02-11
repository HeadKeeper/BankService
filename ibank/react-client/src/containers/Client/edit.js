import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {Link} from "react-router-dom";

import {ClientEditComponent} from "../../components";

import {
  selectClientData, updateClient, getClient, cleanClientWorkspace
} from "../../modules/Client"

class EntityContainer extends Component {

  componentWillMount() {
    this.props.actions.getClient(this.props.match.params.id)
  }

  componentWillUnmount() {
    this.props.actions.cleanClientWorkspace()
  }

  sendClient(data) {
    console.log(data);

    // this.props.actions.updateClient
  }

  render() {
    return (
      <div className="container">
        <label>
          <Link to={"/"}>Back</Link>
        </label>

        <h3>Edit client</h3>

        <div className="text-center">
          <div className="row">
            <ClientEditComponent
              processSubmit={this.sendClient.bind(this)}
              data={this.props.client}
            />
          </div>
        </div>
      </div>
    )
  }
}

export const ClientEdit = connect(
  (state) => ({
    client: selectClientData(state)
  }),
  (dispatch) => ({
    actions: bindActionCreators({
      getClient,
      cleanClientWorkspace,
      updateClient
    }, dispatch)
  })
)(EntityContainer);

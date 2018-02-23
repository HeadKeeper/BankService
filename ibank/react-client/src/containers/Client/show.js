import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {Link} from "react-router-dom";

import {navigateTo} from "../../modules/App/Navigator";
import { ClientShowComponent } from "../../components";

import {
  getClient,
  deleteClient,
  cleanClientWorkspace,
  selectClientData
} from "../../modules/Client"

class EntityContainer extends Component {

  componentWillMount() {
    this.props.actions.getClient(this.props.match.params.id)
  }

  componentWillUnmount() {
    this.props.actions.cleanClientWorkspace()
  }

  deleteClientAction() {
    this.props.actions.deleteClient(this.props.client.id);
    navigateTo("/clients/");
  }

  render() {
    return (
      <div className="container">
        <label>
          <Link to={"/"}>Back</Link>
        </label>
        <label>
          <Link to={"/clients/"+this.props.match.params.id+"/edit"}>Edit</Link>
        </label>
        <label>
          <button onClick={this.deleteClientAction.bind(this)}>Delete</button>
        </label>

        <h3>Client</h3>

        <div className="text-center">
          <div className="row">
            <ClientShowComponent
              entity={this.props.client}
            />
          </div>
        </div>
      </div>
    )
  }
}

export const ClientShow = connect(
  (state) => ({
    client: selectClientData(state)
  }),
  (dispatch) => ({
    actions: bindActionCreators({
      getClient,
      deleteClient,
      cleanClientWorkspace
    }, dispatch)
  })
)(EntityContainer);

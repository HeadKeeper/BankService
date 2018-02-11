import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {Link} from "react-router-dom";

import { ClientsComponent } from "../../components";

import {
  getClients,
  selectClientsData
} from "../../modules/Clients"

class ClientsContainer extends Component {

  componentWillMount() {
    this.props.actions.getClients()
  }

  render() {
    return (
      <div className="container">
        <label>
          <Link to={"/"}>Back</Link>
        </label>

        <h3>Clients</h3>
        <div className="text-center">
          <div className="row">
            <ClientsComponent
              elements={this.props.clients}
            />
          </div>
        </div>
      </div>
    )
  }
}

export const Clients = connect(
  (state) => ({
    clients: selectClientsData(state)
  }),
  (dispatch) => ({
    actions: bindActionCreators({
      getClients
    }, dispatch)
  })
)(ClientsContainer);

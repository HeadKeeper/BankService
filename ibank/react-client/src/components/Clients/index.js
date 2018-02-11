import React, {Component} from "react";

import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import "../../styles/table.css";
import {navigateTo} from "../../modules/App/Navigator";

function onRowSelect(row, isSelected, e) {
  navigateTo("/clients/" + row.id);
}

const selectRowProp = {
  mode: 'radio',
  hideSelectColumn: true,
  clickToSelect: true,
  onSelect: onRowSelect
};

class Entities extends Component {
  render() {
    return (
      <BootstrapTable ref='table' data={this.props.elements} selectRow={ selectRowProp }>
        <TableHeaderColumn dataField='id' isKey={true}>ID</TableHeaderColumn>
        <TableHeaderColumn dataField='surname' dataSort={true}>Surname</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
        <TableHeaderColumn dataField='patronymic'>Patronymic</TableHeaderColumn>
        <TableHeaderColumn dataField='birthday' dataSort={true}>Birthday</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

export const ClientsComponent = Entities;

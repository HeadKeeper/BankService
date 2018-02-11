import React from "react";
import {Switch, Route} from "react-router-dom";

import {App, Home, Clients, ClientShow, ClientAdd, ClientEdit} from "./containers";

export const routes =
  <Switch>
    <Route exact path="/" component={App}/>
    <Route path="/home" component={Home}/>
    <Route exact path="/clients" component={Clients}/>
    <Route exact path="/clients/add" component={ClientAdd}/>
    <Route exact path="/clients/:id" component={ClientShow}/>
    <Route exact path="/clients/:id/edit" component={ClientEdit}/>
  </Switch>;

import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";

import {reducer as appReducer} from "./modules/App";
import {reducer as clientReducer} from "./modules/Client";
import {reducer as clientsReducer} from "./modules/Clients";

const containersReducer = {
  containers: combineReducers({
    app: combineReducers({
      workspace: appReducer
    }),
    clients: combineReducers({
      list  : clientsReducer,
      target: clientReducer
    })
  })
};

const globalReducer =
  combineReducers({
    ...containersReducer,
    route: routerReducer
  })
;

export default globalReducer;

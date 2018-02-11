import {fork, all} from "redux-saga/effects";

import {watchAppActions} from "./modules/App";
import {watchClientActions} from "./modules/Client";
import {watchClientsActions} from "./modules/Clients";

const sagas = [
  watchAppActions,

  watchClientActions,
  watchClientsActions
];

export default function* globalSagas() {
  const globalSagasForks = sagas.map((saga) => fork(saga));

  yield all([...globalSagasForks]);
}

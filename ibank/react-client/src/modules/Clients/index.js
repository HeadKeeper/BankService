import {fromJS} from "immutable";
import {getElements} from "../../api";
import {takeLatest} from "redux-saga/effects";

// ---------------------- CONSTANTS ----------------------- //

const GET_CLIENTS_REQUEST = "GET_CLIENTS_REQUEST";
const GET_CLIENTS_SUCCESS = "GET_CLIENTS_SUCCESS";
const GET_CLIENTS_FAIL = "GET_CLIENTS_FAIL";

// --------------------- INITIAL STATE --------------------- //

const initialState = fromJS({
  clients: [],
  error   : null,
  loading : false
});

// ----------------------- REDUCER ------------------------ //

export const reducer = (state = initialState, action) => {
  switch (action.type) {

  case GET_CLIENTS_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case GET_CLIENTS_SUCCESS:
    return state
      .set("clients", action.payload)
      .set("loading", false)
      .set("error", null);

  case GET_CLIENTS_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);

  default:
    return state;
  }
};

// ----------------- ACTIONS ----------------------- //

export const getClients = () => ({
  type: GET_CLIENTS_REQUEST
});

export const getClientsSuccess = (data) => ({
  type   : GET_CLIENTS_SUCCESS,
  payload: data
});

export const getClientsFail = (error) => ({
  type   : GET_CLIENTS_FAIL,
  payload: error,
  error  : true
});

// ----------------------- SAGAS ------------------------ //

function* getClientsRequest() {
  yield* getElements("/clients", getClientsSuccess, getClientsFail);
}

export function* watchClientsActions() {
  yield takeLatest(GET_CLIENTS_REQUEST, getClientsRequest);
}

// ------------------ SELECTORS -------------------- //

export const selectClientsContainer = (state) => state.containers.clients.list;
export const selectClientsData = (state) => selectClientsContainer(state).get("clients");

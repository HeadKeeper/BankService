import {fromJS} from "immutable";
import {sendElement, getElement, updateElement, deleteElement} from "../../api";
import {takeEvery, takeLatest} from "redux-saga/effects";

// ---------------------- CONSTANTS ----------------------- //

const CLIENTS_URL = "/clients";

const CREATE_CLIENT_REQUEST = "CREATE_CLIENT_REQUEST";
const CREATE_CLIENT_SUCCESS = "CREATE_CLIENT_SUCCESS";
const CREATE_CLIENT_FAIL = "CREATE_CLIENT_FAIL";

const GET_CLIENT_REQUEST = "GET_CLIENT_REQUEST";
const GET_CLIENT_SUCCESS = "GET_CLIENT_SUCCESS";
const GET_CLIENT_FAIL = "GET_CLIENT_FAIL";

const UPDATE_CLIENT_REQUEST = "UPDATE_CLIENT_REQUEST";
const UPDATE_CLIENT_SUCCESS = "UPDATE_CLIENT_SUCCESS";
const UPDATE_CLIENT_FAIL = "UPDATE_CLIENT_FAIL";

const DELETE_CLIENT_REQUEST = "DELETE_CLIENT_REQUEST";
const DELETE_CLIENT_SUCCESS = "DELETE_CLIENT_SUCCESS";
const DELETE_CLIENT_FAIL = "DELETE_CLIENT_FAIL";

const CLEAN_CLIENT_WORKSPACE = "CLEAN_CLIENT_WORKSPACE";

// --------------------- INITIAL STATE --------------------- //

const initialState = fromJS({
  client : {},
  error  : null,
  loading: false
});

// ----------------------- REDUCER ------------------------ //

export const reducer = (state = initialState, action) => {
  switch (action.type) {

  case CREATE_CLIENT_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case CREATE_CLIENT_SUCCESS:
    return state
      .set("client", action.payload)
      .set("loading", false)
      .set("error", null);

  case CREATE_CLIENT_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case GET_CLIENT_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case GET_CLIENT_SUCCESS:
    return state
      .set("client", action.payload)
      .set("loading", false)
      .set("error", null);

  case GET_CLIENT_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case UPDATE_CLIENT_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case UPDATE_CLIENT_SUCCESS:
    return state
      .set("client", action.payload)
      .set("loading", false)
      .set("error", null);

  case UPDATE_CLIENT_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case DELETE_CLIENT_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case DELETE_CLIENT_SUCCESS:
    return state
      .set("client", action.payload)
      .set("loading", false)
      .set("error", null);

  case DELETE_CLIENT_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);

  case CLEAN_CLIENT_WORKSPACE:
    return initialState;

  default:
    return state;
  }
};

// ----------------- ACTIONS ----------------------- //

export const createClient = (data) => ({
  type   : CREATE_CLIENT_REQUEST,
  payload: data
});

export const createClientSuccess = () => ({
  type: CREATE_CLIENT_SUCCESS
});

export const createClientFail = (error) => ({
  type   : CREATE_CLIENT_FAIL,
  payload: error,
  error  : true
});


export const getClient = (data) => ({
  type   : GET_CLIENT_REQUEST,
  payload: data
});

export const getClientSuccess = (data) => ({
  type   : GET_CLIENT_SUCCESS,
  payload: data
});

export const getClientFail = (error) => ({
  type   : GET_CLIENT_FAIL,
  payload: error,
  error  : true
});


export const updateClient = (data) => ({
  type   : UPDATE_CLIENT_REQUEST,
  payload: data
});

export const updateClientSuccess = () => ({
  type: UPDATE_CLIENT_SUCCESS
});

export const updateClientFail = (error) => ({
  type   : UPDATE_CLIENT_FAIL,
  payload: error,
  error  : true
});


export const deleteClient = (id) => ({
  type   : DELETE_CLIENT_REQUEST,
  payload: id
});

export const deleteClientSuccess = () => ({
  type: DELETE_CLIENT_SUCCESS
});

export const deleteClientFail = (error) => ({
  type   : DELETE_CLIENT_FAIL,
  payload: error,
  error  : true
});

export const cleanClientWorkspace = () => ({
  type: CLEAN_CLIENT_WORKSPACE
});

// ----------------------- SAGAS ------------------------ //

function* createClientRequest(action) {
  yield sendElement(CLIENTS_URL, action.payload, createClientSuccess, createClientFail);
}

function* getClientRequest(action) {
  yield getElement(CLIENTS_URL, action.payload, getClientSuccess, getClientFail);
}

function* updateClientRequest(action) {
  yield updateElement(CLIENTS_URL, action.payload.id, action.payload, updateClientSuccess, updateClientFail);
}

function* deleteClientRequest(action) {
  yield deleteElement(CLIENTS_URL, action.payload, deleteClientSuccess, deleteClientFail);
}

export function* watchClientActions() {
  yield takeEvery(CREATE_CLIENT_REQUEST, createClientRequest);
  yield takeLatest(GET_CLIENT_REQUEST, getClientRequest);
  yield takeEvery(UPDATE_CLIENT_REQUEST, updateClientRequest);
  yield takeEvery(DELETE_CLIENT_REQUEST, deleteClientRequest);
}

// ------------------ SELECTORS -------------------- //

export const selectClientContainer = (state) => state.containers.clients.target;
export const selectClientData = (state) => selectClientContainer(state).get("client");

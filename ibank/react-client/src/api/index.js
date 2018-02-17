import {call, put} from "redux-saga/effects";
import axios from "axios";

const serverURL = "http://localhost:3001";

export function* getElements(url, successHandler, failHandler) {
  try {
    const response = yield call(axios.get, serverURL + url);
    yield put(successHandler(response.data));
  }
  catch (e) {
    yield put(failHandler(e.message));
  }
}

export function* getElement(url, id, successHandler, failHandler) {
  try {
    const response = yield call(axios.get, serverURL + url + "/" + id);
    yield put(successHandler(response.data));
  }
  catch (e) {
    yield put(failHandler(e.message));
  }
}

export function* sendElement(url, data, successHandler, failHandler) {
  try {
    const response = yield call(axios.post, serverURL + url, {data: data});
    yield put(successHandler());
  }
  catch (e) {
    yield put(failHandler(e.message));
  }
}

export function* updateElement(url, id, data, successHandler, failHandler) {
  try {
    console.log(serverURL + url + "/" + id)
    const response = yield call(axios.post, serverURL + url + "/" + id, {data: data});
    yield put(successHandler(response));
  }
  catch (e) {
    yield put(failHandler(e.message));
  }
}

export function* deleteElement(url, id, successHandler, failHandler) {
  try {
    const response = yield call(axios.delete, serverURL + url + "/" + id);
    yield put(successHandler());
  }
  catch (e) {
    yield put(failHandler(e.message));
  }
}

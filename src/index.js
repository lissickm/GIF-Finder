import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";

//Import Saga Middleware
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import logger from "redux-logger";

//Create Saga Middleware
const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield takeEvery("FETCH_GIFS", fetchGifs);
  yield takeEvery("FETCH_GIPHY", fetchGiphySearch);
  yield takeEvery("SET_FAVORITE", markFavorite);
  yield takeEvery("FETCH_FAVORITES", getFavorites);
  yield takeEvery("UPDATE_CATEGORY", updateCategory);
  yield takeEvery("DELETE_FAVORITE", deleteFavorite);
}

function* fetchGifs(action) {
  console.log("function exists");
}

function* updateCategory(action) {
  console.log("updateCategory action is:", action.payload);
  let id = action.payload[1];
  try {
    yield axios.put(`/api/favorite/${id}`, action.payload);
    yield put({
      type: "FETCH_FAVORITES"
    });
  } catch (err) {
    console.log("error in POST", err);
  }
}

function* getFavorites(action) {
  console.log("the action in getFavorites:", action);
  try {
    let response = yield axios.get("/api/favorite");
    console.log("saga response!", response.data);
    yield put({
      type: "SET_FAVORITES",
      payload: response.data
    });
  } catch (err) {
    console.log("error in GET", err);
  }
}

function* markFavorite(action) {
  console.log("what is marked as favorite:", action);
  try {
    yield axios.post("/api/favorite", action.payload);
    yield put({
      type: "FETCH_FAVORITES"
    });
  } catch (err) {
    console.log("error in POST", err);
  }
}

function* fetchGiphySearch(action) {
  console.log("giphy search");
  try {
    let searchTerm = action.payload;
    let response = yield axios.get(`/api/giphy/${searchTerm}`);
    console.log("saga giphy response", response.data);
    yield put({
      type: "SET_GIFS",
      payload: response.data.data
    });
  } catch (error) {
    console.log("error in client side GIPHY get", error);
  }
}

function* deleteFavorite(action) {
  try {
    yield axios.delete(`/api/favorite/${action.payload}`);
    yield put({
      type: "FETCH_FAVORITES"
    });
  } catch (error) {
    console.log("error in client side DELETE", error);
  }
}

const gifReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_GIFS":
      return action.payload;
    default:
      return state;
  }
};

const favoriteReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_FAVORITES":
      return action.payload;
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    gifReducer,
    favoriteReducer
  }),
  //Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("react-root")
);

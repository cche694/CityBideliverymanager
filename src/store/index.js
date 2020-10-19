import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer.js";
//devtool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//middleware
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
export default store;

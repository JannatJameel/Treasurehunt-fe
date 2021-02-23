import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducers";
import { fetchRandomThings } from "./actions/thingActions";
import { checkForToken } from "./actions/authActions";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(fetchRandomThings());
store.dispatch(checkForToken());

export default store;
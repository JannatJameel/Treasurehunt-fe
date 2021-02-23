import { combineReducers } from "redux";
import thingReducer from "./thingReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({ authReducer, thingReducer });

export default rootReducer;

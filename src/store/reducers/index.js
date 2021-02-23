import { combineReducers } from "redux";
import thingReducer from "./thingReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  authReducer: authReducer,
  thingReducer: thingReducer,
});

export default rootReducer;

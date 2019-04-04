import { combineReducers } from "redux";
import placeReducer from "./reducers/places";

const rootReducer = combineReducers({
  places: placeReducer
});

export default rootReducer;

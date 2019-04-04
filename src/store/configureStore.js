import { createStore, combineReducers } from "redux";
import placeReducer from "./reducers/places";

const rootReducer = combineReducers({
  places: placeReducer
});

const configureStore = () => createStore(rootReducer);

export default configureStore;

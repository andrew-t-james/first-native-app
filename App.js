import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";

import AppContainer from "./src/screens/";

import rootReducer from "./src/store/configureStore";

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

class App extends React.Component {
  store = createStore(rootReducer, composeEnhancers());

  render() {
    return (
      <Provider store={this.store}>
        <AppContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent("App", () => App);

export default App;

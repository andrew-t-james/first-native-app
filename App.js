import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";

import rootReducer from "./src/store/configureStore";
import Main from "./src/components/Main";

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

class App extends React.Component {
  store = createStore(rootReducer, composeEnhancers());

  render() {
    return (
      <Provider store={this.store}>
        <Main />
      </Provider>
    );
  }
}

AppRegistry.registerComponent("App", () => App);

export default App;

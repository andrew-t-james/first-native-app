import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";

import configureStore from "./src/store/configureStore";
import Main from "./src/components/Main";

class App extends React.Component {
  store = createStore(configureStore);

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

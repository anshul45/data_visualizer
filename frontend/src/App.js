import React from "react";
import Home from "./Page/Home";
import { Provider } from "react-redux";
import store from "./utils/store";
const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;

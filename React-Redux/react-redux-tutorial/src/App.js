import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import CakeContainer from "./Components/CakeContainer";
import store from "./redux/store";
import HooksCakeContainer from "./Components/HooksCakeContainer";
import IcecreamContainer from "./Components/IcecreamContainer";
import HooksIcecreamContainer from "./Components/HooksIcecreamContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <IcecreamContainer />
        <HooksIcecreamContainer />
      </div>
    </Provider>
  );
}

export default App;

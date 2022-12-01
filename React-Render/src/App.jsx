import reactLogo from "./assets/react.svg";
import "./App.css";
import { UseState } from "./Components/UseState/UseState";
import { UseReducer } from "./Components/UseReducer/USeReducer";

function App() {
  return (
    <div className="App">
      {/* <UseState /> */}
      <UseReducer />
    </div>
  );
}

export default App;

import { createContext } from "react";
import "./App.css";
// import DataFetchingOne from "./Components/DataFetchingOne";
// import DataFetchingTwo from "./Components/DataFetchingTwo";
// import ClassCounterOne from "./Components/ClassCounterOne";
// import ClassMouse from "./Components/ClassMouse";
import ClickCounter from "./Components/ClickCounter";
// import ClickCounterTwo from "./Components/ClickCounterTwo";
// import ComponentC from "./Components/ComponentC";
// import CounterOne from "./Components/CounterOne";
// import CounterTwo from "./Components/CounterTwo";
// import DataFetching from "./Components/DataFetching";
// import HookCounterFour from "./Components/HookCounterFour";
// import HookCounterOne from "./Components/HookCounterOne";
// import HookCounterThree from "./Components/HookCounterThree";
// import HooksMouse from "./Components/HooksMouse";
// import IntervalClassCounter from "./Components/IntervalClassCounter";
// import IntervalHookCounter from "./Components/IntervalHookCounter";
// import MouseContainer from "./Components/MouseContainer";
// import ParentComponent from "./Components/ParentComponent";
// import Counter from "./Components/Counter";
// import FocusInput from "./Components/FocusInput";
// import ClearTimer from "./Components/ClearTimer";
// import HookTimer from "./Components/HookTimer";
// import DocTitleOne from "./Components/DocTitleOne";
// import FunctionHook from "./Components/FunctionHook";
// import UserForm from "./Components/UserForm";

export const UserContext = createContext();
export const NameContext = createContext();

function App() {
  return (
    <div className="App">
      <ClickCounter />
      {/* <ClickCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <ClassCounterOne /> */}
      {/* <HookCounterOne /> */}
      {/* <ClassMouse /> */}
      {/* <HooksMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalClassCounter /> */}
      {/* <IntervalHookCounter /> */}
      {/* <DataFetching /> */}
      {/* <UserContext.Provider value={"Pranjal"}>
        <NameContext.Provider value={"Shikhar"}>
          <ComponentC />
        </NameContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <DataFetchingOne /> */}
      {/* <DataFetchingTwo /> */}
      {/* <ParentComponent /> */}
      {/* <Counter /> */}
      {/* <FocusInput /> */}
      {/* <ClearTimer /> */}
      {/* <HookTimer /> */}
      {/* <DocTitleOne /> */}
      {/* <FunctionHook /> */}
      {/* <UserForm /> */}
    </div>
  );
}

export default App;

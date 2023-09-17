import { useState } from "react";
import "./App.css";
import { Main } from "./components/main/Main";
import { StoreGlobalContextState } from "./store-context/storeGlobalContextState";

function App() {
  return (
    <div className="App">
      <StoreGlobalContextState>
        <Main />
        {/* <ComponentB /> */}
        {/* <ComponentC /> */}
      </StoreGlobalContextState>
      {/* <ComponentD /> */}

      {/* COMPONENT B kojashto nema da e opfatena od ovoj context */}
    </div>
  );
}

export default App;

import React from "react";
import { Main } from "./components/Main/Main";
import { StoreGlobalContextState } from "./store-context/storeGlobalContext";

function App() {
  return (
    <StoreGlobalContextState>
      <Main>
        <h1>Hello world</h1>
      </Main>
    </StoreGlobalContextState>
  );
}

export default App;

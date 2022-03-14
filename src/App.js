import "./App.scss";
import "./custom.scss";

import Home from "./pages/home/home";
import DataContextProvider from "./context/context.provider";
import React from "react";

function App() {
  return (
    <DataContextProvider>
      <Home></Home>
    </DataContextProvider>
  );
}

export default App;

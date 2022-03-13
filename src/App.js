import "./App.scss";
import "./custom.scss";

import Home from "./pages/home/home";
import DataContextProvider from "./context/context.provider";
import Header from "./components/header/header";
import React from "react";
import Hero from "./components/hero/hero";
import Footer from "./components/footer/footer";

function App() {
  return (
    <DataContextProvider>
      <Home></Home>
    </DataContextProvider>
  );
}

export default App;

import './App.scss';
import "./custom.scss";

// import Home from "./pages/home/home";
import Header from "./components/header/header";
import React from "react";
import Hero from './components/hero/hero';
import Footer from './components/footer/footer';

function App() {
  return(

  <React.Fragment>
  <Header></Header>
  <Hero></Hero>
  <Footer></Footer>
  {/* <Home></Home> */}
  </React.Fragment>
  )
}

export default App;

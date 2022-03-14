import "./index.css";
import React, { useEffect, useContext } from "react";
import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import Footer from "../../components/footer/footer";

import BootstrapCarousel from "../../components/BootstrapCarousel/bootstrapCarousel";
import WeatherCard from "../../components/weather-card/weather-card";
import { geolocation, fetchCity, fetchCoords } from "../../functions/functions";
import { DataContext } from "../../context/data-context";
import WeatherCardCOPY from "../../components/weather-card/weather-card-copy";

function Home() {
  //en el provider tengo que cambiar la inicialización de la variable local
  const [
    latitude,
    setLatitude,
    longitude,
    setLongitude,
    city,
    setCity,
    ,
    setWeatherData,
    ,
    setCamParameters,
    ,
    ,
    ,
    ,
    urlImages,
    setUrlImages,
    controller,
    ,
    unit,
    ,
  ] = useContext(DataContext);

  useEffect(() => {
    if (city === "")
      geolocation(
        setLatitude,
        setLongitude,
        setCity,
        setWeatherData,
        setCamParameters,
        urlImages,
        setUrlImages,
        unit
      );
    if (city !== "") fetchCity(setLatitude, setLongitude, city);
    if (city !== "")
      fetchCoords(
        latitude,
        longitude,
        setWeatherData,
        setCamParameters,
        urlImages,
        setUrlImages,
        unit
      );
  }, [controller, unit]);

  return (
    <React.Fragment>
      {/* <Filter onSubmit={handlerOnsubmit}></Filter> */}
      {/* <MyGeolocation onClick={handlerOnclick}></MyGeolocation> */}
      <Header></Header>
      <Hero></Hero>
      {/*
      <WeatherCard /> */}
      <WeatherCardCOPY></WeatherCardCOPY>
      <BootstrapCarousel></BootstrapCarousel>
      {/* <Footer></Footer> */}
    </React.Fragment>
  );
}
export default Home;

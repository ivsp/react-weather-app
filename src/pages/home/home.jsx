import "./index.css";
import React, { useEffect, useState, useContext } from "react";
import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import Footer from "../../components/footer/footer";
import Filter from "../../components/filter/filter";

import MyGeolocation from "../../components/geolocation/geolocation";
import BootstrapCarousel from "../../components/BootstrapCarousel/bootstrapCarousel";
import WeatherCard from "../../components/weather-card/weather-card";
import Card from "react-bootstrap/Card";
import {
  geolocation,
  fetchCity,
  fetchCoords,
  generateRequest,
  getUrlPicture,
} from "../../functions/functions";
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
    weatherData,
    setWeatherData,
    camParameters,
    setCamParameters,
    keyWords,
    setKeyWords,
    urlImages,
    setUrlImages,
    controller,
    setController,
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
        setUrlImages
      );
    if (city !== "") fetchCity(setLatitude, setLongitude, city);
    if (city !== "")
      fetchCoords(
        latitude,
        longitude,
        setWeatherData,
        setCamParameters,
        urlImages,
        setUrlImages
      );
  }, [controller]);

  const getSunriseHour = new Date(
    (weatherData.sys?.sunrise + weatherData.timezone) * 1000
  );
  const sunriseHour = `${getSunriseHour.getHours()}:${getSunriseHour.getMinutes()}`;

  const getSunsetHour = new Date(
    (weatherData.sys?.sunset + weatherData.timezone) * 1000
  );
  const sunsetHour = `${getSunsetHour.getHours()}:${getSunsetHour.getMinutes()}`;

  return (
    <React.Fragment>
      {/* <Filter onSubmit={handlerOnsubmit}></Filter> */}
      {/* <MyGeolocation onClick={handlerOnclick}></MyGeolocation> */}
      <Header></Header>
      <Hero></Hero>
      {/* 
      <WeatherCard /> */}
      <WeatherCardCOPY></WeatherCardCOPY>
      {/* <BootstrapCarousel></BootstrapCarousel> */}
      {/* <Footer></Footer> */}
    </React.Fragment>
  );
}
export default Home;

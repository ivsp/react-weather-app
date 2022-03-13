
import "./index.css";
import React, { useEffect, useState, useContext } from "react";

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
  ] = useContext(DataContext);

  const [urlImages, setUrlImages] = useState([]);
  const [counter, setCounter] = useState(0);
  const [forecastData, setForecastData] = useState([]);
  const [controller, setController] = useState(true);

  useEffect(() => {
    if (city === "")

      geolocation(
        setLatitude,
        setLongitude,
        setCity,
        setWeatherData,
        setCamParameters,
        setKeyWords,
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

  const handlerOnsubmit = (e) => {
    e.preventDefault();
    const cityFilter = e.target.country.value.toLowerCase();
    setCity(cityFilter);
    console.log(city);
    setUrlImages([]);
    setController(!controller);
  };

  const handlerOnclick = (e) => {
    geolocation();
  };

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

      <WeatherCard/>
     


      <BootstrapCarousel urls={urlImages}></BootstrapCarousel>
    </React.Fragment>
  );
}
export default Home;

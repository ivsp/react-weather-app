import React, { useEffect, useState } from "react";
// import * as XLSX from "../../../node_modules/xlsx/xlsx.mjs";

/* load 'fs' for readFile and writeFile support */
import { ReactComponent as Cloudy } from "../../weather-icons/cloudy.svg";
import { ReactComponent as Rainy } from "../../weather-icons/rainy.svg";
import { ReactComponent as Cloudysun } from "../../weather-icons/cloudy.sun.svg";
import { ReactComponent as Cloudymoon } from "../../weather-icons/cloudymoon.svg";
import { ReactComponent as Cloudylighting } from "../../weather-icons/cloudy.lightning.svg";
import { ReactComponent as Cloudyrainlighting } from "../../weather-icons/cloudy.rain.lightning.svg";
import { ReactComponent as Sunny } from "../../weather-icons/sunny.svg";
import { ReactComponent as Clearnight } from "../../weather-icons/clearnight.svg";
import { ReactComponent as Sunnywind } from "../../weather-icons/sunny.wind.svg";
import { ReactComponent as Snowy } from "../../weather-icons/snowy.svg";

import "./index.css";
import Filter from "../../components/filter/filter";
import MyGeolocation from "../../components/geolocation/geolocation";

import "./index.css";
import BootstrapCarousel from "../../components/BootstrapCarousel/bootstrapCarousel";

import WeatherCard from "../../components/weather-card/weather-card";
import Card from "react-bootstrap/Card";

function Home() {
  //const KEY = "5752baf6201822d655e5282627caa619";
  const [CITY, updateCities] = useState("Sevilla");
  const KEY = "6ec1b7595153b67cc7506c3c5b5e8f64";
  //const KEY = "8e70202785880756e6fd030a4675871d";

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [urlImages, setUrlImages] = useState([]);
  const [keyWords, setKeyWords] = useState(["sunset", "portrait", "macro"]);
  const [counter, setCounter] = useState(0);
  const [forecastData, setForecastData] = useState([]);

  function Geolat() {
    navigator.geolocation.getCurrentPosition((geolocation) => {
      console.log(typeof geolocation.coords.latitude.toString());
      setLatitude(geolocation.coords.latitude.toString());
      setLongitude(geolocation.coords.longitude.toString());
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${geolocation.coords.latitude.toString()}&lon=${geolocation.coords.longitude.toString()}&appid=${KEY}`
      )
        .then((r) => r.json())
        .then((data) => {
          console.log(data.name);
          setWeatherData(data);
          updateCities(data.name);
        });
    });
  }

  useEffect(() => {
    Geolat();

    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${CITY}&limit=1&appid=${KEY}`
    )
      .then((r) => r.json())
      .then((location) => {
        console.log(location);
        setLatitude(location[0].lat);
        setLongitude(location[0].lon);
        console.log(location[0].name);

        fetch(
          `http://api.openweathermap.org/data/2.5/onecall?lat=${location[0].lat}&lon=${location[0].lon}&units=metric&appid=${KEY}`
        )
          .then((r) => r.json())
          .then((data) => {
            setForecastData(data);

            console.log(data);
          });
      });

    // fetch(
    //   `http://api.openweathermap.org/geo/1.0/direct?q=${CITY}&limit=1&appid=${KEY}`
    // )
    //   .then((r) => r.json())
    //   .then((location) => {
    //     setLatitude(location[0].lat);
    //     setLongitude(location[0].lon);
    //     fetch(
    //       `http://api.openweathermap.org/data/2.5/weather?lat=${location[0].lat}&lon=${location[0].lon}&appid=${KEY}`
    //     )
    //       .then((r) => r.json())
    //       .then((data) => {
    //         setWeatherData(data);
    //       });
    //   });

    function generateRequest(i) {
      return new Promise((resolve, rejected) => {
        setTimeout(async () => {
          const r = await fetch(
            `https://source.unsplash.com/category/nature/800x600/?${keyWords[0]},${keyWords[1]},${keyWords[2]}`
          );
          console.log(r.url);
          urlImages.push(r.url);
          setUrlImages([...urlImages]);
          resolve(r);
        }, i * 1500);
      });
    }
    async function getUrlPicture() {
      await Promise.allSettled(
        Array(3)
          .fill(null)
          .map((v, i) => generateRequest(i))
      );
    }
    getUrlPicture();
  }, [CITY]);

  const handlerOnsubmit = (e) => {
    e.preventDefault();
    const cityFilter = e.target.country.value.toLowerCase();
    updateCities(cityFilter);
    console.log(CITY);
  };

  // function onNext() {
  //   console.log("dentro del onNext");
  //   if (urlImages.length < 4) {
  //     fetch(
  //       `https://source.unsplash.com/category/nature/800x600/?${keyWords[0]},${keyWords[1]},${keyWords[2]}`
  //     ) //fetch para obtener la imagen
  //       .then((r) => {
  //         urlImages.push(r.url);
  //         setUrlImages([...urlImages]);
  //       });
  //   } //no haria falta el counter ni el else
  //   //  else {
  //   //   setCounter(0);
  //   // }
  // }
  //Creo que no hace falta con el carrousel
  // const onPrevious = () => {
  //   if (counter !== 0) {
  //     setCounter(counter - 1);
  //     console.log(counter);
  //     // console.log(urlImage);
  //   }
  // };

  // recibir oordenadas de geolocalizacion pulsando el boton hecho por hector
  const handlerOnclick = (e) => {
    e.preventDefault();
    const Geo = navigator.geolocation.getCurrentPosition((geolocation) => {
      // en el objeto geolocation.coords se encuentran mis coordenadas
      const lat = geolocation.coords.latitude;
      const lon = geolocation.coords.longitude;
      console.log(lat);
      console.log(lon);
    });
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
      <Filter onSubmit={handlerOnsubmit}></Filter>
      {/* <MyGeolocation onClick={handlerOnclick}></MyGeolocation> */}

      <WeatherCard
        degrees={
          weatherData.main?.temp ? Math.round(weatherData.main.temp) : ""
        }
        sunrise={weatherData.sys?.sunrise ? sunriseHour : ""} //buscar datos en el nuevo fetch
        sunset={weatherData.sys?.sunset ? sunsetHour : ""} //buscar datos en el nuevo fetch
        weather={
          weatherData.weather?.[0]?.main ? weatherData.weather[0].main : ""
        }
        forecast={
          forecastData.daily
            ? forecastData.daily?.map((c, i) => (
                <Card style={{ width: "120px" }}>
                  <Card.Text>
                    <Cloudysun></Cloudysun>
                    {c.temp?.day}º
                  </Card.Text>
                </Card>
              ))
            : ""
        }
      ></WeatherCard>

      <BootstrapCarousel urls={urlImages}></BootstrapCarousel>
    </React.Fragment>
  );
}
export default Home;

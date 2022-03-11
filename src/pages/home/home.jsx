import React, { useEffect, useState } from "react";
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


  const KEY = "8e70202785880756e6fd030a4675871d";
  const [CITY, updateCities] = useState("")
  //const KEY = "6ec1b7595153b67cc7506c3c5b5e8f64";


  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [urlImages, setUrlImages] = useState([]);
  const [keyWords, setKeyWords] = useState(["sunset", "portrait", "macro"]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {


    function Geolat() { 
      navigator.geolocation.getCurrentPosition(geolocation => {
        console.log(typeof geolocation.coords.latitude.toString());
      setLatitude(geolocation.coords.latitude.toString());
      setLongitude(geolocation.coords.longitude.toString())
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${geolocation.coords.latitude.toString()}&lon=${geolocation.coords.longitude.toString()}&appid=${KEY}`
      )
        .then((r) => r.json())
        .then((data) => {
          console.log(data.name);
          setWeatherData(data);
        });
      

    });
  }

    Geolat()

    
    

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
          `http://api.openweathermap.org/data/2.5/weather?lat=${location[0].lat}&lon=${location[0].lon}&appid=${KEY}`
        )
          .then((r) => r.json())
          .then((data) => {
            console.log(data);
            setWeatherData(data);
          });
      });




    fetch("https://source.unsplash.com/category/nature/?sunset") //fetch para obtener la imagen
      .then((r) => {
        console.log(r)
        setUrlImage(r.url);

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
        Array(4)
          .fill(null)
          .map((v, i) => generateRequest(i))
      );
    }
    getUrlPicture();
  }, [CITY]);




  const handlerOnsubmit = e => {
    e.preventDefault()
    const cityFilter = e.target.country.value.toLowerCase()
    updateCities(cityFilter)
    console.log(CITY)


  function onNext() {
    console.log("dentro del onNext");
    if (urlImages.length < 4) {
      fetch(
        `https://source.unsplash.com/category/nature/800x600/?${keyWords[0]},${keyWords[1]},${keyWords[2]}`
      ) //fetch para obtener la imagen
        .then((r) => {
          urlImages.push(r.url);
          setUrlImages([...urlImages]);
        });
    } //no haria falta el counter ni el else
    //  else {
    //   setCounter(0);
    // }

  }
  //Creo que no hace falta con el carrousel
  // const onPrevious = () => {
  //   if (counter !== 0) {
  //     setCounter(counter - 1);
  //     console.log(counter);
  //     // console.log(urlImage);
  //   }
  // };

  const handlerOnsubmit = (e) => {
    e.preventDefault();
    const cityFilter = e.target.country.value.toLowerCase();
    updateCities(cityFilter);
    console.log(CITY);
  };


  // recibir oordenadas de geolocalizacion pulsando el boton hecho por hector

  const handlerOnclick = e => {
    e.preventDefault()
    const Geo = navigator.geolocation.getCurrentPosition(geolocation => {
      // en el objeto geolocation.coords se encuentran mis coordenadas
      const lat = geolocation.coords.latitude;
      const lon = geolocation.coords.longitude;
      console.log(lat)
      console.log(lon)
    });
  }

  return (
    <React.Fragment>

      <Filter onSubmit={handlerOnsubmit} ></Filter>
      <MyGeolocation onClick={handlerOnclick}></MyGeolocation>
      <p>{weatherData.name?weatherData.name:""}</p>
      {urlImage !== "" ? <img className="image" src={urlImage} alt="" /> : ""}
      <i className="wi wi-day-sunny" ></i>
     {/* <Cloudy></Cloudy>
        <Rainy></Rainy>
        <Cloudysun></Cloudysun>
        <Cloudylighting></Cloudylighting>
        <Cloudymoon></Cloudymoon>
        <Cloudyrainlighting></Cloudyrainlighting>
        <Sunny></Sunny>
        <Clearnight></Clearnight>
        <Sunnywind></Sunnywind>
        <Snowy></Snowy> */}

      <BootstrapCarousel urls={urlImages} onNext={onNext}></BootstrapCarousel>

    </React.Fragment>
  );
}

export default Home;

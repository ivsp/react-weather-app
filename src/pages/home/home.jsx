import React, { useEffect, useState } from "react";
import "../../boostrap-icons/font/weathericons-regular-webfont.svg"
import "../../boostrap-icons/font/weathericons-regular-webfont.eot"
import "../../boostrap-icons/font/weathericons-regular-webfont.ttf"
import "../../boostrap-icons/font/weathericons-regular-webfont.woff"
import "../../boostrap-icons/font/weathericons-regular-webfont.woff2"
import "../../boostrap-icons/css/weather-icons-wind.css"
import "../../boostrap-icons/css/weather-icons-wind.min.css"
import "../../boostrap-icons/css/weather-icons.css"
import "../../boostrap-icons/css/weather-icons.min.css"
import "./index.css";
import Filter from "../../components/filter/filter";
import MyGeolocation from "../../components/geolocation/geolocation";





function Home() {
  const KEY = "8e70202785880756e6fd030a4675871d";
  const [CITY, updateCities] = useState("")

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [urlImage, setUrlImage] = useState("");

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
      });
  }, [CITY]);



  const handlerOnsubmit = e => {
    e.preventDefault()
    const cityFilter = e.target.country.value.toLowerCase()
    updateCities(cityFilter)
    console.log(CITY)

  }


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
    </React.Fragment>
  );
}

export default Home;

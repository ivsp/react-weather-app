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
                           



function Home() {
  const KEY = "6ec1b7595153b67cc7506c3c5b5e8f64";
  const CITY = "Hervas";

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [urlImage, setUrlImage] = useState("");

  useEffect(() => {
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
  }, []);

  return (
    <React.Fragment>
      {urlImage !== "" ? <img className="image" src={urlImage} alt="" /> : ""}
      <i className="wi wi-day-sunny" ></i>
    </React.Fragment>
  );
}

export default Home;

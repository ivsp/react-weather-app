import React, { useEffect, useState } from "react";
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

    fetch("https://source.unsplash.com/category/nature/?shpera") //fetch para obtener la imagen
      .then((r) => {
        setUrlImage(r.url);
      });
  }, []);

  return (
    <React.Fragment>
      {urlImage !== "" ? <img className="image" src={urlImage} alt="" /> : ""}
    </React.Fragment>
  );
}

export default Home;

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

function Home() {
  const KEY = "6ec1b7595153b67cc7506c3c5b5e8f64";
  const CITY = "Hervas";

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [urlImages, setUrlImages] = useState([]);
  const [keyWords, setKeyWords] = useState(["sunset", "portrait", "macro"]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
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

    fetch(
      `https://source.unsplash.com/category/nature/800x600/?${keyWords[0]},${keyWords[1]},${keyWords[2]}`
    ).then((r) => {
      console.log(r);
      urlImages.push(r.url);
      setUrlImages([...urlImages]);
      console.log(urlImages);
    });
  }, [CITY]);

  function onNext() {
    console.log("dentro del onNext");
    console.log(urlImages);

    // console.log(urlImage);
    console.log(counter);
    if (counter < 4) {
      if (urlImages.length < 4) {
        fetch(
          `https://source.unsplash.com/category/nature/800x600/?${keyWords[0]},${keyWords[1]},${keyWords[2]}`
        ) //fetch para obtener la imagen
          .then((r) => {
            console.log(r);
            urlImages.push(r.url);
            setUrlImages([...urlImages]);
          });
      }
      setCounter(counter + 1);
    } else {
      setCounter(0);
    }
  }

  const onPrevious = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
      console.log(counter);
      // console.log(urlImage);
    }
  };

  return (
    <React.Fragment>
      <section className="container">
        <button onClick={onPrevious}>PREV</button>

        {urlImages[0] !== "" ? (
          <img className="image" src={urlImages[counter]} alt="" />
        ) : (
          ""
        )}
        {counter === 3 ? "" : <button onClick={onNext}>NEXT</button>}
        <i className="wi wi-day-sunny"></i>
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
      </section>
    </React.Fragment>
  );
}

export default Home;

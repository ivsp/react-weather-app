import React, { useEffect, useState } from "react";
import * as XLSX from "../../../node_modules/xlsx/xlsx.mjs";

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

import "./index.css";
import BootstrapCarousel from "../../components/BootstrapCarousel/bootstrapCarousel";

function Home() {
  const KEY = "6ec1b7595153b67cc7506c3c5b5e8f64";
  const [CITY, updateCities] = useState("");

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [urlImages, setUrlImages] = useState([]);
  const [keyWords, setKeyWords] = useState(["sunset", "portrait", "macro"]);
  const [counter, setCounter] = useState(0);

  function generateRequest(i) {
    return new Promise((resolve, rejected) => {
      setTimeout(async () => {
        const r = await fetch(
          `https://source.unsplash.com/category/nature/800x600/?${keyWords[0]},${keyWords[1]},${keyWords[2]}`
        );
        console.log(r);
        console.log(r.url);
        urlImages.push(r.url);
        setUrlImages([...urlImages]);
        resolve(r);
      }, i * 1500);
    });
  }
  async function getUrlPicture() {
    const r = await Promise.allSettled(
      Array(4)
        .fill(null)
        .map((v, i) => generateRequest(i))
    );
    console.log(r);
  }

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

    getUrlPicture();
    fetch("../../data/dataweather.xlsx")
      .then((res) => {
        console.log(res);
        return res.arrayBuffer();
      })
      .then((res) => {
        console.log(res);
        console.log("file:", res);
        // const reader = new FileReader();
        // reader.readAsArrayBuffer(res);
        const workbook = XLSX.read(new Uint8Array(res), {
          type: "buffer",
        });
        const worksheetNAme = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[worksheetNAme];
        const data = XLSX.utils.sheet_to_json(worksheet);
        console.log(workbook);
        console.log(worksheetNAme);
        console.log(worksheet);
        console.log(data);
      });
    // async function getXLSData() {
    //   const b64 = await FileSystem.readFile(
    //     "../../data/Weather UX _ Fullstack.xlsx",
    //     "base64"
    //   );
    //   const workbook = XLSX.read(b64, { type: "base64" });

    //   return workbook;
    // }
    // getXLSData();
    /* b64 is a base64 string */
  }, [CITY]);

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

  return (
    <React.Fragment>
      <Filter onSubmit={handlerOnsubmit}></Filter>
      {/* <section className="container">
       

        <button onClick={onPrevious}>PREV</button>

        {urlImages[0] !== "" ? (
          <img className="image" src={urlImages[counter]} alt="" />
        ) : (
          ""
        )}
        {counter === 3 ? "" : <button onClick={onNext}>NEXT</button>}
        <i className="wi wi-day-sunny"></i>
        </section> */}
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

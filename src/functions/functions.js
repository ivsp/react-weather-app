import camParams from "../data/data.json";


export const fetchCoords = (
  latitude,
  longitude,
  setWeatherData,
  setCamParameters,
  setKeyWords
) => {
  const KEY = "6ec1b7595153b67cc7506c3c5b5e8f64";
  //const KEY = "8e70202785880756e6fd030a4675871d";
  //const KEY = "5752baf6201822d655e5282627caa619";
  fetch(
    `http://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${KEY}`
  )
    .then((r) => r.json())
    .then((data) => {
      setWeatherData(data);

      if (data.timezone === "Europe/Madrid") {
        const getHour = new Date(
          (data.current.dt + data.timezone_offset - 3600) * 1000
        );
        const hour = Math.floor(getHour.getHours() / 2);
        if (data.current.clouds <= 25) {
          setCamParameters(camParams.hora[hour].nubes[0]);
          setKeyWords(camParams.hora[hour].nubes[0][0].keyWord.split("/"));
        } else if (data.current.clouds > 25 && data.current.clouds <= 50) {
          setCamParameters(camParams.hora[hour].nubes[1]);
          setKeyWords(camParams.hora[hour].nubes[1][0].keyWord.split("/"));
        } else if (data.current.clouds > 50 && data.current.clouds <= 75) {
          setCamParameters(camParams.hora[hour].nubes[2]);
          setKeyWords(camParams.hora[hour].nubes[2][0].keyWord.split("/"));
        } else if (data.current.clouds > 75 && data.current.clouds <= 100) {
          setCamParameters(camParams.hora[hour].nubes[3]);
          setKeyWords(camParams.hora[hour].nubes[3][0].keyWord.split("/"));
        }
      } else {
        const getHour = new Date(
          (data.current.dt + data.timezone_offset) * 1000
        );
        const hour = Math.floor(getHour.getHours() / 2);
        if (data.current.clouds <= 25) {
          setCamParameters(camParams.hora[hour].nubes[0]);
          setKeyWords(camParams.hora[hour].nubes[0][0].keyWord.split("/"));
        } else if (data.current.clouds > 25 && data.current.clouds <= 50) {
          setCamParameters(camParams.hora[hour].nubes[1]);
          setKeyWords(camParams.hora[hour].nubes[1][0].keyWord.split("/"));
        } else if (data.current.clouds > 50 && data.current.clouds <= 75) {
          setCamParameters(camParams.hora[hour].nubes[2]);
          setKeyWords(camParams.hora[hour].nubes[2][0].keyWord.split("/"));
        } else if (data.current.clouds > 75 && data.current.clouds <= 100) {
          setCamParameters(camParams.hora[hour].nubes[3]);
          setKeyWords(camParams.hora[hour].nubes[3][0].keyWord.split("/"));
        }
      }

    });
};

export function geolat(
  latitude,
  longitude,
  setLatitude,
  setLongitude,
  setCity,
  setWeatherData,
  setCamParameters,
  keyWords,
  setKeyWords
) {
  const KEY = "6ec1b7595153b67cc7506c3c5b5e8f64";
  //const KEY = "8e70202785880756e6fd030a4675871d";
  //const KEY = "5752baf6201822d655e5282627caa619";
  navigator.geolocation.getCurrentPosition((geolocation) => {
    setLatitude(geolocation.coords.latitude.toString());
    setLongitude(geolocation.coords.longitude.toString());
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${geolocation.coords.latitude.toString()}&lon=${geolocation.coords.longitude.toString()}&appid=${KEY}`
    )
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
       setCity(data.name);
        console.log(data.dt);
        console.log(data.timezone);
        const getHour = new Date((data.dt + data.timezone - 3600) * 1000);
        console.log(getHour);
        const hour = Math.floor(getHour.getHours() / 2);
        console.log(hour);
        console.log(data.clouds.all);
        if (data.clouds.all <= 25) {
          setCamParameters(camParams.hora[hour].nubes[0]);
          const arr = [];
          camParams.hora[hour].nubes[0][0].keyWord.split("/").map((k) => {
            console.log("en el 0");
            console.log(k);
            arr.push(k);
          });
          console.log(arr);
          setKeyWords(arr);

          console.log(arr);
        } else if (data.clouds.all > 25 && data.clouds.all <= 50) {
          setCamParameters(camParams.hora[hour].nubes[1]);
          camParams.hora[hour].nubes[1][0].keyWord.split("/").forEach((k) => {
            console.log("en el 1");
            keyWords.push(k);
            setKeyWords([...keyWords]);
          });
        } else if (data.clouds.all > 50 && data.clouds.all <= 75) {
          setCamParameters(camParams.hora[hour].nubes[2]);
          camParams.hora[hour].nubes[2][0].keyWord.split("/").forEach((k) => {
            console.log("en el 2");
            keyWords.push(k);
            setKeyWords([...keyWords]);
          });
        } else if (data.clouds.all > 75 && data.clouds.all <= 100) {
          setCamParameters(camParams.hora[hour].nubes[3]);
          camParams.hora[hour].nubes[3][0].keyWord.split("/").forEach((k) => {
            console.log("en el 3");
            keyWords.push(k);
            setKeyWords([...keyWords]);
          });
        }
        fetchCoords(
          latitude,
          longitude,
          setWeatherData,
          setCamParameters,
          setKeyWords
        ) 

      });
  });
}

export const fetchCity = (setLatitude, setLongitude, city) => {
  const KEY = "6ec1b7595153b67cc7506c3c5b5e8f64";
  //const KEY = "8e70202785880756e6fd030a4675871d";
  //const KEY = "5752baf6201822d655e5282627caa619";

  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${KEY}`
  )
    .then((r) => r.json())
    .then((location) => {
      setLatitude(location[0].lat);
      setLongitude(location[0].lon);
    });
};


export function generateRequest(i, urlImages, setUrlImages, key1, key2) {
  console.log(key1);
  console.log(key2);
  return new Promise((resolve, rejected) => {
    setTimeout(async () => {
      const r = await fetch(
        `https://source.unsplash.com/category/objects/800x600/?${key1},${key2}`
      );
      urlImages.push(r.url);
      setUrlImages([...urlImages]);
      resolve(r);
    }, i * 1500);
  });
}

export async function getUrlPicture(urlImages, setUrlImages, key1, key2) {
  await Promise.allSettled(
    Array(3)
      .fill(null)
      .map((_v, i) => generateRequest(i, urlImages, setUrlImages, key1, key2))
  );
}

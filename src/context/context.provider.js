import { useState } from "react";
import { DataContext } from "./data-context";

function DataContextProvider({ children }) {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [camParameters, setCamParameters] = useState([]);
  const [keyWords, setKeyWords] = useState([]);

  return (
    <DataContext.Provider
      value={[
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
      ]}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;

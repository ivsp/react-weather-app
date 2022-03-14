import { useState } from "react";
import { DataContext } from "./data-context";

function DataContextProvider({ children }) {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [camParameters, setCamParameters] = useState([]);
  const [keyWord1, setKeyWord1] = useState("");
  const [keyWord2, setKeyWord2] = useState("");
  const [urlImages, setUrlImages] = useState([]);
  const [controller, setController] = useState(true);
  const [unit, setUnit] = useState("metric");

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
        keyWord1,
        setKeyWord1,
        keyWord2,
        setKeyWord2,
        urlImages,
        setUrlImages,
        controller,
        setController,
        unit,
        setUnit,
      ]}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;

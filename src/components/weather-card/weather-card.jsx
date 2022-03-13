import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CamParameters from "../../components/camParameters/cam-parameters";
import "./weather-card.css"

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
import { useContext } from "react";
import { DataContext } from "../../context/data-context";





function WeatherCard() {

  const [
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
  ] = useContext(DataContext)

  const icon = weatherData?.current?.weather?.[0]?.main
  const iconDescription = weatherData?.current?.weather?.[0]?.description

  const iconWeek = weatherData?.daily?.weather?.[0]?.main
  const iconWeekDescription = weatherData?.daily?.weather?.[0]?.description

  function selectIcon(icon) {
    //haremos un swich para elegir el icono
    console.log(weatherData)
    if (icon === "Clouds") {
      if (iconDescription === "few clouds")
        return <Cloudysun className="icons_style" />
      return <Cloudy />
    } else if (icon === "Snow") {
      return <Snowy />
    } else if (iconDescription === "clear sky") {
      return <Sunny />
    } else if (icon === "Thunderstorm") {
      return <Cloudyrainlighting />
    } else if (icon === "Rain" || "Drizzle")
      return <Rainy />

  }

  function selectIconWeek(iconWeek) {
    //haremos un swich para elegir el icono
    if (iconWeek === "Clouds") {
      if (iconWeekDescription === "few clouds")
        return <Cloudysun />
      return <Cloudy />
    } else if (iconWeek === "Snow") {
      return <Snowy />
    } else if (iconWeekDescription === "clear sky") {
      return <Sunny />
    } else if (iconWeek === "Thunderstorm") {
      return <Cloudyrainlighting />
    } else if (iconWeek === "Rain" || "Drizzle")
      return <Rainy />
  }


  /* props.weatherData?.daily?.length === 7? props.weatherData?.daily?.shift():"" */

  /* updateWeek(setWeekWeather) */



  const getSunriseHour = new Date(
    (weatherData?.current?.sunrise + weatherData.timezone_offset) * 1000
  );
  const sunriseHour = `${getSunriseHour.getHours()}:${getSunriseHour.getMinutes()}`;

  const getSunsetHour = new Date(
    (weatherData.current?.sunset + weatherData.timezone_offset) * 1000
  );
  const sunsetHour = `${getSunsetHour.getHours()}:${getSunsetHour.getMinutes()}`;



  /* const date = new Date((props.weatherData.dt + 240000) * 1000);
  const daydate = date.getDay()
  console.log(daydate)
  console.log(date) */

  return (
    <React.Fragment>
      <Container  /* className="mt-5" */ fluid="md" >

        <Row>
          <Col xl={6} lg={7} mg={12} >
            <Card fluid="md" className="border-0  card_container" style={{ height: "308px", width: "10px" }, { "margin-top": "80px" }}>
              <Card.Body>
                <Row>
                  <Col lg={6} mg={6}>
                    <Row>
                      <Card.Text className="weather_card_title" style={{ "font-size": "25px", "margin-bottom": "50px" }}>
                        El tiempo de hoy
                      </Card.Text>
                      <Card style={{ height: "1px" }} />
                    </Row>
                    <Row>
                      <Card.Text className="text-center" style={{ "font-size": "61px", "margin-top": "10px", "margin-bottom": "10px" }}>
                        {weatherData.current?.temp ? Math.round(weatherData.current.temp) : ""}º C
                      </Card.Text>
                      <Card style={{ height: "1px" }} />
                    </Row>
                    <Row>
                      <Col >
                        <Row>
                          <Card.Text className="text-center" style={{ "color": " #666666", "font-size": "13px", "margin-top": "10px" }}>

                            Amanece:
                          </Card.Text>
                        </Row>
                        <Row>
                          <Card.Text style={{ "font-size": "20px" }} className="text-center">
                            {weatherData.current?.sunrise ? sunriseHour : ""}
                          </Card.Text>
                        </Row>
                      </Col>
                      <Col>
                        <Row>
                          <Card.Text className="text-center" style={{ "color": " #666666", "font-size": "13px", "margin-top": "10px" }}>
                            Anochece:
                          </Card.Text>
                        </Row>
                        <Row>
                          <Card.Text style={{ "font-size": "20px" }} className="text-center">
                            {weatherData.current?.sunset ? sunsetHour : ""}
                          </Card.Text>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col xl={6} lg={12} mg={12}>
                    <Card.Text >
                      {selectIcon(icon)}
                    </Card.Text>
                  </Col>

                  {/* <Card.Text>
                  {props.weatherData.current?.weather?.[0]?.main ? props.weatherData.current?.weather[0].main : ""}
                </Card.Text> */}
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xs={12}>
            <CamParameters></CamParameters>
          </Col>
          <Row className="weekly">

            {weatherData?.daily ?

              weatherData?.daily?.map((c, i) => (
                <Card className="weekly_cards" /* lg={6} mg={6} style={{ width: "73px" }, { height: "73px" }} */>
                  <Card.Text>

                    {Math.round(c.temp?.day)}º
                  </Card.Text>
                  <Card.Text>
                    {selectIconWeek(iconWeek)}
                  </Card.Text>


                </Card>
              ))
              : ""}

          </Row>

        </Row>






      </Container>
    </React.Fragment>
  );
}

export default WeatherCard;
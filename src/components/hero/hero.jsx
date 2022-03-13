import "./style.css";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

import React from "react";
import { DataContext } from "../../context/data-context";
import { useContext } from "react";

function Hero() {
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
    keyWords,
    setKeyWords,
    urlImages,
    setUrlImages,
    controller,
    setController,
  ] = useContext(DataContext);

  function getCurrentWeekDay() {
    const date = new Date();
    const day = date.getDay();
    if (day === 0) return "Domingo";
    else if (day === 1) return "Lunes";
    else if (day === 2) return "Martes";
    else if (day === 3) return "Miércoles";
    else if (day === 4) return "Jueves";
    else if (day === 5) return "Viernes";
    else if (day === 6) return "Sábado";
  }

  function getCurrentDay() {
    const date = new Date();
    const day = date.getDate();
    return day;
  }

  function getCurrentMonth() {
    const date = new Date();
    const month = date.getMonth();
    if (month === 0) return "Enero";
    else if (month === 1) return "Febrero";
    else if (month === 2) return "Marzo";
    else if (month === 3) return "Abril";
    else if (month === 4) return "Mayo";
    else if (month === 5) return "Junio";
    else if (month === 6) return "Julio";
    else if (month === 7) return "Agosto";
    else if (month === 8) return "Septiembre";
    else if (month === 9) return "Octubre";
    else if (month === 10) return "Noviembre";
    else if (month === 11) return "Diciembre";
  }

  function getCurrentYear() {
    const date = new Date();
    const year = date.getFullYear();
    return year;
  }

  //console.log(date);
  return (
    <Container className="hero_container" fluid>
      <Row>
        <Col
          md={{ span: 9, offset: 1 }}
          lg={{ span: 9, offset: 1 }}
          xl={{ span: 9, offset: 1 }}
        >
          <Card.Text
            className="textcity"
            style={{
              "margin-top": "36px",
            }}
          >
            {city}
          </Card.Text>
        </Col>
        <Col
          md={{ span: 10, offset: 1 }}
          lg={{ span: 10, offset: 1 }}
          xl={{ span: 10, offset: 1 }}
        >
          <p class="textdate">
            {getCurrentWeekDay()}, {getCurrentDay()} de {getCurrentMonth()} de{" "}
            {getCurrentYear()}
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;

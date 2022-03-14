import "./style.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Filter from "../filter/filter";
import nikon from "./nikon.jpg";
import React from "react";
import Card from "react-bootstrap/Card";
import { geolocation } from "../../functions/functions";
import { DataContext } from "../../context/data-context";
import { useContext } from "react";
import { fetchCity, fetchCoords } from "../../functions/functions";

function Header() {
  const [
    latitude,
    setLatitude,
    longitude,
    setLongitude,
    ,
    setCity,
    ,
    setWeatherData,
    ,
    setCamParameters,
    ,
    ,
    ,
    ,
    urlImages,
    setUrlImages,
    controller,
    setController,
    unit,
    ,
  ] = useContext(DataContext);

  const handlerOnsubmit = (e) => {
    e.preventDefault();
    setUrlImages([]);
    const cityFilter = e.target.country.value.toLowerCase();
    fetchCity(setLatitude, setLongitude, cityFilter, setCity);
    fetchCoords(
      latitude,
      longitude,
      setWeatherData,
      setCamParameters,
      urlImages,
      setUrlImages,
      unit
    );

    setController(!controller);
  };

  const handlerOnclick = () => {
    geolocation(
      setLatitude,
      setLongitude,
      setCity,
      setWeatherData,
      setCamParameters,
      urlImages,
      setUrlImages
    );
  };

  return (
    <Container className="navbar_container" fluid style={{ width: "100%" }}>
      <Row>
        <Navbar>
          <Col md={{ span: 1, offset: 1 }} className="justify-content-lg-end">
            <Image src={nikon} className="logo"></Image>
          </Col>
          <Col md={5} xl={5}>
            <Card.Text style={{ color: "white" }} className="navtext">
              Nikon Weather Advisor
            </Card.Text>
          </Col>

          <Col md={5} lg={5} xl={5} className="justify-content-end">
            <Filter
              handlerOnclick={handlerOnclick}
              handlerOnsubmit={handlerOnsubmit}
            ></Filter>
          </Col>
        </Navbar>
      </Row>
    </Container>
  );
}

export default Header;

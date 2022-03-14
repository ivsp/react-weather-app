import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CamParameters from "../../components/camParameters/cam-parameters";
import Form from "react-bootstrap/Form";
import "./weather-card.css";
import { ReactComponent as Cloudy } from "../../weather-icons/cloudy.svg";
import { ReactComponent as Rainy } from "../../weather-icons/rainy.svg";
import { ReactComponent as Cloudysun } from "../../weather-icons/cloudy.sun.svg";
//import { ReactComponent as Cloudymoon } from "../../weather-icons/cloudymoon.svg";
//import { ReactComponent as Cloudylighting } from "../../weather-icons/cloudy.lightning.svg";
import { ReactComponent as Cloudyrainlighting } from "../../weather-icons/cloudy.rain.lightning.svg";
import { ReactComponent as Sunny } from "../../weather-icons/sunny.svg";
//import { ReactComponent as Clearnight } from "../../weather-icons/clearnight.svg";
//import { ReactComponent as Sunnywind } from "../../weather-icons/sunny.wind.svg";
import { ReactComponent as Snowy } from "../../weather-icons/snowy.svg";
import { useContext } from "react";
import { DataContext } from "../../context/data-context";

function WeatherCardCOPY() {
  const [, , , , , , weatherData, , , , , , , , , , , , unit, setUnit] =
    useContext(DataContext);

  const icon = weatherData?.current?.weather?.[0]?.main;
  const iconDescription = weatherData?.current?.weather?.[0]?.description;

  function getCurrentDay(i) {
    const date = new Date();
    const day = date.getDay() + i * 1;
    if (day === 0) return "Domingo";
    else if (day === 1) return "Lunes";
    else if (day === 2) return "Martes";
    else if (day === 3) return "Miércoles";
    else if (day === 4) return "Jueves";
    else if (day === 5) return "Viernes";
    else if (day === 6) return "Sábado";
  }

  //console.log(currentDay);
  function selectIcon(icon) {
    //haremos un swich para elegir el icono
    if (icon === "Clouds") {
      if (iconDescription === "few clouds")
        return <Cloudysun className="big-icon-size" />;
      return <Cloudy className="big-icon-size" />;
    } else if (icon === "Snow") {
      return <Snowy className="big-icon-size" />;
    } else if (iconDescription === "clear sky") {
      return <Sunny className="big-icon-size" />;
    } else if (icon === "Thunderstorm") {
      return <Cloudyrainlighting className="big-icon-size" />;
    } else if (icon === "Rain" || "Drizzle")
      return <Rainy className="big-icon-size" />;
  }

  function selectIconWeek(iconWeek, iconWeekDescription) {
    //haremos un swich para elegir el icono
    if (iconWeek === "Clouds") {
      if (iconWeekDescription === "few clouds")
        return <Cloudysun className="small-icon-size" />;
      return <Cloudy className="small-icon-size" />;
    } else if (iconWeek === "Snow") {
      return <Snowy className="small-icon-size" />;
    } else if (iconWeekDescription === "clear sky") {
      return <Sunny className="small-icon-size" />;
    } else if (iconWeek === "Thunderstorm") {
      return <Cloudyrainlighting className="small-icon-size" />;
    } else if (iconWeek === "Rain" || "Drizzle")
      return <Rainy className="small-icon-size" />;
  }

  /* props.weatherData?.daily?.length === 7? props.weatherData?.daily?.shift():"" */

  /* updateWeek(setWeekWeather) */

  const getSunriseHour = new Date(
    (weatherData?.current?.sunrise + weatherData.timezone_offset) * 1000
  );
  const sunriseHour =
    getSunriseHour.getMinutes() < 10
      ? `${getSunriseHour.getHours()}:0${getSunriseHour.getMinutes()}`
      : `${getSunriseHour.getHours()}:${getSunriseHour.getMinutes()}`;

  const getSunsetHour = new Date(
    (weatherData.current?.sunset + weatherData.timezone_offset) * 1000
  );
  const sunsetHour =
    getSunsetHour.getMinutes() < 10
      ? `${getSunsetHour.getHours()}:0${getSunsetHour.getMinutes()}`
      : `${getSunsetHour.getHours()}:${getSunsetHour.getMinutes()}`;

  const getDtHour = new Date(
    (weatherData.current?.dt + weatherData.timezone_offset - 3600) * 1000
  );
  const dtHour =
    getDtHour.getMinutes() < 10
      ? `${getDtHour.getHours()}:0${getDtHour.getMinutes()}`
      : `${getDtHour.getHours()}:${getDtHour.getMinutes()}`;

  const changeTemp = (e) => {
    e.preventDefault();
    if (unit === "metric") {
      setUnit("imperial");
    } else {
      setUnit("metric");
    }
  };

  return (
    <Container fluid style={{ width: "100%" }}>
      <Row>
        <Col
          xl={{ span: 4, offset: 1 }}
          lg={{ span: 4, offset: 1 }}
          md={{ span: 4, offset: 1 }}
        >
          <Card
            className="border-0  card_container"
            style={{
              "font-size": "25px",
            }}
          >
            <Row>
              <Col xxl={6} lg={6} md={6}>
                <Row className="p-0">
                  <Col xl={12} lg={12} md={12}>
                    <Card.Text
                      style={{
                        "font-family":"Roboto",
                        "font-size": "25px",
                        "font-weight": "600",
                        "margin-bottom": "42px"
                      }}
                    >
                      El tiempo de hoy
                    </Card.Text>
                  </Col>
                </Row>
                <Row
                  className="d-flex align-items-center justify-content-between"
                  style={{
                    "font-size": "10px",
                    "font-weight":"600",
                  }}
                >
                  <Col xl={4} lg={4} md={4}>
                    <Card.Text
                      style={{
                        "font-size": "25px",
                      }}
                    >
                      {weatherData.current?.dt ? dtHour : ""}
                    </Card.Text>
                  </Col>

                  <Col
                    className="justify-content-xxl-end justify-content-xl-end"
                    xl="auto"
                    lg="auto"
                    md="auto"
                    style={{
                      "margin-left": "10%",
                    }}
                  >
                    <Row
                      className="d-flex align-items-center"
                      style={{
                        "font-size": "25px",
                      }}
                    >
                      <Col
                      
                      xl="auto" lg="auto" md="auto">
                        <Card.Text style={{"font-size":"13px"}}>ºC</Card.Text>
                      </Col>
                      <Col className="switch p-0" xl="auto" lg="auto" md="auto">
                        <Form.Check
                          className="toggle"
                          onChange={changeTemp}
                          type="switch"
                          id="custom-switch"
                        />
                      </Col>
                      <Col className="p-0" xl="auto" lg="auto" md="auto">
                        <Card.Text style={{"font-size":"13px"}}>ºF</Card.Text>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row>
                  <Col xl={12} lg={12} md={12}>
                    <Card style={{ height: "1px" }} />

                    <Card.Text
                      className="text-center"
                      style={{
                        "font-size": "61px",
                        "margin-top": "10px",
                        "margin-bottom": "10px",
                      }}
                    >
                      {weatherData.current?.temp
                        ? Math.round(weatherData.current.temp)
                        : ""}
                      {unit === "metric" ? "º C" : "ºF"}
                    </Card.Text>
                    <Card style={{ height: "1px" }} />
                  </Col>
                </Row>
                <Row>
                  <Col xl={6} lg={6} md={6}>
                    <Row>
                      <Card.Text
                        className="text-center"
                        style={{
                          color: " #666666",
                          "font-size": "16px",
                          "margin-top": "10px",
                        }}
                      >
                        Amanece:
                      </Card.Text>
                    </Row>
                    <Row>
                      <Card.Text
                        style={{ "font-size": "20px", "font-weight":"400"}}
                        className="text-center"
                      >
                        {weatherData.current?.sunrise ? sunriseHour : ""}
                      </Card.Text>
                    </Row>
                  </Col>
                  <Col xl={6} lg={6} md={6}>
                    <Row>
                      {" "}
                      <Card.Text
                        className="text-center"
                        style={{
                          color: " #666666",
                          "font-size": "16px",
                          "margin-top": "10px",
                        }}
                      >
                        Anochece:
                      </Card.Text>
                    </Row>
                    <Row>
                      {" "}
                      <Card.Text
                         style={{ "font-size": "20px", "font-weight":"400"}}
                        className="text-center"
                      >
                        {weatherData.current?.sunset ? sunsetHour : ""}
                      </Card.Text>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col className="align-self-xl-center" xxl={6} lg={6} md={6}>
                <Card.Text>{selectIcon(icon)}</Card.Text>
              </Col>
            </Row>
          </Card>
          <Row>
            <Card.Text
              style={{
                "font-size": "20px",
                "font-weight":"600",
                "font-size": "20px",
                "margin-top": "59px",
                "margin-bottom": "24px",
              }}
            >
              Pronóstico
            </Card.Text>
          </Row>
          <Row className="weekly" style={{"font-weight":"600"}}>
            {weatherData?.daily
              ? weatherData?.daily?.map((c, i) => {
                  if (i === 1 || i === 2 || i === 3 || i === 4 || i === 5) {
                    return (
                      <Col
                        className="  text-center"
                        style={{ width: "73px"}}
                      >

                        <Card className="border-0 ">
                          <Row>
                            <Card.Text>
                              {Math.round(c.temp?.day)}{" "}
                              {unit === "metric" ? "ºC" : "ºF"}
                            </Card.Text>
                          </Row>
                          <Row>
                            <Card.Text className="m-0 p-0">
                              {selectIconWeek(
                                weatherData?.daily[i].weather?.[0]?.main,
                                weatherData?.daily[i].weather?.[0]?.description
                              )}
                            </Card.Text>
                          </Row>
                          <Row>
                            <Card.Text>{getCurrentDay(i)}</Card.Text>
                          </Row>
                        </Card>
                      </Col>
                    );
                  }
                })
              : ""}
          </Row>
        </Col>

        <Col
          xl={{ span: 5, offset: 1 }}
          lg={{ span: 5, offset: 1 }}
          md={{ span: 5, offset: 1 }}
        >
          <CamParameters></CamParameters>
        </Col>
      </Row>
    </Container>
  );
}

export default WeatherCardCOPY;

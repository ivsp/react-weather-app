import React from "react";
import Card from "react-bootstrap/Card";
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
function WeatherCard(props) {
  console.log(props.sunrise);

  function selectIcon(icon) {
    //haremos un swich para elegir el icono
    if (icon === "Cludy") {
      return <Cloudy />;
    } else if (icon === "sunny") {
    }
  }

  return (
    <React.Fragment>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
          <Card.Text>
            {props.info}
            <p>{props.degrees}º</p>
            <p>hora del amanecer: {props.sunrise}</p>
            <p>hora del atardecer: {props.sunset}</p>
            <p>{props.weather}</p>
            {selectIcon()}
          </Card.Text>
        </Card.Body>
      </Card>

      {props.forecast}
    </React.Fragment>
  );
}

export default WeatherCard;

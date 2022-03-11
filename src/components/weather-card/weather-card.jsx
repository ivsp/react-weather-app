import React from "react";
import Card from "react-bootstrap/Card";
import { ReactComponent as Cloudy } from "../../weather-icons/cloudy.svg";

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

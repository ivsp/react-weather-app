import React from 'react';
import Card from 'react-bootstrap/Card'


function WeatherCard(props) {
    return (
        <React.Fragment>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        {props.info}
                        <p>{props.degrees}º</p>
                        <p>hora del amanecer: {props.sunrise}</p>
                        <p>hora del atardecer: {props.sunset}</p>
                    </Card.Text>

                </Card.Body>
            </Card>
            
        </React.Fragment>
    )

}

export default WeatherCard;
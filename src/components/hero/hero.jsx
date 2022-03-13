import "./style.css";
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react";
import Card from 'react-bootstrap/Card'


function Hero() {


    return (

        <Container className="container_hero" >
            <Row >
                <Col md={12} >
                    <Navbar className="hero_container" >
                        {/* <Card.Text style={{ color: "white" }} className="cardtext">Santander</Card.Text> */}
                        <div class="textcontainer">
                        <p class="textcity">Santander</p>
                        <p class="textdate">Miércoles, 23 de Marzo de 2022</p>
                        </div>
                
                    </Navbar>
                </Col>

            </Row>
        </Container>

    )
}

export default Hero;
import "./style.css";
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import MyGeolocation from '../geolocation/geolocation';
import Filter from '../filter/filter';
import nikon from './nikon.jpg';
import React from "react";
import Card from 'react-bootstrap/Card'


function Header() {

    const handlerOnclick = (e) => {
        e.preventDefault();
        const Geo = navigator.geolocation.getCurrentPosition((geolocation) => {
            // en el objeto geolocation.coords se encuentran mis coordenadas
            const lat = geolocation.coords.latitude;
            const lon = geolocation.coords.longitude;
            console.log(lat);
            console.log(lon);
        });
    };

    return (

        <Container className="container_grid" fluid>
            <Row >
                <Col md={12} >
                    <Navbar className="navbar_container" >
                        <Image src={nikon} className="logo"></Image>
                        <Card.Text style={{ color: "white" }} className="navtext">Nikon Weather Advisor</Card.Text>
                        <MyGeolocation onClick={handlerOnclick}></MyGeolocation>
                        <Filter></Filter>
                    </Navbar>
                </Col>

            </Row>
        </Container>

    )
}

export default Header;
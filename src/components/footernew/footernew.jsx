import "./style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import React from "react";
import nikon from "../header/nikon.jpg";
import facebook from "./facebook.png";
import tuit from "./tuit.png";
import wordpress from "./word.png";
import youtube from "./youtube.png";
import Image from "react-bootstrap/Image";

function Footer() {
  return (
    <Container className=" cardcontainer" fluid>
      <Card
        className="pt-5 pb-5 border-0"
        style={{
          "background-color": "#808080",
          color: "#f7f7f7",
          "font-size": "16px",
          width: "100%",
        }}
      >
        <Row className="justify-content-between" style={{ width: "93%" }}>
          <Col
            md={{ span: 1, offset: 1 }}
            lg={{ span: 1, offset: 1 }}
            xl={{ span: 1, offset: 1 }}
          >
            <Image className="logo" src={nikon}></Image>
          </Col>
          <Col
            className="justify-content-end"
            md={{ span: 2, offset: 7 }}
            lg={{ span: 2, offset: 7 }}
            xl={{ span: 2, offset: 7 }}
            xxl={{ span: 2, offset: 7 }}
          >
            <Image src={facebook} className="icon"></Image>
            <Image src={tuit} className="icon"></Image>
            <Image src={youtube} className="icon"></Image>
            <Image src={wordpress} className="icon"></Image>
          </Col>
        </Row>

        <Row
          className="newfootercontainer justify-content-between"
          style={{ width: "93%" }}
        >
          <Col
            md={{ span: "auto", offset: 1 }}
            lg={{ span: "auto", offset: 1 }}
            xl={{ span: "auto", offset: 1 }}
            className="columfooter"
            // xxl="auto"
            // lg="auto"
            // md="auto"
          >
            <Card.Text className="mb-2" style={{ "font-weight": "600" }}>
              Dónde Comprar
            </Card.Text>
            <Card.Text className="m-0">Buscador de tiendas</Card.Text>
            <Card.Text>Tiendas en linea</Card.Text>
          </Col>

          <Col
            // md={{ span: 3, offset: 0 }}
            // lg={{ span: 3, offset: 0 }}
            // xl={{ span: 3, offset: 0 }}

            className="columfooter"
            xxl="auto"
            lg="auto"
            md="auto"
          >
            <Card.Text className="mb-2" style={{ "font-weight": "600" }}>
              Productos
            </Card.Text>
            <Card.Text className="m-0">Cámaras mirrorless</Card.Text>
            <Card.Text className="m-0">Objetivos para cámaras</Card.Text>
            <Card.Text className="m-0">Mirrorless</Card.Text>
            <Card.Text className="m-0">Cámaras DSLR</Card.Text>
            <Card.Text className="m-0">Objetivos para cámaras DSLR</Card.Text>
            <Card.Text className="m-0">Cámaras compactas</Card.Text>
            <Card.Text className="m-0">Flashes</Card.Text>
            <Card.Text className="m-0">Accesorios</Card.Text>
            <Card.Text className="m-0">Óptica deportiva</Card.Text>
            <Card.Text className="m-0">Aplicaciones y software</Card.Text>
          </Col>

          <Col
            // md={{ span: 3, offset: 0 }}
            // lg={{ span: 3, offset: 0 }}
            // xl={{ span: 3, offset: 0 }}

            className="columfooter"
            xxl="auto"
            lg="auto"
            md="auto"
          >
            <Card.Text className="mb-2" style={{ "font-weight": "600" }}>
              Servicios y soporte
            </Card.Text>
            <Card.Text className="m-0">Centro de descarga</Card.Text>
            <Card.Text className="m-0">Centro de soporte técnico</Card.Text>
            <Card.Text className="m-0">Centro de reparaciones</Card.Text>
            <Card.Text className="m-0">
              Asesoramiento de servicio técnico
            </Card.Text>
          </Col>

          <Col
            md={{ span: 2, offset: 0 }}
            lg={{ span: 2, offset: 0 }}
            xl={{ span: 2, offset: 0 }}
            className="columfooter justify-content-end"
            // xxl="auto"
            // lg="auto"
            // md="auto"
          >
            <Card.Text className="mb-2" style={{ "font-weight": "600" }}>
              Acerca de Nikon
            </Card.Text>
            <Card.Text className="m-0">Novedades</Card.Text>
            <Card.Text className="m-0">
              Responsabilidad social corporativa
            </Card.Text>
            <Card.Text className="m-0">Prensa</Card.Text>
            <Card.Text className="m-0">Eventos</Card.Text>
            <Card.Text className="m-0">Eventos anteriores</Card.Text>
            <Card.Text className="m-0">Asociaciones de Nikon</Card.Text>
            <Card.Text className="m-0">Contacto de prensa</Card.Text>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default Footer;

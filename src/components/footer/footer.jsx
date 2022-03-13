import "./stylefooter.css";
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react";
// import nikon from './nikon.jpg';
import { Image } from "react-bootstrap";


function Footer() {


    return (

        <Container className="container_footer" >
            <Row >
                <Col md={12} >
                    <Navbar className="footer_container" >
                    {/* <Image src={nikon} className="logo"></Image> */}
                        <div class="footerinfocontainer">
                            <div>
                                <p class="textfootercomprar">Dónde Comprar</p>
                                <p class="textfootercomprar">Buscador de tiendas
                                    <br /> Tiendas en linea</p>
                            </div>
                            <div>
                                <p class="textfootercomprar">Productos</p>
                                <p class="textfootercomprar">Cámaras mirrorless
                                    <br /> Objetivos para cámaras
                                    <br /> Mirrorless
                                    <br /> Cámaras DSLR
                                    <br /> Objetivos para cámaras DSLR
                                    <br /> Cámaras compactas
                                    <br /> Flashes
                                    <br /> Accesorios
                                    <br /> Óptica deportiva
                                    <br /> Aplicaciones y software</p>
                            </div>
                            <div>
                                <p class="textfootercomprar">Servicios y Soporte</p>
                                <p class="textfootercomprar">Centro de descarga
                                    <br /> Centro de soporte técnico
                                    <br /> Centro de reapraciones
                                    <br /> Asesoramiento de servicio técnico
                                   </p>
                            </div>
                            <div>
                                <p class="textfootercomprar">Acerca de Nikon</p>
                                <p class="textfootercomprar">Novedades
                                    <br /> Responsabilidad social corporativa
                                    <br /> Prensa
                                    <br /> Eventos
                                    <br /> Eventos anteriores
                                    <br /> Asociaciones de Nikon
                                    <br /> Contacto de prensa
                                   </p>
                            </div>
                        </div>



                    </Navbar>
                </Col>

            </Row>
        </Container>

    )
}

export default Footer;
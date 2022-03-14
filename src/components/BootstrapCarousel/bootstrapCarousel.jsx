import "./bootstrapCarousel.css";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import { DataContext } from "../../context/data-context";
import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";

function BootstrapCarousel() {
  const [, , , , , , , , , , , , , , urlImages, , , , , ,] =
    useContext(DataContext);
  return (
    <Container className="images-container" fluid>
      <Row>
        <Row>
          <Col
            md={{ span: "auto", offset: 1 }}
            lg={{ span: "auto", offset: 1 }}
            xl={{ span: "auto", offset: 1 }}
          >
            <Card.Title>Imágenes de ejemplo</Card.Title>
          </Col>
        </Row>
        <Row className="cardImage ">
          {urlImages ? (
            urlImages.map((url, i) => {
              if (i === 0 || i === 1 || i === 2) {
                return (
                  <Col
                    md={"auto"}
                    lg={"auto"}
                    xl={"auto"}
                    style={{ width: "24.5%" }}
                  >
                    <Card className="border-0 ">
                      <Card.Img variant="top" src={url} />
                    </Card>
                  </Col>
                );
              }
            })
          ) : (
            <React.Fragment>
              <Col md={"auto"} lg={"auto"} xl={"auto"}>
                <Card style={{ width: "24.5%" }}>
                  <Spinner animation="grow" variant="secondary" />
                </Card>
              </Col>
              <Col md={"auto"} lg={"auto"} xl={"auto"}>
                <Card style={{ width: "24.5%" }}>
                  <Spinner animation="grow" variant="secondary" />
                </Card>
              </Col>
              <Col md={"auto"} lg={"auto"} xl={"auto"}>
                <Card style={{ width: "24.5%" }}>
                  <Spinner animation="grow" variant="secondary" />
                </Card>
              </Col>
            </React.Fragment>
          )}
        </Row>
      </Row>
    </Container>
  );
}

export default BootstrapCarousel;

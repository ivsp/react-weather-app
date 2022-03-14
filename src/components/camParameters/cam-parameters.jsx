import React from "react";
import { DataContext } from "../../context/data-context";
import { useContext } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./cam-parameters.css";

function CamParameters() {
  const [, , , , , , , , camParameters, , , , , , , , , , , ,] =
    useContext(DataContext);

  return (
    <Row>
      <Card.Title
        style={{
          "margin-top": "47px",
          "font-size": "25px",

          "font-weight": "600",
        }}
      >
        Opciones recomendadas
      </Card.Title>

      {camParameters.map((pam, i) => {
        return (
          <Card key={i} className="border-0 ">
            {i === 0 ? (
              <Card.Text
                style={{
                  "margin-top": "29px",
                  "font-size": "20px",
                  "font-weight": "600",
                }}
              >
                Primera opción{" "}
              </Card.Text>
            ) : (
              <Card.Text
                style={{
                  "margin-top": "29px",
                  "font-size": "20px",
                  "font-weight": "600",
                }}
              >
                Segunda opción{" "}
              </Card.Text>
            )}
            <Card
              className="w-100 align-center border-0 params_container"
              style={{ "margin-top": "10px" }}
            >
              <Row className="text-center">
                <Col
                  className="smallOptions m-0"
                  xxl="auto"
                  lg="auto"
                  md="auto"
                  style={{ height: "80px" }}
                >
                  <Card
                    className="border-0 photo_cards "
                    style={{ height: "80px" }}
                  >
                    Diafragma:
                    <div className="parameters">{pam.diafragma}</div>
                  </Card>
                </Col>

                <Col
                  className="smallOptions m-0"
                  xxl="auto"
                  lg="auto"
                  md="auto"
                  style={{ height: "80px" }}
                >
                  <Card
                    className="border-0 photo_cards"
                    style={{ height: "80px" }}
                  >
                    Velocidad:
                    <div className="parameters">{pam.vel_obt}</div>
                  </Card>
                </Col>

                <Col
                  className="smallOptions m-0"
                  xxl="auto"
                  lg="auto"
                  md="auto"
                  style={{ height: "80px" }}
                >
                  <Card
                    className="border-0 photo_cards"
                    style={{ height: "80px" }}
                  >
                    ISO:
                    <div className="parameters">{pam.iso}</div>
                  </Card>
                </Col>
              </Row>
              <Row className="text-center">
                <Col
                  className="bigOptions"
                  xxl={12}
                  lg={12}
                  md={12}
                  style={{ height: "80px" }}
                >
                  <Card
                    className="mt-2 border-0 photo_cards-accessories"
                    style={{ height: "80px" }}
                  >
                    Accesorios:
                    <div className="parameters">{pam.acc}</div>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Card>
        );
      })}
    </Row>
  );
}

export default CamParameters;

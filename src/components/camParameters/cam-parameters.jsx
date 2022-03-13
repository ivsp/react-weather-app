import React from "react";
import { DataContext } from "../../context/data-context";
import { useContext } from "react";
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "./cam-parameters.css"

function CamParameters() {
  const [, , , , , , , , camParameters, ,] = useContext(DataContext);

  return (
    <React.Fragment>
      {camParameters.map((pam, i) => {
        return (
          <Card md={5} className="w-100 align-center border-0 params_container" key={i}>
            <Row className="text-center">
              <Col ><Card className="border-0 photo_cards" style={{ "height": "80px" }}>
                Diafragma:
                <div className="parameters">{pam.diafragma}</div>
              </Card></Col>

              <Col><Card className="border-0 photo_cards" style={{ height: "80px" }}>
                Velocidad:
                <div className="parameters">{pam.vel_obt}</div>
              </Card></Col>

              <Col><Card className="border-0 photo_cards" style={{ height: "80px" }}>
                ISO:
                <div className="parameters">{pam.iso}</div>
              </Card></Col>

            </Row>
            <Row md={5} className="text-center">
              <Col><Card className="mt-2 border-0 photo_cards-accessories" style={{ height: "80px" }}>Accesorios:

               <div className="parameters">{pam.acc}</div></Card></Col>

            </Row>
          </Card>
        );
      })}
    </React.Fragment>
  );
}

export default CamParameters;

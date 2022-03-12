import React from "react";
import { DataContext } from "../../context/data-context";
import { useContext } from "react";

function CamParameters() {
  const [, , , , , , , , camParameters, ,] = useContext(DataContext);

  return (
    <React.Fragment>
      {camParameters.map((pam, i) => {
        return (
          <div key={i}>
            <p>Diafragma: {pam.diafragma}</p>
            <p>Velocidad: {pam.vel_obt}</p>
            <p>ISO: {pam.iso}</p>
            <p>Accesorios: {pam.acc}</p>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default CamParameters;

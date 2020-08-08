import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <div>
        <h1>Mis tareas</h1>
      <div className="inicio-contenedor-botones">
        <Link to="">
          {" "}
          <Button variant="primary" size="lg" className= "boton-inicio">
            Entrar
          </Button>{" "}
        </Link>
        <Link to="">
          {" "}
          <Button variant="primary" size="lg" className= "boton-inicio">
            Registro
          </Button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Inicio;

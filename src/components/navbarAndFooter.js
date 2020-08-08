import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { propTypes } from "react-bootstrap/esm/Image";

const NavBarAndFooter = (props) => {
  return (
    <div>
      <Navbar>
        <Navbar.Brand href="#home">Mis tareas</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <div className="contenedor-informacion">
          {props.children}
      </div>

      <footer>
          <h1>hole mundo</h1>

      </footer>
    </div>
  );
};

export default NavBarAndFooter;

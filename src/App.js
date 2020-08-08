import React from "react";

import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Inicio from "./components/inicio";
import NavbarAndFooter from "./components/navbarAndFooter";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Inicio} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

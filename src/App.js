import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import Home from "./views/Home";
import Vendors from "./views/Vendors";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <HashLink smooth to="/#main">
            Home
          </HashLink>
          <HashLink smooth to="/#details">
            details
          </HashLink>
          <HashLink to="/vendors">Vendors</HashLink>
          <HashLink smooth to="/#team">
            Our Team
          </HashLink>
          <HashLink smooth to="/#sponsors">
            Sponsors
          </HashLink>
          <HashLink smooth to="/#contact">
            Contact
          </HashLink>
        </nav>

        <Switch>
          <Route path="/vendors">
            <Vendors />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

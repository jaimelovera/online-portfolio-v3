import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

// Components
import Navbar from "./components/Navbar";

// Pages
import home from "./pages/home";
import projects from "./pages/projects";
import contact from "./pages/contact";

function App() {
  return (
    <div className="app-outer-container">
      <Router>
        <Navbar />
        <div className="app-inner-container">
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/projects" component={projects} />
            <Route exact path="/contact" component={contact} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

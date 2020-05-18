import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Preview from "./views/Preview/Preview";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/preview/:id" exact component={Preview} />
      </Switch>
    </Router>
  );
}

export default App;

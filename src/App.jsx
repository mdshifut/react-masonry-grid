import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout/MainLayout";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MainLayout} />
      </Switch>
    </Router>
  );
}

export default App;

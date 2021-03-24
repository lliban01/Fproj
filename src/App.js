import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/Main";

function App() {
  return (
    <Router>

      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/home" component={Main}/>
      </Switch>
    </Router>
  );
}

export default App;

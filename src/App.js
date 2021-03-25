import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/Main";
import Labor from "./components/Labor";
import Quote from "./components/Quote";
import Newbids from "./components/Newbids";
import Paint from "./components/Paint";
import Materials from "./components/Materials";
import Oldbids from './components/Oldbids';

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

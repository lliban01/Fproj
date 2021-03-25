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
        <Route exact path="/"     component={Home}/>
        <Route path="/home"       component={Main}/>
        <Route path="/labor"      component={Labor}/>
        <Route path="/Oldbids"    component={Oldbids}/>
        <Route path="/Newbids"    component={Newbids}/>
        <Route path="/Paint"      component={Paint}/>
        <Route path="/Materials"  component={Materials}/>
        <Route path="/Quote"      component={Quote}/>
      </Switch>
    </Router>
    
  );
}

export default App;

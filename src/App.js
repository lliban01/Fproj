import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/Main";
import Labor from "./components/Labor";
import Quote from "./components/Quote";
import Newbids from "./components/Newbids";
import Paint from "./components/Paint";
import Materials from "./components/Materials";
import Oldbids from "./components/Oldbids";
import Navbar from "./components/Navbar";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSignedIn: false,
    };
  }

  initializeGoogleSignin() {
    window.gapi.load("auth2", () => {
      window.gapi.auth2
        .init({
          client_id:
            "341203008031-5se8sgjjeu2mag080em4k8g1eu5en0ut.apps.googleusercontent.com",
        })
        .then(() => {
          const isSignedIn = window.gapi.auth2
            .getAuthInstance()
            .isSignedIn.get();
          this.setState({ isSignedIn });
        });
    });
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/platform.js";
    script.onload = () => {
      this.initializeGoogleSignin();
    };
    document.body.appendChild(script);
  }

  ifUserSignedIn(Component) {
    return this.state.isSignedIn ? <Component /> : <Home />;
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />

          <Route exact path="/" component={Home} />
          <Route path="/home" render={() => this.ifUserSignedIn(Home)} />
          <Route path="/home" component={Main} />
          <Route path="/labor" component={Labor} />
          <Route path="/Oldbids" component={Oldbids} />
          <Route path="/Newbids" component={Newbids} />
          <Route path="/Paint" component={Paint} />
          <Route path="/Materials" component={Materials} />
          <Route path="/Quote" component={Quote} />
        </Router>
      </div>
    );
  }
}

export default App;

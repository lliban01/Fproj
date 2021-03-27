import React from "react";
import "../App.css";
import companyLogo from "../firstpaint.jpg";

class Home extends React.Component {
  insertGapiScript() {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/platform.js";
    script.onload = () => {
      this.initializeGoogleSignin();
    };
    document.body.appendChild(script);
  }
  componentDidMount() {
    console.log("loading");

    this.insertGapiScript();
  }
  initializeGoogleSignin() {
    window.gapi.load("auth2", () => {
      window.gapi.auth2.init({
        client_id:
          "341203008031-5se8sgjjeu2mag080em4k8g1eu5en0ut.apps.googleusercontent.com",
      });
      console.log("API inited");

      window.gapi.load("signin2", () => {
        const params = {
          onsuccess: () => {
            console.log("user sign in complete");
          },
        };
        window.gapi.signin2.render("loginButton", params);
      });
    });
  }
  render() {
    return (
      <div>
        <div>
          <h1 className="tc"> Paint Bid App</h1>
          <img className=" w-100 " src={companyLogo} alt="logo" />
        </div>
        <form action="/action_page.php" className="tc">
          <div id="loginButton">Signin with Google</div>
        </form>
      </div>
    );
  }
}

export default Home;

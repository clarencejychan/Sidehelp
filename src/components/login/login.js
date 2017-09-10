import React, { Component } from 'react';
import './style.scss';
import $ from 'jquery';

class Login extends Component {

  constructor(props) {
    var GoogleAuth;
    var GoogleUser;
    var UserProfile;
    super(props);

    this.renderGoogleButton = this.renderGoogleButton.bind(this);
    this.onload = this.onload.bind(this);
    this.signedIn = this.signedIn.bind(this);
    this.state = {signedIn: null};
  }

  componentWillMount() {
    //creates and loads the google api scripts
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/platform.js?onload=onLoadCallback";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    //appends a callback onto the script
    //the callback will run when the scripts finish loading
    window.onLoadCallback = this.onload.bind(this);
  }

  onload() {
    this.GoogleAuth = gapi.auth2.getAuthInstance();
    this.renderGoogleButton();
    this.GoogleAuth.isSignedIn.listen(this.signedIn);
    if(this.GoogleAuth.isSignedIn == true){
      this.setState({signedIn: true});
    }else if(this.GoogleAuth.isSignedIn == false){
      this.setState({signedIn: false});
    }
    this.signedIn();
  }

  signedIn(listener) {
    this.setState({signedIn: listener});
    this.renderGoogleButton();
    if(this.state.signedIn == true){
      console.log("User is already signed in. Redirect to home page.");
      this.renderSignoutButton();
    } else if (this.state.signedIn == false){
      console.log("User is not signed in.");
    }
  }

  renderGoogleButton(){
    gapi.signin2.render("googleButton",
    {
      scope: 'email',
      width: 300,
      height: 50,
      longtitle: true,
      theme: 'dark',
    });
  }

  renderSignoutButton(){
    gapi.signin2.render("signoutButton",
    {
      scope: 'email',
      width: 300,
      height: 50,
      longtitle: true,
      theme: 'light',
    });
    var signoutButtonId = document.querySelectorAll("[id^='connected']");
    document.getElementById($(signoutButtonId[1]).attr("id")).innerHTML = "Sign Out";
  }

  render(event) {

    const signinState = this.state.signedIn;
    let loginButton = null;
    if (signinState == true){
      loginButton = <div className="googleButtons"><div className="g-signin2" id="googleButton"></div><div className="g-signin2" id="signoutButton"></div></div>;
    } else {
      loginButton = <div className="googleButton"><div className="g-signin2" id="googleButton"></div></div>;
    }

    return (
      <div className="login-container">
        {loginButton}
      </div>
    );
  }
};

export default Login;

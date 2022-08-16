/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import jwt_decode from "jwt-decode";

function App() {
  const [userInfo, setUserInfo] = useState();

  const handleLogin = (response) => {
    console.log(response.credential, "id token, credentials");
    let userObject = jwt_decode(response.credential);
    setUserInfo(userObject);
  };
  console.log(userInfo);

  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "247793283933-ra0909fqf0198n6pg2vr58mvbj0eeot7.apps.googleusercontent.com",
      callback: handleLogin,
    });
    google.accounts.id.renderButton(document.getElementById("signInButton"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <div className="App">{userInfo ? <Home user={userInfo} /> : <Login />}</div>
  );
}

export default App;

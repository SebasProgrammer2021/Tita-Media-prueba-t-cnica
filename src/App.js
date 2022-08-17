/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import jwt_decode from "jwt-decode";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

function App() {
  const [userInfo, setUserInfo] = useState();

  const handleLogin = (response) => {
    let userObject = jwt_decode(response.credential);
    setUserInfo(userObject);
  };

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
    <QueryClientProvider client={queryClient}>
      <div className="App">
        {userInfo ? <Home user={userInfo} /> : <Login />}
      </div>
    </QueryClientProvider>
  );
}

export default App;

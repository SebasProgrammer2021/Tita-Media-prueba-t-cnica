/* eslint-disable no-undef */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { setUserInfo } from "../redux/reducers/userInfo";

const Login = () => {
  // const dispatch = useDispatch();
  // const userInfo = useSelector((state) => state?.userInfo);
  // console.log("🚀 ~ file: Login.jsx ~ line 11 ~ Login ~ userInfo", userInfo);

  const handleLogin = (response) => {
    console.log(response.credential, "id token, credentials");
    let userObject = jwt_decode(response.credential);
    console.log(userObject);
    // dispatch(setUserInfo(userObject));
  };

  useEffect(() => {
    // global google
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
    <div>
      <div id="signInButton"></div>
    </div>
  );
};

export default Login;

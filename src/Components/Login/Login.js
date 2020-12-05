import React from "react";
import "./Login.css";
import moduleName from "module";
import { loginUrl } from "../../config/spotify";

function Login() {
  return (
    <div className="login">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
        alt="Spotify Logo"
      />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;

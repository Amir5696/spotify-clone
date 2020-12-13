import "./App.css";
import Login from "../Components/Login/Login";
import Player from "../Components/Player/Player";

import { useEffect, useState } from "react";
import { getTokenFromUrl } from "../config/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer/DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({ type: "SET_PLAYLISTS", playlists });
      });
      spotify.getPlaylist("37i9dQZEVXcOpAOFijxZBU").then((response) => {
        dispatch({ type: "SET_DISCOVER_WEEKLY", discover_weekly: response });
      });
    }
  }, []);
  console.log(user, token);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;

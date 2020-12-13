import React from "react";
import "./SongRow.css";
import { PlayArrow } from "@material-ui/icons";

const SongRow = ({ track = "test" }) => {
  return (
    <div className="songrow">
      <PlayArrow className="songrow__playicon" />
      <img className="songrow__image" src={track.album.images[0].url} alt="" />
      <div className="songrow__info">
        <div>
          <h1>{track.name}</h1>
          <p
            className="songrow__name"
            title={track.artists.map((artist) => artist.name).join(", ")}
          >
            {track.artists.map((artist) => artist.name).join(", ")}
          </p>
        </div>
        <div>
          <p className="songrow__album">{track.album.name}</p>
        </div>
      </div>
    </div>
  );
};

export default SongRow;

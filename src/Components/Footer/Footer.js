import React from "react";
import "./Footer.css";

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumlogo"
          src="https://lastfm.freetls.fastly.net/i/u/770x0/0d19bcc19fb1ed5a64736413be06d058.webp#0d19bcc19fb1ed5a64736413be06d058"
          alt=""
        />
        <div className="footer__songinfo">
          <h4>Whos dat boi</h4>
          <p>$bobo</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__icon" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer__icon footer__play" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__icon" />
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;

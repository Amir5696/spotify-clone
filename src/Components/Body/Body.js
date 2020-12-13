import React from "react";
import "./Body.css";
import Header from "../Header/Header";
import { useDataLayerValue } from "../../Containers/DataLayer/DataLayer";
import { Favorite, MoreHoriz, PlayCircleFilled } from "@material-ui/icons";
import SongRow from "../SongRow/SongRow";

const Body = ({ spotify }) => {
  const [{ user, discover_weekly }, dispatch] = useDataLayerValue();
  console.log(discover_weekly);
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discover_weekly?.images[0]?.url} alt="" />
        <div className="body__infotext">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled className="body__shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>

        {discover_weekly?.tracks.items.map((item, i) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
};

export default Body;

import React from "react";
import "./Sidebar.css";
import { useDataLayerValue } from "../../Containers/DataLayer/DataLayer";
import SidebarOption from "../SidebarOption/SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryIcon from "@material-ui/icons/LibraryMusic";

const Sidebar = () => {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
        alt="spotify logo"
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryIcon} title="Your Library" />

      <br />
      <strong className="sidebar__title"><p>PLAYLISTS</p></strong>
      <hr />

      {playlists?.items?.map((playlist, i) => (
        <SidebarOption key={i} title={playlist.name} />
      ))}
    </div>
  );
};

export default Sidebar;

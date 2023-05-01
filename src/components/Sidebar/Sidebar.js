import React from "react";
import SidebarRow from "./SidebarRow/SidebarRow";
import "./Sidebar.css";
import { ExpandMoreOutlined } from "@material-ui/icons";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { useStateValue } from "../../StateProvider";
import PersonalBanner from "./PersonalBanner";

function Sidebar({ onRouteChange }) {
  const [{ user }, dispatch] = useStateValue();
  const prevent = (e) => {
    e.preventDefault();
  };
  function Hyperlink() {
    window.open("https://www.who.int/health-topics/coronavirus#tab=tab_1");
  }

  return (
    <div className="main-sidebar">
      <SidebarRow
        src={user.photoURL}
        title={user.displayName}
      />
      <ul>
        <p>
          <a
            className="sidebar__link"
            href="#"
            onClick={Hyperlink}>
            <SidebarRow
              Icon={LocalHospitalIcon}
              title="COVID-19 Information Center"
            />
          </a>
        </p>
        <p>
          <a
            className="sidebar__link"
            href="#"
            onClick={() => onRouteChange("pages")}>
            <SidebarRow
              Icon={EmojiFlagsIcon}
              title="Pages"
            />
          </a>
        </p>
        <p>
          <a
            className="sidebar__link"
            href="#"
            onClick={() => onRouteChange("messenger")}>
            <SidebarRow
              Icon={ChatIcon}
              title="Messenger"
            />
          </a>
        </p>
        <p>
          <a
            className="sidebar__link"
            href="#"
            onClick={() => onRouteChange("friends")}>
            <SidebarRow
              Icon={PeopleIcon}
              title="Friends"
            />
          </a>
        </p>
        <p>
          <a
            className="sidebar__link"
            href="#"
            onClick={() => onRouteChange("marketplace")}>
            <SidebarRow
              Icon={StorefrontIcon}
              title="Marketplace"
            />
          </a>
        </p>
        <p>
          <a
            className="sidebar__link"
            href="#"
            onClick={() => onRouteChange("videos")}>
            <SidebarRow
              Icon={VideoLibraryIcon}
              title="Videos"
            />
          </a>
        </p>
      </ul>

      <SidebarRow
        Icon={ExpandMoreOutlined}
        title="More"
      />
      <PersonalBanner />
    </div>
  );
}

export default Sidebar;

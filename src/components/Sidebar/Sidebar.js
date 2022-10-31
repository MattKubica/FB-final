import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
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

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  const prevent = (e) => {
    e.preventDefault();
  };
  function Hyperlink() {
    window.open("https://www.who.int/health-topics/coronavirus#tab=tab_1");
  }

  return (
    <Router>
      <div className="sidebar">
        <SidebarRow
          src={user.photoURL}
          title={user.displayName}
        />
        <nav>
          <ul>
            <li>
              <Link
                className="router__link"
                onClick={Hyperlink}>
                <SidebarRow
                  Icon={LocalHospitalIcon}
                  title="COVID-19 Information Center"
                />
              </Link>
            </li>
            <li>
              <Link
                className="router__link"
                to={"../ListOfPages/Pages"}>
                <SidebarRow
                  Icon={EmojiFlagsIcon}
                  title="Pages"
                />
              </Link>
            </li>
            <li>
              <Link
                className="router__link"
                to={"../ListOfPages/Messanger"}>
                <SidebarRow
                  Icon={ChatIcon}
                  title="Messanger"
                />
              </Link>
            </li>
            <li>
              <Link
                className="router__link"
                to={"../ListOfPages/Friends"}>
                <SidebarRow
                  Icon={PeopleIcon}
                  title="Friends"
                />
              </Link>
            </li>
            <li>
              <Link
                className="router__link"
                to={"../ListOfPages/Marketplace"}>
                <SidebarRow
                  Icon={StorefrontIcon}
                  title="Marketplace"
                />
              </Link>
            </li>
            <li>
              <Link
                className="router__link"
                to={"../ListOfPages/Videos"}>
                <SidebarRow
                  Icon={VideoLibraryIcon}
                  title="Videos"
                />
              </Link>
            </li>
          </ul>
        </nav>

        <SidebarRow
          Icon={ExpandMoreOutlined}
          title="More"
        />
        <PersonalBanner />
      </div>
    </Router>
  );
}

export default Sidebar;

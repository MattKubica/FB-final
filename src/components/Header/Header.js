import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import ChatIcon from "@material-ui/icons/Chat";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "../../StateProvider";

function Header({ onRouteChange, routeStatus }) {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <div className="header__input">
          <SearchIcon />
          <input
            placeholder="Search Facebook"
            type="text"
          />
        </div>
      </div>
      <div className="header__center">
        <a
          className={`header__option `}
          onClick={() => onRouteChange("pages")}>
          <HomeIcon fontSize="large" />
        </a>
        <a
          className={`header__option ${
            routeStatus === "pages" ? "header__option--active" : ""
          }`}
          onClick={() => onRouteChange("pages")}>
          <FlagIcon fontSize="large" />
        </a>
        <a
          className={`header__option ${
            routeStatus === "messenger" ? "header__option--active" : ""
          }`}
          onClick={() => onRouteChange("messenger")}>
          <ChatIcon fontSize="large" />
        </a>
        <a
          className={`header__option ${
            routeStatus === "friends" ? "header__option--active" : ""
          }`}
          onClick={() => onRouteChange("friends")}>
          <SupervisedUserCircleIcon fontSize="large" />
        </a>
        <a
          className={`header__option ${
            routeStatus === "marketplace" ? "header__option--active" : ""
          }`}
          onClick={() => onRouteChange("marketplace")}>
          <StorefrontOutlinedIcon fontSize="large" />
        </a>
        <a
          className={`header__option ${
            routeStatus === "videos" ? "header__option--active" : ""
          }`}
          onClick={() => onRouteChange("videos")}>
          <SubscriptionsOutlinedIcon fontSize="large" />
        </a>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;

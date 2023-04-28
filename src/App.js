import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import Widgets from "./components/Widgets/Widgets";
import { useStateValue } from "./StateProvider";
import Feed from "./components/Feed/Feed";
import Marketplace from "./components/ListOfPages/Marketplace";
import Friends from "./components/ListOfPages/Friends";
import Messenger from "./components/ListOfPages/Messenger";
import Videos from "./components/ListOfPages/Videos";

function App() {
  const [{ user }, dispatch] = useStateValue();
  const [routeStatus, setRouteStatus] = useState("pages");
  const onRouteChange = (route) => {
    setRouteStatus(route);
  };

  let bodyCenterComponent = null;

  if (routeStatus === "pages") {
    bodyCenterComponent = <Feed />;
  } else if (routeStatus === "marketplace") {
    bodyCenterComponent = <Marketplace />;
  } else if (routeStatus === "friends") {
    bodyCenterComponent = <Friends />;
  } else if (routeStatus === "messenger") {
    bodyCenterComponent = <Messenger />;
  } else if (routeStatus === "videos") {
    bodyCenterComponent = <Videos />;
  }

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <div className="app__header">
            <Header onRouteChange={onRouteChange} />
          </div>
          <div className="app__body">
            <Sidebar onRouteChange={onRouteChange} />
            <div className="body__center">{bodyCenterComponent}</div>
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;

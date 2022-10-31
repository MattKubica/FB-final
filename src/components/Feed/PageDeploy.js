import React from "react";
import Feed from "./Feed";
import Messanger from "../ListOfPages/Messanger";
import CovidCenter from "../ListOfPages/CovidCenter";
import Videos from "../ListOfPages/Videos";
import Marketplace from "../ListOfPages/Marketplace";
import Layout from "../Sidebar/Layout";
import Friends from "../ListOfPages/Friends";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function PageDeploy() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Layout />}
          />
          <Route
            index
            element={<Feed />}
          />
          <Route
            path={"ListOfPages/Friends"}
            element={<Friends />}
          />
          <Route
            path={"ListOfPages/Pages"}
            element={<Feed />}
          />
          <Route
            path={"ListOfPages/Marketplace"}
            element={<Marketplace />}
          />
          <Route
            path={"ListOfPages/Messanger"}
            element={<Messanger />}
          />
          <Route
            path={"ListOfPages/Videos"}
            element={<Videos />}
          />
          <Route
            path={"*"}
            element={<CovidCenter />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default PageDeploy;

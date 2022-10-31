import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import Widgets from "./components/Widgets/Widgets";
import { useStateValue } from "./StateProvider";
import PageDeploy from "./components/Feed/PageDeploy";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <PageDeploy />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;

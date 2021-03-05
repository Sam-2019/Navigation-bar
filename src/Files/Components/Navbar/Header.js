import React from "react";
import {  useLocation } from "react-router-dom";
import HomeHeader from "./HomeHeader";
import OtherHeader from "./OtherHeader";
import "./header.css";

const Header = () => {
  let activeHeader;

  let location = useLocation();

  switch (location.pathname) {
    case "/":
      activeHeader = <HomeHeader />;
      break;
    default:
      activeHeader = <OtherHeader />;
  }

  return <header className="head">{activeHeader}</header>;
};

export default Header;

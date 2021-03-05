import React from "react";
import { NavLink } from "react-router-dom";
import { UserIcon, CartIcon, SearchIcon, JustifyIcon } from "../Icons";

const HomeHeader = () => {
  return (
    <>
      <div className="section-1">
        <span className=" company-name ">Company Name</span>
      </div>

      <div className="section-2">
        <NavLink to="/user">
          <UserIcon />
        </NavLink>

        <NavLink to="/cart">
          <CartIcon />
        </NavLink>

        <NavLink to="/search">
          <SearchIcon />
        </NavLink>

        <JustifyIcon />
      </div>
    </>
  );
};

export default HomeHeader;

import React from "react";
import { useLocation } from "react-router-dom";
import { BackIcon, Share } from "../Icons";

const OtherHeader = () => {
  let activeHeader;
  let text;
  let productText;

  let location = useLocation();

  switch (location.pathname) {
    case "/search":
      activeHeader = <Search />;
      break;
    case "/cart":
      activeHeader = <Cart />;
      text = location.pathname.replace("/", "");
      break;
    case "/user":
      activeHeader = <User />;
      text = "Profile";
      break;
    default:
      activeHeader = <Product />;
      productText = location.pathname.replace("/product/", "");
      break;
  }

  return (
    <>
      <div className="section-1">
        <BackIcon />
        <span className="header-text">{text}</span>
        <span className="header-text2">{productText}</span>
      </div>

      {activeHeader}
    </>
  );
};

export default OtherHeader;

const Search = () => {
  return <div className="section-4">Hi</div>;
};

const Cart = () => {
  return <div className="section-4">Hi</div>;
};

const Product = () => {
  return <Share />;
};

const User = () => {
  return <div className="section-4">Hi</div>;
};

import React from "react";
import { useLocation } from "react-router-dom";
import { BackIcon, Share } from "../Icons";
import { Section1, Section4 } from "../../../Styles";

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
      <Section1>
        <BackIcon />
        <span className="header-text">{text}</span>
        <span className="header-text2">{productText}</span>
      </Section1>

      {activeHeader}
    </>
  );
};

export default OtherHeader;

const Search = () => {
  return <Section4>Hi</Section4>;
};

const Cart = () => {
  return <Section4>Hi</Section4>;
};

const Product = () => {
  return <Share />;
};

const User = () => {
  return <Section4>Hi</Section4>;
};

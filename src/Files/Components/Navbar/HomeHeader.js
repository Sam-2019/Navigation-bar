import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { UserIcon, CartIcon, SearchIcon, JustifyIcon } from "../Icons";
import { Section1, Section2, Section3, Section4 } from "../../../Styles";

const CompanyName = styled.span`
  font-size: 20px;

  @media (max-width: 540px) {
  }

  @media (max-width: 320px) {
  }

  @media (max-width: 280px) {
    font-size: 19px;
  }
`;

const HomeHeader = () => {
  return (
    <>
      <Section1>
        <CompanyName>Company Name</CompanyName>
      </Section1>

      <Section2>
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
      </Section2>
    </>
  );
};

export default HomeHeader;

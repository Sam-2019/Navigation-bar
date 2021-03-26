import React from "react";
import { useParams } from "react-router-dom";
import { Body } from "../../Styles";

const Product = () => {
  let { id } = useParams();

  return <Body>{id}</Body>;
};

export default Product;

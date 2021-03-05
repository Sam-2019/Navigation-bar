import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  let { id } = useParams();

  return <div>{id}</div>;
};

export default Product;

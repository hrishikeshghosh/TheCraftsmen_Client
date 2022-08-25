/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./productcard.css";
import { Rating } from "@mui/material";
const Productcard = ({ thumbnail, name, price, rating }) => {
  // const [star, setStar] = useState(rating);

  // const setRating = (changedRating) => {
  //   setRating(changedRating);
  // };

  return (
    <div className="productcard-root">
      <img src={thumbnail} alt="product" />
      <p className="product-price">Starting from &#8377; {price}</p>
      <p className="product-title">{name}</p>
      <Rating
        name="half-rating"
        value={rating}
        precision={0.5}
        style={{ color: "#59815b" }}
        readOnly
      />
    </div>
  );
};

export default Productcard;

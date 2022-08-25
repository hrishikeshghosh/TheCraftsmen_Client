import React from "react";
import "./style.scss";
import { ReactComponent as SearchLogo } from "../../assets/search.svg";

const dummy = [
  {
    name: "Dummy",
    price: 400 + Math.floor(Math.random() * 1000),
    img: "https://www.vtcclaypotindia.com/wp-content/uploads/2018/09/newbanner2.jpg",
    id: Math.floor(Math.random() * 100000),
  },
  {
    name: "Dummy",
    price: 400 + Math.floor(Math.random() * 1000),
    img: "https://www.vtcclaypotindia.com/wp-content/uploads/2018/09/newbanner2.jpg",
    id: Math.floor(Math.random() * 100000),
  },
  {
    name: "Dummy",
    price: 400 + Math.floor(Math.random() * 1000),
    img: "https://www.vtcclaypotindia.com/wp-content/uploads/2018/09/newbanner2.jpg",
    id: Math.floor(Math.random() * 100000),
  },
  {
    name: "Dummy",
    price: 400 + Math.floor(Math.random() * 1000),
    img: "https://www.vtcclaypotindia.com/wp-content/uploads/2018/09/newbanner2.jpg",
    id: Math.floor(Math.random() * 100000),
  },
  {
    name: "Dummy",
    price: 400 + Math.floor(Math.random() * 1000),
    img: "https://www.vtcclaypotindia.com/wp-content/uploads/2018/09/newbanner2.jpg",
    id: Math.floor(Math.random() * 100000),
  },
  {
    name: "Dummy",
    price: 400 + Math.floor(Math.random() * 1000),
    img: "https://www.vtcclaypotindia.com/wp-content/uploads/2018/09/newbanner2.jpg",
    id: Math.floor(Math.random() * 100000),
  },
  {
    name: "Dummy",
    price: 400 + Math.floor(Math.random() * 1000),
    img: "https://www.vtcclaypotindia.com/wp-content/uploads/2018/09/newbanner2.jpg",
    id: 400 + Math.floor(Math.random() * 1000),
  },
  {
    name: "Dummy",
    price: 400 + Math.floor(Math.random() * 1000),
    img: "https://www.vtcclaypotindia.com/wp-content/uploads/2018/09/newbanner2.jpg",
    id: Math.floor(Math.random() * 100000),
  },
  {
    name: "Dummy",
    price: 400 + 400 + Math.floor(Math.random() * 1000),
    img: "https://www.vtcclaypotindia.com/wp-content/uploads/2018/09/newbanner2.jpg",
    id: Math.floor(Math.random() * 100000),
  },
];

const EcomCollection = () => {
  return (
    <div className="ecom-collection-wrapper">
      <section className="ecom-collection-banner">
        <SearchBar />
      </section>
      <section className="ecom-collection-main">
        <h2>Our Products</h2>
        <div className="product-grid">
          {dummy.map((ele) => (
            <Card {...ele} key={ele.id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default EcomCollection;

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <input placeholder="Search your desire products..." />
      <SearchLogo />
    </div>
  );
};

const Card = ({ name, price, img }) => {
  const randomDis = Math.floor(Math.random() * 20);
  return (
    <div
      className="product-card-wrapper"
      onClick={() => (window.location.href = "/ecom/collections/product/123")}
    >
      <div className="image-wrapper">
        <img src={img} alt="" />
      </div>
      <h3>{name + " " + Math.floor(Math.random() * 100)}</h3>
      <h4>
        <s>
          {price.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
          })}
        </s>
        <b>
          {parseInt((price * (100 - randomDis)) / 100).toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
          })}
        </b>
        <span>{randomDis}% Off</span>
      </h4>
    </div>
  );
};

import React from "react";
import "./orderDetails.scss";
const OrderDetails = () => {
  return (
    <div className="od-root">
      <div className="prod-checkout-box">
        <h1>Shopping Cart</h1>
        <section className="op-product-details">
          <img
            className="prod-img"
            src="https://images.unsplash.com/photo-1589051079002-b140a970f568?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGFuZGljcmFmdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
          />
          <p className="od-title">
            Embrodery Rajesthani Saree{" "}
            <span className="od-price">&#8377; 5000</span>
          </p>
          <img
            className="od-static-img"
            src={
              "https://res.cloudinary.com/dwtjde0mg/image/upload/v1661451115/6081548-removebg-preview_ov3d6i.png"
            }
          />
        </section>
        <section className="op-product-payment-gate"></section>
      </div>
    </div>
  );
};

export default OrderDetails;

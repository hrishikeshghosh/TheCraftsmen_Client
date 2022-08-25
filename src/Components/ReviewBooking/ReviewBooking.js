/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import $ from "jquery";
import { Rating, Select, MenuItem, TextField } from "@mui/material";
import "./reviewBooking.css";
import Confirmation from "../Confirmation/Confirmation";

const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;

    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

const ReviewBooking = () => {
  const [title, setTitle] = useState("Mr");
  const [openConfirm, setOpenConfirm] = useState(false);
  const [orderID, setOrderID] = useState(false);

  useEffect(() => {
    $(window).scrollTop(0);
  }, []);

  const displayRazorPay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert(
        "We are having a problem to load your Payment, Are you still online?"
      );
      return;
    }

    var options = {
      key: "rzp_test_DvgVg00QNj1lSy", // Enter the Key ID generated from the Dashboard
      amount: "500000",
      currency: "INR",
      name: "North India Tour",
      description: "Complete your payment for the tour",
      // order_id: "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response) {
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_signature);
        setOpenConfirm(true);
        setOrderID(response.razorpay_order_id);
      },
      theme: {
        color: "#3399cc",
      },
    };
    var payment = new window.Razorpay(options);
    payment.open();
  };

  return (
    <div className="rb-root">
      {openConfirm && (
        <Confirmation setOpen={setOpenConfirm} orderID={orderID} />
      )}
      <sevtion className="tour-info">
        <section className="tour-info-1">
          <h4 className="rb-title">Booking Review</h4>
          <div className="tour-place-details">
            <div>
              <h2>North India</h2>
              <Rating
                value={3.5}
                precision={0.5}
                style={{ fontSize: "1rem", color: "#1d976c", margin: "1% 0" }}
                readOnly
              />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1587135941948-670b381f08ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
          </div>
          <div className="passenger-details">
            <div className="tr-dates tr-el">
              <i class="fas fa-calendar"></i>
              <div className="pr-start">
                <p className="tr-static">Start Date</p>
                <p className="tr-dynamic">11th Aug</p>
              </div>
              &#8211;
              <div className="pr-end">
                <p className="tr-static">End Date</p>
                <p className="tr-dynamic">16th Aug</p>
              </div>
            </div>
            <div className="tr-guests tr-el">
              <i class="fas fa-user-alt"></i>
              <p className="tr-dynamic">9 guests</p>
            </div>
            <div className="tr-location tr-el">
              <i class="fas fa-plane-departure"></i>
              <p className="tr-dynamic">Howrah Station</p>
            </div>
            <div className="tr-location tr-el">
              <i class="fas fa-plane-departure"></i>
              <p className="tr-dynamic">Howrah Station</p>
            </div>
          </div>

          <div className="guide-details">
            <h4>Guide Details</h4>
            <div className="gd-content">
              <div className="gd-left">
                <h2>Raja Guide Services</h2>
                <Rating
                  value={3.5}
                  precision={0.5}
                  style={{ fontSize: "1rem", color: "#141e30", margin: "1% 0" }}
                />
                <p>Experience: 4.5/5</p>
                <p>Demand: 4.5/5</p>
                <p>Knowledge: Expert</p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt=""
              />
            </div>
          </div>
        </section>
      </sevtion>
      <section className="tour-costing">
        <div className="price-box">
          <h4>Price Break-up</h4>
          <div className="price-chart-container">
            <div className="tour-price each-price-box">
              <p className="price-title">Tour Price</p>
              <p className="price-tag">&#x20b9; 5000</p>
            </div>

            <div className="tax-price each-price-box">
              <p className="price-title">GST</p>
              <p className="price-tag">&#x20b9; 1500</p>
            </div>

            <div className="subtotal">
              <p className="price-title">Total Payable</p>
              <p className="price-tag">&#x20b9; 24000</p>
            </div>
          </div>
        </div>
        <div className="coupon-code-box">
          <h4>Apply Coupon</h4>
          <div className="coupon-input">
            <input placeholder="Enter coupon code" />
            <button>
              <i className="fas fa-long-arrow-alt-right"></i>
            </button>
          </div>
        </div>
        <button className="payment-button" onClick={(e) => displayRazorPay()}>
          pay now
        </button>
      </section>
    </div>
  );
};

export default ReviewBooking;

/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './orderDetails.scss';

const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
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

const OrderDetails = () => {
  const [openConfirm, setOpenConfirm] = useState(false);
  const [orderID, setOrderID] = useState('123');
  const displayRazorPay = async () => {
    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js',
    );

    if (!res) {
      alert(
        'We are having a problem to load your Payment, Are you still online?',
      );
      return;
    }

    var options = {
      key: 'rzp_test_DvgVg00QNj1lSy', // Enter the Key ID generated from the Dashboard
      amount: '500000',
      currency: 'INR',
      name: 'North India Tour',
      description: 'Complete your payment for the tour',
      // order_id: "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response) {
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_signature);
        setOpenConfirm(true);
        setOrderID(response.razorpay_order_id);
      },
      theme: {
        color: '#3399cc',
      },
    };
    var payment = new window.Razorpay(options);
    payment.open();
  };

  return (
    <div className='od-root'>
      <div className='prod-checkout-box'>
        <h1>Shopping Cart</h1>
        <section className='op-product-details'>
          <img
            className='prod-img'
            src='https://images.unsplash.com/photo-1589051079002-b140a970f568?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGFuZGljcmFmdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
            alt=''
          />
          <p className='od-title'>
            Embrodery Rajesthani Saree{' '}
            <span className='od-price'>&#8377; 5000</span>
          </p>
          {/* <img
            className="od-static-img"
            src={
              "https://res.cloudinary.com/dwtjde0mg/image/upload/v1661451115/6081548-removebg-preview_ov3d6i.png"
            }
          /> */}
        </section>
        <section className='op-product-payment-gate'>
          <div className='pay-me-box'>
            <h4>Pay for your Purchase</h4>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OrderDetails;

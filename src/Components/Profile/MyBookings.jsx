import React from "react";
import Guides from "../Guides/Guides";
const MyBookings = () => {
  return (
    <div className="mb-root">
      <h1>My Bookings</h1>
      <Guides booked={true} />
      <Guides booked={true} />
      <Guides booked={true} />
    </div>
  );
};

export default MyBookings;

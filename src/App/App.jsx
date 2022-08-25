import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Auth from '../Authentication/Auth';
import Appbar from "../Components/Appbar/Appbar";
import BookingShelf from "../Components/BookingShelf/BookingShelf";
import Contact from "../Components/ContactPage/Contact";
import GuideList from "../Components/GuideList/GuideList";
import Home from "../Components/Home/Home";
import ReviewBooking from "../Components/ReviewBooking/ReviewBooking";
import Profile from "../Components/Profile/Profile";
import EcomCollection from "../Ecom/Pages/Collections";
import EcomHome from "../Ecom/Pages/Home";
import ProductDisplay from "../Ecom/Pages/ProductDisplay/ProductDisplay";
import OrderDetails from "../Ecom/Pages/OrderDetails/OrderDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/packages" element={<GuideList />} />
        <Route path="/view-tour/:id" element={<BookingShelf />} />
        <Route
          path="/:id/review-booking/:bookingID"
          element={<ReviewBooking />}
        />
        <Route path="/profile">
          <Route index path="/profile/account" element={<Profile />} />
          <Route path="/profile/mybookings" element={<Profile />} />
          <Route path="/profile/myorders" element={<Profile />} />
          <Route path="/profile/wishlist" element={<Profile />} />
        </Route>
        <Route path="/">
          <Route index path="/" element={<EcomHome />} />
          <Route path="/ecom/collections" element={<EcomCollection />} />
          <Route
            path="/ecom/collections/product/:id"
            element={<ProductDisplay />}
          />
          <Route path="/product-review" element={<OrderDetails />} />
        </Route>
      </Routes>
      <Contact />
    </BrowserRouter>
  );
};

export default App;

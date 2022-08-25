/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./bookingshelf.css";
import { Rating } from "@mui/material";
import BookingComponent from "./BookingComponent";
import DateRangePicker from "../DateRangePicker/DateRangePicker";
import $ from "jquery";
import GuestPicker from "../GuestPicker/GuestPicker";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BookTour, get_A_Tour } from "../../Actions/Tour_Actions";
import Lottie from "lottie-react";
import smallLoader from "../../Helper/Loaders/SmallLoader.json";
import moment from "moment";

const BookingShelf = () => {
  const [active, setActive] = useState(0);
  const [guests, setGuests] = useState(0);
  const [date, setDate] = useState(moment(new Date()).toString());
  const [mobileView, setMobileView] = useState(false);

  // const [extraGuest, setExtraGuest] = useState(0);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { tourDetails } = useSelector((state) => state.tours);

  useEffect(() => {
    if (window.innerWidth < 700) setMobileView(true);
  }, [window.innerWidth]);

  useEffect(() => {
    dispatch(get_A_Tour(id));
  }, [dispatch]);

  useEffect(() => {
    $(window).scrollTop(0);
  }, []);

  function scroll(name) {
    $(`.${name}`)[0].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }

  function setLinkActive(e, num) {
    e.preventDefault();
    setActive(num);
    if (num === 0) scroll("aboutplace-root");
    if (num === 1) scroll("facilities-root");
    if (num === 2) scroll("spotlight-root");
    if (num === 4) scroll("reviews-root");
  }
  if (tourDetails === null)
    return (
      <Lottie
        animationData={smallLoader}
        loop={true}
        autoPlay={true}
        style={{ height: "90vh" }}
      />
    );
  else {
    return (
      <div className="bookingshelf-root">
        <div className="image-section">
          <img
            className="is-left-img"
            src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGFqJTIwbWFoYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
          <div className="bs-img-divider">
            <img
              src="https://images.unsplash.com/photo-1610045828351-3f9737ca7bd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGluZGlhbiUyMHRvdXJpc218ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1651478881270-6c3a0fc883f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGluZGlhbiUyMHRvdXJpc218ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
          </div>
          <button>See All Photos</button>
        </div>
        <section className="booking-details-sect">
          <section className="det-left">
            <div className="det-1">
              <h2>{tourDetails?.name}</h2>
              <div>
                <Rating
                  precision={0.5}
                  value={tourDetails?.ratingsAverage}
                  readOnly
                  style={{ fontSize: "0.9rem" }}
                  sx={{ color: "#1d976c" }}
                />
                <p>
                  {tourDetails?.ratingsQuantity}{" "}
                  {tourDetails?.ratingsQuantity > 1 ? "Ratings" : "Rating"}
                </p>
              </div>
            </div>
            <div className="det-2">
              <div className="mb-bs-appbar">
                <p className="active-link">About</p>
                <i class="fas fa-angle-down"></i>
              </div>

              {!mobileView && (
                <div className="det-appbar">
                  <p
                    className={active === 0 && "active-link"}
                    onClick={(e) => {
                      setLinkActive(e, 0);
                    }}
                  >
                    About
                  </p>
                  <p
                    className={active === 1 && "active-link"}
                    onClick={(e) => setLinkActive(e, 1)}
                  >
                    Facilities
                  </p>
                  <p
                    className={active === 2 && "active-link"}
                    onClick={(e) => setLinkActive(e, 2)}
                  >
                    Spotlight
                  </p>
                  {/* <p
                className={active === 3 && "active-link"}
                onClick={(e) => setLinkActive(e, 3)}
              >
                Avaibility
              </p> */}
                  <p
                    className={active === 4 && "active-link"}
                    onClick={(e) => setLinkActive(e, 4)}
                  >
                    Reviews
                  </p>
                  <p
                    className={active === 5 && "active-link"}
                    onClick={(e) => setLinkActive(e, 5)}
                  >
                    Policies
                  </p>
                </div>
              )}
              <BookingComponent render={0} data={tourDetails} />
              <BookingComponent render={1} data={tourDetails} />
              <BookingComponent render={2} data={tourDetails} />
              {/* <BookingComponent render={3} /> */}
              <BookingComponent render={4} data={tourDetails} />
            </div>
          </section>
          <section className="                                                                 8f8">
            <div className="p-box">
              <h3>
                &#8377; {tourDetails?.price + tourDetails?.price * 0.05}{" "}
                <span> {tourDetails?.price * 0.05} (GST)</span>
              </h3>
              <DateRangePicker
                availDates={tourDetails?.startDates}
                setDate={setDate}
              />
              <GuestPicker
                guests={guests}
                setGuests={setGuests}
                // setExtraGuest={setExtraGuest}
              />
              <div className="charge-displayer">
                <div className="tour-charges charges">
                  <p c-title>Tour charges</p>

                  <p className="c-price">&#8377; {tourDetails?.price}</p>
                </div>
                {/* {extraGuest !== 0 && (
                  <div className="extra-guests charges">
                    <p c-title>Extra guest charges</p>
                    <p className="c-price">&#8377; {extraGuest}</p>
                  </div>
                )} */}
                <div className="gst-charges charges">
                  <p c-title>GST</p>
                  <p className="c-price">&#8377; {tourDetails?.price * 0.05}</p>
                </div>
                <div className="total-charges">
                  <p className="tt">Total Price</p>
                  <p className="tc-price">
                    &#8377; {tourDetails?.price + tourDetails?.price * 0.05}
                  </p>
                </div>
              </div>
              <button
                className="book-button"
                onClick={() => {
                  if (new Date(date).getDate() <= new Date().getDate()) {
                    alert("Please Select a date from today");
                  } else {
                    // dispatch(BookTour(id, new Date(date).toISOString()));
                    console.log("passed");
                  }
                  window.location.href = `/${id}/review-booking/123`;
                }}
              >
                Book Tour
              </button>
            </div>
          </section>
        </section>
      </div>
    );
  }
};

export default BookingShelf;

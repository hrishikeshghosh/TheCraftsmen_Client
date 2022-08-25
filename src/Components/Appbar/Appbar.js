/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar, IconButton } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Auth from "../../Authentication/Auth";
import { useDispatch, useSelector } from "react-redux/es/exports";
import "./appbar.css";
import { GetCurrentUser } from "../../Actions/User_Actions";
import { UNAUTHENTICATE } from "../../Constants";
import SellerSelection from "../SellerSelection/SellerSelection";
const Appbar = () => {
  const [open, setOpen] = useState(false);
  const [openAuth, setOpenAuth] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [mobileDisplay, setMobileDisplay] = useState(false);
  const [ssOpen, setSsOpen] = useState(false);
  const { authStat, userData } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClick, true);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("C-tid") || authStat) {
      setAuthenticated(true);
      dispatch(GetCurrentUser());
    }
  }, [localStorage.getItem("C-tid"), authStat]);

  useEffect(() => {
    if (window.innerWidth < 700) setMobileDisplay(true);
    else setMobileDisplay(false);
  }, [window.innerWidth]);

  const hideOnEscape = (e) => {
    if (e.key === "Escape") setOpen(false);
  };
  const hideOnClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) setOpen(false);
  };

  return (
    <div className="appbar-root">
      <div className="appbar-contents">
        <div
          className="logo-holder"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          <h3>The Craftsmen</h3>
        </div>
        {mobileDisplay ? (
          <IconButton
            className="mobile-menu"
            onClick={() => setOpen((pv) => !pv)}
          >
            <i class="fas fa-compass"></i>
          </IconButton>
        ) : authenticated ? (
          <div className="appbar-right" onClick={() => setOpen((pv) => !pv)}>
            <Avatar />
            <p>{userData === null ? "Loading..." : userData?.name}</p>
            <i className="fas fa-angle-down"></i>
          </div>
        ) : (
          <div className="appbar-right">
            <p className="authme-btn" onClick={() => setOpenAuth(true)}>
              Login
            </p>
            <div className="appr-divider"></div>
            <p className="join-us-btn" onClick={() => setSsOpen(true)}>
              Join us.
            </p>
          </div>
        )}

        {open && (
          <div className="appbar-menu" ref={ref}>
            <p onClick={() => (window.location.href = "/profile/account")}>
              <span>
                <i className="fas fa-user"></i>
              </span>
              Profile
            </p>
            <p onClick={() => (window.location.href = "/profile/mybookings")}>
              <span>
                <i className="fas fa-briefcase"></i>
              </span>
              My Bookings
            </p>
            <p onClick={() => (window.location.href = "/profile/myorders")}>
              <span>
                <i class="fas fa-shopping-bag"></i>
              </span>
              My Orders
            </p>
            <p onClick={() => (window.location.href = "/profile/wishlist")}>
              <span>
                <i className="fas fa-heart"></i>
              </span>
              Wishlist
            </p>
            <p
              className="logout-btn"
              onClick={() => {
                if (localStorage.getItem("C-tid")) {
                  dispatch({ type: UNAUTHENTICATE });
                  window.location.reload();
                  setOpen(false);
                } else {
                  setOpenAuth(true);
                  setOpen(false);
                }
              }}
            >
              <span>
                <i className="fas fa-power-off"></i>
              </span>
              {authenticated ? "Logout" : "Login"}
            </p>
          </div>
        )}
      </div>
      {openAuth && <Auth setAuthOpen={setOpenAuth} />}
      {ssOpen && <SellerSelection setOpen={setSsOpen} />}
    </div>
  );
};

export default Appbar;

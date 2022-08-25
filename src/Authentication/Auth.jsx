/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SignIn, SignUp } from "../Actions/User_Actions";
import "./auth.css";

const initValues = { name: "", email: "", password: "", passwordConfirm: "" };

const Auth = ({ setAuthOpen }) => {
  const [login, setLogin] = useState(true);
  const [data, setData] = useState(initValues);
  const [mobileView, setMobileView] = useState(false);
  const ref = useRef(null);
  const dispatch = useDispatch();
  const { authStat } = useSelector((state) => state.users);

  const Authenticateuser = () => {
    if (login) dispatch(SignIn({ email: data.email, password: data.password }));
    else dispatch(SignUp(data));
    setAuthOpen(false);
  };

  useEffect(() => {
    if (window.innerWidth < 700) setMobileView(true);
  }, [window.innerWidth]);

  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClick, true);
  }, []);

  const hideOnEscape = (e) => {
    if (e.key === "Escape") setAuthOpen(false);
  };
  const hideOnClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) setAuthOpen(false);
  };

  return (
    <div className="auth-root">
      <div className="auth-box" ref={ref}>
        <div className="ab-movable">
          <div className="abm-content-box">
            <p className="abm-titlep">Welcome to</p>
            <h1 className="abm-titleh1">The Craftsmen</h1>
            <button onClick={() => setLogin((pv) => !pv)}>
              {login ? "Sign Up" : "Sign In"}
            </button>
          </div>
          <img
            src="https://res.cloudinary.com/dwtjde0mg/image/upload/v1660906195/panorama-view-india-with-taj-mahal-skyline-with-world-famous-landmarks_41327-607-removebg-preview_gesugw.png"
            className="drought-img"
            alt=""
          />
        </div>
        <div className="ab-static">
          <div className="static-content-box">
            <h1>
              {" "}
              {login
                ? "Sign into The Craftsmen!"
                : "Create an account with us!"}
            </h1>
            {!login && (
              <div className="input-field">
                <i class="fas fa-user"></i>
                <input
                  placeholder="Name"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
              </div>
            )}

            <div className="input-field">
              <i class="fas fa-envelope"></i>
              <input
                placeholder="Email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
            <div className="input-field">
              <i class="fas fa-lock"></i>
              <input
                placeholder="Password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </div>
            {!login && (
              <div className="input-field">
                <i class="fas fa-check-double"></i>
                <input
                  placeholder="Confirm Password"
                  value={data.passwordConfirm}
                  onChange={(e) =>
                    setData({ ...data, passwordConfirm: e.target.value })
                  }
                />
              </div>
            )}
            {login && <p className="fp-link">Forgot Password?</p>}

            <button className="auth-btn" onClick={() => Authenticateuser()}>
              {login ? "Sign In" : "Sign Up"}
            </button>
            {mobileView && (
              <p className="mb-change" onClick={() => setLogin((pv) => !pv)}>
                {login ? "Don't have an account?" : "Already have an account?"}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

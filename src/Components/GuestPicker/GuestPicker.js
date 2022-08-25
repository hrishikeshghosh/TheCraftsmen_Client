import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "./guestpicker.css";

const GuestPicker = ({ guests, setGuests, setExtraGuest }) => {
  const [adults, setAdults] = useState(0);
  const [child, setChild] = useState(0);
  const [infants, setInfants] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    let addUp = adults + child + infants;
    setGuests(addUp + " Guests");
    if (addUp >= 12) setDisabled(true);
    // if (addUp > 8) setExtraGuest((addUp - 8) * 800);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adults, child, infants]);

  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClicj, true);
  }, []);

  const hideOnEscape = (e) => {
    if (e.key === "Escape") setOpen(false);
  };

  const hideOnClicj = (e) => {
    if (ref.current && !ref.current.contains(e.target)) setOpen(false);
  };

  const increaseCounter = (tar) => {
    if (tar === 0) setAdults(adults + 1);
    if (tar === 1) setChild(child + 1);
    if (tar === 2) setInfants(infants + 1);
  };
  const decreaseCounter = (tar) => {
    if (tar === 0 && adults !== 0) setAdults(adults - 1);
    if (tar === 1 && child !== 0) setChild(child - 1);
    if (tar === 2 && infants !== 0) setInfants(infants - 1);
  };

  return (
    <div className="guest-wrap">
      <div className="g-input-box" onClick={() => setOpen((pv) => !pv)}>
        <i className="fas fa-user"></i>
        <input type={"text"} value={guests} readOnly />
        <i className="fas fa-angle-down"></i>
      </div>

      {open && (
        <div className="g-selector" ref={ref}>
          <div className="operators">
            <p>
              Adults <span>(12+)</span>
            </p>
            <div>
              <button onClick={() => increaseCounter(0)} disabled={disabled}>
                +
              </button>
              <p>{adults}</p>
              <button onClick={() => decreaseCounter(0)}>-</button>
            </div>
          </div>
          <div className="operators">
            <p>
              Children <span>(6-11)</span>
            </p>
            <div>
              <button onClick={() => increaseCounter(1)} disabled={disabled}>
                +
              </button>
              <p>{child}</p>
              <button onClick={() => decreaseCounter(1)}>-</button>
            </div>
          </div>
          <div className="operators">
            <p>
              Infants <span>(0-5)</span>
            </p>
            <div>
              <button onClick={() => increaseCounter(2)} disabled={disabled}>
                +
              </button>
              <p>{infants}</p>
              <button onClick={() => decreaseCounter(2)}>-</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GuestPicker;

import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './date.css';
const DateRangePicker = ({ availDates, setDate }) => {
  const [start, setStart] = useState('Check in');
  const [end, setEnd] = useState('Check out');
  const [open, setOpen] = useState(false);
  const refOne = useRef(null);
  useEffect(() => {
    // setStart(moment().format("MMM Do YYYY"));
    // setEnd(moment().add(7, "d").format("MMM Do YYYY"));
    document.addEventListener('keydown', hideOnEscape, true);
    document.addEventListener('click', hideOnClickOutside, true);
  }, []);

  const hideOnEscape = (e) => {
    if (e.key === 'Escape') setOpen(false);
  };

  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) setOpen(false);
  };

  const handleSelect = (date) => {
    // setCalander(date);
    setStart(moment(date).format('MMM Do YYYY'));
    setEnd(moment(date).add(7, 'd').format('MMM Do YYYY'));
    setDate(date);
  };

  return (
    <div className='calanderWrap'>
      <div className='check-in-out-box'>
        <i className='fas fa-calendar-alt'></i>
        <input
          type={'text'}
          value={start}
          onClick={() => setOpen((pv) => !pv)}
          readOnly
        />
        <input
          type={'text'}
          value={end}
          onClick={() => setOpen((pv) => !pv)}
          readOnly
        />
        <i className='fas fa-angle-down'></i>
      </div>

      <div ref={refOne}>
        {open && (
          <Calendar
            date={new Date()}
            onChange={handleSelect}
            className='calenderElement'
          />
        )}
      </div>
    </div>
  );
};

export default DateRangePicker;

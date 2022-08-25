import React from 'react';
import demodata from '../../Helper/demo_data.json';
import './dropdown.css';
const Dropdown = ({ dest, pack, guest, setValues, values }) => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (dest) {
    return (
      <div className='dropdown-root'>
        <div className='dd-search-list'>
          <i className='fas fa-search'></i>
          <input type={'text'} placeholder={'Enter city/ Area/ Region'} />
        </div>
        <div className='dd-list'>
          {demodata.places.map((each) => (
            <div className='dd-each-list'>
              <input
                className='dest-list'
                value={each.city + ', ' + each.state}
                onClick={(e) => {
                  e.preventDefault();
                  console.log(each.city + ' ' + each.state);
                  setValues({
                    ...values,
                    location: { city: each.city, state: each.state },
                  });
                }}
                readOnly
              />
            </div>
          ))}
        </div>
      </div>
    );
  } else if (pack) {
    return (
      <div className='dropdown-p-root'>
        <h3>Select Days</h3>
        <div className='dd-day'>
          {nums.flatMap((el) => (
            <button onClick={(e) => setValues({ ...values, days: el })}>
              {el}
            </button>
          ))}
        </div>
        <h3>Select Nights</h3>
        <div className='dd-day'>
          {nums.flatMap((el) => (
            <button onClick={(e) => setValues({ ...values, nights: el })}>
              {el}
            </button>
          ))}
        </div>
      </div>
    );
  } else if (guest) {
    return (
      <div className='dropdown-p-root'>
        <h3>Select Adults</h3>
        <div className='dd-day'>
          {nums.flatMap((el) => (
            <button>{el}</button>
          ))}
        </div>
        <h3>Select Children</h3>
        <div className='dd-day'>
          {nums.flatMap((el) => (
            <button>{el}</button>
          ))}
        </div>
      </div>
    );
  }
};

export default Dropdown;

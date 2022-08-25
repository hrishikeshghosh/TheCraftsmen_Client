/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Account from './Account';
import MyBookings from './MyBookings';
import MyOrders from './MyOrders';

import './profile.scss';
import Wishlist from './Wishlist';

const Profile = () => {
  const [current, setCurrent] = useState(
    window.location.pathname.substring(
      window.location.pathname.lastIndexOf('/') + 1,
    ),
  );

  const renderPage = () => {
    switch (current) {
      case 'account':
        return <Account />;
      case 'mybookings':
        return <MyBookings />;
      case 'myorders':
        return <MyOrders />;
      case 'wishlist':
        return <Wishlist />;
      default:
        <Account />;
    }
  };

  return (
    <div className='profile-root'>
      <div className='profile-left'>
        <p
          className={current === 'account' ? 'active' : null}
          onClick={() => (window.location.href = '/profile/account')}>
          <span>
            <i className='fas fa-user'></i>
          </span>
          My Profile
        </p>
        <p
          className={current === 'mybookings' ? 'active' : null}
          onClick={() => (window.location.href = '/profile/mybookings')}>
          <span>
            <i className='fas fa-briefcase'></i>
          </span>
          My Bookings
        </p>
        <p
          className={current === 'myorders' ? 'active' : null}
          onClick={() => (window.location.href = '/profile/myorders')}>
          <span>
            <i className='fas fa-shopping-bag'></i>
          </span>
          My Orders
        </p>
        <p
          className={current === 'wishlist' ? 'active' : null}
          onClick={() => (window.location.href = '/profile/wishlist')}>
          <span>
            <i className='fas fa-heart'></i>
          </span>
          My Wishlist
        </p>
        <p>
          <span>
            <i className='fas fa-power-off'></i>
          </span>
          Logout
        </p>
      </div>
      <div className='profile-right'>{renderPage()}</div>
    </div>
  );
};

export default Profile;

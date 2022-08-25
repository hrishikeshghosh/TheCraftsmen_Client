import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GetCurrentUser } from '../../Actions/User_Actions';
import './profile.scss';
const Account = () => {
  const { userData } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCurrentUser());
  }, [dispatch]);

  if (userData === null) return <h1>Loading...</h1>;
  else {
    return (
      <div className='account-root'>
        <div className='acc-box'>
          <img
            src='https://res.cloudinary.com/dwtjde0mg/image/upload/v1660973581/user_fyf2nb.png'
            alt=''
          />
          <div className='account-details'>
            <p>{userData?.name}</p>
            <p>{userData?.email}</p>
            <div className='account-buttons'>
              <button>Edit Profile</button>
              <button>Change Password</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Account;

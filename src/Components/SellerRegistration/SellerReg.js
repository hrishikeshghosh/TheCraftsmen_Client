/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from 'react';
import states from '../../Helper/states.json';
import { Select, MenuItem, Avatar } from '@mui/material';
import './sellerreg.scss';
import axios from 'axios';
const SellerReg = ({ setOpen }) => {
  const [state, setState] = useState(states[0].name);
  const [avatar, setAvatar] = useState('');

  const ref = useRef(null);
  useEffect(() => {
    document.addEventListener('keydown', handleEscape, true);
    document.addEventListener('click', handleOutsideClick, true);
  }, []);

  const handleOutsideClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) setOpen(false);
  };

  const handleEscape = (e) => {
    if (e.key === 'Escape') setOpen(false);
  };

  const uploadImage = async (img) => {
    const body = new FormData();
    body.set('key', '369c9b9679bf8aaa07bd7b1af3e3b290');
    body.append('image', img);

    return await axios({
      method: 'post',
      url: 'https://api.imgbb.com/1/upload',
      data: body,
    });
  };

  return (
    <div className='seller-reg-root'>
      <div className='seller-reg-box' ref={ref}>
        <h1>Craftsman Registration Form</h1>
        <label htmlFor='uplaod-seller-image'>
          <Avatar
            sx={{ height: '100px', width: '100px', margin: '3% auto' }}
            src={avatar !== null && URL.createObjectURL(avatar)}
          />
        </label>
        <input
          id='uplaod-seller-image'
          type={'file'}
          accept='image/*'
          onChange={async (e) => {
            // eslint-disable-next-line no-unused-vars
            const { data } = await uploadImage(e.target.files[0]);
            setAvatar(e.target.files[0]);
          }}
          style={{ display: 'none' }}
        />
        <div className='regbox-1'>
          <div className='name-box'>
            <div className='first-name-box'>
              <p>First Name</p>
              <input placeholder='Enter Your First Name' required />
            </div>
            <div className='last-name-box'>
              <p>Last Name</p>
              <input placeholder='Enter Your Last Name' required />
            </div>
          </div>
          <div className='bus-box'>
            <p>Your Phone</p>
            <input placeholder='+91 123456789' required type={'number'} />
          </div>
          <div className='all-address-box'>
            <div className='address-box'>
              <p>Your Address</p>
              <input placeholder='Enter Your address' required />
            </div>
            <div className='state-box'>
              <p>Your State</p>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={state}
                onChange={(e) => setState(e.target.value)}
                sx={{ width: '100%' }}>
                {states.map((el) => (
                  <MenuItem value={el.name}>{el.name}</MenuItem>
                ))}
              </Select>
            </div>
          </div>
          <div className='email-box'>
            <p>Your Email</p>
            <input placeholder='abc@abc.com' required type={'email'} />
          </div>
          <div className='email-box'>
            <p>Your Email</p>
            <input placeholder='eg abc@abc.com' required type={'email'} />
          </div>
          <div className='special-box'>
            <p>Your Specialization</p>
            <input placeholder='eg Handicrafts' required type={'text'} />
          </div>
          <div className='govt-box'>
            <div className='pan-box'>
              <p>Your pan Card</p>
              <input placeholder='eg ABCDE123F' required type={'text'} />
            </div>
            <div className='aadhar-box'>
              <p>Your Aadhar Card</p>
              <input placeholder='eg 1111 2222 3333' type={'text'} />
            </div>
          </div>
        </div>
        <div className='seller-submit-btn' onClick={() => setOpen(false)}>
          Submit
        </div>
      </div>
    </div>
  );
};

export default SellerReg;

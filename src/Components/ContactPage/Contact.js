import React from 'react';
import './contact.css';
const Contact = () => {
  return (
    <>
      <section className='contact-sect'>
        <div className='contact-left'>
          <h1>Stay Connected</h1>
          <p>Join over 500 people who are up for a new journey!</p>
          <div className='signup-info'>
            <input placeholder='Email Address' />
            <button>Sign up</button>
          </div>
          <div className='sm-icons'>
            <i className='fab fa-facebook'></i>
            <i className='fab fa-instagram'></i>
            <i className='fab fa-twitter'></i>
          </div>
        </div>
        <div className='contact-middle'>
          <h1>Commited to The Craftsmen</h1>
          <p>
            We are a product of TheCraftsmen team. We strive to educate and
            preach the beauty of India amongst the citizens and people around
            the globe. We share the same trust as the The crafts and we are
            always ready to make a change globally.{' '}
          </p>
          <p className='redirectory-to-about'>
            Know more about The Craftsmen{' '}
            <span>
              <i className='fas fa-long-arrow-alt-right'></i>
            </span>
          </p>
        </div>
        <div className='contact-right'>
          <h1>Contact us</h1>
          <p>
            24, 1A, Chandi Ghosh Rd, Ashok Nagar, Tollygunge, Kolkata, West
            Bengal 700040
          </p>
          <p>Main (+91) 123 456 789</p>
          <p>Support (+91) 123 456 789</p>
        </div>
      </section>
      <section className='footer'>
        <p>
          <span>&#169;</span> A Craftsmen Product
        </p>
      </section>
    </>
  );
};

export default Contact;

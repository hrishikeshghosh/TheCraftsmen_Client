import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ECOM_URL } from '../../../Constants';
import './style.scss';

const SearchEcom = () => {
  const { id } = useParams();

  const [itemData, setItemData] = useState([]);

  const getData = async () => {
    const res = await axios(ECOM_URL + 'item/search?q=' + id);
    if (!res.data.success) {
      return setItemData([]);
    }
    setItemData(res.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='search-page'>
      <section className='ecom-collection-main'>
        <h2>From Your Search</h2>
        <div className='product-grid'>
          {itemData.length > 0 &&
            itemData.map((ele) => <Card {...ele._source} key={ele.itemId} />)}
        </div>
      </section>
    </div>
  );
};

export default SearchEcom;

const Card = ({ title, price, img, itemId }) => {
  const randomDis = Math.floor(Math.random() * 20);
  return (
    <div
      className='product-card-wrapper'
      onClick={() =>
        (window.location.href = '/ecom/collections/product/' + itemId)
      }>
      <div className='image-wrapper'>
        <img src={img} alt='' />
      </div>
      <h3>{title}</h3>
      <h4>
        <s>
          {parseInt(price).toLocaleString('en-IN', {
            style: 'currency',
            currency: 'INR',
          })}
        </s>
        <b>
          {parseInt((price * (100 - randomDis)) / 100).toLocaleString('en-IN', {
            style: 'currency',
            currency: 'INR',
          })}
        </b>
        <span>{randomDis}% Off</span>
      </h4>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import './style.scss';
import { ReactComponent as SearchLogo } from '../../assets/search.svg';
import axios from 'axios';
import { ECOM_URL } from '../../../Constants';
import InfiniteScroll from 'react-infinite-scroll-component';

const EcomCollection = () => {
  const [itemData, setItemData] = useState([]);
  const [page, setPage] = useState(1);
  const getData = async () => {
    try {
      const res = await axios(ECOM_URL + 'item/?per_page=9');
      if (!res.data.success) {
        setItemData([]);
      }
      setItemData(res.data.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  const onScrollEnd = async () => {
    try {
      const res = await axios(
        ECOM_URL + 'item/?per_page=9&page_n=' + parseInt(page + 1),
      );
      if (!res.data.success) {
        return;
      }
      setItemData([...itemData, ...res.data.data.data]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className='ecom-collection-wrapper'>
      <section className='ecom-collection-banner'>
        <SearchBar />
      </section>
      <section className='ecom-collection-main'>
        <h2>Our Products</h2>
        <InfiniteScroll
          dataLength={itemData.length}
          next={() => {
            onScrollEnd();
            setPage(page + 1);
          }}
          hasMore={true}
          loader={<h4>Loading...</h4>}>
          <div className='product-grid'>
            {itemData.length > 0 &&
              itemData.map((ele) => <Card {...ele} key={ele.id} />)}
          </div>
        </InfiniteScroll>
      </section>
    </div>
  );
};

export default EcomCollection;

const SearchBar = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState('');

  const SearchHandler = async (q) => {
    if (q === '') {
      setData([]);
      return;
    }
    const res = await axios(ECOM_URL + 'item/search?q=' + q);
    if (!res.data.success) {
      return;
    }
    setData(res.data.data);
  };
  return (
    <div className='search-bar-wrapper'>
      <input
        value={text}
        onChange={(e) => {
          SearchHandler(e.target.value);
          setText(e.target.value);
        }}
        placeholder='Search your desire products...'
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            window.open('/ecom/search/' + e.target.value);
          }
        }}
      />
      <SearchLogo />
      {data.length > 0 && (
        <div className='search-data'>
          {data.map((ele) => {
            return (
              <a href={'/ecom/collections/' + ele._source.itemId}>
                {ele._source.title}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

const Card = ({ title, price, photos, _id }) => {
  const randomDis = Math.floor(Math.random() * 20);
  return (
    <div
      className='product-card-wrapper'
      onClick={() =>
        (window.location.href = '/ecom/collections/product/' + _id)
      }>
      <div className='image-wrapper'>
        <img src={photos} alt='' />
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

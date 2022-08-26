import React, { useEffect, useState } from 'react';
import './style.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Lottie from 'lottie-react';
import BigLoader from '../../../Helper/Loaders/BigLoader.json';

const data = {
  category: [
    {
      name: 'Terracotta',
      thumbnail:
        'https://www.ellementry.com/blog/wp-content/uploads/2020/04/Terracotta_Banner-Desktop.jpg',
    },
    {
      name: 'Wooden',
      thumbnail:
        'https://i.pinimg.com/736x/42/a1/d4/42a1d47662e863fcfdda2031c7e6c993.jpg',
    },
    {
      name: 'Pottery',
      thumbnail:
        'https://hindikrafts.com/wp-content/uploads/2020/09/1200px-Cobalt_Blue_Pottery_4782042700.jpg',
    },
    {
      name: 'Carpet',
      thumbnail:
        'https://m.economictimes.com/thumb/msid-58231235,width-1200,height-900,resizemode-4,imgsize-752956/indian-handmade-carpets-may-get-government-trademark.jpg',
    },
    {
      name: 'Jewllery',
      thumbnail:
        'https://cdn.yehaindia.com/wp-content/uploads/2020/06/Jewellery-1.jpg',
    },
    {
      name: 'Handlooms',
      thumbnail:
        'https://images.unsplash.com/photo-1640292343595-889db1c8262e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGFuZGxvb218ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
    },
  ],
  products: [
    {
      name: 'Bamboo and Cane Craft',
      thumbnail:
        'https://3.imimg.com/data3/MN/HB/MY-11487458/bamboo-handicrafts-home-decorative-items-500x500.jpg',
    },
    {
      name: 'Weaving',
      thumbnail: 'https://miro.medium.com/max/476/0*ztt17bG_6iUgPYXH.jpg',
    },
    {
      name: 'Silver Filigree of Cuttack',
      thumbnail:
        'https://www.dsource.in/sites/default/files/resource/silver-filigree-cuttack-orissa/introduction/minigallery/18919/3.jpg',
    },
    {
      name: 'Pattachitra',
      thumbnail:
        'https://cdn.shopify.com/s/files/1/1194/1498/products/PattachitraJagannathworkshop_4a7f3704-f785-4e4f-919a-97ed00ffa9ce_2400x.jpg?v=1641370533',
    },
    {
      name: 'Phulkari Art',
      thumbnail:
        'https://www.jai-pur.com/wp-content/uploads/2016/01/overall_phulkari_red_chinnon_chiffon_dupatta2.jpg',
    },
    {
      name: 'Paranda',
      thumbnail:
        'https://i.pinimg.com/550x/2e/2f/dd/2e2fdd7c19186f2d45f3cdab2e30d085.jpg',
    },
  ],
};

const EcomHome = () => {
  const [showLoader, setShowLoader] = useState(false);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:
      window.innerWidth > 1000 ? 3 : window.innerWidth > 800 ? 2 : 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  useEffect(() => {
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
    }, 4000);
  }, []);

  if (showLoader) {
    return (
      <div className='main-loader'>
        <Lottie
          animationData={BigLoader}
          loop={true}
          autoPlay={true}
          style={{ height: '500px' }}
        />{' '}
      </div>
    );
  }

  return (
    <div className='ecom-home-wrapper'>
      <section className='banner'>
        <center>
          <h1>The Craftsmen of India</h1>
          <h3>Best Handicrafts</h3>
          <button
            onClick={() => {
              window.scrollBy({
                top: 800,
                left: 0,
                behavior: 'smooth',
              });
            }}>
            Shop Now!
          </button>
        </center>
      </section>
      <section className='product-wrapper'>
        <h2>Top Handicarts Products</h2>
        <div className='product-wrapper-grid'>
          {data.category.map((ele) => (
            <PreviewCard key={ele.name} {...ele} />
          ))}
        </div>
      </section>
      <section className='item-wrapper'>
        <h2>Your Unique Products</h2>
        <center>
          <span style={{ color: 'gray', marginTop: '-8vh', display: 'block' }}>
            Choose from all the unique products we offer from different parts of
            India!
          </span>
        </center>
        <Slider className='items-wrapper-grid' {...settings}>
          {data.products.map((ele) => (
            <PreviewCard key={ele.name} {...ele} spl={true} />
          ))}
        </Slider>
        <button
          className='glow-on-hover'
          onClick={() => {
            window.location.href = '/ecom/collections';
          }}>
          See More
        </button>
      </section>
    </div>
  );
};

export default EcomHome;

const PreviewCard = ({ name, thumbnail, spl }) => {
  return (
    <div
      className='preview-card-wrapper'
      style={{
        padding: spl && '30px',
        boxShadow: spl && 'none',
      }}
      onClick={() => window.open('/ecom/search/' + name)}>
      <img
        src={thumbnail}
        style={{
          borderRadius: spl && '8px',
        }}
        alt={name}
      />
      <span>{name}</span>
    </div>
  );
};

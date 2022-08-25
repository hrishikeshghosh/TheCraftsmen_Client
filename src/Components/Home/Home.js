import React, { useEffect, useState } from "react";
import Button1 from "../AnimatedButtons/Button_1";
import MapPlaces from "../MapPlaces/MapPlaces";
import Productcard from "../ProductCards/Productcard";
import TourTypeCard from "../TourTypeCard/TourTypeCard";
import Lottie from "lottie-react";
import BigLoader from "../../Helper/Loaders/BigLoader.json";
import Slider from "react-slick";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./home.css";

const ecomData = {
  products: [
    {
      name: "Bamboo and Cane Craft",
      thumbnail:
        "https://3.imimg.com/data3/MN/HB/MY-11487458/bamboo-handicrafts-home-decorative-items-500x500.jpg",
      price: 499,
      rating: 3.5,
    },
    {
      name: "Weaving",
      thumbnail: "https://miro.medium.com/max/476/0*ztt17bG_6iUgPYXH.jpg",
      price: 799,
      rating: 4.5,
    },
    {
      name: "Silver Filigree of Cuttack",
      thumbnail:
        "https://www.dsource.in/sites/default/files/resource/silver-filigree-cuttack-orissa/introduction/minigallery/18919/3.jpg",
      price: 1499,
      rating: 4.5,
    },
    {
      name: "Pattachitra",
      thumbnail:
        "https://cdn.shopify.com/s/files/1/1194/1498/products/PattachitraJagannathworkshop_4a7f3704-f785-4e4f-919a-97ed00ffa9ce_2400x.jpg?v=1641370533",
      price: 822,
      rating: 2.5,
    },
    {
      name: "Phulkari Art",
      thumbnail:
        "https://www.jai-pur.com/wp-content/uploads/2016/01/overall_phulkari_red_chinnon_chiffon_dupatta2.jpg",
      price: 2999,
      rating: 4.0,
    },
    {
      name: "Paranda",
      thumbnail:
        "https://i.pinimg.com/550x/2e/2f/dd/2e2fdd7c19186f2d45f3cdab2e30d085.jpg",
      price: 1599,
      rating: 5,
    },
  ],
};

const Home = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [mobileView, setMobileView] = useState(false);

  // useEffect(() => {
  //   if (window.innerWidth < 700) setMobileView(true);
  // }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:
      window.innerWidth > 1000 ? 3 : window.innerWidth > 800 ? 3 : 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  useEffect(() => {
    setShowLoading(true);
    setTimeout(() => {
      setShowLoading(false);
    }, 4000);
  }, []);

  useEffect(() => {
    $(window).scrollTop(0);
  }, []);

  if (showLoading) {
    return (
      <div className="main-loader">
        <Lottie
          animationData={BigLoader}
          loop={true}
          autoPlay={true}
          style={{ height: "500px" }}
        />{" "}
      </div>
    );
  }
  return (
    <div className="home-root">
      <section className="front-banner">
        <div className="polaroid-1">
          <img
            src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGFqJTIwbWFoYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
        </div>
        <div className="polaroid-2">
          <img
            src="https://images.unsplash.com/photo-1566552881560-0be862a7c445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bXVtYmFpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
          <div className="banner-img-details">
            <p className="bi-title">Mumbai</p>
            <p className="bi-line">The city of dreams</p>
          </div>
        </div>

        <div className="polaroid-3">
          <img
            src="https://images.unsplash.com/photo-1597076312431-f91f36d3c04a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGthc2htaXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
        </div>
        <div className="polaroid-6">
          <img
            src="https://images.unsplash.com/photo-1496372412473-e8548ffd82bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGluZGlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
        </div>
        <div className="polaroid-4">
          <img
            src="https://images.unsplash.com/photo-1545126178-862cdb469409?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aW5kaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
          <div className="banner-img-details">
            <p className="bi-title">Hawa Mahal</p>
            <p className="bi-line">Jaipur, India</p>
          </div>
        </div>
        <div className="polaroid-5">
          <img
            src="https://images.unsplash.com/photo-1514222134-b57cbb8ce073?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
          <div className="banner-img-details">
            <p className="bi-title">Golden Temple</p>
            <p className="bi-line">Amirtsar, India</p>
          </div>
        </div>
        <div className="banner-titles">
          <h1>
            The Craftsmen <span>explorer</span>
          </h1>
          <Button1 />
        </div>
        <div className="polaroid-7">
          <img
            src="https://images.unsplash.com/photo-1588673133509-13d815c64b5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGluZGlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
        </div>
        <div className="polaroid-8">
          <img
            src="https://images.unsplash.com/photo-1517330357046-3ab5a5dd42a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGluZGlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
          <div className="banner-img-details">
            <p className="bi-title">Golden Temple</p>
            <p className="bi-line">Amirtsar, India</p>
          </div>
        </div>
      </section>
      <section className="section-merger"></section>

      <section className="explore-typecast">
        <h1 className="section-title">
          <span>Begin</span> exploration
        </h1>

        <div className="type-cards">
          <TourTypeCard
            src={
              "https://images.unsplash.com/photo-1548603042-43c853e0d4c7?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
            }
            title={"Expedential Tour"}
            desc={
              "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
            align={0}
            handleClick={() => (window.location.href = "/packages")}
          />
          <TourTypeCard
            src={
              "https://images.unsplash.com/photo-1585135468269-bd3747577424?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
            }
            title={"Educational Tour."}
            desc={
              "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
            align={1}
            handleClick={() => alert("Feature not available yet!")}
          />
        </div>
      </section>

      {!mobileView && (
        <section className="map-area">
          {!mobileView && (
            <img
              className="et-bg"
              src="https://res.cloudinary.com/dwtjde0mg/image/upload/v1660720004/h1-img-30_jn4mok.jpg"
              alt=""
            />
          )}

          <MapPlaces
            img={
              "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bm9ydGglMjBpbmRpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            }
            place={"North India"}
            coordinates={"21°N 78°E"}
            top={mobileView ? 8 : 25}
            left={mobileView ? 30 : 5}
            invert={true}
          />
          <MapPlaces
            img={
              "https://images.unsplash.com/photo-1595242227474-043a4b79c884?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c291dGglMjBpbmRpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            }
            place={"South India"}
            coordinates={"12.2602° N, 77.1461° E"}
            top={mobileView ? 70 : 55}
            left={mobileView ? 30 : 25}
            invert={false}
          />
          <MapPlaces
            img={
              "https://images.unsplash.com/photo-1611640844364-5d6e046b2359?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFkaHlhJTIwcHJhZGVzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            }
            place={"Central India"}
            coordinates={"22.9734° N, 78.6569° E"}
            top={mobileView ? 40 : 0.5}
            left={mobileView ? 35 : 44}
            invert={true}
          />
          <MapPlaces
            img={
              "https://images.unsplash.com/photo-1496372412473-e8548ffd82bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZWFzdCUyMGluZGlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            }
            place={"East India"}
            coordinates={"22.8962° N, 85.9800° E"}
            top={mobileView ? 30 : 32}
            left={mobileView ? 60 : 57}
            invert={true}
          />
          <MapPlaces
            img={
              "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bXVtYmFpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            }
            coordinates={"22.9868° N, 87.8550° E"}
            top={mobileView ? 40 : 68}
            place={"West India"}
            left={mobileView ? 10 : 65}
            invert={false}
          />
          <MapPlaces
            img={
              "https://images.unsplash.com/photo-1637043765564-a071ff91a09f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG5vcnRoJTIwZWFzdCUyMGluZGlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            }
            place={"North East India"}
            coordinates={"25.5736° N, 93.2473° E"}
            top={mobileView ? 25 : 28}
            left={mobileView ? 45 : 80}
            invert={true}
          />
        </section>
      )}

      {/*  */}
      <section className="ecom-link">
        <h1 className="section-title">
          <span>Buy from The</span> Craftsmen
        </h1>
        <div className="product-list">
          <Slider className="items-wrapper-grid" {...settings}>
            {ecomData.products.map((ele) => (
              <Productcard key={ele.name} {...ele} />
            ))}
          </Slider>
        </div>
        <button
          onClick={() => {
            window.location.href = "/ecom/home";
          }}
        >
          Shop with us
        </button>
      </section>
    </div>
  );
};

export default Home;

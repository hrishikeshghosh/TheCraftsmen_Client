import React, { useEffect, useState } from "react";
import "./guidelist.css";
import demo_data from "../../Helper/demo_data.json";
import Guides from "../Guides/Guides";
import $ from "jquery";
import { useDispatch, useSelector } from "react-redux";
import { getTours } from "../../Actions/Tour_Actions";
import Lottie from "lottie-react";
import SmallLoader from "../../Helper/Loaders/SmallLoader.json";

// const loaderOptions = {
//   loop: true,
//   autoplay: true,
//   animationData: BigLoader,
//   rendererSettings: {
//     preserveAspectRatio: "xMidYMid slice",
//   },
// };

const GuideList = () => {
  const [mobileOption, setMobileOption] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const dispatch = useDispatch();
  const { tourList } = useSelector((state) => state.tours);
  useEffect(() => {
    $(window).scrollTop(0);
  }, []);

  useEffect(() => {
    if (window.innerWidth < 700) setMobileView(false);
  }, [window.innerWidth]);

  useEffect(() => {
    dispatch(getTours());
  }, [dispatch]);

  console.log(tourList);
  if (tourList.length === 0)
    return (
      <Lottie
        animationData={SmallLoader}
        loop={true}
        autoPlay={true}
        style={{ height: "90vh" }}
      />
    );
  else {
    return (
      <div className="guidelist-root">
        <section className="gb-body">
          <div className="gb-filters">
            <div className="price-filter-box filter-box">
              <h4>Price Filters(By Night)</h4>
              <div className="filter-contents">
                {demo_data.pricefilters.map((el) => (
                  <div className="each-filter">
                    <input type={"checkbox"} />
                    <p>{el}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rating-filter-box filter-box">
              <h4>Rating Filters</h4>
              <div className="filter-contents">
                {demo_data.ratingFilters.map((el) => (
                  <div className="each-filter">
                    <input type={"checkbox"} />
                    <p>{el}</p>
                  </div>
                ))}
              </div>
            </div>
            {mobileView && (
              <div className="mb-price-filter-box">
                <i class="fas fa-sort-amount-down"></i>
                <input placeholder="Sort By Price" />
              </div>
            )}
            {mobileView && (
              <div className="mb-rate-filter-box">
                <i class="fas fa-sort-amount-down"></i>
                <input placeholder="Sort By Ratings" />
              </div>
            )}
          </div>
          <div className="gb-list">
            <h1>
              <span>Showing Packages in</span> Expedential Tour
            </h1>
            {tourList.map((ele) => (
              <Guides
                id={ele?._id}
                title={ele.name}
                desc={ele.description}
                rating={3.5}
                img={ele.imageCover}
                price={ele.price}
                guide={ele.guides[0].name}
                booked={false}
              />
            ))}
          </div>
        </section>
        {/* <div className="mb-filter-selector">
        <div className="mb-price-filter-box">
          <div>
            <input type={"radio"} />
            <p>{data</p>
          </div>
        </div>
      </div> */}
      </div>
    );
  }
};

export default GuideList;

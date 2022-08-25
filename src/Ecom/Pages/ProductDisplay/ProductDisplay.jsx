import { Avatar, LinearProgress, Rating } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as SearchLogo } from "../../assets/search.svg";
import "./productdisplay.scss";
const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <input placeholder="Search your desire products..." />
      <SearchLogo />
    </div>
  );
};

const ProductDisplay = () => {
  const [openSizeChart, setOpenSizechart] = useState(false);
  const [size, setSize] = useState("S");
  const [quant, setQuant] = useState(1);
  const [price, setPrice] = useState(2200);
  const ref = useRef(null);
  useEffect(() => {
    document.addEventListener("keydown", handleEscape, true);
    document.addEventListener("click", handleclickOut, true);
  }, []);

  const handleEscape = (e) => {
    if (e.key === "Escape") setOpenSizechart(false);
  };
  const handleclickOut = (e) => {
    if (ref.current && !ref.current.contains(e.target)) setOpenSizechart(false);
  };

  const handleSetSize = (e, size) => {
    e.preventDefault();
    setSize(size);
    setOpenSizechart(false);
  };

  useEffect(() => {
    if (quant < 1) setQuant(1);
  }, [quant]);

  return (
    <div className="product-display-root">
      <section className="pd-appbar-zone">
        <SearchBar />
      </section>
      <section className="product-title-img-page">
        <div className="prod-title">
          <div className="prod-title-holder">
            <h1>Embroidery Pashmina Shawl</h1>
            <p>#Best Seller</p>
          </div>
          <div className="prod-ses">
            <div className="product-distributor">
              <Avatar sx={{ height: "30px", width: "30px" }} />
              <p>Hrishikesh</p>
            </div>
            <div className="product-rating-1">
              <i class="fas fa-star"></i>
              <p>4.3(44)</p>
            </div>
          </div>
        </div>
        <div className="product-img-box">
          <div className="pib-left">
            <img src="https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBvdGVyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" />
          </div>
          <div className="pib-right">
            <img src="https://images.unsplash.com/photo-1510922694088-df7b5254cdcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG90ZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" />
            <img src="https://images.unsplash.com/photo-1637338375581-6a8a7b065aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBvdGVyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" />
          </div>
          <div></div>
        </div>
      </section>
      <section className="prod-details">
        <div className="prod-det-left">
          <div className="prod-overview">
            <h4>Overview</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. It is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
            </p>
          </div>
          <div className="prod-rate-rev">
            <h4>Ratings and Reviews</h4>
            <div className="prr-content-box">
              <div className="prr-left">
                <h1>4.9</h1>
                <Rating
                  value={3.5}
                  precision={0.5}
                  readOnly
                  sx={{ color: "#1d976c" }}
                />
                <p>25 ratings</p>
              </div>
              <div className="prr-right">
                <div className="star-progress sp-5">
                  <i class="fas fa-star"></i>
                  <LinearProgress
                    variant="determinate"
                    value={70}
                    sx={{
                      width: "200px",
                      backgroundColor: "#C4DFAA",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: `#2b7a0b`,
                      },
                    }}
                  />
                  <p>5</p>
                </div>
                <div className="star-progress sp-4">
                  <i class="fas fa-star"></i>
                  <LinearProgress
                    variant="determinate"
                    value={70}
                    sx={{
                      width: "200px",
                      backgroundColor: "#C4DFAA",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: `#2b7a0b`,
                      },
                    }}
                  />
                  <p>4</p>
                </div>
                <div className="star-progress sp-3">
                  <i class="fas fa-star"></i>
                  <LinearProgress
                    variant="determinate"
                    value={70}
                    sx={{
                      width: "200px",
                      backgroundColor: "#C4DFAA",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: `#2b7a0b`,
                      },
                    }}
                  />
                  <p>3</p>
                </div>
                <div className="star-progress sp-2">
                  <i class="fas fa-star"></i>
                  <LinearProgress
                    variant="determinate"
                    value={70}
                    sx={{
                      width: "200px",
                      backgroundColor: "#C4DFAA",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: `#2b7a0b`,
                      },
                    }}
                  />
                  <p>2</p>
                </div>
                <div className="star-progress sp-1">
                  <i class="fas fa-star"></i>
                  <LinearProgress
                    variant="determinate"
                    value={70}
                    sx={{
                      width: "200px",
                      backgroundColor: "#C4DFAA",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: `#2b7a0b`,
                      },
                    }}
                  />
                  <p>1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="prod-det-right">
          <div className="prod-price-box">
            <div className="size-zone">
              <h3>Select Size</h3>
              <div className="prod-size-btns">
                <p
                  onClick={() => {
                    setOpenSizechart((pv) => !pv);
                  }}
                >
                  {size}
                </p>
                <i
                  class="fas fa-angle-down"
                  onClick={() => {
                    setOpenSizechart((pv) => !pv);
                  }}
                ></i>
                {openSizeChart && (
                  <div className="size-options" ref={ref}>
                    <p onClick={(e) => handleSetSize(e, "XS")}>XS</p>
                    <p onClick={(e) => handleSetSize(e, "S")}>S</p>
                    <p onClick={(e) => handleSetSize(e, "M")}>M</p>
                    <p onClick={(e) => handleSetSize(e, "L")}>L</p>
                    <p onClick={(e) => handleSetSize(e, "XL")}>XL</p>
                    <p onClick={(e) => handleSetSize(e, "XXL")}>XXL</p>
                    <p onClick={(e) => handleSetSize(e, "XXXL")}>XXXL</p>
                  </div>
                )}
              </div>
            </div>
            <div className="size-chart-shower">
              <p>See the size chart</p>
              <i class="fas fa-expand-alt"></i>
            </div>
            <div className="price-seg-box">
              <p className="price-text">&#8377; {price * quant}</p>
              <div className="quantity-box">
                <button
                  className="quant-increm"
                  onClick={() => setQuant((pv) => pv + 1)}
                >
                  <i class="fas fa-plus"></i>
                </button>
                <p className="quant-text">{quant}</p>
                <button
                  className="quant-decream"
                  onClick={() => setQuant((pv) => pv - 1)}
                >
                  <i class="fas fa-minus"></i>
                </button>
              </div>
            </div>
            <button
              className="product-buy-btn"
              onClick={() => {
                window.location.href = "/product-review";
              }}
            >
              Buy now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDisplay;

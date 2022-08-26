import React from "react";
import "./studio.scss";
import Slider from "react-slick";
import DemoData from "../Helper/DemoData.json";
import DemoVid from "../Helper/DemoVidData.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import moment from "moment";
import { Avatar } from "@mui/material";

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: window.innerWidth > 1000 ? 3 : window.innerWidth > 800 ? 2 : 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
};

const Studio = () => {
  return (
    <div className="studio-root">
      <div className="spotlight-box">
        {/* <div className="studio-appbar">
          <h4>The Craftsmen Explorer</h4>
        </div> */}
        <h1>Craftsmen in Spotlight</h1>
        <div className="studio-spotlight">
          <Slider className="items-wrapper-grid" {...settings}>
            {DemoData.spotlighters.map((el) => (
              <SpotlightPreview {...el} />
            ))}
          </Slider>
        </div>
      </div>
      <div className="studio-box">
        <h1>From the finest artisans</h1>
        <PhotoPost />
        <VideoPost />
        <PhotoPost />
        <VideoPost />
        <Slider className="items-wrapper-grid" {...settings}>
          {DemoVid.spotlightVideos.map((el) => (
            <SpotLightVideos {...el} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Studio;

const SpotlightPreview = ({ name, title, content, created }) => {
  return (
    <div className="sp-root">
      <img src={content} />
      <div className="sp-details">
        <div className="sp-details-left">
          <p className="sp-root-name">{name}</p>
          <p className="sp-root-title">{title}</p>
        </div>
        <p className="sp-details-date">
          {moment(created).format("Do MMM, YYYY")}
        </p>
      </div>
    </div>
  );
};
const SpotLightVideos = ({ title, name, content, created }) => {
  return (
    <div className="sv-root">
      <video
        style={{ width: "100%", height: "250px", borderRadius: "8px" }}
        autoPlay={true}
        loop={true}
      >
        <source src={content} />
      </video>
      <div className="sp-details">
        <div className="sp-details-left">
          <p className="sp-root-name">{name}</p>
          <p className="sp-root-title">{title}</p>
        </div>
        <p className="sp-details-date">
          {moment(created).format("Do MMM, YYYY")}
        </p>
      </div>
    </div>
  );
};

const PhotoPost = () => {
  return (
    <div className="pp-root">
      <div className="pp-root-topbar">
        <Avatar />
        <p>Hrishikesh Ghosh</p>
      </div>
      <img
        className="pp-photo"
        src="https://images.unsplash.com/photo-1620619767323-b95a89183081?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGFuZGljcmFmdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
      />
      <div className="photo-ender"></div>
    </div>
  );
};

const VideoPost = () => {
  return (
    <div className="pp-root">
      <div className="pp-root-topbar">
        <Avatar />
        <p>Hrishikesh Ghosh</p>
      </div>
      {/* <img
        className="pp-photo"
        src="https://images.unsplash.com/photo-1620619767323-b95a89183081?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGFuZGljcmFmdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
      /> */}
      <video style={{ width: "100%", height: "100%" }} controls={true}>
        <source src="https://player.vimeo.com/external/421846717.sd.mp4?s=1ae28ce542fb63307cc4d21b57c5f9364210686c&profile_id=164&oauth2_token_id=57447761" />
      </video>
      <div className="photo-ender"></div>
    </div>
  );
};

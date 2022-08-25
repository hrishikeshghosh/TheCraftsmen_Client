/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ImageSlider from "../Carousel/ImageSlider";
import { SliderData } from "../Carousel/SliderData";
import LinearProgress from "@mui/material/LinearProgress";
import moment from "moment";
import { Avatar, Rating } from "@mui/material";

const AboutPlace = ({ render, data }) => {
  const [wrap, setWrap] = useState(true);
  const [ratingwrap, setRatingWrap] = useState(true);
  const [value, onChange] = useState(new Date());
  const [avail, setAvail] = useState({
    start: moment().format("Do MMM"),
    end: moment().add(7, "d").format("Do MMM"),
  });
  const [newReview, setNewReview] = useState({ rating: "", review: "" });

  const CheckReviewStat = (rev) => {
    if (rev >= 0 && rev <= 0.9) {
      return "Very Poor";
    } else if (rev >= 1 && rev <= 1.9) {
      return "Poor";
    } else if (rev >= 2 && rev <= 2.9) {
      return "Good";
    } else if (rev >= 3 && rev <= 3.9) {
      return "Very Good";
    } else {
      return "Excelent";
    }
  };

  if (render === 0) {
    return (
      <div className="aboutplace-root">
        <h2>About</h2>
        <div className="aboutplace-det">
          <ul style={wrap ? { height: "300px" } : { height: "fit-content" }}>
            <li>
              In the lap of Himalayas lies Jammu & Kashmir, Himachal Pradesh and
              Uttarakhand. These storehouses of different cultures, harmony,
              adventure and scenic landscape takes you away from the hustle of
              city life. You can feel the adrenaline rush in your body as these
              places offer exciting adventure tourism opportunities. Camping on
              a hilltop, rafting the rapids or jumping from the high hills can
              make you hear blood gushing through your veins. Indian Himalayan
              Trekking among the humongous range of Himalayas, you always find a
              new road. Himalayan range running through the states of Ladakh,
              Himachal Pradesh, Uttarakhand and Jammu & Kashmir offers one of
              the most exciting trekking trails of the country. If paragliding
              in the sky and chasing sunsets are your way of vacationing, head
              over to the mountains and live the life you want!
            </li>
            <li>
              North India is so culturally and physically diverse that your
              senses are bombarded with color, nature and the authentic taste of
              Indian cuisine after every mile. The hill stations in the
              mountains offer you the connectivity of your mind and soul. Nature
              tourism has been on a hike in recent years. People choose to go
              back to nature and cherish it. The scenic view from the window of
              your room and a hot cup of tea warms you from within. Go lose
              yourself in the thick dense woods of these hills to only find a
              path less travelled. Pleasant weather among the valleys of
              Himalayas, away from the hustling life of the city make them the
              top travel destinations in North India.
            </li>
            <li>
              Moving from the mountains and landing into the desert, is the
              state of Rajasthan. This part of India has a spirit of festivity,
              color and royal grandeur all year round. Ancient forts and lake
              palaces to the extremely talented communities of artisans, this
              nook of India whispers stories of the past. You get to witness the
              centuries old heritage and culture of the Indian subcontinent.
              When we travel away from Rajasthan, we get to visit the Golden
              Temple in Amritsar. This temple is the most pious site of worship
              for the Sikhs. Also, you get to devour piping hot meals called
              langers. Delhi is another popular heritage destination that hides
              ancient secrets in the old alleys of the city. Adorned with
              various architectural magnificence such as Red Fort and Qutub
              Minar among many others, Delhi is a treasure of India’s glorifying
              history. Next stop on this interesting journey to North India, is
              the very symbol of pure love- Taj Mahal. Earning a position in the
              Seven Wonders of the World, this particular site whispers stories
              of great love during the Mughal era. This very tourist attraction
              contributes to a large number of tourists’ influx in North India.
              The white beauty of this mausoleum turns golden during sunset that
              makes you realize the power of love is greater than any other
              human emotion.
            </li>
            <li>
              Lastly, the holy cities of Varanasi, Haridwar and Rishikesh are
              the most visited pilgrimage sites in North India for spiritual
              travelers. The city lights up in the evenings with cheerful lamps
              finding their way in the Ganges. The river-side ghats are
              illuminated with large lamps and thousands of devotees offering
              their sincere prayers to the holy water. The Chota Char Dham Yatra
              in the valleys of Himalayas include- Kedarnath, Badrinath,
              Gangotri and Yamunotri. People enjoy family holidays in these
              cities of religious importance. North India also has various
              Buddhist pilgrimage sites such as Dharamshala, Ladakh, Sarnath,
              Kushinagar and Sravasti. Not to forget, North India houses Golden
              Temple in Punjab. It is the most pious site of worship for the
              Sikhs. Many tourists from all over the world visit this temple for
              its absolute beauty and calmness. India embraces you with open
              arms to welcome you to explore every aspect of life you can. But
              once you start the journey, you realize it's just the tip of an
              iceberg you saw!
            </li>
            <li>
              North India houses the ‘Yoga Capital of the world’. Rishikesh is a
              hilltown known for its yogic spirituality. People from all over
              the world visit this town contributing to wellness tourism. Yoga
              and Ayurveda have become popular elements of the tourism industry.
              Many explorers stop at these yoga centres to rejuvenate
              themselves. Many yoga and ayurveda spa centres are located in the
              hills of Himachal Pradesh & Uttarakhand. Owing to the serene
              environment in the lap of nature, yoga is the best way to spend
              your vacation.
            </li>
            <div
              className="hidding-el"
              style={!wrap ? { display: "none" } : { display: "block" }}
            ></div>
          </ul>

          <p
            className="enlarge-btn"
            onClick={(e) => setWrap((prevState) => !prevState)}
          >
            {wrap ? "Read more" : "Read less"}
          </p>
        </div>
      </div>
    );
  }
  if (render === 1) {
    return (
      <div className="facilities-root">
        {" "}
        <h2>Facilities</h2>
        <div className="facilities-det">
          <div>
            <p>
              <span>
                <i className="fas fa-bus-alt"></i>
              </span>
              Comfortable Traveling
            </p>
            <p>
              <span>
                <i className="fas fa-utensils"></i>
              </span>
              Hygenic Meal
            </p>
            <p>
              <span>
                <i className="fas fa-glass-cheers"></i>
              </span>
              Alcohol Allowed
            </p>
          </div>
          <div>
            <p>
              <span>
                <i className="fas fa-baby"></i>
              </span>
              Children Friendly
            </p>
            <p>
              <span>
                <i className="fas fa-male"></i>
              </span>
              Old Age Support
            </p>
            <p>
              <span>
                <i className="fas fa-hotel"></i>
              </span>
              Luxury Accomodation
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (render === 2) {
    return (
      <div className="spotlight-root">
        <h2>Spotlight</h2>
        <div className="spotlight-caraousel">
          <ImageSlider slides={SliderData} />
        </div>
      </div>
    );
  }
  if (render === 3) {
    return (
      <div className="avaibility-root">
        <div className="avaibility-title-box">
          <h2>Avaibility</h2>
          <p>
            {avail.start} - {avail.end}
          </p>
        </div>
        <div className="calendar-box"></div>
      </div>
    );
  }
  if (render === 4) {
    return (
      <div className="reviews-root">
        <h2>Reviews</h2>
        <div className="overall-review">
          <p className="avg-rating">
            {data?.ratingsAverage}
            <span>
              <i className="fas fa-star"></i>
            </span>
          </p>
          <div className="rev-det">
            <p>{CheckReviewStat(data?.ratingsAverage)}</p>
            <p>{data?.ratingsQuantity} user reviews</p>
          </div>
        </div>
        <div className="dist-rating">
          <div className="dist-left">
            <div>
              <p>Staff</p>
              <LinearProgress
                variant="determinate"
                value={70}
                sx={{
                  width: "30%",
                  backgroundColor: "#C4DFAA",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: `#2b7a0b`,
                  },
                }}
              />
              <p className="red-mark">3.5</p>
            </div>
            <div>
              <p>Meal</p>
              <LinearProgress
                variant="determinate"
                value={60}
                sx={{
                  width: "30%",
                  backgroundColor: "#C4DFAA",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: `#2b7a0b`,
                  },
                }}
              />
              <p className="red-mark">2.5</p>
            </div>
          </div>
          <div className="dist-right">
            <div>
              <p>Journey</p>
              <LinearProgress
                variant="determinate"
                value={90}
                sx={{
                  width: "30%",
                  backgroundColor: "#C4DFAA",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: `#2b7a0b`,
                  },
                }}
              />
              <p className="red-mark">4.5</p>
            </div>
            <div>
              <p>Safety</p>
              <LinearProgress
                variant="determinate"
                value={80}
                sx={{
                  width: "30%",
                  backgroundColor: "#C4DFAA",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: `#2b7a0b`,
                  },
                }}
              />
              <p className="red-mark">3</p>
            </div>
          </div>
        </div>
        <div className="postReview-Box">
          <h2>Your Feedback</h2>
          <Rating sx={{ width: "100%", marginTop: "2%", color: "#1d976c" }} />
          <textarea placeholder="Leave a comment here!"></textarea>

          <div className="review-submitter-holder">
            <button>submit</button>
          </div>
        </div>
        <div
          className="tour-reviews"
          style={ratingwrap ? { height: "300px" } : { height: "fit-content" }}
        >
          {data?.reviews.map((el) => (
            <div className="each-tour-review">
              <div className="etr-left">
                <Avatar sx={{ width: "100px", height: "100px" }} />
                <p className="etr-nameStamp">{el?.user?.name}</p>
                <p className="etr-timeStamp">
                  {moment(el.createdAt).format("Do MMM, YYYY")}
                </p>
              </div>
              <div className="etr-right">
                <Rating
                  value={el.rating}
                  precision={0.5}
                  sx={{ color: "#1d976c", fontSize: "1rem" }}
                  readOnly
                />
                <p className="etr-descStamp">{el.review}</p>
              </div>
            </div>
          ))}
          <div
            className="hidding-el"
            style={!ratingwrap ? { display: "none" } : { display: "block" }}
          ></div>
        </div>
        <p
          className="enlarge-btn"
          onClick={(e) => setRatingWrap((prevState) => !prevState)}
        >
          {ratingwrap ? "Read more" : "Read less"}
        </p>
      </div>
    );
  }
};

export default AboutPlace;

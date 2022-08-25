import React from "react";
import $ from "jquery";
import "./button.css";
const Button1 = ({ link }) => {
  return (
    <div className="button-1-center">
      <a
        href={link}
        title={`Read More`}
        onClick={() => {
          $(".explore-typecast")[0].scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }}
      >
        Explore
      </a>
    </div>
  );
};

export default Button1;

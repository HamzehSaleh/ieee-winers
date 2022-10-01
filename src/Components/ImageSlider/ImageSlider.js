import React from "react";
import "./ImageSlider.css";
import image1 from "../imgs/1.JPG";
import image2 from "../imgs/2.JPG";
import image3 from "../imgs/3.JPG";
import image4 from "../imgs/4.JPG";
import image5 from "../imgs/5.JPG";
import image6 from "../imgs/6.JPG";

function ImageSlider() {
  return (
    <div className="slider">
      <div className="slide-track">
        <div className="slide">
          <img src={image1} />
        </div>
        <div className="slide">
          <img src={image2} />
        </div>
        <div className="slide">
          <img src={image3} />
        </div>
        <div className="slide">
          <img src={image4} />
        </div>
        <div className="slide">
          <img src={image5} />
        </div>
        <div className="slide">
          <img src={image6} />
        </div>

        <div className="slide">
          <img src={image1} />
        </div>
        <div className="slide">
          <img src={image2} />
        </div>
        <div className="slide">
          <img src={image3} />
        </div>
        <div className="slide">
          <img src={image4} />
        </div>
        <div className="slide">
          <img src={image5} />
        </div>
        <div className="slide">
          <img src={image6} />
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;

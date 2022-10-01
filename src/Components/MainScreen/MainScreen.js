import React from "react";
import "./MainScreen.css";
import logo from "../imgs/IEEE.png";
import ListFilter from "../RandomPicker/ListFilter";
import ImageSlider from "../ImageSlider/ImageSlider";

function MainScreen(props) {
  return (
    <div className="main-sreen">
      <div className="main-screen__first">
        <div className="left">
          <img className="main-screen__logo" src={logo} />
          <div className="container">
            <span className="text1">Welcome In</span>
            <span className="text2">IEEE Awardes Giveaway</span>
          </div>
        </div>
        <div className="right">
          <ListFilter items={props.items} />
        </div>
      </div>

      <div className="main-screen__second">
        <ImageSlider />
      </div>
    </div>
  );
}

export default MainScreen;

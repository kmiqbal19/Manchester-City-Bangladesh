import React from "react";
import "./middle.component.css";
function MiddleComponent() {
  return (
    <div className="middle-part">
      <div className="middle-support">
        <p className="headline-middle">
          OFFICIAL SUPPORTERS CLUB BANGLADESH - CHITTAGONG BRANCH
        </p>
        <p className="text-middle text-middle-1">
          With over 300 branches worldwide, fans can proudly come together and
          share unforgettable City moments whilst cheering on the Club they love
          from wherever they are based.
        </p>
        <p className="text-middle text-middle-2">
          Our global network of branches stretches from Chadderton to Cairo,
          with 30 new branches being welcomed into the Official Supporters Club
          Family during last season including Bangladesh, India, Pakistan.
        </p>
        <p className="text-middle text-middle-3">
          Find your nearest Official Supporters Club via our map below or start
          a branch in your location today to enjoy exclusive benefits.
        </p>
      </div>
      <div className="middle-image">
        <img
          src="https://i.ibb.co/ypfrv3H/Whats-App-Image-2021-11-21-at-23-11-44.jpg"
          alt="middle"
        />
        <div className="middle-img-description">
          <p>LIVE MATCH SCREENING HELD IN 2021</p>
        </div>
      </div>
    </div>
  );
}

export default MiddleComponent;

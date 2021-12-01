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
          We are one of the 300+ Supporters Club of Manchester City and very
          active among the clubs in Bangladesh.It was organized in 2021.We do
          match screening and quiz contests in every match.More than 1000 of our
          members are active on Facebook and more than 30 of them are membership
          card holders.
        </p>
        <p className="text-middle text-middle-2">
          We have our official Facebook, Instagram and Twitter account to
          interact our supporters.Our mission to take this official branch at
          highest level in Bangladesh and globally.
        </p>
        <p className="text-middle text-middle-3">
          If you want to be part of this supporters club branch, get the updated
          news of every match, get membership card and all benifits of
          membership.
          <a
            className="join-link"
            href="https://www.mancity.com/supporters-clubs/chittagong-2645"
          >
            {" "}
            Join Here{" "}
          </a>
          {/* <i class="fas fa-location-arrow"></i> */}
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

import React, { useState } from "react";
import "./supporters-opinion.component.css";
import { opinionList } from "./OpinionList.js";
function OpinionCarousel() {
  const [current, setCurrent] = useState(0);

  const Tweets = () => {
    return opinionList.map((item, index) => {
      return (
        <div key={index} className="tweet-supporters__container">
          <img src={item.supporterImage} alt={item.supporterName} />
          <p className="supporter-tweet">{item.supporterTweet}</p>
        </div>
      );
    });
  };
  return (
    <section className="supporters-opinion__section">
      <h1>SUPPORTERS TWEET</h1>
      <div className="supporters-opinion__carousel">
        <Tweets />
      </div>
    </section>
  );
}

export default OpinionCarousel;

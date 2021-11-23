import React from "react";
import "./chairman.component.css";
function ChairmanSection() {
  return (
    <section className="chairman-section">
      <div className="chairman-speech">
        <p>
          Our main objective is to build a strong club community through, where
          any of our Citizens can get all kind of opportunities and establishing
          a deep relationship among all the fans by publishing City related news
          and informations over social media.
        </p>
        <p>
          We want to move forward with the determination to do something better
          in the future.the future will be planned keeping in mind the
          advantages and disadvantages of the fans.
        </p>
      </div>
      <div className="chairman-image__container">
        <img
          src="https://i.ibb.co/8gHqd9m/Whats-App-Image-2021-11-23-at-22-00-58.jpg"
          alt="chairman"
        />
        <p className="chairman-name">Abir Emon</p>
        <p className="chairman-text">Chairman of ManCity Bangladesh</p>
      </div>
    </section>
  );
}

export default ChairmanSection;

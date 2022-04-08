import React from "react";
import "./chairman.component.css";
function ChairmanSection() {
  return (
    <section className="chairman-section">
      <div className="chairman-speech">
        <p>
          Our main objective is to build a strong club community, where every
          Citizens can get all kind of opportunities and establishing a deep
          relationship between all the fans and informations over social media
          by publishing City related news.
        </p>
        <p>
          We want to move forward with the determination to do something better
          in the future. The future will be planned according to the
          recommendations of fans.
        </p>
      </div>
      <div className="chairman-image__container">
        <img
          src="https://i.ibb.co/8gHqd9m/Whats-App-Image-2021-11-23-at-22-00-58.jpg"
          alt="chairman"
        />
        <p className="chairman-name">Abir Emon</p>
        <p className="chairman-text">
          Genenral Secretary of ManCity Bangladesh
        </p>
      </div>
      <div className="donation_container">
        <p id="donation-text">
          SUPPORT US BY DONATING HERE{" "}
          <span>
            {/* emonabir10@gmail.com<i class="fab fa-paypal"></i> */}
            emonabir10@gmail.com<i class="fab fa-cc-paypal"></i>
          </span>
        </p>
      </div>
    </section>
  );
}

export default ChairmanSection;

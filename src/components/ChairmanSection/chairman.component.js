import React from "react";
import "./chairman.component.css";
function ChairmanSection() {
  return (
    <section className="chairman-section">
      <div className="chairman-speech">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
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

import React from "react";
import { NavLink } from "react-router-dom";
import "./service.component.css";
import { FaTrophy, FaPhotoVideo, FaFlag } from "react-icons/fa";

function ServiceSection() {
  return (
    <section className="service-section">
      <h1> OUR SERVICES </h1>
      <div className="service-item trophy">
        <FaTrophy className="fa-trophy" />
        <p className="service-text">
          <NavLink to="/join">#JOIN</NavLink> To get official membership join
          our branch
        </p>
      </div>
      <div className="service-item camera">
        <FaPhotoVideo className="fa-gallery" />
        <p className="service-text">
          <NavLink to="/gallery">#MCFCBD GALLERY </NavLink> Tag your photos
          using #mcfcbd when you share your photos
        </p>
      </div>
      <div className="service-item flag">
        <FaFlag className="fa-flag" />
        <p className="service-text">
          <a href="https://www.mancity.com/fixtures">#FIXTURES </a>
          Premier League Champions League FA CUP
        </p>
      </div>
    </section>
  );
}

export default ServiceSection;

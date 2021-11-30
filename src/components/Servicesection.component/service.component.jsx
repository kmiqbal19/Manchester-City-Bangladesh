import React from "react";
import { NavLink } from "react-router-dom";
import "./service.component.css";
function ServiceSection() {
  return (
    <section className="service-section">
      <h1> OUR SERVICES </h1>
      <div className="service-item trophy">
        <i class="fas fa-trophy"></i>
        <p className="service-text">
          <NavLink to="/join">JOIN</NavLink> To get official membership join our
          branch
        </p>
      </div>
      <div className="service-item camera">
        <i class="fas fa-camera-retro"></i>
        <p className="service-text">
          <NavLink to="/gallery">#MCFCBD GALLERY </NavLink> Tag your photos
          using #mcfcbd when you share your photos
        </p>
      </div>
      <div className="service-item flag">
        <i class="fas fa-flag"></i>
        <p className="service-text">
          <a href="https://www.mancity.com/fixtures">FIXTURES </a>
          Premier League Champions League FA CUP
        </p>
      </div>
    </section>
  );
}

export default ServiceSection;

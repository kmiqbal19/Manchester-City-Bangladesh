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
          Lorem Ipsum is simply dummy text of the printing and typesetting.
        </p>
      </div>
      <div className="service-item camera">
        <i class="fas fa-camera-retro"></i>
        <p className="service-text">
          <NavLink to="/gallery">#MCFCBD GALLERY</NavLink> simply dummy text of
          the printing ands.
        </p>
      </div>
      <div className="service-item flag">
        <i class="fas fa-flag"></i>
        <p className="service-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          indus.
        </p>
      </div>
    </section>
  );
}

export default ServiceSection;

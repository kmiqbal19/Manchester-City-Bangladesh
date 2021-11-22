import React from "react";
import { NavLink } from "react-router-dom";
import "./service.component.css";
function ServiceSection() {
  return (
    <section className="service-section">
      <div className="service-item trophy">
        <i class="fas fa-trophy"></i>
        <p className="service-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
      </div>
      <div className="service-item camera">
        <i class="fas fa-camera-retro"></i>
        <p className="service-text">
          <NavLink to="/gallery">#MCFCBD GALLERY</NavLink> simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s,
        </p>
      </div>
      <div className="service-item flag">
        <i class="fas fa-flag"></i>
        <p className="service-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
      </div>
    </section>
  );
}

export default ServiceSection;

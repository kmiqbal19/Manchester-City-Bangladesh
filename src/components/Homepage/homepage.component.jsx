import React from "react";
import "./homepage.component.css";
import Carousel from "../carousel.component/carousel.component";
import MiddleComponent from "../middle.component/middle.component";
import ServiceSection from "../Servicesection.component/service.component";
function HomepageComponent() {
  return (
    <div className="homepage">
      <Carousel />
      <MiddleComponent />
      <ServiceSection />
    </div>
  );
}

export default HomepageComponent;

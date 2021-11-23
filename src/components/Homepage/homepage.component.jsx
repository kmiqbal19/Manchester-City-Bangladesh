import React from "react";
import "./homepage.component.css";
import Carousel from "../carousel.component/carousel.component";
import MiddleComponent from "../middle.component/middle.component";
import ServiceSection from "../Servicesection.component/service.component";
import ChairmanSection from "../ChairmanSection/chairman.component";
import OpinionCarousel from "../SupporterOpinion/supporters-opinion.component";
import Footer from "../Footer/footer.component";
function HomepageComponent() {
  return (
    <div className="homepage">
      <Carousel />
      <MiddleComponent />
      <ServiceSection />
      <ChairmanSection />
      <OpinionCarousel />
      <Footer />
    </div>
  );
}

export default HomepageComponent;

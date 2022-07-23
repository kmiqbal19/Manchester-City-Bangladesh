import React, { useState } from "react";
import "./carousel.component.css";
import { imageSlides } from "./imageSlides";
import AnimationComponent from "../AnimationComponent/animation.component";
function Carousel() {
  const [current, setCurrent] = useState(0);
  const length = imageSlides.length;

  if (!Array.isArray(imageSlides) || length <= 0) return null;
  const animationCut = function () {
    document.querySelector(".player_animation").style.display = "none";
    document.querySelector(".ball_animation").style.display = "none";
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    animationCut();
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    animationCut();
  };
  const Slides = () => {
    return imageSlides.map((slide, index) => {
      return (
        <div
          key={index}
          className={index === current ? "slide-image active" : "slide-image"}
        >
          {index === current && (
            <img src={slide.sourceImage} alt={slide.title} />
          )}
        </div>
      );
    });
  };

  return (
    <div className="image-slider__container">
      <AnimationComponent />
      <i class="fas fa-chevron-right" onClick={nextSlide}></i>
      <i class="fas fa-chevron-left" onClick={prevSlide}></i>
      <Slides />
    </div>
  );
}

export default Carousel;

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./animation.component.css";
import ball from "../../assets/ball.png";
import palyer from "../../assets/player.png";
function AnimationComponent() {
  gsap.registerPlugin(ScrollTrigger);
  let animationContainerRef = useRef(null);
  useEffect(() => {
    // Animation
    ScrollTrigger.matchMedia({
      "(min-width: 200px) and (max-width: 750px)": function () {
        gsap.fromTo(
          ".player_animation",
          { x: -150 },
          { x: 200, ease: "ease", duration: 5 }
        );
        gsap.fromTo(
          ".ball_animation",
          { x: 700 },
          { x: 200, ease: "bounce", duration: 5 }
        );
      },
      "(min-width: 751px) and (max-width: 1199px)": function () {
        gsap.fromTo(
          ".player_animation",
          { x: -150 },
          { x: 300, ease: "ease", duration: 5 }
        );
        gsap.fromTo(
          ".ball_animation",
          { x: 800 },
          { x: 600, ease: "bounce", duration: 5 }
        );
      },
      "(min-width: 1200px) and (max-width: 1900px)": function () {
        gsap.fromTo(
          ".player_animation",
          { x: -150 },
          { x: 1050, ease: "ease", duration: 5 }
        );
        gsap.fromTo(
          ".ball_animation",
          { x: 1500 },
          { x: 900, ease: "bounce", duration: 5 }
        );
      },
      "(min-width: 1901px) and (max-width: 3000px)": function () {
        gsap.fromTo(
          ".player_animation",
          { x: -950 },
          { x: 850, ease: "ease", duration: 5 }
        );
        gsap.fromTo(
          ".ball_animation",
          { x: 3500 },
          { x: 1300, ease: "bounce", duration: 5 }
        );
      },
    });
  }, []);
  return (
    <div className="animation_container" ref={animationContainerRef}>
      <div className="player_animation">
        <img className="palyer_image" src={palyer} alt="players" />
        {/* <img
          src="https://i.ibb.co/4JymwRp/kisspng-manchester-city-f-c-football-player-jersey-team-s-sergio-aguero-5b230d52470751-1020443715290.png"
          alt="players"
        /> */}
      </div>
      <div className="ball_animation">
        <img src={ball} alt="players" />
        {/* <img src="https://i.ibb.co/sjF8KL1/clipart1013350.png" alt="players" /> */}
      </div>
    </div>
  );
}

export default AnimationComponent;

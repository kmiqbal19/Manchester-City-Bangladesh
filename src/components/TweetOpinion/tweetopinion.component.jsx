import React from "react";
import "./tweetopinion.component.css";
import Slider from "react-slick";
function SupportersTweet() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "ease",
  };
  return (
    <div className="supporters-tweet">
      <h1>SOME OPINIONS FROM OUR SUPPORTERS</h1>
      <Slider {...settings}>
        <div className="tweet__container">
          <div>
            <img
              src="https://i.ibb.co/fvVxmyD/Whats-App-Image-2021-11-25-at-22-55-46.jpg"
              alt="fans_pic"
            />
            <p>
              This group is very active and all the members here are very
              friendly and helpful to each other.I am very happy to be a part of
              them.
            </p>
          </div>
        </div>
        <div className="tweet__container">
          <div>
            <img
              src="https://i.ibb.co/LSzWYcR/Whats-App-Image-2021-11-25-at-22-56-49.jpg"
              alt="fans_pic"
            />
            <p>
              We can get all the information of the club from this group. The
              admins and members here are very informative.There is a lot of fun
              in match screening here, everyone enjoys it very much and everyone
              here is like a family member.
            </p>
          </div>
        </div>
        <div className="tweet__container">
          <div>
            <img
              src="https://i.ibb.co/7nStQZZ/Whats-App-Image-2021-11-25-at-22-59-01.jpg"
              alt="fans_pic"
            />
            <p>
              MCFCBD is different from every other group.They run this group in
              a peaceful environment.everyone cares about everyone's opinion and
              veryone has a friendly relationship between them
            </p>
          </div>
        </div>
        <div className="tweet__container">
          <div>
            <img
              src="https://i.ibb.co/Gsxn2PW/Whats-App-Image-2021-11-25-at-22-57-47.jpg"
              alt="fans_pic"
            />
            <p>
              Manchester City has a very supportive fanbase in this group than
              some of other so called supporters club over Bangladesh.Their main
              goal is to bring together all the City supporters and build a
              strong big community in future.
            </p>
          </div>
        </div>
        <div className="tweet__container">
          <div>
            <img
              src="https://i.ibb.co/CQ17MQB/Whats-App-Image-2021-11-25-at-22-55-39.jpg"
              alt="fans_pic"
            />
            <p>
              Everyone in this community is very friendly so I feel very
              comfortable joining them. I hope to get to know more citizens in
              the future.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SupportersTweet;

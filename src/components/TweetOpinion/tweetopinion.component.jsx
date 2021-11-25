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
    autoplaySpeed: 3000,
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum. Lorem is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SupportersTweet;

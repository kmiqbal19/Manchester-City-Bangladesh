import React from "react";
import "./footer.component.css";
function Footer() {
  return (
    <section className="footer">
      <div className="sponsorship-footer">
        <img
          src="https://i.ibb.co/swCcBKb/Whats-App-Image-2021-11-23-at-23-16-50-modified.png"
          alt="goat"
        />
        <img
          src="https://i.ibb.co/ZWM73tH/iqbal-Logofor-favicon.png"
          alt="iqbal-IT"
        />
      </div>
      <div className="footer_bottom">
        <a href="https://www.facebook.com/ManCityBan">
          <i class="fab fa-facebook-square"></i>
        </a>
        <a href="https://www.instagram.com/mancityban/">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.twitter.com/mancity17bd">
          <i class="fab fa-twitter-square"></i>
        </a>
        <a href="https://discord.gg/G4RAbH8h">
          <i class="fab fa-discord"></i>
        </a>
        <p className="copyright">
          {" "}
          &copy; Manchester City Bangladesh Ltd. #MCFCBD - All Rights Reserved
          2021{" "}
        </p>
        <p className="supporter-mobile_text">
          Supporter Services +49 (0) 1523 627 9890
        </p>
      </div>
    </section>
  );
}

export default Footer;

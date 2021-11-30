import React from "react";
import "./join.component.css";
function JoinPage() {
  return (
    <div className="join-page">
      <div className="join-page_cover">
        <img
          src="https://i.ibb.co/bHskNLy/desktop-header-memberships-full-width.webp"
          alt="official membership cover"
        />
        <p>
          <span>#TOGETHER</span> BECOME AN OFFICIAL MEMBER OF MANCHESTER CITY FC
        </p>
      </div>
      <div className="join-page_offer">
        <h2>GET CLOSER TO THE CLUB WITH EXCLUSIVE BENEFITS AND DISCOUNTS</h2>
        <div className="join-page_thirtyp">
          <div className="join-page_thirtyp--text">
            <h3>EXCLUSIVE MEMBERSHIP PACK INCLUDES:</h3>
            <p>
              {" "}
              <i class="fas fa-id-card"></i> Official Membership card
            </p>
            <p>
              <i class="fas fa-id-card-alt"></i> Personalized Membership card
            </p>
            <p>
              {" "}
              <i class="fas fa-certificate"></i> 2x city crest stickers
            </p>
          </div>
          <img
            src="https://i.ibb.co/kM95mwt/grunge-30-percent-label-png.png"
            alt="30%-discount"
          />
        </div>
        <div className="discount-text">
          <p>
            UP TO 30% DISCOUNT Discount can be used online and in-store, across
            the full city range including kits (excludes sale items). Members
            will also have access to exclusive ranges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default JoinPage;

import React from "react";
import "./join.component.css";
function JoinPage() {
  return (
    <div className="join-page">
      {/* COVER */}
      <div className="join-page_cover">
        <img
          src="https://i.ibb.co/bHskNLy/desktop-header-memberships-full-width.webp"
          alt="official membership cover"
        />
        <p>
          <span>#MEMBERSHIP</span> BECOME AN OFFICIAL MEMBER OF MANCHESTER CITY
          FC
        </p>
      </div>
      {/* OFFER */}
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
              <i class="fas fa-certificate"></i> 2x city crest stickers and many
              more...
            </p>
          </div>
        </div>
        <div className="discount-text">
          <img
            src="https://i.ibb.co/84NCBZb/discount-background.png"
            alt="30%-discount"
          />
          <p>
            UP TO 30% DISCOUNT can be used online and in-store, across the full
            city range including kits (excludes sale items). Members will also
            have access to exclusive ranges.
          </p>
        </div>

        <div className="offers-list__join-page">
          <p>
            <i class="fas fa-hand-point-right"></i> Local Membership holders can
            get 30% Discount on Jerseys and goodie’s from GOAT and 10% Discount
            From Jersey Freak BD .{" "}
          </p>
          <p>
            <i class="fas fa-hand-point-right"></i> Members can avail exclusive
            benefits for our programs throughout the year .
          </p>
          <p>
            <i class="fas fa-hand-point-right"></i> Members can join our
            supporters exclusive football team and participate in a wide range
            of sporting activities.
          </p>
          <p>
            <i class="fas fa-hand-point-right"></i> MEMBER OF THE MONTH
            COMPETITIONS - Access to exclusive kit competitions.
          </p>
        </div>
      </div>
      {/* MEMBERSHIP STEPS */}
      <div className="steps-membership__join-page">
        <h2>HOW I CAN GET MY OFFICIAL MEMBERSHIP CARD!!</h2>
        <h3>
          To become an official member, you need to follow some steps shown
          below:
        </h3>
        <div className="steps-membership">
          <p>
            {" "}
            <span>Step 1:</span> If you are already a member then just log in to
            your account Or if are new here then '
            <a href="https://tickets.mancity.com/">Register here</a>'. Step one
            is shown here with images below:
          </p>
          <div className="steps-one__picture">
            <img
              src="https://i.ibb.co/12Dbx6r/Whats-App-Image-2021-12-01-at-03-20-42.jpg"
              alt="step-1"
            />
            <img
              src="https://i.ibb.co/jrp975R/Whats-App-Image-2021-12-01-at-03-20-43-2.jpg"
              alt="step-1"
            />
            <img
              src="https://i.ibb.co/wh8FFmY/Whats-App-Image-2021-12-01-at-03-20-43-3.jpg"
              alt="step-1"
            />
          </div>

          <p>
            {" "}
            <span>Step 2:</span> After completing registration, Click the{" "}
            <a href="https://www.mancity.com/supporters-clubs/chittagong-2645">
              link
            </a>{" "}
            to join the club.
          </p>
          <img
            className="step-two_image"
            src="https://i.ibb.co/VTs0SJy/Whats-App-Image-2021-12-01-at-03-22-04.jpg"
            alt="step-2"
          />
          <p>
            {" "}
            <span>Step 3:</span> If you face any problem ,don’t hesitate to
            contact our{" "}
            <a href="mailto:dipteshmcfc@gmail.com">Membership secretary</a>.
          </p>
        </div>
        <img
          src="https://i.ibb.co/ZgNxbgs/Whats-App-Image-2021-11-29-at-23-34-25.jpg"
          alt="membership"
        />
      </div>
    </div>
  );
}

export default JoinPage;

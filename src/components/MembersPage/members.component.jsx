import React from "react";
import "./members.component.css";
import { membersList } from "./membersList";
function MembersPage() {
  const Members = () => {
    return membersList.map((item, index) => {
      return (
        <div key={index} className="members-container">
          <img src={item.memberImage} alt={item.memberName} />
        </div>
      );
    });
  };
  return (
    <div className="members-page__container">
      <Members />
    </div>
  );
}

export default MembersPage;

import React, { useState, useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { menuLists } from "./MenuList.js";
import { gsap } from "gsap";
import logo from "../../assets/manchester-logo.png";
import "./navbar.component.css";
function NavBar({ history }) {
  useEffect(() => {
    history.listen(() => {
      window.scrollTo(0, 0);
      return setHamClicked(!hamClicked);
    });
  });
  const [hamClicked, setHamClicked] = useState(false);
  const clickHandler = () => setHamClicked(!hamClicked);
  const MenuLists = menuLists.map((list, index) => {
    return (
      <li key={index} className="nav-list--item">
        <NavLink
          to={list.url}
          className="nav-list"
          activeClassName="nav-list--active"
        >
          {list.title}
        </NavLink>
      </li>
    );
  });
  return (
    <>
      <nav id="main-nav">
        <div className="logo-manchester">
          <img className="logo" src={logo} alt="manchester-logo" />
          <div className="logo-headline">
            <p>manchester city bangladesh</p>
          </div>
        </div>
        <ul
          className={
            hamClicked ? "nav-list__container mobile" : "nav-list__container"
          }
        >
          {MenuLists}
        </ul>
        <div className="hamburger" onClick={clickHandler}>
          <div
            className={hamClicked ? "line line-1 clicked" : "line line-1"}
          ></div>
          <div
            className={hamClicked ? "line line-2 clicked" : "line line-2"}
          ></div>
        </div>
      </nav>
    </>
  );
}

export default withRouter(NavBar);

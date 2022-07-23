import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { menuLists } from "./MenuList.js";
import logo from "../../assets/manchester-logo.png";
import "./navbar.component.css";
function NavBar({ history }) {
  const [hamClicked, setHamClicked] = useState(false);
  const clickHandler = () => setHamClicked(!hamClicked);
  useEffect(() => {
    history.listen(() => {
      window.scrollTo(0, 0);
      return setHamClicked(!hamClicked);
    });
  });
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
            <p>m.c.f.c.b.d</p>
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

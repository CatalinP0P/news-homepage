import React, { useState } from "react";
import iconMenu from "../../../assets/images/icon-menu.svg";
import close from "../../../assets/images/icon-menu-close.svg";
import logo from "../../../assets/images/logo.svg";
import "./header.Module.scss";

export default function Header() {
  const [nav, setNav] = useState(false);

  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="logo" />
      <img
        src={nav ? close : iconMenu}
        alt="icon"
        onClick={() => setNav(!nav)}
        className={"header__menu__button " + (nav ? " big" : "")}
      />

      <div className="header__nav">
        <label className="header__nav__item">Home</label>
        <label className="header__nav__item">New</label>
        <label className="header__nav__item">Popular</label>
        <label className="header__nav__item">Trending</label>
        <label className="header__nav__item">Categories</label>
      </div>

      {nav && (
        <>
          <div className="overlay" />
          <div className="header__nav__mobile">
            <label className="header__nav__item">Home</label>
            <label className="header__nav__item">New</label>
            <label className="header__nav__item">Popular</label>
            <label className="header__nav__item">Trending</label>
            <label className="header__nav__item">Categories</label>
          </div>
        </>
      )}
    </div>
  );
}

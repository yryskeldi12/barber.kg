import React from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";
import LOGO from "../../../src/components/Home/Hero/heroImg/kgLogo.svg";
import { LuBookmark } from "react-icons/lu";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <NavLink to="/">
            <img src={LOGO} alt="" />
          </NavLink>
          <div className="header--nav">
            <NavLink to="/">
              <h1>Главная</h1>
            </NavLink>
            <NavLink to="barbers">
              <h1>Барбершопы</h1>
            </NavLink>
            <NavLink to="salon">
              <h1>Салоны красоты</h1>
            </NavLink>
            <NavLink to="blog">
              <h1>Блог</h1>
            </NavLink>
          </div>
          <div className="header--right">
            <select>
              <option>RU</option>
              <option>EN</option>
            </select>
            <LuBookmark className="header--right__bookmark" />
            <button>Войти</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

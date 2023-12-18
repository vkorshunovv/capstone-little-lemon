import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css";

export default (props) => {
  return (
    <Menu right>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="#history">
        About
      </a>
      <a className="menu-item" href="#onlineMenuButton">
        Menu
      </a>
      <a className="menu-item" href="/booking">
        Reservations
      </a>
      <a className="menu-item" href="#testimonials">
        Testimonials
      </a>
      <a className="menu-item" href="#footer">
        Contact
      </a>
    </Menu>
  );
};

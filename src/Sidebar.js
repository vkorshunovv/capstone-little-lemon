import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const closeSideBar = () => {
    setIsOpen(false);
  };

  return (
    <Menu isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen} right>
      <a className="menu-item" href="/" onClick={closeSideBar}>
        Home
      </a>
      <a className="menu-item" href="#history" onClick={closeSideBar}>
        About
      </a>
      <a className="menu-item" href="#onlineMenuButton" onClick={closeSideBar}>
        Menu
      </a>
      <a className="menu-item" href="/booking" onClick={closeSideBar}>
        Reservations
      </a>
      <a className="menu-item" href="#testimonials" onClick={closeSideBar}>
        Testimonials
      </a>
      <a className="menu-item" href="#footer" onClick={closeSideBar}>
        Contact
      </a>
    </Menu>
  );
};

export default {Sidebar}
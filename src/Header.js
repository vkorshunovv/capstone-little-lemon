import React, { useState, useEffect } from "react";
import logo from "./icons_assets/Logo .svg";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import MediaQuery from "react-responsive";

export default function Header() {
  const [position, setPosition] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      let moving = window.scrollY;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const cls = visible ? "visible" : "hidden";

  return (
    <header id="header" className={cls}>
      <img src={logo} width="150em" alt="Little Lemon logo" />
      <MediaQuery maxWidth={767}>
        <Sidebar />
      </MediaQuery>

      <MediaQuery minWidth={768}>
        <Nav />
      </MediaQuery>
    </header>
  );
}

import React from "react";

export default function Nav() {
  return (
    <>
      <nav id="nav">
        <ul id="navbar">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#history">About</a>
          </li>
          <li>
            <a href="#onlineMenuButton">Menu</a>
          </li>
          <li>
            <a href="/booking">Reservations</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#footer">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

import React from "react";
import logoSquare from "./icons_assets/logoSquare.png";

export default function Footer() {
  const url_base = "/capstone-little-lemon";
  return (
    <footer id="footer">
      <img src={logoSquare} width="200px" alt="Little Lemon logo" />

      <nav>
        <ul>
          <li>
            <a href={url_base}>HOME</a>
          </li>
          <li>
            <a href="#history">ABOUT</a>
          </li>
          <li>
            <a href="#onlineMenuButton">MENU</a>
          </li>
          <li>
            <a href={url_base + "/booking"}>RESERVATIONS</a>
          </li>
          <li>
            <a href="#testimonials">TESTIMONIALS</a>
          </li>
          <li>
            <a href="#footer">CONTACT</a>
          </li>
        </ul>
      </nav>

      <div className="contact">
        <h3>Contact Us</h3>
        <h6>
          Adress: <i>19/20 ROYAL HIBERNIAN WAY</i>
        </h6>
        <h6>
          Phone number: <i>773-697-4961</i>{" "}
        </h6>
        <h6>
          Email: <i>hello@littlelemon.com</i>
        </h6>
      </div>

      <div className="socialMedia">
        <h3>Social Media Links</h3>
        <ul>
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.x.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter (X)
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
      <div id="copyright">
        <p>
          {" "}
          &copy; Copyright 2023.{" "}
          <a
            href="https://github.com/vkorshunovv/capstone-little-lemon"
            target="_blank"
            rel="noreferrer"
          >
            Viktor Korshunov.
          </a>{" "}
          Don't claim as your own.
        </p>
      </div>
    </footer>
  );
}

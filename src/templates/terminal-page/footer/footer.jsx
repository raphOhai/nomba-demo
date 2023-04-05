import React from "react";
import "./index.scss";
import Logo from "assets/images/svgs/terminal/logo.svg";

const Footer = () => {
  return (
    <footer className="c_tFooter child_wrap">
      <div className="c_tFooter_lr">
        <Logo />
        <p data-animation="p">
          🇳🇬19b Bosun Adekoya Street, Lekki Phase 1, Lagos, Nigeria. 🇺🇸1776 Sacremento St Apt 311 SAN Francisco CA 94109
        </p>
      </div>

      <ul className="c_tFooter_gr">
        <li data-animation="p">Legal</li>
        <li data-animation="p">Terms of Services</li>
        <li data-animation="p">Privacy Policy</li>
      </ul>
    </footer>
  );
};

export { Footer };

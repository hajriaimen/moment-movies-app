import React from "react";
import logo from "../../utils/moment_logo.png";
import "./Header.css";

export default function Header() {
  return (
    <header className="dark_bg">
      <div className="container">
        <div className="container center">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </header>
  );
}

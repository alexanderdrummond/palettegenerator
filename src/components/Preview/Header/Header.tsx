import React from "react";
import "./Header.scss";

interface HeaderProps {
  backgroundColor?: string;
  textColor?: string;
}

const Header: React.FC<HeaderProps> = ({ backgroundColor, textColor }) => {
  return (
    <header className="header" style={{ backgroundColor, color: textColor }}>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;

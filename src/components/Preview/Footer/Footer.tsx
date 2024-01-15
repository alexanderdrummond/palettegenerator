import React from "react";
import "./Footer.scss";

interface FooterProps {
  backgroundColor?: string;
  textColor?: string;
}

const Footer: React.FC<FooterProps> = ({ backgroundColor, textColor }) => {
  return (
    <footer className="footer" style={{ backgroundColor, color: textColor }}>
      <p>Copyright © 2024</p>
    </footer>
  );
};

export default Footer;

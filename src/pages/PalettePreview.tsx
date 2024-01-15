import React, { useState } from "react";
import Header from "../components/Preview/Header/Header";
import Footer from "../components/Preview/Footer/Footer";
import Content from "../components/Preview/Content/Content";
import PaletteSelector from "../components/Preview/Selector/PaletteSelector";
import "./PalettePreview.scss";

const PalettePreview = () => {
  const [headerColor, setHeaderColor] = useState<string>("");
  const [footerColor, setFooterColor] = useState<string>("");
  const [contentColor, setContentColor] = useState<string>("");

  const onSelectPalette = (palette: number[][]) => {
    const randomColor = (colors: number[][]) =>
      `rgb(${colors[Math.floor(Math.random() * colors.length)].join(",")})`;

    setHeaderColor(randomColor(palette));
    setFooterColor(randomColor(palette));
    setContentColor(randomColor(palette));
  };

  return (
    <div className="palette-preview">
      <div className="selector-container">
        <PaletteSelector onSelectPalette={onSelectPalette} />
      </div>
      <div className="app-window">
        <Header backgroundColor={headerColor} />
        <Content backgroundColor={contentColor} />
        <Footer backgroundColor={footerColor} />
      </div>
    </div>
  );
};

export default PalettePreview;

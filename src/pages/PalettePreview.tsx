import { useState, useEffect } from "react";
import Header from "../components/Preview/Header/Header";
import Footer from "../components/Preview/Footer/Footer";
import Content from "../components/Preview/Content/Content";
import PaletteSelector from "../components/Preview/Selector/PaletteSelector";
import "./PalettePreview.scss";
import { useLocation } from "react-router-dom";

const PalettePreview = () => {
  const [headerColor, setHeaderColor] = useState<{
    backgroundColor: string;
    textColor: string;
  }>({ backgroundColor: "", textColor: "" });
  const [footerColor, setFooterColor] = useState<{
    backgroundColor: string;
    textColor: string;
  }>({ backgroundColor: "", textColor: "" });
  const [contentColor, setContentColor] = useState<{
    backgroundColor: string;
    textColor: string;
  }>({ backgroundColor: "", textColor: "" });
  const location = useLocation();

  function isColorLight(r: number, g: number, b: number): boolean {
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5;
  }

  const selectColor = (colors: number[][]) => {
    const index = Math.floor(Math.random() * colors.length);
    const color: [number, number, number] = colors[index] as [
      number,
      number,
      number
    ];
    const textColor = isColorLight(...color) ? "black" : "white";
    return {
      backgroundColor: `rgb(${color.join(",")})`,
      textColor,
    };
  };

  const onSelectPalette = (palette: number[][]) => {
    setHeaderColor(selectColor(palette));
    setFooterColor(selectColor(palette));
    setContentColor(selectColor(palette));
  };

  useEffect(() => {
    const statePalette = location.state?.palette as number[][];
    if (statePalette) {
      onSelectPalette(statePalette);
    }
  }, [location]);

  return (
    <div className="palette-preview">
      <div className="selector-container">
        <PaletteSelector onSelectPalette={onSelectPalette} />
      </div>
      <div className="app-window">
        <Header
          backgroundColor={headerColor.backgroundColor}
          textColor={headerColor.textColor}
        />
        <Content
          backgroundColor={contentColor.backgroundColor}
          textColor={contentColor.textColor}
        />
        <Footer
          backgroundColor={footerColor.backgroundColor}
          textColor={footerColor.textColor}
        />
      </div>
    </div>
  );
};

export default PalettePreview;

import React, { useState, useEffect } from "react";
import "./PaletteSelector.scss";

const PaletteSelector = ({
  onSelectPalette,
}: {
  onSelectPalette: (palette: number[][]) => void;
}) => {
  const [palettes, setPalettes] = useState<number[][][]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedPalettes = JSON.parse(
      localStorage.getItem("savedPalettes") || "[]"
    );
    setPalettes(savedPalettes);
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="palette-selector">
      <button onClick={toggleDropdown} className="dropdown-button">
        Select Palette
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {palettes.map((palette, index) => (
            <div
              key={index}
              className="palette-item"
              onClick={() => {
                onSelectPalette(palette);
                toggleDropdown();
              }}
            >
              {palette.map((color, colorIndex) => (
                <div
                  key={colorIndex}
                  className="color-box"
                  style={{ backgroundColor: `rgb(${color.join(",")})` }}
                />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PaletteSelector;

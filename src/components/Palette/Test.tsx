import React, { useState, useEffect } from "react";

const ColorPalette: React.FC = () => {
  const [currentColors, setCurrentColors] = useState<number[][]>([]);
  const [savedPalettes, setSavedPalettes] = useState<number[][][]>(() => {
    const localData = localStorage.getItem("palettes");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("palettes", JSON.stringify(savedPalettes));
  }, [savedPalettes]);

  const fetchColors = () => {
    const url = "http://colormind.io/api/";
    const data = {
      model: "default",
    };

    const http = new XMLHttpRequest();

    http.onreadystatechange = () => {
      if (http.readyState === 4 && http.status === 200) {
        const palette = JSON.parse(http.responseText).result;
        setCurrentColors(palette);
      }
    };

    http.open("POST", url, true);
    http.send(JSON.stringify(data));
  };
  const savePalette = () => {
    setSavedPalettes([...savedPalettes, currentColors]);
  };

  const removePalette = (index: number) => {
    const newPalettes = savedPalettes.filter((_, idx) => idx !== index);
    setSavedPalettes(newPalettes);
  };

  return (
    <div>
      <button onClick={fetchColors}>Generate Palette</button>
      <button onClick={savePalette}>Save Palette</button>
      <div style={{ display: "flex" }}>
        {currentColors.map((color, index) => (
          <div
            key={index}
            style={{
              backgroundColor: `rgb(${color.join(",")})`,
              width: 100,
              height: 100,
            }}
          />
        ))}
      </div>
      <div>
        {savedPalettes.map((palette, index) => (
          <div key={index}>
            <div style={{ display: "flex" }}>
              {palette.map((color, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: `rgb(${color.join(",")})`,
                    width: 100,
                    height: 100,
                  }}
                />
              ))}
            </div>
            <button onClick={() => removePalette(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;

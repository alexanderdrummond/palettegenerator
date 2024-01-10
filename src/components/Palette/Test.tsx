import React, { useState } from "react";

const ColorPalette: React.FC = () => {
  const [colors, setColors] = useState<number[][]>([]);

  const fetchColors = () => {
    const url = "http://colormind.io/api/";
    const data = {
      model: "default",
    };

    const http = new XMLHttpRequest();

    http.onreadystatechange = () => {
      if (http.readyState === 4 && http.status === 200) {
        const palette = JSON.parse(http.responseText).result;
        setColors(palette);
      }
    };

    http.open("POST", url, true);
    http.send(JSON.stringify(data));
  };

  return (
    <div>
      <button onClick={fetchColors}>Generate Palette</button>
      <div style={{ display: "flex" }}>
        {colors.map((color, index) => (
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
    </div>
  );
};

export default ColorPalette;

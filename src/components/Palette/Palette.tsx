import { useState } from "react";

import './Palette.scss'

export const ColorPalette: React.FC = () => {
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
      <div className="container">
        <header>
            <h2>Your new colors</h2>
        </header>
        <section className="colorSection">
          {colors.map((color, index) => (
            <div
              key={index}
              style={{ backgroundColor: `rgb(${color.join(",")})`,
              width: 200,
              height: 200,
              margin: 10,
            }} 
            />
          ))}
        </section>
        <div className="btnContainer">
            <button onClick={fetchColors}>Generate</button>
            <button>Save this one</button>
        </div>
      </div>
    );
  };
  

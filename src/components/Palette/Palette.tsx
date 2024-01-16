import React, { useState } from "react";
import styles from "./Palette.module.scss";
import { ColorPalette as PaletteType } from "../../utils/types";
import { savePaletteToLS } from "../../utils/mainutils";
import GradientButton from "../GradientButton/GradientButton";
import clipboardIcon from "../../assets/Clipboard.svg";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const rgbToHex = (rgb: number[]): string => {
  return (
    "#" +
    rgb
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
};

export const ColorPalette: React.FC = () => {
  const [colors, setColors] = useState<PaletteType>([]);

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
        toast.success('Colors generated successfully!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
      
        });
      }
    };

    http.open("POST", url, true);
    http.send(JSON.stringify(data));
  };

  const savePalette = () => {
    savePaletteToLS(colors);
  };

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
  };

  return (
    <div className={styles.container}>
      <header>
        <h2>Your new colors</h2>
      </header>
      <section className={styles.colorSection}>
        {colors.map((color, index) => {
          const hexCode = rgbToHex(color);
          return (
            <div key={index} className={styles.colorBlockContainer}>
              <div
                className={styles.colorBlock}
                style={{ backgroundColor: `rgb(${color.join(",")})` }}
              />
              <div className={styles.colorInfo}>
                <span>{hexCode}</span>
                <button onClick={() => handleCopy(hexCode)}>
                  copy <img src={clipboardIcon} alt="Copy" />
                </button>
              </div>
            </div>
          );
        })}

      </section>
      <div className={styles.btnContainer}>
        <GradientButton text="Generate" onClick={fetchColors} />
        {colors.length > 0 && (
          <GradientButton text="Save this one!" onClick={savePalette} />
        )}
      </div>

    </div>
  );
};

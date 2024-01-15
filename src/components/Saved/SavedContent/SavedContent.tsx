import React, { useEffect, useState } from "react";
import styles from "./SavedContent.module.scss";
import clipboardIcon from "../../../assets/Clipboard.svg";
import { getSavedPalettesFromLS } from "../../../utils/mainutils";
import GradientButton from "../../GradientButton/GradientButton";

type ColorPalette = number[][];

const SavedContent: React.FC = () => {
  const [savedColors, setSavedColors] = useState<ColorPalette[]>([]);

  useEffect(() => {
    const palettes = getSavedPalettesFromLS();
    if (palettes) {
      setSavedColors(palettes);
    }
  }, []);

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

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
  };

  return (
    <div className={styles.container}>
      <section className={styles.colorSection}>
        {savedColors.map((palette, index) => (
          <React.Fragment key={index}>
            <div className={styles.palette}>
              {palette.map((color, colorIndex) => {
                const hexCode = rgbToHex(color);
                return (
                  <div key={colorIndex} className={styles.colorBlockContainer}>
                    <div
                      className={styles.colorBlock}
                      style={{ backgroundColor: `rgb(${color.join(",")})` }}
                    />
                    <div className={styles.colorInfo}>
                      <span>{hexCode}</span>
                      <button onClick={() => handleCopy(hexCode)}>
                        <img src={clipboardIcon} alt="Copy" />
                      </button>
                    </div>
                  </div>
                );
              })}
              <div className={styles.buttonsContainer}>
                <GradientButton text="Preview" onClick={() => {}} />
                <GradientButton text="Remove" onClick={() => {}} />
              </div>
            </div>
            {index < savedColors.length - 1 && (
              <hr className={styles.paletteSeparator} />
            )}
          </React.Fragment>
        ))}
      </section>
    </div>
  );
};

export default SavedContent;

import React from "react";
import styles from "./Sidebar.module.scss";
import { getSavedPalettesFromLS } from "../../../utils/mainutils";
import { usePalette } from "../../../utils/PaletteContext";

const Sidebar: React.FC = () => {
  const savedPalettes = getSavedPalettesFromLS();
  const { setActivePalette } = usePalette();

  return (
    <aside className={styles.sidebar}>
      {savedPalettes.map((palette, index) => (
        <div
          key={index}
          className={styles.palette}
          onClick={() => setActivePalette(palette)}
        >
          {palette.map((color, idx) => (
            <div
              key={idx}
              className={styles.color}
              style={{ backgroundColor: `rgb(${color.join(",")})` }}
            ></div>
          ))}
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;

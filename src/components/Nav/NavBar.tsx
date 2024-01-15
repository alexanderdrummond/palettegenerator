import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.scss";
import GradientButton from "../GradientButton/GradientButton";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const navigateTo = (path: string) => {
    navigate(path);
  };

  return (
    <header className={styles.header}>
      <div className={styles.topSection}>
        <h1 className={styles.title}>Colorizer Palette Generator</h1>
        <div className={styles.buttons}>
          <GradientButton
            text="Random Palette"
            onClick={() => navigateTo("/")}
          />
          <GradientButton
            text="My Palettes"
            onClick={() => navigateTo("/saved-palettes")}
          />
        </div>
      </div>
      <hr className={styles.horizontalLine} />
    </header>
  );
};

export default Navbar;

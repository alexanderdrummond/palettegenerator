import React from "react";
import styles from "./Navbar.module.scss";
import GradientButton from "../GradientButton/GradientButton";

const Navbar: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topSection}>
        <h1 className={styles.title}>Colorizer Palette Generator</h1>
        <div className={styles.buttons}>
          <GradientButton text="Random Palette" onClick={() => {}} />
          <GradientButton text="My Palettes" onClick={() => {}} />
        </div>
      </div>
      <hr className={styles.horizontalLine} />
    </header>
  );
};

export default Navbar;

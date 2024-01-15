import { useNavigate } from "react-router-dom";
import style from "./nav.module.scss";

export const NavComponent = () => {
  const navigate = useNavigate();

  const navigateTo = (path: string) => {
    navigate(path);
  };

  return (
    <nav className={style.navContainer}>
      <h2>Colorizer Palette Generator</h2>
      <div className={style.buttonContainer}>
        <button
          className={style.navButtonStyle}
          onClick={() => navigateTo("/")}
        >
          Random Palette
        </button>

        <button
          className={style.navButtonStyle}
          onClick={() => navigateTo("/saved-palettes")}
        >
          My Palettes
        </button>
      </div>
    </nav>
  );
};

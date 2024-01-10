import style from "./footer.module.scss"

export const Footer = () => {
    return (
        <div className={style.footerContainer}>
        <footer>
        <p>Colorizer Pallette Generator - Created by Mike Montgomery</p>
        <p>Made possible by colormind.io pallette API</p>
      </footer>
        </div>
    )
}
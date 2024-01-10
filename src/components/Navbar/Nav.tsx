import style from "./nav.module.scss"

export const NavComponent = () => {
return(
    <nav className={style.navContainer}>
        <h2>Colorizer Pallete Generator</h2>
        <div className={style.buttonContainer}>
        <button className={style.navButtonStyle}>Random Pallete</button>
        <button className={style.navButtonStyle}>My Palletes</button>
        </div>
    </nav>
)
}
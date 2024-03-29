import style from "./header.module.scss";
export const HeaderComponent = () => {
  return (
    <div className={style.hContainer}>
      <div className={style.headerTitle}>
        <h1>Your new colors</h1>
      </div>
      <div className={style.hButtons}>
        <button>Generate</button>
        <button>Save this one</button>
      </div>
    </div>
  );
};

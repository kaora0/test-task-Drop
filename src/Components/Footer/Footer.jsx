import styles from "./Footer.module.scss";
import { NAV } from "../Header/NavBar";

export function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer_row}>
          <nav className={styles.nav}>
            {NAV.map((item) => (
              <a key={item.way}>{item.name}</a>
            ))}
          </nav>
          <p>
            Designed and built by <span>Pavan MG</span> with <span>Love</span> &{" "}
            <span>Coffee</span>
          </p>
        </div>
      </footer>
    </>
  );
}

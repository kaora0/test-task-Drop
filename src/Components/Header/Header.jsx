import styles from "./Header.module.scss";
import { NAV } from "./NavBar.jsx";
import { Icons } from "../Icons/Icons.jsx";

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header_row}>
          <div className={styles.logo}>
            <img
              src="../public/static/logo1.svg"
              alt="#"
              width={97}
              height={59}
            />
          </div>
          <nav className={styles.nav}>
            {NAV.map((item) => (
              <a key={item.way}>{item.name}</a>
            ))}
            <Icons />
          </nav>
        </div>
      </header>
    </>
  );
}

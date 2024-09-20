import styles from "./Header.module.scss";
import { NAV } from "./NavBar.jsx";
import { Icons } from "../Icons/Icons.jsx";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header_row}>
        <div className={styles.logo}>
          <img
            src="../public/static/logo1.svg"
            alt="Logo"
            width={97}
            height={59}
          />
        </div>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <span className={menuOpen ? styles.barOpen : ""}></span>
          <span className={menuOpen ? styles.barOpen : ""}></span>
          <span className={menuOpen ? styles.barOpen : ""}></span>
        </div>

        <nav className={`${styles.nav} ${menuOpen ? styles.menuOpen : ""}`}>
          {NAV.map((item) => (
            <a key={item.way} href={item.way}>
              {item.name}
            </a>
          ))}
          <Icons />
        </nav>
      </div>
    </header>
  );
}

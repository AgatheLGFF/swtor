import { useTheme } from "../context/ThemeContext";
import styles from "./Header.module.css";

function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="/" className={styles.logo}>
          <img src="https://picsum.photos/100/100" alt="Star Wars Explorer" />
          <span>Star Wars Explorer</span>
        </a>

        <ul>
          <li>
            <a href="/" className={styles.navlink}>
              Accueil
            </a>
          </li>
          <li>
            <a href="/movies" className={styles.navlink}>
              Films
            </a>
          </li>
          <li>
            <a href="/" className={styles.navlink}>
              Personnages
            </a>
          </li>
          <li>
            <a href="/" className={styles.navlink}>
              Planètes
            </a>
          </li>
        </ul>
        <button onClick={toggleTheme} type="button">{theme === "light" ? "sombre" : "clair"}</button>
      </nav>
    </header>
  );
}

export default Header;

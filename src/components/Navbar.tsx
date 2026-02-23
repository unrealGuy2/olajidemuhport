'use client'; // this tells the computer we need the button to work when clicked!

import Link from 'next/link';
import styles from './Navbar.module.scss';
import { useTheme } from '../context/ThemeContext'; // grabbing our magic wire!

export default function Navbar() {
  // here we check if the switch is on dark or light, and get the power to flip it
  const { isDarkMode, toggleTheme } = useTheme(); 

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        mfgeeked
      </Link>
      <div className={styles.links}>
        <Link href="#about">About</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#projects">Projects</Link>
        
        {/* this is the actual button you will click! */}
        <button onClick={toggleTheme} className={styles.themeButton}>
          {isDarkMode ? 'light mode' : 'dark mode'}
        </button>
      </div>
    </nav>
  );
}
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a href="mailto:olajidemuh@gmail.com">Email: olajidemuh@gmail.com</a>
        <a href="https://github.com/Mfgeeked" target="_blank" rel="noopener noreferrer">GitHub: Mfgeeked</a>
        <a href="https://linkedin.com/in/Muhammed-Olajide" target="_blank" rel="noopener noreferrer">LinkedIn: Muhammed Olajide</a>
      </div>
      <p>© {new Date().getFullYear()} Olajide Muhammed. All rights reserved.</p>
    </footer>
  );
}
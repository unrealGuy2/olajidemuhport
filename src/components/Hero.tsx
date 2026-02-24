import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero} id="about">
      <h1>M.F. Olajide</h1>
      <h2>ML Engineer (in-training) | Poet and Creative</h2>
      <p className={styles.tagline}>
        "Incomprehensible and Incompressible"
      </p>
      <button className={styles.cta}>View Projects</button>
    </section>
  );
}
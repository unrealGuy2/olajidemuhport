import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero} id="about">
      <h1>Olajide Muhammed</h1>
      <h2>AI/ML Engineer</h2>
      <p>
        AI/ML Engineer with experience building and evaluating machine learning models, fine-tuning language models, and developing AI agent workflows. Skilled in data preprocessing, supervised learning, and prompt engineering. Focused on applying statistical rigor and scalable solutions to practical machine learning problems.
      </p>
      <button className={styles.cta}>View Projects</button>
    </section>
  );
}
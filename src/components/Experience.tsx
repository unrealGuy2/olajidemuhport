import styles from './Experience.module.scss';

export default function Experience() {
  return (
    <section className={styles.experience} id="experience">
      <h2>Work Experience</h2>
      <div className={styles.card}>
        <div className={styles.header}>
          <h3>A Levels Physics Tutor</h3>
          <span>Educational Advancement Center, Ibadan (2023 - Present)</span>
        </div>
        <ul>
          <li>Taught advanced physics and designed technical learning materials for A-Level students.</li>
          <li>Developed an AI-assisted workflow to generate and curate a comprehensive question bank for student practice.</li>
          <li>Integrated AI-driven question generation to improve the variety and difficulty scaling of assessments.</li>
        </ul>
      </div>
    </section>
  );
}
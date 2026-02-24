import styles from './Achievements.module.scss';

export default function Achievements() {
  return (
    <section className={styles.achievements} id="achievements">
      <h2>Achievements & Leadership</h2>
      <div className={styles.card}>
        <div className={styles.header}>
          <h3>Notion Campus Leader</h3>
          <span>University of Ibadan</span>
        </div>
        <ul>
          <li>UI’s First Notion Campus Leader</li>
        </ul>
      </div>
    </section>
  );
}
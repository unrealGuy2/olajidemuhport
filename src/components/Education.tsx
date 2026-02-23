import styles from './Education.module.scss';

export default function Education() {
  return (
    <section className={styles.education} id="education">
      <div className={styles.container}>
        {/* Left Side: Education */}
        <div>
          <h2>Education</h2>
          <div className={styles.item}>
            <h3>University of Ibadan</h3>
            <p>B.Sc. Electrical & Electronics Engineering</p>
            <span>2024 - Present</span>
          </div>
          <div className={styles.item}>
            <h3>Nigerian Defence Academy</h3>
            <span>2019 - 2023</span>
          </div>
        </div>

        {/* Right Side: Certifications */}
        <div>
          <h2>Certifications</h2>
          <ul className={styles.certs}>
            <li>Google Data Analytics Professional Certificate</li>
            <li>Prompt Engineering Certificate</li>
            <li>Al for Teachers Certificate</li>
            <li>Kaggle Generative AI Course (Prompting, Embeddings, Fine-Tuning, Agent Design)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
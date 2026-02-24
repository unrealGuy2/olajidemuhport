import styles from './Skills.module.scss';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "SQL", "JavaScript (basic)"]
    },
    {
      title: "Machine Learning",
      skills: ["scikit-learn", "TensorFlow", "Hugging Face Transformers"]
    },
    {
      title: "Data & Visualization",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"]
    },
    {
      title: "Model Evaluation",
      skills: ["Regression metrics", "classification metrics", "evaluation rubric design"]
    },
    {
      title: "Prompt Engineering",
      skills: ["Instruction following", "function calling", "evaluation metrics"]
    },
    {
      title: "Tools & Other",
      skills: ["Jupyter Notebook", "Kaggle", "Google Colab", "Git", "Curriculum development"]
    }
  ];

  return (
    <section className={styles.skills} id="skills">
      <h2>Technical Skills & Tools</h2>
      <div className={styles.grid}>
        {skillCategories.map((category, index) => (
          <div key={index} className={styles.category}>
            <h3>{category.title}</h3>
            <ul>
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
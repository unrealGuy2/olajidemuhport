import styles from './Projects.module.scss';

export default function Projects() {
  const projectList = [
    {
      title: "Taxi Fare Prediction Using Linear Regression",
      bullets: [
        "Built a supervised regression model for fare prediction using scikit-learn.",
        "Conducted data cleaning, feature engineering, and model evaluation.",
        "Visualized data trends and model performance."
      ]
    },
    {
      title: "LLM Response Evaluator Design",
      bullets: [
        "Developed an evaluation framework for large language model (LLM) outputs focusing on instruction following, groundedness, and fluency.",
        "Created custom evaluation rubrics and integrated feedback loops."
      ]
    },
    {
      title: "Gemini API Prompt Engineering Practice",
      bullets: [
        "Designed and optimized prompts using Gemini API.",
        "Implemented context shaping and dynamic instruction strategies."
      ]
    },
    {
      title: "Embeddings and Similarity Scores",
      bullets: [
        "Computed text embeddings and similarity metrics for semantic search tasks."
      ]
    },
    {
      title: "Function Calling with Gemini API",
      bullets: [
        "Enabled LLMs to execute external functions dynamically."
      ]
    },
    {
      title: "Building an Agent with LangGraph",
      bullets: [
        "Created a multi-step reasoning agent using LangGraph to coordinate LLM tasks."
      ]
    },
    {
      title: "Fine-Tuning a Custom Model",
      bullets: [
        "Fine-tuned a transformer-based language model with Hugging Face."
      ]
    },
    {
      title: "Google Search Grounding",
      bullets: [
        "Implemented retrieval-augmented generation (RAG) by integrating Google Search data into LLM responses."
      ]
    }
  ];

  return (
    <section className={styles.projects} id="projects">
      <h2>Projects</h2>
      <div className={styles.grid}>
        {projectList.map((project, index) => (
          <div key={index} className={styles.card}>
            <h3>{project.title}</h3>
            <ul>
              {project.bullets.map((bullet, bulletIndex) => (
                <li key={bulletIndex}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
import { useState } from "react";

export default function App() {
  const [goal, setGoal] = useState("");
  const [roadmap, setRoadmap] = useState([]);

  const generateRoadmap = () => {
    const paths = {
      "Frontend Developer": [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Git & GitHub",
        "Projects",
      ],
      "AI Engineer": [
        "Python",
        "Data Structures",
        "Machine Learning",
        "Deep Learning",
        "LLMs",
        "LangChain",
        "Projects",
      ],
      "Backend Developer": [
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "APIs",
        "Authentication",
        "Deployment",
      ],
    };

    setRoadmap(paths[goal] || ["No roadmap found"]);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
        Learning Path Generator
      </h1>

      <p style={{ color: "#94a3b8", marginBottom: "30px" }}>
        Generate a roadmap for your dream career 🚀
      </p>

      <select
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        style={{
          padding: "12px",
          width: "300px",
          borderRadius: "10px",
          border: "none",
          marginRight: "10px",
        }}
      >
        <option value="">Select Career Path</option>
        <option>Frontend Developer</option>
        <option>Backend Developer</option>
        <option>AI Engineer</option>
      </select>

      <button
        onClick={generateRoadmap}
        style={{
          padding: "12px 20px",
          background: "#8b5cf6",
          border: "none",
          color: "white",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        Generate Path
      </button>

      <div style={{ marginTop: "40px" }}>
        {roadmap.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#1e293b",
              padding: "20px",
              borderRadius: "12px",
              marginBottom: "15px",
              width: "400px",
            }}
          >
            Step {index + 1}: {item}
          </div>
        ))}
      </div>
    </div>
  );
}
import { useState } from "react";
import "./App.css";

export default function App() {
  const [goal, setGoal] = useState("");
  const [roadmap, setRoadmap] = useState([]);
  const [completed, setCompleted] = useState([]);

  const paths = {
    "Frontend Developer": [
      { title: "HTML", level: "Beginner", duration: "1 Week" },
      { title: "CSS", level: "Beginner", duration: "1 Week" },
      { title: "JavaScript", level: "Intermediate", duration: "2 Weeks" },
      { title: "React", level: "Intermediate", duration: "2 Weeks" },
      { title: "Tailwind CSS", level: "Intermediate", duration: "1 Week" },
      { title: "Git & GitHub", level: "Beginner", duration: "1 Week" },
      { title: "Projects", level: "Advanced", duration: "Ongoing" },
    ],

    "Backend Developer": [
      { title: "JavaScript", level: "Beginner", duration: "1 Week" },
      { title: "Node.js", level: "Intermediate", duration: "2 Weeks" },
      { title: "Express.js", level: "Intermediate", duration: "1 Week" },
      { title: "MongoDB", level: "Intermediate", duration: "2 Weeks" },
      { title: "REST APIs", level: "Intermediate", duration: "1 Week" },
      { title: "Authentication", level: "Advanced", duration: "1 Week" },
      { title: "Deployment", level: "Advanced", duration: "1 Week" },
    ],

    "AI Engineer": [
      { title: "Python", level: "Beginner", duration: "2 Weeks" },
      { title: "Data Structures", level: "Intermediate", duration: "2 Weeks" },
      { title: "Machine Learning", level: "Intermediate", duration: "3 Weeks" },
      { title: "Deep Learning", level: "Advanced", duration: "3 Weeks" },
      { title: "LLMs", level: "Advanced", duration: "2 Weeks" },
      { title: "LangChain", level: "Advanced", duration: "1 Week" },
      { title: "Projects", level: "Advanced", duration: "Ongoing" },
    ],

    "Cybersecurity": [
      { title: "Networking Basics", level: "Beginner", duration: "1 Week" },
      { title: "Linux", level: "Beginner", duration: "2 Weeks" },
      { title: "Web Security", level: "Intermediate", duration: "2 Weeks" },
      { title: "Ethical Hacking", level: "Intermediate", duration: "3 Weeks" },
      { title: "Penetration Testing", level: "Advanced", duration: "2 Weeks" },
      { title: "Projects", level: "Advanced", duration: "Ongoing" },
    ],
  };

  const generateRoadmap = () => {
    setRoadmap(paths[goal] || []);
    setCompleted([]);
  };

  const toggleComplete = (index) => {
    if (completed.includes(index)) {
      setCompleted(completed.filter((item) => item !== index));
    } else {
      setCompleted([...completed, index]);
    }
  };

  return (
    <div className="app">
      {/* Hero Section */}
      <div className="hero">
        <h1>🚀 Learning Path Generator</h1>
        <p>
          Generate personalized roadmaps for Frontend, Backend, AI, and
          Cybersecurity careers.
        </p>
      </div>

      <div className="career-buttons">
  <button
    className={goal === "Frontend Developer" ? "active" : ""}
    onClick={() => setGoal("Frontend Developer")}
  >
    Frontend
  </button>

  <button
    className={goal === "Backend Developer" ? "active" : ""}
    onClick={() => setGoal("Backend Developer")}
  >
    Backend
  </button>

  <button
    className={goal === "AI Engineer" ? "active" : ""}
    onClick={() => setGoal("AI Engineer")}
  >
    AI/ML
  </button>

  <button
    className={goal === "Cybersecurity" ? "active" : ""}
    onClick={() => setGoal("Cybersecurity")}
  >
    Cybersecurity
  </button>
</div>
      {/* Dropdown */}
      <div className="controls">
        <select
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        >
          <option value="">Select Career Path</option>
          <option>Frontend Developer</option>
          <option>Backend Developer</option>
          <option>AI Engineer</option>
          <option>Cybersecurity</option>
        </select>

        <button className="generate-btn" onClick={generateRoadmap}>
          Generate Path
        </button>
      </div>

      <div className="career-buttons">
  <button
    className={goal === "Frontend Developer" ? "active" : ""}
    onClick={() => setGoal("Frontend Developer")}
  >
    Frontend
  </button>

  <button
    className={goal === "Backend Developer" ? "active" : ""}
    onClick={() => setGoal("Backend Developer")}
  >
    Backend
  </button>

  <button
    className={goal === "AI Engineer" ? "active" : ""}
    onClick={() => setGoal("AI Engineer")}
  >
    AI/ML
  </button>

  <button
    className={goal === "Cybersecurity" ? "active" : ""}
    onClick={() => setGoal("Cybersecurity")}
  >
    Cybersecurity
  </button>
</div>

      {/* Roadmap Cards */}
      <div className="roadmap-container">
        {roadmap.map((item, index) => (
          <div className="roadmap-card" key={index}>
            <div className="card-header">
              <h3>
                Step {index + 1}: {item.title}
              </h3>

              <input
                type="checkbox"
                checked={completed.includes(index)}
                onChange={() => toggleComplete(index)}
              />
            </div>

            <p>📚 Level: {item.level}</p>
            <p>⏳ Duration: {item.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
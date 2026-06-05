import { useState,useEffect} from "react";
import "./App.css";

export default function App() {
  const [goal, setGoal] = useState("");
  const [roadmap, setRoadmap] = useState([]);
  const [completed, setCompleted] = useState([]);
 useEffect(() => {
  const saved = localStorage.getItem("completedSteps");

  if (saved) {
    setCompleted(JSON.parse(saved));
  }
}, []);
useEffect(() => {
  localStorage.setItem(
    "completedSteps",
    JSON.stringify(completed)
  );
}, [completed]);

  const paths = {
    "Frontend Developer": [
  {
    title: "HTML",
    level: "Beginner",
    duration: "1 Week",
    resource: "https://www.youtube.com/watch?v=HD13eq_Pmp8"
  },
  {
    title: "CSS",
    level: "Beginner",
    duration: "1 Week",
    resource: "https://www.geeksforgeeks.org/css/css-tutorial/"
  },
  {
    title: "JavaScript",
    level: "Intermediate",
    duration: "2 Weeks",
    resource: "https://www.youtube.com/watch?v=EerdGm-ehJQ"
  },
  {
    title: "React",
    level: "Intermediate",
    duration: "2 Weeks",
    resource: "https://react.dev/learn"
  },
  {
    title: "Tailwind CSS",
    level: "Intermediate",
    duration: "1 Week",
    resource: "https://tailwindcss.com/docs/installation"
  },
  {
    title: "Git & GitHub",
    level: "Beginner",
    duration: "1 Week",
    resource: "https://www.youtube.com/watch?v=RGOj5yH7evk"
  },
  {
    title: "Projects",
    level: "Advanced",
    duration: "Ongoing",
    resource: "https://www.frontendmentor.io/"
  }
],
"Backend Developer": [
  {
    title: "JavaScript",
    level: "Beginner",
    duration: "1 Week",
    resource: "https://www.youtube.com/watch?v=EerdGm-ehJQ"
  },
  {
    title: "Node.js",
    level: "Intermediate",
    duration: "2 Weeks",
    resource: "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs"
  },
  {
    title: "Express.js",
    level: "Intermediate",
    duration: "1 Week",
    resource: "https://expressjs.com/en/starter/installing.html"
  },
  {
    title: "MongoDB",
    level: "Intermediate",
    duration: "2 Weeks",
    resource: "https://www.mongodb.com/docs/manual/tutorial/getting-started/"
  },
  {
    title: "REST APIs",
    level: "Intermediate",
    duration: "1 Week",
    resource: "https://www.geeksforgeeks.org/rest-api-introduction/"
  },
  {
    title: "Authentication",
    level: "Advanced",
    duration: "1 Week",
    resource: "https://jwt.io/introduction"
  },
  {
    title: "Deployment",
    level: "Advanced",
    duration: "1 Week",
    resource: "https://vercel.com/docs"
  },
],
   "AI Engineer": [
  {
    title: "Python",
    level: "Beginner",
    duration: "2 Weeks",
    resource: "https://www.python.org/about/gettingstarted/"
  },
  {
    title: "Data Structures",
    level: "Intermediate",
    duration: "2 Weeks",
    resource: "https://www.geeksforgeeks.org/data-structures/"
  },
  {
    title: "Machine Learning",
    level: "Intermediate",
    duration: "3 Weeks",
    resource: "https://developers.google.com/machine-learning/crash-course"
  },
  {
    title: "Deep Learning",
    level: "Advanced",
    duration: "3 Weeks",
    resource: "https://www.deeplearning.ai/"
  },
  {
    title: "LLMs",
    level: "Advanced",
    duration: "2 Weeks",
    resource: "https://huggingface.co/learn"
  },
  {
    title: "LangChain",
    level: "Advanced",
    duration: "1 Week",
    resource: "https://python.langchain.com/docs/get_started/introduction"
  },
  {
    title: "Projects",
    level: "Advanced",
    duration: "Ongoing",
    resource: "https://www.kaggle.com/"
  },
],
"Cybersecurity": [
  {
    title: "Networking Basics",
    level: "Beginner",
    duration: "1 Week",
    resource: "https://www.cisco.com/c/en_in/training-events/networking-academy.html"
  },
  {
    title: "Linux",
    level: "Beginner",
    duration: "2 Weeks",
    resource: "https://linuxjourney.com/"
  },
  {
    title: "Web Security",
    level: "Intermediate",
    duration: "2 Weeks",
    resource: "https://owasp.org/www-project-top-ten/"
  },
  {
    title: "Ethical Hacking",
    level: "Intermediate",
    duration: "3 Weeks",
    resource: "https://www.hackthebox.com/"
  },
  {
    title: "Penetration Testing",
    level: "Advanced",
    duration: "2 Weeks",
    resource: "https://portswigger.net/web-security"
  },
  {
    title: "Projects",
    level: "Advanced",
    duration: "Ongoing",
    resource: "https://tryhackme.com/"
  },
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
{roadmap.length > 0 && (
  <div className="progress-section">
    <h2>
      Progress:{" "}
      {Math.round(
        (completed.length / roadmap.length) * 100
      ) || 0}%
    </h2>
  </div>
)}
<div className="progress-bar">
  <div
    className="progress-fill"
    style={{
      width: `${
        roadmap.length
          ? (completed.length / roadmap.length) * 100
          : 0
      }%`,
    }}
  ></div>
</div>
    {/* Roadmap Cards */}
<div className="roadmap-container">
  {roadmap.map((item, index) => (
    <div className="roadmap-card" key={index}>
      <div className="card-header">
        <h3
          style={{
            textDecoration: completed.includes(index)
              ? "line-through"
              : "none",
            color: completed.includes(index)
              ? "#94a3b8"
              : "white",
          }}
        >
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

      {item.resource && (
        <a
          href={item.resource}
          target="_blank"
          rel="noreferrer"
          className="resource-btn"
        >
          Learn Now →
        </a>
      )}
    </div>
  ))}
</div>
    </div>
  );
}
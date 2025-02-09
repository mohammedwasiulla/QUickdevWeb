import { useEffect, useState } from "react";
import axios from "axios";
import "../Portfolio.css";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        const response = await axios.get("https://api.github.com/users/mohammedwasiulla/repos");
        const deployedProjects = response.data.filter(project => project.homepage);  // Filter projects with homepage URL

        // Add the new project manually at the beginning of the list
        const newProject = {
          id: "new-project-id",  // A unique id for the new project
          name: "ContentApp",
          description: "A content management app",
          homepage: "https://content-app-q82k.vercel.app/",  // The link you want to add
        };

        // Set projects with the new project added at the start
        setProjects([newProject, ...deployedProjects]);
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
      }
    };
    fetchGitHubRepos();
  }, []);

  return (
    <div className="portfolio-container">
      <div className="hero-section">
        <h1>Welcome to My IT Development Portfolio</h1>
        <p>Explore my projects and development work!</p>
      </div>

      <div className="projects-section">
        <h2>Our Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.description || "No description available."}</p>
              <a href={project.homepage} target="_blank" rel="noopener noreferrer">View Deployed Project</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

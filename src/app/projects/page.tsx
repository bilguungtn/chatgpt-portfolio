import React from "react";

const Projects: React.FC = () => {
  // Replace with your actual project data
  const projects = [
    { id: 1, title: "Project 1", description: "Lorem ipsum dolor sit amet." },
    { id: 2, title: "Project 2", description: "Consectetur adipiscing elit." },
    {
      id: 3,
      title: "Project 3",
      description: "Pellentesque pulvinar in metus.",
    },
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      {projects.map((project) => (
        <div key={project.id} className="mb-4">
          <h2 className="text-xl font-bold">{project.title}</h2>
          <p className="text-gray-500">{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;

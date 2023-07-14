import React from "react";

const Resume: React.FC = () => {
  // Replace with your resume data
  const resumeData = {
    education: "Bachelor of Science in Computer Science",
    experience: "Frontend Developer at XYZ Company",
    skills: ["JavaScript", "HTML", "CSS", "React"],
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-4">Resume</h1>
      <h2 className="text-xl font-bold mb-2">Education</h2>
      <p>{resumeData.education}</p>
      <h2 className="text-xl font-bold mb-2">Experience</h2>
      <p>{resumeData.experience}</p>
      <h2 className="text-xl font-bold mb-2">Skills</h2>
      <ul className="list-disc pl-4">
        {resumeData.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Resume;

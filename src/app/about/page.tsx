import React from "react";

const About: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="mb-2">Skills:</p>
      <ul className="list-disc pl-4 mb-8">
        <li>Typescript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Tailwind CSS</li>
      </ul>
    </div>
  );
};

export default About;

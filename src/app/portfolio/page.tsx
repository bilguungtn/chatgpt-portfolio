import React from 'react';

const PortfolioPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">My Portfolio</h1>

      <div className="mb-8">
        <h2 className="text-xl font-bold">Skills:</h2>
        <ul className="list-disc ml-6">
          <li>Typescript</li>
          <li>ReactJS</li>
          <li>NextJS</li>
          <li>NestJS</li>
          <li>Prisma (basic knowledge)</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold">Work Experience:</h2>
        <p>2 years working as a web developer</p>
      </div>

      <div>
        <h2 className="text-xl font-bold">Contact Information:</h2>
        <p>Email: example@example.com</p>
        <p>Phone: 123-456-7890</p>
      </div>
    </div>
  );
};

export default PortfolioPage;

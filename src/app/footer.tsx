import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <p>
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
        <p>Made with ❤️ by Your Name</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-white text-xl font-bold" href="/">
          My Portfolio
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link className="text-white" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="text-white" href="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="text-white" href="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="text-white" href="/resume">
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

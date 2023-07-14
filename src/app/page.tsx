import React from "react";

const Homepage: React.FC = () => {
  // Dummy data for projects
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet est sed tempor accumsan.",
      imageUrl: "https://via.placeholder.com/400",
    },
    {
      id: 2,
      title: "Project 2",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      imageUrl: "https://via.placeholder.com/400",
    },
    {
      id: 3,
      title: "Project 3",
      description:
        "Aenean eu semper urna, non pharetra arcu. Duis eleifend tincidunt tellus, ut hendrerit est mollis et.",
      imageUrl: "https://via.placeholder.com/400",
    },
  ];

  // Dummy data for blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Blog Post 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet est sed tempor accumsan.",
      imageUrl: "https://via.placeholder.com/400",
    },
    {
      id: 2,
      title: "Blog Post 2",
      content:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      imageUrl: "https://via.placeholder.com/400",
    },
    {
      id: 3,
      title: "Blog Post 3",
      content:
        "Aenean eu semper urna, non pharetra arcu. Duis eleifend tincidunt tellus, ut hendrerit est mollis et.",
      imageUrl: "https://via.placeholder.com/400",
    },
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-8">Welcome to My Portfolio</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-500">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-500">{post.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Homepage;

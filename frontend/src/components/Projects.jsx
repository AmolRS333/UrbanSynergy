import React from "react";

const Projects = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project cards will go here */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Project 1</h3>
          <p className="text-gray-600">Project description goes here</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;

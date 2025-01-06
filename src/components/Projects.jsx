// Projects.jsx
import React from 'react';

const Projects = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
        <p className="text-lg text-[#545454] mb-8">Here are some of my recent works:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Project 1</h3>
            <p className="text-[#545454]">A brief description of the project goes here.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Project 2</h3>
            <p className="text-[#545454]">A brief description of the project goes here.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Project 3</h3>
            <p className="text-[#545454]">A brief description of the project goes here.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;




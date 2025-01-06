// Skills.jsx
import React from 'react';

const Skills = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">My Skills</h2>
        <p className="text-lg text-[#545454] mb-8">Here are some technologies I excel at:</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">React</h3>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Node.js</h3>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">MongoDB</h3>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Express</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

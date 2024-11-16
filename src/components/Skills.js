import React from 'react';
import { motion } from 'framer-motion';

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'AWS', 'Tailwind CSS'];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-primary text-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-secondary text-primary py-4 px-6 rounded shadow-md text-center"
              whileHover={{ scale: 1.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

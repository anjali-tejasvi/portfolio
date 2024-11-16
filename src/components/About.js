import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-16 bg-secondary text-primary">
      <motion.div
        className="container mx-auto px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg">
          I’m Anjali Tejasvi, a passionate web developer with hands-on experience in
          the MERN stack and third-party API integration. I love creating innovative
          digital solutions and delivering exceptional results. Let’s build something awesome!
        </p>
      </motion.div>
    </section>
  );
};

export default About;

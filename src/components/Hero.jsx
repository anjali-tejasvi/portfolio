import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      className="text-center pt-32 md:pt-40 pb-16 h-screen flex flex-col justify-center"
      style={{
        background: `
          radial-gradient(circle at 85% 33%, #9b95f7, rgba(239, 234, 235, 0.2) 25%), 
          radial-gradient(circle at 12% 55%, rgba(99, 90, 255, 0.1), hsla(0, 0%, 100%, 0) 25%)
        `,
      }}
    >
      <div className="container mx-auto px-6">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hi, I am a Web Developer 
        </motion.h1>
        <p className="text-base sm:text-lg md:text-xl text-black-600 mt-4 font-europa">
        This site is built using React. work on JavaScript & MERN Stack.
        </p>
        <div className="mt-8">
          <motion.img
            src="/avatar.png"
            alt="Avatar"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-auto rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 150 }}
          />
        </div>
        <a
          href="#AboutAndExperience"
          className="mt-8 inline-block bg-primary text-white py-2 px-6 md:py-4 md:px-8 rounded-lg hover:bg-purple-500 transition-all duration-300"
        >
          My Recent Works
        </a>
      </div>
    </section>
  );
};

export default Hero;

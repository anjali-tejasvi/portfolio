import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-primary text-secondary">
      <motion.div
        className="container mx-auto px-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-6">Feel free to reach out via LinkedIn or GitHub!</p>
        <div className="flex flex-col md:flex-row justify-center items-center mt-6">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/anjali-tejasvi-501/"
            className="mx-2 text-lg underline text-center"
          >
            LinkedIn
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/anjali-tejasvi"
            className="mx-2 text-lg underline text-center"
          >
            GitHub
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:anjalitejasvi501@gmail.com"
            className="mx-2 text-lg underline text-center"
          >
            Email
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="tel:+919798048412"
            className="mx-2 text-lg underline text-center"
          >
            Phone
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;

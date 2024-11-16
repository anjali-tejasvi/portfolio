import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Frontend Web Developer | SharedPro',
    date: 'September 2023 - Present',
    location: 'Vadodara',
    details: [
      'Played a key role in the development of the SharedPro website, focusing on enhancing user experience and functionality.',
      'Successfully integrated Vonage API to create a robust video conferencing application tailored for interview purposes.',
      'Pioneered the "Ask Custom Question" feature to enhance candidate engagement.',
      'Implemented a live chat feature for real-time response checks of candidates’ answers.',
      'Developed a user-friendly chat dashboard allowing candidates to upload resumes and engage without requiring login.',
    ],
  },
  {
    title: 'Web Developer Intern | CariKture',
    date: 'December 2022 - February 2023',
    location: 'Remote',
    details: [
      'Collaborated with the team at CariKture to develop Rom\'s Pizza\'s website.',
      'Designed and implemented APIs and interfaces for a food ordering application.',
      'Incorporated Add to Cart and food filtering functionalities.',
      'Leveraged React and Node.js to ensure seamless user interactions and efficient data management.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-primary text-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="mb-8 p-6 bg-secondary text-primary rounded shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-bold">{experience.title}</h3>
            <p className="text-lg">{experience.date} | {experience.location}</p>
            <ul className="list-disc list-inside mt-4">
              {experience.details.map((detail, i) => (
                <li key={i} className="mt-2">{detail}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

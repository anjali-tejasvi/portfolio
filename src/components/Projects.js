import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "VetmendMan",
      description: "VetmendMan is a MERN stack application with an admin dashboard where users can add products, filter and view them, add items to the cart, place orders, and receive order confirmation via email.",
      buttonText: "Visit site",
      link: "https://vetmedman.com/",
      bgColor: "bg-pink-600 text-white",
    },
    {
      title: "Interview assistant",
      description: "The Interview Assistant is an AI-powered tool that enables non-technical interviewers to conduct personalized interviews by generating tailored questions from candidates' resumes and facilitating real-time communication.",
      // buttonText: "View Video",
      buttonText: "Visit site",
      // link: "https://youtu.be/bXKBfPdZOZE",
      link: "https://sharedpro.in/",
      bgColor: "bg-gray-800 text-white", 
    },
    {
      title: "Candidate Batch Pipeline",
      description: "The batch Pipeline is an intuitive drag-and-drop system that allows users to manage candidates, with features to add, approve or reject candidates and assign suppliers efficiently.",
      // buttonText: "View Video",
      buttonText: "Visit site",
      // link: "https://youtu.be/8c4aO6tnXy8",
      link: "https://sharedpro.in/",
      bgColor: "bg-blue-500 text-white",
    },
 
    {
      title: "Mayadeep",
      description: "Mayadeep Hotels & Resorts is a luxurious application designed to enhance the travel experience by providing users with seamless access to premium accommodations.",
      buttonText: "Visit Site",
      link: "https://mayadeep.in/",
      bgColor: "bg-gray-700 text-white",
    },
    {
      title: "Food Order App",
      description: "Food Order App is a user-friendly platform that simplifies the online ordering process for food enthusiasts. Developed using the MERN",
      buttonText: "View code",
      link: "https://github.com/anjali-tejasvi/Food_Order/blob/master/README.md",
      bgColor: "bg-red-500 text-white",
    },
    {
      title: "Chat App",
      description: "Chat App is a real-time messaging platform designed to foster seamless communication between users. Built using the MERN stack, this application features secure user authentication, group chats, and direct messaging capabilities.",
      buttonText: "View Code",
      // link: "https://youtu.be/Hwy2UcJ8ykE",
      link: "https://github.com/anjali-tejasvi/chat-app",
      bgColor: "bg-green-600 text-white",
    },
  ];

  return (
    <div id="projects" className="py-16 bg-white text-center transform translate-y-28">
      <h2 className="mx-auto mt-2 mb-4 max-w-lg text-pretty text-center text-3xl sm:text-4xl font-medium tracking-tight text-gray-950">
        My Recent Work
      </h2>
      <p className="text-base sm:text-lg mb-12 px-4">
        Here are a few past projects I’ve worked on. Want to know more?{" "}
        <a href="mailto:anjalitejasvi501@gmail.com" className="text-blue-600">Email me</a>.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`rounded-lg p-8 shadow-lg ${project.bgColor} flex flex-col justify-between h-full`}
          >
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4">{project.title}</h3>
              <p className="mb-6 text-sm sm:text-base">{project.description}</p>
            </div>
            {project.buttonText && (
              <a
                href={project.link}
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-white text-primary py-2 px-4 rounded hover:bg-primary hover:text-white transition-colors"
              >
                {project.buttonText}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

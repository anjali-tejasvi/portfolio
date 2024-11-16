import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-3xl font-bold text-purple-600">
        <a href="/" className="font-mono italic text-purple-600 hover:text-purple-700">
        <img
          src="logo.webp"
          alt="A logo"
          className="h-12 w-12 transition-transform duration-200 hover:scale-105"
        />
      </a>

        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#AboutAndExperience" className="text-gray-800 font-semibold hover:text-purple-600">
            Experience
          </a>
          <a href="#projects" className="text-gray-800 font-semibold hover:text-purple-600">
            Projects
          </a>
          <a href="#education" className="text-gray-800 font-semibold hover:text-purple-600">
            Education
          </a>
          <a href="#contact" className="text-gray-800 font-semibold hover:text-purple-600">
            Contact
          </a>
        </nav>
        <div className="flex justify-end items-center space-x-4">
  <a
    target="_blank"
    href="https://github.com/anjali-tejasvi"
    className="text-gray-800 font-semibold hover:text-purple-600"
  >
    <img
      className="h-8 w-8 transition-transform duration-200 hover:scale-105"
      src="github.png"
      alt="github"
    />
  </a>
  <a
    target="_blank"
    href="https://www.linkedin.com/in/anjali-tejasvi-501/"
    className="text-gray-800 font-semibold hover:text-purple-600"
  >
    <img
      className="h-14 w-14 transition-transform duration-200 hover:scale-105"
      src="linkedin.jpg"
      alt="linkedin"
    />
  </a>
  {/* <a
    target="_blank"
    href="https://drive.google.com/file/d/14hjLYGJhoOFPa5oaX9KJcAhSlBz5WMvX/"
    className="hidden md:inline-block bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-500"
    download="resume.pdf"
  >
    View Resume
  </a> */}
</div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <a href="#AboutAndExperience" className="block px-4 py-2 text-gray-800 font-semibold hover:bg-gray-100">
            Experience
          </a>
          <a href="#projects" className="block px-4 py-2 text-gray-800 font-semibold hover:bg-gray-100">
            Projects
          </a>
          <a href="#education" className="block px-4 py-2 text-gray-800 font-semibold hover:bg-gray-100">
            Education
          </a>
          <a href="#contact" className="block px-4 py-2 text-gray-800 font-semibold hover:bg-gray-100">
            Contact
          </a>
          {/* <a
          target='_blank'
           href="https://drive.google.com/file/d/14hjLYGJhoOFPa5oaX9KJcAhSlBz5WMvX/"
                className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-500"
                download="resume.pdf"
              >
                View Resume
              </a> */}
        </div>
      )}
    </header>
  );
};

export default Header;

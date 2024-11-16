import React from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Hero from './components/Hero';
import AboutAndExperience from './components/AboutAndExperience';

function App() {
  return (
    <div className="bg-secondary min-h-screen">
      <Header />
      <Hero /> 
      <AboutAndExperience />
      <Projects />
      <Education />
      {/* <Skills /> */}
      <Contact />
    </div>
  );
}

export default App;

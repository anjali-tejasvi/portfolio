import React from 'react';

const AboutAndExperience = () => {
  return (
    <div id='AboutAndExperience' className="bg-primary text-white py-16 relative">
      {/* About Section */}
      <div className="max-w-6xl mx-auto transform translate-y-20 text-center px-4">
        <h2 className="text-3xl md:text-5xl font-bold">Hi, I'm Anjali. Nice to meet you.</h2>
        <p className="text-base md:text-xl mt-4 max-w-3xl mx-auto">
        I'm a web developer who loves exploring new tech and projects, sharing insights, and writing blogs on <span>
          <a href="https://medium.com/@anjalitejasvi501" target='_blank' className='underline'>Medium</a>
          </span>. My passion lies in helping others and continually expanding my knowledge.</p>
      </div>

      {/* Experience Section with Floating Effect */}
      <div className="mt-12 mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 transform translate-y-40 relative bg-white shadow-lg rounded-xl p-8">
          {/* Experience Card 1 */}
          <div className="text-center p-8 bg-white border-b-2 md:border-b-0 md:border-r-2 border-gray-200">
            <div className="flex justify-center items-center mb-4">
              <img src="https://sharedpro.in/images/sharedpro_2.svg" alt="Experience" className="w-24 h-24 p-2" />
            </div>
            <h3 className="text-gray-900 font-semibold text-2xl md:text-3xl">Frontend Developer</h3>
            <p className="mt-4 text-primary font-semibold">1 year </p>
            <p className="text-gray-800 mt-2 text-sm md:text-base font-semibold">
              Worked on enhancing user experience at SharedPro, integrating Vonage API
              for a robust video conferencing app.
            </p>
            <p className="mt-4 text-primary font-semibold">Tech and tools used:</p>
            <ul className="text-gray-800 mt-2 text-sm md:text-base font-semibold">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Bootstrap</li>
              <li>JSP</li>
              <li>Jira</li>
              {/* <li>AWS</li> */}
              <li>Bitbucket</li>
              <li>SourceTree</li>
            </ul>
          </div>

          {/* Experience Card 2 */}
          <div className="text-center p-8 bg-white border-b-2 md:border-b-0 md:border-r-2 border-gray-200">
            <div className="flex justify-center items-center mb-4">
              <img src="https://carikture.com/images/lgo.png" alt="Experience" className="w-32 h-24 p-2 object-contain" />
            </div>
            <h3 className="text-gray-900 font-semibold text-2xl md:text-3xl">Web Developer Intern</h3>
            <p className="mt-4 text-primary font-semibold">2 months</p>
            <p className="text-gray-800 mt-2 text-sm md:text-base font-semibold">
              Collaborated with the team at CariKture, contributing to the development of Rom's Pizza's website using React and Node.js.
            </p>
            <p className="mt-4 text-primary font-semibold">Tech and tools used:</p>
            <ul className="text-gray-800 mt-2 text-sm md:text-base font-semibold">
              <li>React</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>Express</li>
              <li>Git</li>
              <li>Bootstrap</li>
              <li>Postman</li>
            </ul>
          </div>

          {/* Experience Card 3 */}
          <div className="text-center p-8 bg-white">
            <div className="flex justify-center items-center mb-4">
              <img src="https://freelistingindia.s3.ap-south-1.amazonaws.com/listings/cetpalogo62d911ed70620.jpeg" alt="Experience" className="w-24 h-34 p-2" />
            </div>
            <h3 className="text-gray-900 font-semibold text-2xl md:text-3xl">Web Developer Intern</h3>
            <p className="mt-4 text-primary font-semibold">6 months</p>
            <p className="text-gray-800 mt-2 text-sm md:text-base font-semibold">
              Developed a blog application with a visually stunning design and intuitive functionalities for creating and managing posts.
            </p>
            <p className="mt-4 text-primary font-semibold">Tech and tools used:</p>
            <ul className="text-gray-800 mt-2 text-sm md:text-base font-semibold">
              <li>React</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>Express</li>
              <li>Git</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAndExperience;

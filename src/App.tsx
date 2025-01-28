import React from 'react';
import AboutMe from './components/AboutMe';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import SocialMediaLinks from './components/SocialMediaLinks';

const App: React.FC = () => {
      <div className="w-full max-w-3xl">
        {/* Top Section with Name on Left, Image on Right */}
        <header className="flex justify-between items-center py-10">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">Hey, I’m Akhil Bheesetty!</h1>
            <p className="mt-2 text-lg text-gray-600">Web Developer</p>
          </div>
          <img
            src="https://lh3.googleusercontent.com/a/ACg8ocIvc6Frc0CsttY_r-sr1phydXaswzd3RlCYb7j51q4FVuVHEjH-nw=s192-c-rg-br100"
            alt="Akhil"
            className="w-24 h-24 rounded-full object-cover"
          />
        </header>

        <AboutMe />
        <WorkExperience />
        <Education />
        <Certifications />
        <Skills />
        <Projects />
        <ContactMe />

        <SocialMediaLinks />
      </div>
    </div>
  );
};

export default App;

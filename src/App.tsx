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
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-start items-center px-4 py-10 text-sm"
      style={{
        backgroundImage: "data:image/jpeg;base64,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",
      }}
    >
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

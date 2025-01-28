import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section className="w-full p-8">
      <h2 className="text-3xl font-semibold text-gray-800">About Me</h2>
      <p className="mt-4 text-sm text-gray-600">
        I’m a Web Developer who’s still figuring out React, TypeScript, and Tailwind CSS, but don’t worry—I’m definitely pretending I know what I’m doing. Currently interning at Lotus Wireless Technologies, where I get to write code, break things, and Google my way out of it. My projects might not change the world, but they’ll at least give you something to look at (hopefully without too many errors).
        <br />
        Feel free to explore, and if you find something that actually works, let me know—I could use the confidence boost!
      </p>
    </section>
  );
};

export default AboutMe;

import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { SiReaddotcv } from 'react-icons/si';

const SocialMediaLinks: React.FC = () => {
  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2">
      <div className="flex space-x-4">
        <div className="relative group">
          <a href="https://www.linkedin.com/in/akhil-bheesetty/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} className="text-blue-700 hover:text-blue-500 transition-all transform group-hover:scale-110" />
          </a>
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-14 text-xs text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
        </div>

        <div className="relative group">
          <a href="https://github.com/BESSETTY-AKHIL" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} className="text-gray-800 hover:text-black transition-all transform group-hover:scale-110" />
          </a>
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-14 text-xs text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">GitHub</span>
        </div>

        <div className="relative group">
          <a href="https://twitter.com/akhilbheesetty" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} className="text-blue-400 hover:text-blue-300 transition-all transform group-hover:scale-110" />
          </a>
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-14 text-xs text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">Twitter</span>
        </div>

        <div className="relative group">
          <a href="https://www.instagram.com/akhil.bheesetty/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} className="text-pink-600 hover:text-pink-400 transition-all transform group-hover:scale-110" />
          </a>
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-14 text-xs text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">Instagram</span>
        </div>

        <div className="relative group">
          <a href="mailto:akhil.bheesetty@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={30} className="text-gray-800 hover:text-gray-600 transition-all transform group-hover:scale-110" />
          </a>
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-14 text-xs text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">Email</span>
        </div>

        <div className="relative group">
          <a href="/resume" target="_blank" rel="noopener noreferrer">
            <SiReaddotcv size={30} className="text-black hover:text-gray-600 transition-all transform group-hover:scale-110" />
          </a>
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-14 text-xs text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">CV</span>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaLinks;

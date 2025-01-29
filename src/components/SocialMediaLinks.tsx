import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { SiReaddotcv } from 'react-icons/si';

const SocialMediaLinks: React.FC = () => {
  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2">
      {/* Outer Container with Rounded Corners, Smaller Size, Shadow, and Horizontal Expand Effect */}
      <div className="bg-white p-3 rounded-full shadow-lg flex space-x-4 items-center justify-center transform transition-transform duration-300 ease-in-out hover:scale-x-105">
        {/* LinkedIn Icon */}
        <div className="relative group">
          <a href="https://www.linkedin.com/in/bheesetty-akhil/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} className="text-black group-hover:scale-110 transition-all" />
          </a>
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 text-xs text-white bg-black p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
            LinkedIn
          </span>
        </div>

        {/* GitHub Icon */}
        <div className="relative group">
          <a href="https://github.com/BESSETTY-AKHIL" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} className="text-black group-hover:scale-110 transition-all" />
          </a>
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 text-xs text-white bg-black p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
            GitHub
          </span>
        </div>

        {/* Twitter Icon */}
        <div className="relative group">
          <a href="https://x.com/AkhilCharming?t=B7FlElj6REI_CmrNmnrveg&s=08" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={20} className="text-black group-hover:scale-110 transition-all" />
          </a>
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 text-xs text-white bg-black p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
            Twitter
          </span>
        </div>

        {/* Instagram Icon */}
        <div className="relative group">
          <a href="https://www.instagram.com/akibhee/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} className="text-black group-hover:scale-110 transition-all" />
          </a>
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 text-xs text-white bg-black p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
            Instagram
          </span>
        </div>

        {/* Email Icon */}
        <div className="relative group">
          <a href="mailto:akhil.bheesetty@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={20} className="text-black group-hover:scale-110 transition-all" />
          </a>
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 text-xs text-white bg-black p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
            Email
          </span>
        </div>

        {/* CV Icon */}
        <div className="relative group">
          <a href="/Akhil_s_CV.pdf" target="_blank" rel="noopener noreferrer">
            <SiReaddotcv size={20} className="text-black group-hover:scale-110 transition-all" />
          </a>
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 text-xs text-white bg-black p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
            CV
          </span>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaLinks;

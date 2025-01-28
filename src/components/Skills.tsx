import React from 'react';
import { FaJsSquare, FaHtml5, FaCss3Alt, FaAws, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiFirebase, SiVite } from 'react-icons/si';

const skills = [
  { name: 'JavaScript', icon: <FaJsSquare size={20} style={{ color: '#F7DF1E' }} /> },
  { name: 'HTML', icon: <FaHtml5 size={20} style={{ color: '#E34F26' }} /> },
  { name: 'CSS', icon: <FaCss3Alt size={20} style={{ color: '#1572B6' }} /> },
  { name: 'AWS (EC2)', icon: <FaAws size={20} style={{ color: '#FF9900' }} /> },
  { name: 'Firebase', icon: <SiFirebase size={20} style={{ color: '#FFCB2B' }} /> },
  { name: 'React', icon: <FaReact size={20} style={{ color: '#61DAFB' }} /> },
  { name: 'Tailwind CSS', icon: <FaCss3Alt size={20} style={{ color: '#38B2AC' }} /> },
  { name: 'Node.js', icon: <FaNodeJs size={20} style={{ color: '#68A063' }} /> },
  { name: 'GIT', icon: <FaGitAlt size={20} style={{ color: '#F1502F' }} /> },
  { name: 'Vite (Currently Learning)', icon: <SiVite size={20} style={{ color: '#646CFF' }} /> },
];

const Skills: React.FC = () => {
  return (
    <section className="w-full p-8">
      <h2 className="text-3xl font-semibold text-gray-800">Skills</h2>
      <div className="flex flex-wrap gap-6 mt-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="text-black px-4 py-2 text-xs text-center flex items-center gap-2 transition-transform transform hover:scale-110"
          >
            {skill.icon}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

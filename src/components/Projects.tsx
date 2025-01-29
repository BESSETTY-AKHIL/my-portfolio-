import React from 'react';
import { FaGithub, FaLink, FaFilePdf } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    name: 'Portfolio Website',
    description: 'A personal portfolio website built using React and Tailwind CSS...',
    imageUrl: 'https://e0.pxfuel.com/wallpapers/240/456/desktop-wallpaper-portfolio-portfolio-background-portfolio-and-career-portfolio.jpg',
    githubLink: 'https://github.com/BESSETTY-AKHIL/my-portfolio-',
    websiteLink: 'https://akhilbheesetty.netlify.app/',
  },
  {
    id: 2,
    name: 'Resume',
    description: 'A professional resume hosted on Overleaf...',
    imageUrl: 'https://www.unwsp.edu/wp-content/uploads/2024/01/blogs-resumes.jpg',
    githubLink: 'https://github.com/yourusername/react-blog',
    websiteLink: 'https://yourreactblog.com',
  },
  {
    id: 3,
    name: 'Major Project',
    description: 'The proposed low-cost NAS system offers easy configuration...',
    imageUrl: 'https://images.unsplash.com/photo-1572177812156-58036aae439c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D',
    pdfLink: '/major_project.pdf',
  },
];

const Projects: React.FC = () => {
  return (
    <section className="w-full p-8">
      <h2 className="text-3xl font-semibold text-gray-800">Projects</h2>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105"
          >
            <img
              src={project.imageUrl}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{project.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{project.description}</p>
              <div className="flex justify-end mt-4 space-x-3">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-all"
                  >
                    <FaGithub size={18} />
                  </a>
                )}
                {project.websiteLink && (
                  <a
                    href={project.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-all"
                  >
                    <FaLink size={18} />
                  </a>
                )}
                {project.pdfLink && (
                  <a
                    href={project.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-all"
                  >
                    <FaFilePdf size={18} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

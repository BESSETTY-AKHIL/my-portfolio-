import React, { useState } from 'react';
import { SiReaddotcv } from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaAws, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiFirebase, SiVite } from 'react-icons/si';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEnvelope, FaLink, FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa';


const App: React.FC = () => {
  const [projects] = useState([
    {
      id: 1,
      name: 'Portfolio Website',
      description: 'A portfolio website showcasing my work.',
      imageUrl: 'https://img.freepik.com/free-photo/laptop-screen-with-line-job-search_169016-38606.jpg?ga=GA1.1.1112629585.1704345698&semt=ais_hybrid',
      githubLink: 'https://github.com/yourusername/portfolio',
      websiteLink: 'https://yourportfolio.com',
    },
    {
      id: 2,
      name: 'React Blog',
      description: 'A blog built using React and TypeScript.',
      imageUrl: 'https://via.placeholder.com/300',
      githubLink: 'https://github.com/yourusername/react-blog',
      websiteLink: 'https://yourreactblog.com',
    },
    {
      id: 3,
      name: 'Weather App',
      description: 'A weather app that provides real-time forecasts.',
      imageUrl: 'https://via.placeholder.com/300',
      pdfLink: 'https://yourwebsite.com/weather-app.pdf',
    },
  ]);

  const [workExperience] = useState([
    {
      companyImage: '',
      title: 'Lotus Wireless Technologies',
      role: 'Frontend Developer (Intern)',
      duration: 'January 2025 - Present',
      responsibilities: [
        'Developed responsive web applications using React and Tailwind CSS.',
        'Collaborated with cross-functional teams to design and implement features.',
        'Worked with TypeScript for type safety and better code quality.',
      ],
    },
  ]);

  const [education] = useState([
    {
      institution: 'Veltech University',
      degree: 'Computer Science Engineering',
      duration: '2021 - 2024',
      cgpa: '7.16',
      institutionImage: '',
    },
    {
      institution: 'SITM College',
      degree: 'Diploma in Mechanical Engineering',
      duration: '2016 - 2019',
      percentage: '69.48%',
      institutionImage: '',
    },
    {
      institution: 'Prasanthi Niketan School',
      degree: 'Secondary Education',
      duration: '2016 - 2019',
      cgpa: '9.2',
      institutionImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLUn6Clt1mdEndD23mhwjPi67j-DVCVknrzA&s',
    },
  ]);

  const [certifications] = useState([
    {
      name: 'Introduction to Industry 4.0 and Industrial Internet of Things',
      issuedBy: 'NPTEL',
      date: 'Issued Oct 2023',
      link: 'https://drive.google.com/file/d/1lIOzElAq6oOHRH3WzYoODO-WTWDqMLoO/view?usp=sharing',
      imageUrl: 'https://example.com/certification-image-1.jpg',
    },
    {
      name: 'Introduction to z/OS Commands and Panels on IBM Z',
      issuedBy: 'IBM Mainframes',
      date: 'Issued Sept 2023',
      link: 'https://drive.google.com/file/d/1YxJYC0lC-SKWupXCgDGDysft7NFxbCYg/view?usp=sharing',
      imageUrl: 'https://example.com/certification-image-2.jpg',
    },
  ]);

  const skills = [
    { name: 'JavaScript', icon: <FaJsSquare size={20} style={{ color: '#F7DF1E' }} /> },  // Yellow for JavaScript
    { name: 'HTML', icon: <FaHtml5 size={20} style={{ color: '#E34F26' }} /> },           // Red for HTML
    { name: 'CSS', icon: <FaCss3Alt size={20} style={{ color: '#1572B6' }} /> },           // Blue for CSS
    { name: 'AWS (EC2)', icon: <FaAws size={20} style={{ color: '#FF9900' }} /> },         // Orange for AWS
    { name: 'Firebase', icon: <SiFirebase size={20} style={{ color: '#FFCB2B' }} /> },     // Yellow for Firebase
    { name: 'React', icon: <FaReact size={20} style={{ color: '#61DAFB' }} /> },           // Blue for React
    { name: 'Tailwind CSS', icon: <FaCss3Alt size={20} style={{ color: '#38B2AC' }} /> },  // Teal for Tailwind CSS
    { name: 'Node.js', icon: <FaNodeJs size={20} style={{ color: '#68A063' }} /> },        // Green for Node.js
    { name: 'GIT', icon: <FaGitAlt size={20} style={{ color: '#F1502F' }} /> },            // Red for GIT
    { name: 'Vite (Currently Learning)', icon: <SiVite size={20} style={{ color: '#646CFF' }} /> }, // Purple for Vite
  ];

  const [showCertifications, setShowCertifications] = useState(false);

  const toggleCertifications = () => {
    setShowCertifications(!showCertifications);
  };

    return (
      <div className="min-h-screen bg-white flex flex-col justify-start items-center px-4 py-10 text-sm">
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

        {/* About Me Section */}
        <section className="w-full p-8">
          <h2 className="text-3xl font-semibold text-gray-800">About Me</h2>
          <p className="mt-4 text-sm text-gray-600">
            I’m a Web Developer who’s still figuring out React, TypeScript, and Tailwind CSS, but don’t worry—I’m definitely pretending I know what I’m doing. Currently interning at Lotus Wireless Technologies, where I get to write code, break things, and Google my way out of it. My projects might not change the world, but they’ll at least give you something to look at (hopefully without too many errors).
            <br />
            Feel free to explore, and if you find something that actually works, let me know—I could use the confidence boost!
          </p>
        </section>

        {/* Work Experience Section */}
        <section className="w-full p-8">
          <h2 className="text-3xl font-semibold text-gray-800">Work Experience</h2>
          <div className="mt-4">
            {workExperience.map((job, index) => (
              <div key={index} className="flex items-start mb-6">
                <img
                  src={job.companyImage}
                  alt={job.title}
                  className="w-16 h-16 rounded-full object-cover mr-6"
                />
                <div className="flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                      <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        <span className="text-xs text-gray-500">{job.role}</span>
                      </p>
                    </div>
                    <p className="text-sm text-gray-600">{job.duration}</p>
                  </div>
                  <ul className="mt-4 text-sm text-gray-600 list-disc pl-6">
                    {job.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="w-full p-8">
          <h2 className="text-3xl font-semibold text-gray-800">Education</h2>
          <div className="mt-4">
            {education.map((edu, index) => (
              <div key={index} className="mb-6">
                <div className="flex items-start">
                  <img
                    src={edu.institutionImage || 'https://via.placeholder.com/100'}
                    alt={edu.institution}
                    className="w-16 h-16 rounded-full object-cover mr-6"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold text-gray-800">{edu.institution}</h3>
                    <p className="text-sm text-gray-600">{edu.degree}</p>
                    <p className="text-sm text-gray-600">Duration: {edu.duration}</p>
                    {edu.cgpa && <p className="text-sm text-gray-600">CGPA: {edu.cgpa}</p>}
                    {edu.percentage && <p className="text-sm text-gray-600">Percentage: {edu.percentage}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="w-full p-8">
          <h2 className="text-3xl font-semibold text-gray-800 flex justify-between items-center">
            Certifications
            <button onClick={toggleCertifications} className="text-lg text-gray-600">
              {showCertifications ? '▲' : '▼'}
            </button>
          </h2>
          {showCertifications && (
            <div className="mt-4">
              {certifications.map((cert, index) => (
                <div key={index} className="mb-6">
                  <div className="flex items-start">
                    <div className="flex justify-center items-center mr-4">
                      <img
                        src={cert.imageUrl}
                        alt={cert.name}
                        className="w-11 h-11 rounded-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col w-4/5">
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold text-gray-800">{cert.name}</h3>
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1.5 bg-blue-500 text-white rounded-full text-xs hover:bg-blue-600 transition-all ml-4"
                        >
                          <FaExternalLinkAlt size={14} />
                        </a>
                      </div>
                      <p className="text-sm text-gray-600">{cert.issuedBy}</p>
                      <p className="text-sm text-gray-600">{cert.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

       {/* skills Section */}
        <section className="w-full p-8">
  <h2 className="text-3xl font-semibold text-gray-800">Skills</h2>
  <div className="flex flex-wrap gap-6 mt-4">
    {skills.map((skill, index) => (
      <div
        key={index}
        className="text-black px-4 py-2  text-xs text-center flex items-center gap-2 transition-transform transform hover:scale-110"
      >
        {skill.icon}
        <span>{skill.name}</span>
      </div>
    ))}
  </div>
</section>

        {/* Projects Section */}
        <section className="w-full p-8">
          <h2 className="text-3xl font-semibold text-gray-800">Projects</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
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

        {/* Contact Me Section */}
        <section className="w-full p-8">
          <h2 className="text-3xl text-center font-semibold text-gray-800">Get In Touch</h2>
          <p className="mt-4 text-center text-sm text-gray-600">
          Feel free to reach out, or don’t—I’ll just be here... coding (or Googling)
          </p>
        </section>

        {/* Floating Social Media Icons */}
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3 bg-white p-2 rounded-full shadow-lg">
          <div className="relative group">
            <a href="https://www.linkedin.com/in/bheesetty-akhil/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} className="text-black transition-transform transform hover:scale-110" />
            </a>
            <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 text-xs text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
          </div>
          <div className="relative group">
            <a href="https://github.com/BESSETTY-AKHIL" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} className="text-black transition-transform transform hover:scale-110" />
            </a>
            <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 text-xs text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">GitHub</span>
          </div>
          <div className="relative group">
            <a href="https://x.com/AkhilCharming" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} className="text-black transition-transform transform hover:scale-110" />
            </a>
            <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 text-xs text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">Twitter</span>
          </div>
          <div className="relative group">
            <a href="https://www.instagram.com/akibhee/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} className="text-black transition-transform transform hover:scale-110" />
            </a>
            <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 text-xs text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">Instagram</span>
          </div>
          <div className="relative group">
            <a href="mailto:bheesettyakhil@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope size={24} className="text-black transition-transform transform hover:scale-110" />
            </a>
            <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 text-xs text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">Email</span>
          </div>
          <div className="relative group">
            <a href="/Akhil_s_CV.pdf" download className="text-black">
              <SiReaddotcv size={24} className="text-black transition-transform transform hover:scale-110" />
            </a>
            <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 text-xs text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">CV</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

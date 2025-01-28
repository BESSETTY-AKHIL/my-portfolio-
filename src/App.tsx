import React, { useState } from 'react';
import { SiReaddotcv } from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaAws, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiFirebase, SiVite } from 'react-icons/si';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEnvelope, FaLink, FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa';
{/* hello this is akhil */}

const App: React.FC = () => {
  const [projects] = useState([
    {
      id: 1,
      name: 'Portfolio Website 1s',
      description: 'A personal portfolio website built using React and Tailwind CSS to showcase my web development skills and projects. The site is responsive, visually appealing, and serves as a platform to highlight my work, including blogs and other coding projects.',
      imageUrl: 'https://img.freepik.com/free-photo/laptop-screen-with-line-job-search_169016-38606.jpg?ga=GA1.1.1112629585.1704345698&semt=ais_hybrid',
      githubLink: 'https://github.com/BESSETTY-AKHIL/my-portfolio-',
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
      name: 'Major Project',
      description: 'The proposed low-cost NAS system offers easy configuration, enhanced security, and web server capabilities, while being power-efficient and scalable. It provides a cost-effective, round-the-clock storage solution accessible on and off the network.',
      imageUrl: 'data:image/jpeg;base64,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',
      pdfLink: '/major_project.pdf',
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
import React from 'react';

const workExperience = [
  {
    companyImage: 'https://www.lotuswireless.com/assets/img/lotus_wireless_logo.png',
    title: 'Lotus Wireless Technologies',
    role: 'Frontend Developer (Intern)',
    duration: 'January 2025 - Present',
    responsibilities: [
      'Developed responsive web applications using React and Tailwind CSS.',
      'Collaborated with cross-functional teams to design and implement features.',
      'Worked with TypeScript for type safety and better code quality.',
    ],
  },
];

const WorkExperience: React.FC = () => {
  return (
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
  );
};

export default WorkExperience;

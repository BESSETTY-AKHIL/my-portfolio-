import React from 'react';

const education = [
  {
    institution: 'Veltech University',
    degree: 'Computer Science Engineering',
    duration: '2021 - 2024',
    cgpa: '7.16',
  },
  {
    institution: 'SITM College',
    degree: 'Diploma in Mechanical Engineering',
    duration: '2016 - 2019',
    percentage: '69.48%',
  },
  {
    institution: 'Prasanthi Niketan School',
    degree: 'Secondary Education',
    duration: '2016 - 2019',
    cgpa: '9.2',
    institutionImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLUn6Clt1mdEndD23mhwjPi67j-DVCVknrzA&s',
  },
];

const Education: React.FC = () => {
  return (
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
  );
};

export default Education;

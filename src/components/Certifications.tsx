import React, { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const certifications = [
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
];

const Certifications: React.FC = () => {
  const [showCertifications, setShowCertifications] = useState(false);

  const toggleCertifications = () => {
    setShowCertifications(!showCertifications);
  };

  return (
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
  );
};

export default Certifications;

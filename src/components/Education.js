import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const education = [
    {
        institution: 'Veltech University',
        degree: 'Computer Science Engineering',
        duration: '2021 - 2024',
        cgpa: '7.16',
        institutionImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy4ziWeMx3RO1MuHYqdByw8N3_6xNLeaMofg&s',
    },
    {
        institution: 'SITM College',
        degree: 'Diploma in Mechanical Engineering',
        duration: '2016 - 2019',
        percentage: '69.48%',
        institutionImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDtBfsMjk8zuXsid5Q0OilvupJAwYlPKmOHA&s',
    },
    {
        institution: 'Prasanthi Niketan School',
        degree: 'Secondary Education',
        duration: '2016 - 2019',
        cgpa: '9.2',
        institutionImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLUn6Clt1mdEndD23mhwjPi67j-DVCVknrzA&s',
    },
];
const Education = () => {
    return (_jsxs("section", { className: "w-full p-8", children: [_jsx("h2", { className: "text-3xl font-semibold text-gray-800", children: "Education" }), _jsx("div", { className: "mt-4", children: education.map((edu, index) => (_jsx("div", { className: "mb-6", children: _jsxs("div", { className: "flex items-start", children: [_jsx("img", { src: edu.institutionImage || 'https://via.placeholder.com/100', alt: edu.institution, className: "w-16 h-16 rounded-full object-cover mr-6" }), _jsxs("div", { className: "flex flex-col", children: [_jsx("h3", { className: "text-xl font-semibold text-gray-800", children: edu.institution }), _jsx("p", { className: "text-sm text-gray-600", children: edu.degree }), _jsxs("p", { className: "text-sm text-gray-600", children: ["Duration: ", edu.duration] }), edu.cgpa && _jsxs("p", { className: "text-sm text-gray-600", children: ["CGPA: ", edu.cgpa] }), edu.percentage && _jsxs("p", { className: "text-sm text-gray-600", children: ["Percentage: ", edu.percentage] })] })] }) }, index))) })] }));
};
export default Education;

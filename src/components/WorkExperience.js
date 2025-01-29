import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
const WorkExperience = () => {
    return (_jsxs("section", { className: "w-full p-8", children: [_jsx("h2", { className: "text-3xl font-semibold text-gray-800", children: "Work Experience" }), _jsx("div", { className: "mt-4", children: workExperience.map((job, index) => (_jsxs("div", { className: "flex items-start mb-6", children: [_jsx("img", { src: job.companyImage, alt: job.title, className: "w-16 h-16 rounded-full object-cover mr-6" }), _jsxs("div", { className: "flex flex-col justify-between", children: [_jsxs("div", { className: "flex justify-between items-start", children: [_jsxs("div", { className: "flex flex-col", children: [_jsx("h3", { className: "text-xl font-semibold text-gray-800", children: job.title }), _jsx("p", { className: "text-sm text-gray-600 mt-1", children: _jsx("span", { className: "text-xs text-gray-500", children: job.role }) })] }), _jsx("p", { className: "text-sm text-gray-600", children: job.duration })] }), _jsx("ul", { className: "mt-4 text-sm text-gray-600 list-disc pl-6", children: job.responsibilities.map((responsibility, idx) => (_jsx("li", { children: responsibility }, idx))) })] })] }, index))) })] }));
};
export default WorkExperience;

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaJsSquare, FaHtml5, FaCss3Alt, FaAws, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiFirebase, SiVite } from 'react-icons/si';
const skills = [
    { name: 'JavaScript', icon: _jsx(FaJsSquare, { size: 20, style: { color: '#F7DF1E' } }) },
    { name: 'HTML', icon: _jsx(FaHtml5, { size: 20, style: { color: '#E34F26' } }) },
    { name: 'CSS', icon: _jsx(FaCss3Alt, { size: 20, style: { color: '#1572B6' } }) },
    { name: 'AWS (EC2)', icon: _jsx(FaAws, { size: 20, style: { color: '#FF9900' } }) },
    { name: 'Firebase', icon: _jsx(SiFirebase, { size: 20, style: { color: '#FFCB2B' } }) },
    { name: 'React', icon: _jsx(FaReact, { size: 20, style: { color: '#61DAFB' } }) },
    { name: 'Tailwind CSS', icon: _jsx(FaCss3Alt, { size: 20, style: { color: '#38B2AC' } }) },
    { name: 'Node.js', icon: _jsx(FaNodeJs, { size: 20, style: { color: '#68A063' } }) },
    { name: 'GIT', icon: _jsx(FaGitAlt, { size: 20, style: { color: '#F1502F' } }) },
    { name: 'Vite (Currently Learning)', icon: _jsx(SiVite, { size: 20, style: { color: '#646CFF' } }) },
];
const Skills = () => {
    return (_jsxs("section", { className: "w-full p-8", children: [_jsx("h2", { className: "text-3xl font-semibold text-gray-800", children: "Skills" }), _jsx("div", { className: "flex flex-wrap gap-6 mt-4", children: skills.map((skill, index) => (_jsxs("div", { className: "text-black px-4 py-2 text-xs text-center flex items-center gap-2 transition-transform transform hover:scale-110", children: [skill.icon, _jsx("span", { children: skill.name })] }, index))) })] }));
};
export default Skills;

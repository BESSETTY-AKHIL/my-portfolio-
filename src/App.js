import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AboutMe from './components/AboutMe';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import SocialMediaLinks from './components/SocialMediaLinks';
const App = () => {
    return (_jsx("div", { className: "min-h-screen bg-white flex flex-col justify-start items-center px-4 py-10 text-sm", children: _jsxs("div", { className: "w-full max-w-3xl", children: [_jsxs("header", { className: "flex justify-between items-center py-10", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-4xl font-bold text-gray-800", children: "Hey, I\u2019m Akhil Bheesetty!" }), _jsx("p", { className: "mt-2 text-lg text-gray-600", children: "Web Developer" })] }), _jsx("img", { src: "https://lh3.googleusercontent.com/a/ACg8ocIvc6Frc0CsttY_r-sr1phydXaswzd3RlCYb7j51q4FVuVHEjH-nw=s192-c-rg-br100", alt: "Akhil", className: "w-24 h-24 rounded-full object-cover" })] }), _jsx(AboutMe, {}), _jsx(WorkExperience, {}), _jsx(Education, {}), _jsx(Certifications, {}), _jsx(Skills, {}), _jsx(Projects, {}), _jsx(ContactMe, {}), _jsx(SocialMediaLinks, {})] }) }));
};
export default App;

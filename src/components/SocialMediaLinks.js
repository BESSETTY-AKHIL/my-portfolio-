import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { SiReaddotcv } from 'react-icons/si';
const SocialMediaLinks = () => {
    return (_jsx("div", { className: "fixed bottom-5 left-1/2 transform -translate-x-1/2", children: _jsxs("div", { className: "flex space-x-4", children: [_jsxs("div", { className: "relative group", children: [_jsx("a", { href: "https://www.linkedin.com/in/akhil-bheesetty/", target: "_blank", rel: "noopener noreferrer", children: _jsx(FaLinkedin, { size: 30, className: "text-black hover:text-gray-600 transition-all transform group-hover:scale-110" }) }), _jsx("span", { className: "absolute left-1/2 transform -translate-x-1/2 -translate-y-14 text-xs text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity", children: "LinkedIn" })] }), _jsxs("div", { className: "relative group", children: [_jsx("a", { href: "https://github.com/BESSETTY-AKHIL", target: "_blank", rel: "noopener noreferrer", children: _jsx(FaGithub, { size: 30, className: "text-gray-800 hover:text-black transition-all transform group-hover:scale-110" }) }), _jsx("span", { className: "absolute left-1/2 transform -translate-x-1/2 -translate-y-14 text-xs text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity", children: "GitHub" })] }), _jsxs("div", { className: "relative group", children: [_jsx("a", { href: "https://twitter.com/akhilbheesetty", target: "_blank", rel: "noopener noreferrer", children: _jsx(FaTwitter, { size: 30, className: "text-black hover:text-gray-600 transition-all transform group-hover:scale-110" }) }), _jsx("span", { className: "absolute left-1/2 transform -translate-x-1/2 -translate-y-14 text-xs text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity", children: "Twitter" })] }), _jsxs("div", { className: "relative group", children: [_jsx("a", { href: "https://www.instagram.com/akhil.bheesetty/", target: "_blank", rel: "noopener noreferrer", children: _jsx(FaInstagram, { size: 30, className: "text-black hover:text-gray-600 transition-all transform group-hover:scale-110" }) }), _jsx("span", { className: "absolute left-1/2 transform -translate-x-1/2 -translate-y-14 text-xs text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity", children: "Instagram" })] }), _jsxs("div", { className: "relative group", children: [_jsx("a", { href: "mailto:akhil.bheesetty@gmail.com", target: "_blank", rel: "noopener noreferrer", children: _jsx(FaEnvelope, { size: 30, className: "text-gray-800 hover:text-gray-600 transition-all transform group-hover:scale-110" }) }), _jsx("span", { className: "absolute left-1/2 transform -translate-x-1/2 -translate-y-14 text-xs text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity", children: "Email" })] }), _jsxs("div", { className: "relative group", children: [_jsx("a", { href: "/resume", target: "_blank", rel: "noopener noreferrer", children: _jsx(SiReaddotcv, { size: 30, className: "text-black hover:text-gray-600 transition-all transform group-hover:scale-110" }) }), _jsx("span", { className: "absolute left-1/2 transform -translate-x-1/2 -translate-y-14 text-xs text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity", children: "CV" })] })] }) }));
};
export default SocialMediaLinks;

import { jsx as _jsx } from "react/jsx-runtime";
// src/main.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App'; // This should match the default export in App.tsx
createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(App, {}) }));

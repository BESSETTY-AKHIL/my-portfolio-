// src/main.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App'; // This should match the default export in App.tsx

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

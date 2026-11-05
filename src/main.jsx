import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/base.css';
import './dc/resources.js';
import Portfolio from './pages/PortfolioPublish.jsx';

createRoot(document.getElementById('dc-root')).render(<Portfolio {...Portfolio.defaults} />);

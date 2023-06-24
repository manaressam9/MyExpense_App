import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './src/App.js'
import { GlobalStyle } from './src/styles/GlobalStyle.js';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
<StrictMode>
    <GlobalStyle />
    <App />
    </StrictMode>);
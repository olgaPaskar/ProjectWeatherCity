import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import ThemeProviderComponent  from './components/themeProviderComponent/ThemeProviderComponent';
import './config/i18n';


ReactDOM.render(
    <React.StrictMode>
        <ThemeProviderComponent>
                <App />
        </ThemeProviderComponent>
    </React.StrictMode>,
    document.getElementById('root')
);






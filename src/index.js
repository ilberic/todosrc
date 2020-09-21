import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap-grid.min.css'
import './index.css';
import App from './App';

export default function rerenderEntireTree ()   {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
}

rerenderEntireTree();

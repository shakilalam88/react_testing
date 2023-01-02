import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {MovieProvider} from './Movies/context'

ReactDOM.render(
    <MovieProvider>
        <App />
    </MovieProvider>,
    document.getElementById('root')
);

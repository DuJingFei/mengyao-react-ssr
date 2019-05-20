import React from 'react';
import { render } from 'react-dom';
import './style/index.less';
import logo from './static/juventus.png';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';

function App() {
    return <div>
        <h1>Hello Juventus</h1>
        <img src={logo} className='logo'/>
    </div>
}

render(
    <BrowserRouter>
       <Router/>
    </BrowserRouter>,
    document.getElementById('app')
);
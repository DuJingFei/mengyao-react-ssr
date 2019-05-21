import React from 'react';
import { render } from 'react-dom';
import './style/index.less';
import logo from './static/juventus.png';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import { Provider } from 'react-dom';
import createStore from './redux/store/create';

function App() {
    return <div>
        <h1>Hello Juventus</h1>
        <img src={logo} className='logo'/>
    </div>
}

const store = createStore();

render(
   <Provider store={store}>
      <BrowserRouter>
         <Router/>
      </BrowserRouter>
   </Provider>,
    document.getElementById('app')
);
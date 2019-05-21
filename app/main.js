import React from 'react';
import { render } from 'react-dom';
import './style/index.less';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import { Provider } from 'react-dom';
import createStore from './redux/store/createStore';

const store = createStore();

render(
    <Provider store={store}>
      <BrowserRouter>
         <Router/>
      </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);
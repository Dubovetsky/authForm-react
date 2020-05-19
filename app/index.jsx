'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';
import Home from 'components/Home';
import store from 'utils/store';
import './App.css';
// import './index.css';



const routing = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route component={Home} path='/'/>
        </Router>
    </Provider>
);

ReactDOM.render(routing, document.getElementById('root'));
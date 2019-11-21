import 'normalize.css/normalize.css';
import 'bootstrap';

import './styles/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './routers/AppRouter';

ReactDOM.render(<AppRouter />, document.getElementById('app'));

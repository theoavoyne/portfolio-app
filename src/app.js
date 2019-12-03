import 'normalize.css/normalize.css';

import './styles/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import FullpageScroller from './routers/FullpageScroller';

ReactDOM.render(<FullpageScroller />, document.getElementById('app'));

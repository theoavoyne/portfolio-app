import 'normalize.css/normalize.css';

import './styles/styles.scss';

import AOS from 'aos';
import 'aos/dist/aos.css';

import React from 'react';
import ReactDOM from 'react-dom';

import FullpageScroller from './routers/FullpageScroller';

ReactDOM.render(<FullpageScroller />, document.getElementById('app'));

AOS.init({ once: true });

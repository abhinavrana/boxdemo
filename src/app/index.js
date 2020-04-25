import React from 'react';
import { render } from 'react-dom';
import Dashboard from './components/Dashboard';
import Main from './components/main';
import './index.scss';

const container = document.querySelector('.container');

render(<Main/>,container);

import  React from 'react';
import { render } from 'react-dom';
import App from './components/App';

import './css/style.css';

render(<App msg="Hello World" />, document.getElementById('root'));
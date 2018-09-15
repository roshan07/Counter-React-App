import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap/scss/bootstrap.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import 'bootstrap/dist/css/bootstrap.css';
//import Counters from './components/counters';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

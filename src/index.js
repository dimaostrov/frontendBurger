import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import '../node_modules/tachyons/css/tachyons.min.css'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

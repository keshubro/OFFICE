import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import First from './FirstComponent';
import ParentComponent from'./Try';
import Authentication from './AuthenticationComponent';
import Header from './HeaderComponent';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarFeatures from './JustTry/Test';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

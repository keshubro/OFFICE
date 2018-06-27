import React, { Component } from 'react';
import Main from './MainComponent';
import { BrowserRouter } from 'react-router-dom';
import Header from './HeaderComponent';
import NavbarFeatures from './JustTry/Test';
import './App.css';

class App extends Component {




  render() {
    return (


    <BrowserRouter>
      <div className = "App">
        <Main />
      </div>
    </BrowserRouter>
    );
  }
}


export default App;

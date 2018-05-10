import React, { Component } from 'react';

import {BrowserRouter as Router , Route} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import './materialize.min.css';

import Navbar from './components/Navbar';
import Home from './components/home/Home';
import HospitalDetail from './components/HospitalDetails/HospitalDetail'

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
          <Navbar />
          <Route exact path="/hospitals" component={Home} />
          <Route path="/hospitals/HospitalDetails" component={HospitalDetail} />
          </div>
        </Router>
    );
  }
}

export default App;

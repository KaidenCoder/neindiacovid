import React from 'react';
import './App.css';

// import Header from './components/ui/Header';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import HomeIndia from './Home/HomeIndia';
import HomeWorld from './Home/HomeWorld';


const App = () => {



  return (
    <Router>
      <Navbar />

      <br />
      <Route exact path='/' component={HomeIndia} />
      <Route exact path='/neIndia' component={Home} />
      <Route exact path='/world' component={HomeWorld} />

    </Router>

  );
}

export default App;

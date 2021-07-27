import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import './App.css';

import './components/static/Fonts/vazir-fonts/fonts.css'

import Autism from './components/fa/autism/Autism';
import About from './components/common/about/About';
import Record from './components/common/autism/record/Record';
import Profile from './components/common/autism/profile/Profile';

class App extends React.Component {
  
  render() {
    return (
      <Router>
        <Switch>
          <Route exact="true" path="/" component={Autism}></Route>
          <Route exact="true" path="/about" component={About}></Route>
          <Route exact="true" path="/profile" component={Profile}></Route>
          <Route exact="true" path="/record" component={Record}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;

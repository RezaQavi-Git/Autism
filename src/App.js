import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import './App.css';

import './components/static/Fonts/vazir-fonts/fonts.css'

import Autism from './components/fa/autism/Autism';

class App extends React.Component {
  
  render() {
    return (
      <Router>
        <Switch>
          <Route exact="true" path="/" component={Autism}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;

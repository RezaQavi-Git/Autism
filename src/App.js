import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import './App.css';

import './components/static/Fonts/vazir-fonts/fonts.css'

import Autism from './components/fa/autism/Autism';
import AutismEN from './components/en/autism/Autism';

import About from './components/common/about/About';
import Record from './components/common/autism/record/Record';
import Profile from './components/common/autism/profile/Profile';

class App extends React.Component {
  
  render() {
    return (
      <Router>
        <Switch>
          <Route exact="true" path="/fa" component={Autism}></Route>
          <Route exact="true" path="/en" component={AutismEN}></Route>

          <Route exact="true" path="/about/fa" component={About} lang={"fa"}></Route>
          <Route exact="true" path="/about/en" component={About} lang={"en"}></Route>

          <Route exact="true" path="/profile/fa"
            render={(props) => (
              <Profile lang="fa" {...props} />
            )}
          />
          <Route exact="true" path="/profile/en" component={Profile} lang={"en"}></Route>

          <Route exact="true" path="/record/fa" component={Record} lang={"fa"}></Route>
          <Route exact="true" path="/record/en" component={Record} lang={"en"}></Route>

        </Switch>
      </Router>
    );
  }
}

export default App;

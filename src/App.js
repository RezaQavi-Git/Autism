import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import "./components/static/Fonts/vazir-fonts/fonts.css";

import Autism from "./autism/Autism";

import About from "./components/common/about/About";
import Profile from "./components/common/autism/profile/Profile";
import Record from "./components/common/autism/record/Record";

class App extends React.Component {
  render() {
    return (
      <Router basename="/autism">
        <Switch>
          
          <Route
            exact="true"
            path="/"
            render={(props) => <Autism lang="fa" {...props} />}
          ></Route>

          <Route
            exact="true"
            path="/fa"
            render={(props) => <Autism lang="fa" {...props} />}
          ></Route>

          <Route
            exact="true"
            path="/en"
            render={(props) => <Autism lang="en" {...props} />}
          ></Route>

          <Route
            exact="true"
            path="/about/fa"
            render={(props) => <About lang="fa" {...props} />}
          />
          <Route
            exact="true"
            path="/about/en"
            render={(props) => <About lang="en" {...props} />}
          ></Route>

          <Route
            exact="true"
            path="/profile/fa"
            render={(props) => <Profile lang="fa" {...props} />}
          />
          <Route
            exact="true"
            path="/profile/en"
            render={(props) => <Profile lang="en" {...props} />}
          ></Route>

          <Route
            exact={true}
            path="/cry/record/fa"
            render={(props) => <Record lang="fa" {...props} />}
          ></Route>
          <Route
            exact={true}
            path="/cry/record/en"
            render={(props) => <Record lang="en" {...props} />}
          ></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;

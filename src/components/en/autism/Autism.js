import React from "react";

import Language from "../../common/header/Language";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import MainPage from "../../common/autism/mainpage/MainPage";

import $ from 'jquery';

class Autism extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    document.title = "Autism";
    $("body").attr("dir", "ltr");
  }

  render() {
    return (
      <React.Fragment>
        <Language lang="en" url="/" />
        <div className="main">
          <Header lang="en" />
          <p className="seprator">Description</p>
          <MainPage lang="en" />
          <p className="seprator"></p>
          <Footer lang="en" />
        </div>
      </React.Fragment>
    );
  }
}

export default Autism;

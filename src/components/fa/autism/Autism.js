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
    document.title = "اوتیسم";
    $("body").attr("dir", "ltr");
  }

  render() {
    return (
      <React.Fragment>
        <Language lang="fa" url="/" />
        <div className="main">
          <Header lang="fa" />
          <p className="seprator">توضیحات</p>
          <MainPage lang="fa" />
          <p className="seprator"></p>
          <Footer lang="fa" />
        </div>
      </React.Fragment>
    );
  }
}

export default Autism;

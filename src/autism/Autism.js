import React from "react";

import Language from "../components/common/header/Language";
import Header from "../components/common/header/Header";
import Footer from "../components/common/footer/Footer";
import MainPage from "../components/common/autism/mainpage/MainPage";

import $ from "jquery";

class Autism extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { lang, params } = this.props;

    const dir = lang === "fa" ? "rtl" : "ltr";
    const title = lang === "fa" ? "اوتیسم" : "Autism";

    $("body").attr("dir", dir);
    document.title = title;
  }

  render() {
    const { lang, params } = this.props;

    return (
      <React.Fragment>
        <Language lang={lang} url={"/" + lang }/>
        <div className="main">
          <Header lang={lang} />
          <p className="seprator">
          </p>
          <MainPage lang={lang} />
          <p className="seprator"></p>
          <Footer lang={lang} />
        </div>
      </React.Fragment>
    );
  }
}

export default Autism;

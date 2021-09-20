import React from "react";

import "../total-page.css";

import fa_img from "../../static/images/fa-lang.png";
import en_img from "../../static/images/en-lang.png";

class Language extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const lang = this.props.lang;
    const url = this.props.url;
    var path = window.location.pathname;
    if (path === "/autism/") {
      return (
        <div className="lang-button">
          <a href="/autism/en">
            <img src={en_img} alt="english-lang" className="lang-img" />
          </a>
        </div>
      );
    } else {
      path = path.slice(0, path.length - 2);
      if (lang === "en") {
        return (
          <div className="lang-button-en">
            <a href={lang === "fa" ? path + "en" : path + "fa"}>
              <img src={fa_img} alt="presian-lang" className="lang-img" />
            </a>
          </div>
        );
      } else {
        return (
          <div className="lang-button">
            <a href={lang === "fa" ? path + "en" : path + "fa"}>
              <img src={en_img} alt="english-lang" className="lang-img" />
            </a>
          </div>
        );
      }
    }
  }
}

export default Language;

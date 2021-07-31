import React from "react";

import "./header.css";
import LOGOIMG from "../../static/images/ut-logo.png";

import Navbar from './Navbar';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const lang = this.props.lang;
    return (
      <React.Fragment>
        <div className="logo">
          <div className="logo-title">
            <p className="logo-title-txt">
              {lang === "fa" ? "دانشگاه تهران" : "University of Tehran"}
            </p>
            <p className="logo-title-txt">
              {lang === "fa"
                ? "دانشکده برق و کامپیوتر"
                : "School of Electrical & Computer Engineering"}
            </p>
          </div>
          <img
            src={LOGOIMG}
            alt="univerrsity of tehran logo"
            className="logo-img"
          />
        </div>
        <Navbar lang={lang} />
      </React.Fragment>
    );
  }
}

export default Header;

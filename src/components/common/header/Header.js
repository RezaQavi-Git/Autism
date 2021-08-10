import React from "react";

import "./header.css";
import UTLOGO from "../../static/images/ut-logo.png";
import BeheshtiLOGO from "../../static/images/beheshti.png";


import Navbar from "./Navbar";

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
        <img
            src={UTLOGO}
            alt="univerrsity of tehran logo"
            className="logo-img"
          />
          <div className="logo-title">
            <p className="logo-title-txt">
              {lang === "fa"
                ? " دانشکده برق و کامپیوتر دانشگاه تهران"
                : "Faculty of Electrical and Computer Engineering, University of Tehran"}
            </p>
            <p className="logo-title-txt">
              {lang === "fa"
                ? "دانشکده روان شناسی دانشگاه شهید بهشتی"
                : "Faculty of Psychology, Shahid Beheshti University"}
            </p>
          </div>
          <img
            src={BeheshtiLOGO}
            alt="Shahid Beheshti University logo"
            className="logo-img"
          />
        </div>
        <Navbar lang={lang} />
      </React.Fragment>
    );
  }
}

export default Header;

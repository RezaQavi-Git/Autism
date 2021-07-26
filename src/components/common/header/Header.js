import React from "react";

import "./header.css";
import LOGOIMG from "../../static/images/ut-logo.png";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const lang = this.props.lang;

    if (lang === "fa") {
      return (
        <React.Fragment>
          <div className="logo">
            <div className="logo-title">
              <p className="logo-title-txt">دانشگاه تهران</p>
              <p className="logo-title-txt">دانشکده برق و کامپیوتر</p>
            </div>
            <img
              src={LOGOIMG}
              alt="univerrsity of tehran logo"
              className="logo-img"
            />
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="logo">
            <div className="logo-title">
              <p className="logo-title-txt">University of Tehran</p>
              <p className="logo-title-txt">
                School of Electrical & Computer Engineering
              </p>
            </div>
            <img
              src={LOGOIMG}
              alt="univerrsity of tehran logo"
              className="logo-img"
            />
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Header;

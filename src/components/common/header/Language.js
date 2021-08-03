import React from "react";

import "../total-page.css";

import fa_img from "../../static/images/fa-lang.png";
import en_img from "../../static/images/en-lang.png";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const lang = this.props.lang;
    const url = this.props.url;
    if (lang === "en") {
      return (
        <div className="lang-button-en">
          <Link
            to={
              url === "/en"
                ? "/fa"
                : url === "/profile/en"
                ? "/profile/fa"
                : url === "/record/en"
                ? "/record/fa"
                : "/about/fa"
            }
          >
            <img src={fa_img} alt="presian-lang" className="lang-img" />
          </Link>
        </div>
      );
    } else {
      return (
        <div className="lang-button">
          <Link
            to={
              url === "/fa"
                ? "/en"
                : url === "/profile/fa"
                ? "/profile/en"
                : url === "/record/fa"
                ? "/record/en"
                : "/about/en"
            }
          >
            <img src={en_img} alt="english-lang" className="lang-img" />
          </Link>
        </div>
      );
    }
  }
}

export default Header;

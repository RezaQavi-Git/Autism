import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      small_window: false,
    };
  }

  show_vertical_navbar() {
    document.getElementById("vertical-navbar").style.display = "flex";
    this.setState({
      small_window: true,
    });
  }

  hide_vertical_navbar() {
    document.getElementById("vertical-navbar").style.display = "none";
    this.setState({
      small_window: false,
    });
  }

  render() {
    const lang = this.props.lang;

    return (
      <div className="navbar-container">
        <div id="small-navbar" className={"small-navbar"}>
          <button
            className="small-navbar-button"
            onClick={
              this.state.small_window
                ? this.hide_vertical_navbar.bind(this)
                : this.show_vertical_navbar.bind(this)
            }
          >
            <span>&#9776; {lang === "fa" ? "منو" : "Menu"}</span>
          </button>
        </div>
        <HorizontalNavbar lang={lang} />
        <VerticalNavbar id="vertical-navbar" lang={lang} />
      </div>
    );
  }
}

class VerticalNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      small_window: false,
    };
  }

  render() {
    const lang = this.props.lang;
    return (
      <div id="vertical-navbar" className={"vertical-navbar " + lang}>
        <Link to={"/" + lang}>{lang === "fa" ? "خانه" : "Home"}</Link>
        <Link to={"/profile/" + lang}>{lang === "fa" ? "پروفایل" : "Profile"}</Link>
        <Link to={"/cry/record/" + lang}>{lang === "fa" ? "ضبط صدا" : "Record"}</Link>
        <Link to={"/about/" + lang}>{lang === "fa" ? "درباره ما" : "About"}</Link>

      </div>
    );
  }
}

class HorizontalNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      small_window: false,
    };
  }

  render() {
    const lang = this.props.lang;

    return (
      <div id="horizontal-navbar" className={"horizontal-navbar-" + lang}>
        <Link to={"/" + lang}>{lang === "fa" ? "خانه" : "Home"}</Link>
        <Link to={"/profile/" + lang}>{lang === "fa" ? "پروفایل" : "Profile"}</Link>
        <Link to={"/cry/record/" + lang}>{lang === "fa" ? "ضبط صدا" : "Record"}</Link>
        <Link to={"/about/" + lang}>{lang === "fa" ? "درباره ما" : "About"}</Link>
      </div>
    );
  }
}

export default Navbar;

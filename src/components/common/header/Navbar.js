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
            {lang === "fa" ? "منو" : "Menu"}
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
        <a href="/">{lang === "fa" ? "خانه" : "Home"}</a>
        <a href="/">{lang === "fa" ? "طراحی" : "Design"}</a>
        <a href="/">{lang === "fa" ? "منابع" : "Resources"}</a>
        <a href="/">{lang === "fa" ? "لینک ها" : "Links"}</a>
        <div class={"dropdown-" + lang}>
          <div>
            <button class={"dropbtn-" +lang }>
              {lang === "fa" ? "تیم ها" : "Teams"}
            </button>
          </div>
          <div class={"dropdown-" + lang + "-content"}>
            <a href="/">{lang === "fa" ? "تیم" : "team"}</a>
            <a href="/">{lang === "fa" ? "تیم" : "team"}</a>
            <a href="/">{lang === "fa" ? "تیم" : "team"}</a>
          </div>
        </div>
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
        <a href="/">{lang === "fa" ? "خانه" : "Home"}</a>
        <a href="/">{lang === "fa" ? "طراحی" : "Design"}</a>
        <a href="/">{lang === "fa" ? "منابع" : "Resources"}</a>
        <a href="/">{lang === "fa" ? "لینک ها" : "Links"}</a>
        <div class={"dropdown-" + lang}>
          <div>
            <button class={"dropbtn-" +lang } >
              {lang === "fa" ? "تیم ها" : "Teams"}
            </button>
          </div>
          <div class={"dropdown-" + lang + "-content"}>
            <a href="/">{lang === "fa" ? "تیم" : "team"}</a>
            <a href="/">{lang === "fa" ? "تیم" : "team"}</a>
            <a href="/">{lang === "fa" ? "تیم" : "team"}</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;

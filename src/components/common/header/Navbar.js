import React from "react";

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

    if (lang === "fa") {
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
              منو
            </button>
          </div>
          <HorizontalNavbar lang="fa" />
          <VerticalNavbar id="vertical-navbar" lang="fa" />
        </div>
      );
    } else {
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
              Menu
            </button>
          </div>
          <HorizontalNavbar lang="en" />
          <VerticalNavbar id="vertical-navbar" lang="en" />
        </div>
      );
    }
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

    if (lang === "fa") {
      return (
        <div id="vertical-navbar" className={"vertical-navbar"}>
          <a href="/">خانه</a>
          <a href="/">طراحی</a>
          <a href="/">منابع</a>
          <a href="/">لینک ها</a>
          <div class="dropdown">
            <div>
              <button class="dropbtn">تیم ها</button>
            </div>
            <div class="dropdown-content">
              <a href="/">تیم اول 1</a>
              <a href="/">تیم اونها 2</a>
              <a href="/">تیم بچه ها 3</a>
            </div>
          </div>

          <div class="dropdown">
            <div>
              <button class="dropbtn">تیم ها 2 </button>
            </div>
            <div class="dropdown-content">
              <a href="/">تیم اول 1</a>
              <a href="/">تیم اونها 2</a>
              <a href="/">تیم بچه ها 3</a>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div id="vertical-navbar" className={"vertical-navbar-en"}>
          <a href="/">Home</a>
          <a href="/">Design</a>
          <a href="/">Resources</a>
          <a href="/">Links</a>
          <div class="dropdown-en">
            <div>
              <button class="dropbtn-en">Teams</button>
            </div>
            <div class="dropdown-content-en">
              <a href="/">First team 1</a>
              <a href="/">Second Team 2</a>
              <a href="/">Third Team 3</a>
            </div>
          </div>
        </div>
      );
    }
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

    if (lang === "fa") {
      return (
        <div id="horizontal-navbar" className={"horizontal-navbar"}>
          <a href="/">خانه</a>
          <a href="/">طراحی</a>
          <div class="dropdown">
            <div>
              <button class="dropbtn">تیم ها</button>
            </div>
            <div class="dropdown-content">
              <a href="/">تیم اول 1</a>
              <a href="/">تیم اونها 2</a>
              <a href="/">تیم بچه ها 3</a>
            </div>
          </div>
          <a href="/">منابع</a>
          <a href="/">لینک ها</a>
          <div class="dropdown">
            <div>
              <button class="dropbtn">تیم ها</button>
            </div>
            <div class="dropdown-content">
              <a href="/">تیم اول 1</a>
              <a href="/">تیم اونها 2</a>
              <a href="/">تیم بچه ها 3</a>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div id="horizontal-navbar" className={"horizontal-navbar-en"}>
          <a href="/">Home</a>
          <a href="/">Design</a>
          <a href="/">Resources</a>
          <a href="/">Links</a>
          <div class="dropdown-en">
            <div>
              <button class="dropbtn-en">Teams</button>
            </div>
            <div class="dropdown-content-en">
              <a href="/">First team 1</a>
              <a href="/">Second Team 2</a>
              <a href="/">Third Team 3</a>
            </div>
          </div>
          <div class="dropdown-en">
            <div>
              <button class="dropbtn-en">Teams 2</button>
            </div>
            <div class="dropdown-content-en">
              <a href="/">First team 1</a>
              <a href="/">Second Team 2</a>
              <a href="/">Third Team 3</a>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Navbar;

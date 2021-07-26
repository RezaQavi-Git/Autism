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
          <Link to="/">خانه</Link>
          <Link to="/about">درباره ی ما</Link>
          {/* <div class="dropdown">
            <div>
              <button class="dropbtn">تیم ها</button>
            </div>
            <div class="dropdown-content">
              <a href="/">تیم اول 1</a>
              <a href="/">تیم اونها 2</a>
              <a href="/">تیم بچه ها 3</a>
            </div>
          </div> */}
        </div>
      );
    } else {
      return (
        <div id="vertical-navbar" className={"vertical-navbar-en"}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          {/* <div class="dropdown-en">
            <div>
              <button class="dropbtn-en">Teams</button>
            </div>
            <div class="dropdown-content-en">
              <a href="/">First team 1</a>
              <a href="/">Second Team 2</a>
              <a href="/">Third Team 3</a>
            </div>
          </div> */}
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
          <Link to="/">خانه</Link>
          <Link to="/about">درباره ی ما</Link>
          {/* <div class="dropdown">
            <div>
              <button class="dropbtn">تیم ها</button>
            </div>
            <div class="dropdown-content">
              <a href="/">تیم اول 1</a>
              <a href="/">تیم اونها 2</a>
              <a href="/">تیم بچه ها 3</a>
            </div>
          </div> */}
        </div>
      );
    } else {
      return (
        <div id="horizontal-navbar" className={"horizontal-navbar-en"}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          {/* <div class="dropdown-en">
            <div>
              <button class="dropbtn-en">Teams</button>
            </div>
            <div class="dropdown-content-en">
              <a href="/">First team 1</a>
              <a href="/">Second Team 2</a>
              <a href="/">Third Team 3</a>
            </div>
          </div> */}
        </div>
      );
    }
  }
}

export default Navbar;

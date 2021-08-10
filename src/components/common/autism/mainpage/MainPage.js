import React from "react";
import { Link } from "react-router-dom";

import "./main-page.css";

import AUTISMPIC from "../../../static/images/autism.png";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const lang = this.props.lang;

    return (
      <React.Fragment>
        <p className="descrption">
          {lang === "fa"
            ? "این سامانه جهت غربالگری صوتی کودکان مبتلا به اتیسم راه اندازی شده است. با پر کردن پروفایل و ارسال صدای گریه کودک خود میتوانید کودک خود را غربالگری نمایید."
            : "This system has been set up for voice screening of children with autism. You can screen your baby by filling out a profile and sending the sound of your baby crying."}
        </p>
        <div className="main-parts">
          <div className="main-part-pic">
            <img src={AUTISMPIC} alt="a boy with autism sit on bench" />
          </div>
          <div className="main-part-links">
            <Link to={"/profile/" + lang} className="profile link">
              {lang === "fa" ? "پروفایل" : "Profile"}
            </Link>
            <Link to={"/record/" + lang} className="record-link link">
              {lang === "fa" ? "ضبط صدا" : "Record"}
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MainPage;

import React from "react";
import { Link } from "react-router-dom";

import "./main-page.css";

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
            ? "بعضی از افراد دارای اتیسم، مشکلات همراه دیگری نیز از جمله کم‌توانی ذهنی، اختلال یکپارچگی حسی، اختلال بیش‌فعالی و نقص توجه، صرع و مشکلات گوارشی دارند؛ که به معنای این است که این افراد نیازمند سطوح حمایتی مختلفی هستند!"
            : "Some people with autism have other comorbid problems, including mental retardation, sensory integration disorder, attention deficit hyperactivity disorder, epilepsy, and digestive problems; Which means that these people need different levels of support!"}
        </p>
        <div className="main-parts">
          <Link to={"/profile/" + lang} className="profile link">
            {lang === "fa" ? "پروفایل" : "Profile"}
          </Link>
          <Link to={"/record/" + lang} className="record-link link">
            {lang === "fa" ? "ضبط صدا" : "Record Voice"}
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default MainPage;

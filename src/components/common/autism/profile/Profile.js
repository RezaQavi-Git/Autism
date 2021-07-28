import React from "react";

import $ from "jquery";
import Language from "../../header/Language";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";

import "./profile.css";
import { Link } from "react-router-dom";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const {lang, match: {params}} = this.props;
    const title = (lang === "fa") ? "پروفایل" : "Profile";
    const dir = lang === "fa" ? "rtl" : "ltr";

    document.title = title;
    $("body").attr("dir", dir);
  }

  render() {
    const {lang, match: {params}} = this.props;

    return (
      <React.Fragment>
        <Language lang={lang} url={"/profile/" + lang } />
        <div className="main">
          <Header lang={lang} />
          <p id="section1" className="seprator">
            {lang === "fa" ? "بخش اول" : "Part One"}
          </p>
          <QuestionsP1 lang={lang} />
          <p id="section2" className="seprator">
            {lang === "fa" ? "بخش دوم" : "Part Two"}
          </p>
          <QuestionsP2 lang={lang} />
          <p id="section3" className="seprator">
            {lang === "fa" ? "بخش سوم" : "Part Three"}
          </p>
          <QuestionsP3 lang={lang} />
          <p className="seprator"></p>
          <Link to={"/" + lang}
          >
            <button className="accept">
              {lang === "fa" ? "ثبت و ادامه" : "Accept & Continue"}
            </button>
          </Link>
          <p className="seprator"></p>
          <Footer lang={lang} />
        </div>
      </React.Fragment>
    );
  }
}

class QuestionsP1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const lang = this.props.lang;

    const years = [];
    const months = [];
    const days = [];
    var i;
    for (i = 1390; i < 1430; i++) {
      years.push(<option value={i}>{i}</option>);
    }
    for (i = 0; i < 12; i++) {
      months.push(<option value={i}>{i}</option>);
    }
    for (i = 0; i < 31; i++) {
      days.push(<option value={i}>{i}</option>);
    }

    return (
      <React.Fragment>
        <div className={(lang==="fa") ? "questions-body" : "questions-body en"}>
          <div id="gender" className="question">
            <div className={lang==="fa" ? "question-title fa" : "question-title en"}>
              <p>{lang === "fa" ? "جنسیت" : "Gender"}</p>
            </div>
            <div className="question-answer gender">
              <form>
                <input type="radio" className="big-button" id="men" name="gender" value="men" />
                <label for="men">{lang === "fa" ? "پسر" : "Boy"}</label>
                <br />
                <input type="radio" className="big-button" id="female" name="gender" value="female" />
                <label for="female">{lang === "fa" ? "دختر" : "Girl"}</label>
                <br />
              </form>
            </div>
          </div>

          <div id="birthday" className="question">
            <div className={lang==="fa" ? "question-title fa" : "question-title en"}>
              <p>{lang === "fa" ? "تاریخ تولد" : "Birth Day"}</p>
            </div>
            <div className="question-answer birthday">
              <select id="day" name="day">
                <option>{lang === "fa" ? "روز" : "Day"}</option>
                {days}
              </select>
              <select id="month" name="month">
                <option>{lang === "fa" ? "ماه" : "Month"}</option>
                {months}
              </select>
              <select id="year" name="year">
                <option>{lang === "fa" ? "سال" : "Year"}</option>
                {years}
              </select>
            </div>
          </div>

          <div id="phone-number" className="question">
            <div className={lang==="fa" ? "question-title fa" : "question-title en"}>
              <p>{lang === "fa" ? "شماره تماس" : "Phone Number"}</p>
              <p style={{ "font-size": "0.5em" }}>
                {lang === "fa"
                  ? "پر کردن این قسمت اجباری نیست و در صورتی که تمایل دارید پس ازبررسی ها با شما تماس گرفته شود این قسمت را تکمیل کنید"
                  : "Filling in this section is not mandatory and if you want to be contacted after the reviews, fill in this section"}
              </p>
            </div>
            <div className="question-answer phone-number">
              <input
                className="phone-number-input"
                type="text"
                placeholder="09105555555"
              />
            </div>
          </div>
          <a href="#section2">
            <button className="next-button">
              {lang === "fa" ? "بعدی" : "Next"}
            </button>
          </a>
        </div>
      </React.Fragment>
    );
  }
}

class QuestionsP2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const lang = this.props.lang;


    return (
      <React.Fragment>
        <div className="questions-body">
          <div id="cry-reason" className="question ">
            <div className="question-title cry-reason-title">
              <p>{lang === "fa" ? "دلیل گریه" : "The reason for crying"}</p>
            </div>
            <div className={"question-answer cry-reason-answer " + lang}>
              <form className={"cry-reason-answer-options " + lang }> 
                <input
                  type="radio" 
                  className="big-button"
                  id="option1"
                  name="options"
                  value="Hunger"
                />
                <label for="option1">
                  {lang === "fa" ? "گرسنگی" : "Hunger"}
                </label>
                <br />
                <input
                  type="radio" 
                  className="big-button"
                  id="option2"
                  name="options"
                  value="Thirst"
                />
                <label for="option2">
                  {lang === "fa" ? "گرسنگی" : "Hunger"}
                </label>
                <br />
                <input
                  type="radio"
                  className="big-button"
                  id="option3"
                  name="options"
                  value="lackofsleep"
                />
                <label for="option3">
                  {lang === "fa" ? "گرسنگی" : "Hunger"}
                </label>
                <br />
                <input 
                  type="radio" 
                  className="big-button"
                  id="option4" 
                  name="options" 
                  value="pain" />
                <label for="option4">{lang === "fa" ? "درد" : "Pain"}</label>
                <br />
                <input 
                  type="radio" 
                  className="big-button"
                  id="option5" 
                  name="options" 
                  value="dirty" />
                <label for="option5">
                  {lang === "fa" ? "کثیف بودن" : "Being dirty"}
                </label>
                <br />
                <input
                  type="radio"
                  className="big-button"
                  id="option6"
                  name="options"
                  value="excuse"
                />
                <label for="option6">
                  {lang === "fa" ? "بهانه گیری" : "Excuse-making"}
                </label>
                <br />
                <input
                  type="radio"
                  className="big-button"
                  id="option7"
                  name="options"
                  value="notcooperate"
                />
                <label for="option7">
                  {lang === "fa"
                    ? "همکاری نکردن با بزرگتر"
                    : "Not cooperating with adults"}
                </label>
                <br />
                <input
                  type="radio"
                  className="big-button"
                  id="option8"
                  name="options"
                  value="vaccine"
                />
                <label for="option8">
                  {lang === "fa" ? "درد واکسن" : "Vaccine pain"}
                </label>
                <br />
                <input
                  type="radio"
                  className="big-button"
                  id="option9"
                  name="options"
                  value="sepration"
                />
                <label for="option9">
                  {lang === "fa" ? "جدایی از مادر" : "Separation from mother"}
                </label>
                <br />
                <input
                  type="radio"
                  className="big-button"
                  id="option10"
                  name="options"
                  value="fear"
                />
                <label for="option10">{lang === "fa" ? "ترس" : "Fear"}</label>
                <br />
                <input
                  type="radio"
                  className="big-button"
                  id="option11"
                  name="options"
                  value="dontknow"
                />
                <label for="option11">
                  {lang === "fa" ? "نمیدانم" : "I do not know"}
                </label>
                <br />
                <input
                  type="radio"
                  className="big-button"
                  id="option12"
                  name="options"
                  value="noanswer"
                />
                <label for="option12">
                  {lang === "fa" ? "پاسخ نمیدهم" : "I do not answer"}
                </label>
                <br />
              </form>
            </div>
          </div>
          <a href="#section3">
            <button className="next-button">
              {lang === "fa" ? "بعدی" : "Next"}
            </button>
          </a>
        </div>
      </React.Fragment>
    );
  }
}

class QuestionsP3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  show_extra() {
    document.getElementById("autism-question-4").className = "question";
  }

  show_textarea() {
    document.getElementById("textarea").style.display = "flex";
  }

  render() {

    const lang = this.props.lang;


    return (
      <React.Fragment>
        <div className="questions-body">
          <div id="autism-question-1" className="question">
            <div className={"question-title autism-questions-title " + lang} >
              <p>
                {lang === "fa"
                  ? " مبتلا به اوتیسم است ؟"
                  : "Does he/she have autism?"}
              </p>
            </div>
            <div className={"question-answer autism-questions-answer " + lang}>
              <form>
                <input
                  type="radio" 
                  className="big-button"
                  id="autism-question1-yes"
                  name="autism-question1"
                  value="yes"
                />
                <label for="autism-question-yes">{lang==="fa" ? "بله" : "Yes"}</label>
                <br />
                <input
                  type="radio" 
                  className="big-button"
                  id="autism-question1-no"
                  name="autism-question1"
                  value="no"
                />
                <label for="autism-question-no">{lang==="fa" ? "خیر" : "No"}</label>
                <br />
              </form>
            </div>
          </div>
          <div id="autism-question-2" className="question">
            <div className={"question-title autism-questions-title " + lang}>
              <p>
                {lang === "fa" ? "خواهر یا برادر مبتلا دارد ؟" : "Do he/she have a sibling with autism?"}
              </p>
            </div>
            <div className={"question-answer autism-questions-answer " + lang}>
              <form>
                <input
                  type="radio" 
                  className="big-button"
                  id="autism-question2-yes"
                  name="autism-question2"
                  value="yes"
                />
                <label for="autism-question2-yes">{lang==="fa" ? "بله" : "Yes"}</label>
                <br />
                <input
                  type="radio" 
                  className="big-button"
                  id="autism-question2-no"
                  name="autism-question2"
                  value="no"
                />
                <label for="autism-question2-no">{lang==="fa" ? "خیر" : "No"}</label>
                <br />
              </form>
            </div>
          </div>

          <div id="autism-question-3" className="question">
            <div className={"question-title autism-questions-title " + lang}>
              <p>
                {lang === "fa" ? "بیماری یا اختلال دیگری دارد؟" : "Does he/she have another disease or disorder?"}
                
              </p>
            </div>
            <div className={"question-answer autism-questions-answer " + lang}>
              <form>
                <input
                  type="radio" 
                  className="big-button"
                  id="autism-question-3-yes"
                  name="autism-question-3"
                  value="yes"
                  onClick={this.show_extra.bind(this)}
                />
                <label for="autism-question-3-yes">{lang==="fa" ? "بله" : "Yes"}</label>
                <br />
                <input
                  type="radio" 
                  className="big-button"
                  id="autism-question-3-no"
                  name="autism-question-3"
                  value="no"
                />
                <label for="autism-question-3-no">{lang==="fa" ? "خیر" : "No"}</label>
                <br />
              </form>
            </div>
          </div>

          <div id="autism-question-4" className="hidden">
            <div className={"question-title autism-questions-title " + lang}>
              <p>
                {lang === "fa" ? "کدامیک از بیماری های رو به رو ؟" : "Which diseases do you face?"}
              </p>
            </div>
            <div className={"question-answer autism-questions-answer " + lang}>
              <form>
                <input
                  type="checkbox"
                  className="big-button"
                  id="autism-question-4-ADHD"
                  name="autism-question-4"
                  value="ADHD"
                />
                <label for="autism-question-4-ADHD">
                  {lang === "fa" ? "بیش فعالی" : "ADHD"}
                  
                </label>
                <br />
                <input
                  type="checkbox"
                  className="big-button"
                  id="autism-question-4-Mentalretardation"
                  name="autism-question-4"
                  value="Mentalretardation"
                />
                <label for="autism-question-4-Mentalretardation">
                  {lang === "fa" ? "عقب ماندگی ذهنی" : "Mental retardation"}
                </label>
                <br />
                <input
                  type="checkbox"
                  className="big-button"
                  id="autism-question-4-Growthdisorder"
                  name="autism-question-4"
                  value="Growthdisorder"
                />
                <label for="autism-question-4-Growthdisorder">
                  {lang === "fa" ? "اختلال رشد(مغزی)" : "Growth disorder (brain)"}
                  
                </label>
                <br />
                <input
                  type="checkbox"
                  className="big-button"
                  id="autism-question-4-other"
                  name="autism-question-4"
                  value="other"
                  onClick={this.show_textarea.bind(this)}
                />
                <label for="autism-question-4-other">
                  {lang === "fa" ? "سایر" : "Other"}
                  
                </label>
                <br />
                <textarea
                  type="textarea"
                  id="textarea"
                  name="autism-question-4-textarea"
                  className="other-textarea"
                  style={{ display: "none" }}
                />
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Profile;

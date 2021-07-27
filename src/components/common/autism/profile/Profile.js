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
    document.title = "پرسشنامه";
    $("body").attr("dir", "rtl");
  }

  render() {
    // const lang = this.props.lang;
    return (
      <React.Fragment>
        <Language lang="fa" url="/" />
        <div className="main">
          <Header lang="fa" />
          <p id="section1" className="seprator">
            بخش اول
          </p>
          <QuestionsP1 lang="fa" />
          <p id="section2" className="seprator">
            بخش دوم
          </p>
          <QuestionsP2 lang="fa" />
          <p id="section3" className="seprator">
            بخش سوم
          </p>
          <QuestionsP3 lang="fa" />
          <p className="seprator"></p>
          <Link to="/"> <button className="accept">ثبت و ادامه</button> </Link>
          <p className="seprator"></p>
          <Footer lang="fa" />
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
        <div className="questions-body">
          <div id="gender" className="question">
            <div className="question-title">
              <p>جنسیت</p>
            </div>
            <div className="question-answer gender">
              <form>
                <input type="radio" id="men" name="gender" value="men" />
                <label for="men">پسر</label>
                <br />
                <input type="radio" id="female" name="gender" value="female" />
                <label for="female">دختر</label>
                <br />
              </form>
            </div>
          </div>

          <div id="birthday" className="question">
            <div className="question-title">
              <p>تاریخ تولد</p>
            </div>
            <div className="question-answer birthday">
              <select id="day" name="day">
                <option>روز</option>
                {days}
              </select>
              <select id="month" name="month">
                <option>ماه</option>
                {months}
              </select>
              <select id="year" name="year">
                <option>سال</option>
                {years}
              </select>
            </div>
          </div>

          <div id="phone-number" className="question">
            <div className="question-title">
              <p>شماره تماس</p>
              <p style={{ "font-size": "0.5em" }}>
                پر کردن این قسمت اجباری نیست و در صورتی که تمایل دارید پس از
                بررسی ها با شما تماس گرفته شود این قسمت را تکمیل کنید
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
            <button className="next-button">بعدی</button>
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
    return (
      <React.Fragment>
        <div className="questions-body">
          <div id="cry-reason" className="question ">
            <div className="question-title">
              <p>دلیل گریه</p>
            </div>
            <div className="question-answer cry-reason">
              <form>
                <input
                  type="radio"
                  id="option1"
                  name="option1"
                  value="Hunger"
                />
                <label for="option1">گرسنگی</label>
                <br />
                <input
                  type="radio"
                  id="option2"
                  name="option2"
                  value="Thirst"
                />
                <label for="option2">تشنگی</label>
                <br />
                <input
                  type="radio"
                  id="option3"
                  name="option3"
                  value="lackofsleep"
                />
                <label for="option3">خواب آلودگی یا کم خوابی</label>
                <br />
                <input 
                  type="radio" 
                  id="option4" 
                  name="option4" 
                  value="pain" 
                />
                <label for="option4">درد یا بیماری</label>
                <br />
                <input 
                  type="radio" 
                  id="option5" 
                  name="option5" 
                  value="dirty" 
                />
                <label for="option5">کثیف بودن</label>
                <br />
                <input
                  type="radio"
                  id="option6"
                  name="option6"
                  value="excuse"
                />
                <label for="option6">بهانه گیری</label>
                <br />
                <input
                  type="radio"
                  id="option7"
                  name="option7"
                  value="notcooperate"
                />
                <label for="option7">عدم تمایل به همکاری با بزرگتر ها</label>
                <br />
                <input
                  type="radio"
                  id="option8"
                  name="option8"
                  value="vaccine"
                />
                <label for="option8">درد واکسن</label>
                <br />
                <input
                  type="radio"
                  id="option9"
                  name="option9"
                  value="sepration"
                />
                <label for="option9">جدایی از مادر</label>
                <br />
                <input
                  type="radio"
                  id="option10"
                  name="option10"
                  value="fear"
                />
                <label for="option10">ترس</label>
                <br />
                <input
                  type="radio"
                  id="option11"
                  name="option11"
                  value="dontknow"
                />
                <label for="option11">نمیدانم</label>
                <br />
                <input
                  type="radio"
                  id="option12"
                  name="option12"
                  value="noanswer"
                />
                <label for="option12">پاسخ نمیدهم</label>
                <br />
              </form>
            </div>
          </div>
          <a href="#section3">
            <button className="next-button">بعدی</button>
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
    return (
      <React.Fragment>
        <div className="questions-body">
          <div id="autism-question1" className="question">
            <div className="question-title autism-questions-title">
              <p>مبتلا به اوتیسم است ؟</p>
            </div>
            <div className="question-answer autism-questions-answer">
              <form>
                <input
                  type="radio"
                  id="autism-question1-yes"
                  name="autism-question1"
                  value="yes"
                />
                <label for="autism-question-yes">بله</label>
                <br />
                <input
                  type="radio"
                  id="autism-question1-no"
                  name="autism-question1"
                  value="no"
                />
                <label for="autism-question-no">خیر</label>
                <br />
              </form>
            </div>
          </div>
          <div id="autism-question1" className="question">
            <div className="question-title autism-questions-title">
              <p>خواهر یا برادر مبتلا دارد ؟</p>
            </div>
            <div className="question-answer autism-questions-answer">
              <form>
                <input
                  type="radio"
                  id="autism-question2-yes"
                  name="autism-question2"
                  value="yes"
                />
                <label for="autism-question2-yes">بله</label>
                <br />
                <input
                  type="radio"
                  id="autism-question2-no"
                  name="autism-question2"
                  value="no"
                />
                <label for="autism-question2-no">خیر</label>
                <br />
              </form>
            </div>
          </div>

          <div id="autism-question-3" className="question">
            <div className="question-title autism-questions-title">
              <p>بیماری یا اختلال دیگری دارد؟</p>
            </div>
            <div className="question-answer autism-questions-answer">
              <form>
                <input
                  type="radio"
                  id="autism-question-3-yes"
                  name="autism-question-3"
                  value="yes"
                  onClick={this.show_extra.bind(this)}
                />
                <label for="autism-question-3-yes">بله</label>
                <br />
                <input
                  type="radio"
                  id="autism-question-3-no"
                  name="autism-question-3"
                  value="no"
                />
                <label for="autism-question-3-no">خیر</label>
                <br />
              </form>
            </div>
          </div>

          <div id="autism-question-4" className="hidden">
            <div className="question-title autism-questions-title">
              <p>بیماری یا اختلال دیگری دارد؟</p>
            </div>
            <div className="question-answer autism-questions-answer">
              <form>
                <input
                  type="checkbox"
                  id="autism-question-4-ADHD"
                  name="autism-question-4"
                  value="ADHD"
                />
                <label for="autism-question-4-ADHD">بیش فعالی</label>
                <br />
                <input
                  type="checkbox"
                  id="autism-question-4-Mentalretardation"
                  name="autism-question-4"
                  value="Mentalretardation"
                />
                <label for="autism-question-4-Mentalretardation">عقب ماندگی ذهنی</label>
                <br />
                <input
                  type="checkbox"
                  id="autism-question-4-Growthdisorder"
                  name="autism-question-4"
                  value="Growthdisorder"
                />
                <label for="autism-question-4-Growthdisorder">اختلال رشد(مغزی)</label>
                <br />
                <input
                  type="checkbox"
                  id="autism-question-4-other"
                  name="autism-question-4"
                  value="other"
                  onClick={this.show_textarea.bind(this)}
                />
                <label for="autism-question-4-other">سایر</label>
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

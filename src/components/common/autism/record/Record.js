import React from "react";

import Language from "../../header/Language";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";

import $ from "jquery";
import "./record.css";
import CryRecordBox from "./CryRecordBox";

import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

class Record extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const {
      lang,
      match: { params },
    } = this.props;
    const title = lang === "fa" ? "ضبط صدا" : "Record Voice";
    const dir = lang === "fa" ? "rtl" : "ltr";
    document.title = title;
    $("body").attr("dir", dir);
  }

  render() {
    const {
      lang,
      match: { params },
    } = this.props;
    return (
      <React.Fragment>
        <Language lang={lang} url={"/cry/record/" + lang} />
        <div className="main">
          <Header lang={lang} />
          <p className="seprator"></p>
          <CryRecordBox lang={lang} />
          <p className="seprator"></p>
          <CryReason id="cry-reason" lang={lang} />
          <p className="seprator"></p>
          <Footer lang={lang} />
        </div>
      </React.Fragment>
    );
  }
}

class CryReason extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handelChange(event) {
    const cookies = new Cookies();
    cookies.set(event.target.name, event.target.value, { path: "/profile" });
    console.log(cookies.get(event.target.name));
  }

  render() {
    const lang = this.props.lang;

    return (
      <React.Fragment>
        <div id="cry-question-body" className="questions-body-cry">
          <div id="cry-reason" className="question-cry">
            <div className="question-title-cry cry-reason-title">
              <p>{lang === "fa" ? "دلیل گریه" : "The reason for crying"}</p>
            </div>
            <div className={"question-answer-cry cry-reason-answer " + lang}>
              <form
                className={"cry-reason-answer-options " + lang}
                onChange={this.handelChange.bind(this)}
              >
                <input
                  type="radio"
                  className="big-button"
                  id="option1"
                  name="cry-reson"
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
                  name="cry-reson"
                  value="Thirst"
                />
                <label for="option2">
                  {lang === "fa" ? "تشنگی" : "Thirst"}
                </label>
                <br />
                <input
                  type="radio"
                  className="big-button"
                  id="option3"
                  name="cry-reson"
                  value="lackofsleep"
                />
                <label for="option3">
                  {lang === "fa" ? "کم خوابی یا بی خوابی" : "lackofsleep"}
                </label>
                <br />
                <input
                  type="radio"
                  className="big-button"
                  id="option4"
                  name="cry-reson"
                  value="pain"
                />
                <label for="option4">{lang === "fa" ? "درد" : "Pain"}</label>
                <br />
                <input
                  type="radio"
                  className="big-button"
                  id="option5"
                  name="cry-reson"
                  value="dirty"
                />
                <label for="option5">
                  {lang === "fa" ? "کثیف بودن" : "Being dirty"}
                </label>
                <br />
                <input
                  type="radio"
                  className="big-button"
                  id="option6"
                  name="cry-reson"
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
                  name="cry-reson"
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
                  name="cry-reson"
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
                  name="cry-reson"
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
                  name="cry-reson"
                  value="fear"
                />
                <label for="option10">{lang === "fa" ? "ترس" : "Fear"}</label>
                <br />
                <input
                  type="radio"
                  className="big-button"
                  id="option11"
                  name="cry-reson"
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
                  name="cry-reson"
                  value="noanswer"
                />
                <label for="option12">
                  {lang === "fa" ? "پاسخ نمیدهم" : "I do not answer"}
                </label>
                <br />
              </form>
            </div>
          </div>
          <Link to={"/" + lang}>
            <button className="next-button">
              {lang === "fa" ? "تایید" : "Accept"}
            </button>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Record;

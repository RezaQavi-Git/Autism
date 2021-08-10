import React from "react";

import "./record.css";
import $ from "jquery";

import { ReactMic } from "react-mic";
import Microphone from "../../../static/images/microphone.png";
import Language from "../../header/Language";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";

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
        <Language lang={lang} url={"/record/" + lang} />
        <div className="main">
          <Header lang={lang} />
          <p className="seprator"></p>
          <RecordBody lang={lang} />
          <p className="seprator"></p>
          <CryReason id="cry-reason" lang={lang} />
          <p className="seprator"></p>
          <Footer lang={lang} />
        </div>
      </React.Fragment>
    );
  }
}

class RecordBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const lang = this.props.lang;

    return (
      <React.Fragment>
        <div className="title">
          <div className="title-head">
            <p>{lang === "fa" ? "ضبط صدا" : "Record Voice"}</p>
          </div>
          <div className="title-description">
            <p>
              {lang === "fa"
                ? "با ضبط و ارسال صدای گریه فرزند خود، ما را در این پروژه ی تحقیقاتی همراهی کنید"
                : "Join us in this research project by recording and sending the sound of your child crying"}
            </p>
          </div>
        </div>
        <br />
        <div className="record-body">
          <RecordBox lang={lang} />
        </div>
      </React.Fragment>
    );
  }
}


class RecordBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
      recorded: false,
      isRecording: false,
      blobURL: "",
      isBlocked: false,
      timerOn: false,
      timerStart: 0,
      timerTime: 0,
    };
  }

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime,
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart,
      });
    }, 10);
  };

  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };

  resetTimer = () => {
    this.setState({
      timerStart: 0,
      timerTime: 0,
    });
  };

  start = () => {
    this.startTimer();
    this.setState({
      status: false,
      recorded: false,
      record: true,
      isRecording: true,
    });
  };

  stop = () => {
    this.stopTimer();
    this.setState({
      isRecording: false,
      status: true,
      recorded: true,
      record: false,
      isRecording: false,
    });
    this.resetTimer();

  };

  showAcceptButtun() {
    document.getElementById("cry-question-body").style.display = "flex";
    const cookies = new Cookies();
    cookies.set("voice", this.state.blobURL, { path: "/record" });
    console.log(cookies.get("voice"));
  }

  cancelVoice() {
    document.getElementById("cry-question-body").style.display = "none";
    this.resetTimer();
    this.setState({
      status: true,
      recorded: false,
      blobURL: null,
      record: false,
    });
  }

  onStop(recordedBlob) {
    this.setState({
      blobURL: recordedBlob.blobURL,
    });
  }

  render() {
    const lang = this.props.lang;
    const { timerTime } = this.state;
    let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    return (
      <div className="record">
        <div className="recorder">
          <div className="record-voice">
            <ReactMic
              record={this.state.record}
              className="record-wave"
              onStop={this.onStop.bind(this)}
              strokeColor="#000000"
              mimeType="audio/wav"
              bitRate={256000}
              sampleRate={44100}
            />
            <img
              src={Microphone}
              alt="mirophone"
              onClick={this.state.status ? this.start : this.stop}
              className="record-button"
            />
            <div className={ this.state.timerOn | this.state.recorded ? "timer" : "hidden"}>
              {lang==="fa" ?( seconds + ":" + centiseconds ) : ( seconds + ":" + centiseconds )}
            </div>
            <audio
              src={this.state.blobURL}
              controls="controls"
              className={this.state.recorded ? "record-player" : "hidden"}
            />
          </div>
          <div
            id="submit"
            className={this.state.recorded ? "submit-voice" : "hidden"}
          >
            <p className="notife ">
              {lang === "fa"
                ? "آیا صدای ضبط شده مورد تایید شماست؟"
                : "Do you approve of the recorded sound ? "}
            </p>
            <div className="submit-voice-buttons">
              <button
                className="submit button"
                onClick={this.showAcceptButtun.bind(this)}
              >
                {lang === "fa" ? "بله" : "Yes"}
              </button>
              <button
                className="cancel button"
                onClick={this.cancelVoice.bind(this)}
              >
                {lang === "fa" ? "انصراف" : "Cancel"}
              </button>
            </div>
          </div>
          <br />
        </div>
      </div>
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

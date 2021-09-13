import React from "react";

import "./record.css";

import { ReactMic } from "react-mic";
import Microphone from "../../../static/images/microphone.png";
import Cookies from "universal-cookie";

class CryRecordBox extends React.Component {
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

  componentDidMount() {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(
      () => {
        console.log("Permission Granted");
        this.setState({ isBlocked: false });
      },
      () => {
        console.log("Permission Denied");
        this.setState({ isBlocked: true });
      }
    );
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
    if (this.state.isBlocked) {
      alert("microphone is blocked!");
    } else {
      this.startTimer();
      this.setState({
        status: false,
        recorded: false,
        record: true,
        isRecording: true,
      });
    }
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
    cookies.set("voice", this.state.blobURL, { path: "/cry/record" });
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
      <div className="autism-record-container">
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
        <div className="record-body">
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
                <div
                  className={
                    this.state.timerOn | this.state.recorded
                      ? "timer"
                      : "hidden"
                  }
                >
                  {lang === "fa"
                    ? seconds + ":" + centiseconds
                    : seconds + ":" + centiseconds}
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
                  <a href="#cry-reason-seprator">
                    <button
                      className="submit button"
                      onClick={this.showAcceptButtun.bind(this)}
                    >
                      {lang === "fa" ? "بله" : "Yes"}
                    </button>
                  </a>
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
        </div>
      </div>
    );
  }
}

export default CryRecordBox;

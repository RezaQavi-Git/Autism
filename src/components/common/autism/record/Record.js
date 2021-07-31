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
          <Link to={"/profile/" + lang}>
            <button id="record-accepted" className="voice-accept">
              {lang === "fa" ? "قبول و ادامه" : "Accept & Continue"}
            </button>
          </Link>
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
    };
    // this.Interval = null;

    // this.onStop = this.onStop.bind(this);
  }

  // timer() {
  //   var seconds = 0;
  //   var tens = 0;
  //   var appendTens = document.getElementById("tens");
  //   var appendSeconds = document.getElementById("seconds");
  //   clearInterval(this.Interval);
  //   this.Interval = setInterval(startTimer, 10);
  //   function startTimer() {
  //     tens++;
  //     if (tens <= 9) {
  //       appendTens.innerHTML = "0" + tens;
  //     }
  //     if (tens > 9) {
  //       appendTens.innerHTML = tens;
  //     }
  //     if (tens > 99) {
  //       console.log("seconds");
  //       seconds++;
  //       appendSeconds.innerHTML = "0" + seconds;
  //       tens = 0;
  //       appendTens.innerHTML = "0" + 0;
  //     }

  //     if (seconds > 9) {
  //       appendSeconds.innerHTML = seconds;
  //     }
  //   }
  // }

  start = () => {
    this.setState({
      status: false,
      recorded: false,
      record: true,
    });
  };

  stop = () => {
    this.setState({
      isRecording: false,
      status: true,
      recorded: true,
      record: false,
    });
  };

  showAcceptButtun() {
    document.getElementById("record-accepted").style.display = "flex";

    const cookies = new Cookies();
    cookies.set("voice", this.state.blobURL, { path: "/record" });
    console.log(cookies.get("voice"));
  }

  cancelVoice() {
    this.setState({
      status: true,
      recorded: false,
      blobURL: null,
      record: false,
    });
  }

  onStop(recordedBlob) {
    // console.log("recordedBlob is: ", recordedBlob);
    this.setState({
      blobURL: recordedBlob.blobURL,
    });
  }

  render() {
    const lang = this.props.lang;

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
            {/* <audio
                  src={this.state.blobURL}
                  controls="controls"
                  className="record-player"
                /> */}
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
      // <div className="record">
      //   <div className="recorder">
      //     <div className="control-button">
      //       <div className="record-voice">
      //         <img
      //           src={Microphone}
      //           alt="mirophone"
      //           onClick={this.state.status ? this.start : this.stop}
      //           className="record-button"
      //         ></img>
      //         <p
      //           className={
      //             this.state.isRecording | this.state.recorded
      //               ? "timer"
      //               : "hidden"
      //           }
      //         >
      //           <span id="seconds">00</span>:<span id="tens">00</span>
      //         </p>
      //       </div>
      //       <div
      //         id="submit"
      //         className={this.state.recorded ? "submit-voice" : "hidden"}
      //       >
      //         <p className="notife">آیا صدای ضبط شده مورد تایید شماست؟</p>
      //         <div className="submit-voice-buttons">
      //           <button
      //             className="submit button"
      //             onClick={this.showAcceptButtun.bind(this)}
      //           >
      //             بله
      //           </button>
      //           <button
      //             className="cancel button"
      //             onClick={this.cancelVoice.bind(this)}
      //           >
      //             انصراف
      //           </button>
      //         </div>
      //       </div>
      //     </div>
      //     <br />
      //   </div>
      // </div>
    );
  }
}

export default Record;

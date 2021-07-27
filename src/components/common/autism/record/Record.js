import React from "react";

import "./record.css";
import $ from "jquery";

import { ReactMic } from "react-mic";
import Microphone from "../../../static/images/microphone.png";
import Language from "../../header/Language";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";

// import MicRecorder from "mic-recorder-to-mp3";
import { Link } from "react-router-dom";

// const Mp3Recorder = new MicRecorder({ bitRate: 128 });

class Record extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    document.title = "ضبط صدا";
    $("body").attr("dir", "rtl");
  }

  render() {
    return (
      <React.Fragment>
        <Language lang="fa" url="/" />
        <div className="main">
          <Header lang="fa" />
          <p className="seprator"></p>
          <RecordBody />
          <p className="seprator"></p>
          <Link to="/questionnaire"><button id="record-accepted" className="voice-accept">ثبت و ادامه</button></Link>
          <p className="seprator"></p>
          <Footer lang="fa" />
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
    return (
      <React.Fragment>
        <div className="title">
          <div className="title-head">
            <p>ضبط صدا</p>
          </div>
          <div className="title-description">
            <p>
              با ضبط و ارسال صدای گریه فرزند خود، ما را در این پروژه ی تحقیقاتی
              همراهی کنید
            </p>
          </div>
        </div>
        <br />
        <div className="record-body">
          <RecordBox lang="fa" />
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
    this.Interval = null;
  }

  timer() {
    var seconds = 0;
    var tens = 0;
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    clearInterval(this.Interval);
    this.Interval = setInterval(startTimer, 10);
    function startTimer() {
      tens++;
      if (tens <= 9) {
        appendTens.innerHTML = "0" + tens;
      }
      if (tens > 9) {
        appendTens.innerHTML = tens;
      }
      if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }

      if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
      }
    }
  }

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
    console.log("recordedBlob is: ", recordedBlob);

    console.log("recordedBlob is: ", typeof recordedBlob.blobURL);
    this.setState({
      blobURL: recordedBlob.blobURL,
    });
  }

  render() {
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
                <p className="notife">آیا صدای ضبط شده مورد تایید شماست؟</p>
                <div className="submit-voice-buttons">
                  <button
                    className="submit button"
                    onClick={this.showAcceptButtun.bind(this)}
                  >
                    بله
                  </button>
                  <button
                    className="cancel button"
                    onClick={this.cancelVoice.bind(this)}
                  >
                    انصراف
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

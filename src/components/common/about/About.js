import React from "react";

import "./about.css";

import $ from 'jquery'

import Language from "../header/Language";
import Header from "../header/Header";
import Footer from "../footer/Footer";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const {
      lang,
      match: { params },
    } = this.props;
    const title = lang === "fa" ? "درباره ما" : "About";
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
        <Language lang={lang} url={"/about/" + lang} />
        <div className="main">
          <Header lang={lang} />
          <p className="seprator">{lang === "fa" ? "درباره ی ما" : "About"}</p>
          <AboutBody lang={lang} />
          <p className="seprator"></p>
          <Footer lang={lang} />
        </div>
      </React.Fragment>
    );
  }
}

class AboutBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const lang = this.props.lang;

    return (
      <p className="description">
        {lang === "fa"
          ? "لائم اوتیسم معمولاً در اوایل کودکی ، بین ۱۲ تا ۲۴ ماهگی مشهود است. با این حال ، علائم ممکن است زود تر یا دیر تر ظاهر شوند. علائم اولیه ممکناست شامل تاخیر قابل توجه در زبان یا پیشرفت اجتماعی باوتیسم را به دو دسته تقسیم می کند: مشکلات ارتباط و تعامل اجتماعی ، والگو های محدود یا تکراری از رفتار یا فعالیت ها."
          : "Symptoms of autism are usually seen in early childhood, between 12 and 24 months. With However, the symptoms may appear sooner or later. Early signs possibleIt involves significant delays in language or social progress. DSM-5 Symptoms Divides autism into two categories: communication and social interaction problems, andLimited or repetitive patterns of behavior or activities."}
      </p>
    );
  }
}

export default About;

import React from "react";


import './about.css';

import Language from '../header/Language';
import Header from "../header/Language";
import Footer from "../footer/Footer";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Language lang="fa" url="/" />
        <div className="main">
          <Header lang="fa" />
          <p className="seprator">توضیحات</p>
          <AboutBody lang="fa" />
          <p className="seprator"></p>
          <Footer lang="fa" />
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
    return (
      // <div className="">
        <p className="description">
          علائم اوتیسم معمولاً در اوایل کودکی ، بین ۱۲ تا ۲۴ ماهگی مشهود است. با
          این حال ، علائم ممکن است زود تر یا دیر تر ظاهر شوند. علائم اولیه ممکن
          است شامل تاخیر قابل توجه در زبان یا پیشرفت اجتماعی باشد . DSM-5 علائم
          اوتیسم را به دو دسته تقسیم می کند: مشکلات ارتباط و تعامل اجتماعی ، و
          الگو های محدود یا تکراری از رفتار یا فعالیت ها.
        </p>
      // </div>
    );
  }
}

export default About;

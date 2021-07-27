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
          اختلال طیف اوتیسم (ASD) یک اصطلاح گسترده است که برای توصیف گروهی از
          اختلالات رشدی عصبی استفاده می شود. این اختلالات با مشکلات ارتباطی و
          تعامل اجتماعی مشخص می شوند. افراد مبتلا به ASD اغلب علائم یا الگو های
          رفتاری محدود ، تکراری و کلیشه ای را نشان می دهند. ASD فارغ از نژاد ،
          فرهنگ یا پیشینه اقتصادی در افراد مختلف در سراسر جهان یافت می شود.
          اوتیسم در پسران بیشتر از دختران اتفاق می افتد ، با نسبت ۴ مرد به ۱ زن.
          شواهدی وجود دارد که نشان می دهد موارد ASD رو به افزایش است. برخی این
          افزایش را به عوامل محیطی نسبت می دهند. با این حال ، متخصصان درباره ی
          اینکه آیا افزایش واقعی موارد وجود دارد یا اینکه فقط تشخیص های مکرری
          اتفاق می افتد، بحث می کنند.
        </p>
        <div className="main-parts">
          <Link to="/profile" className="profile link">
            {lang === "fa" ? "پروفایل" : "Profile"}
          </Link>
          <Link to="/record" className="record-link link">
            {lang === "fa" ? "ضبط صدا" : "Record Voice"}
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default MainPage;

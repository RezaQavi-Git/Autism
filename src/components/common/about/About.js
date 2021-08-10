import React from "react";

import "./about.css";

import $ from "jquery";

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
          <p className="seprator"></p>
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
      <>
        <p className="description-title">
          {lang === "fa"
            ? "ضرورت غربالگری زودهنگام کودکان مبتلا به اوتیسم و موانع آن."
            : "The need for early screening of children with autism and its barriers"}
        </p>
        <p className={"description " + lang}>
          {lang === "fa"
            ? "اتیسم یک اختلال عصب شناختی با علائم اختلالات رفتاری است که روند اکتساب و اجرای اعمال و فعالیت های کودک را مختل می کند. مهمترین ویژگی های این اختلال عبارتند از: فقدان یا کمبود روابط اجتماعی، بی توجهی نسبت به محرک های محیطی نظیر نامیدن اسم او، فقدان تماس چشمی، تمایل به تنهایی، فقدان گفتار یا داشتن کلام بدون قصد ارتباط، گفتار تکراری و تقلید طوطی وار، فقدان بازی های تخیلی و اجتماعی، نارسایی جدی در فهم هیجانات دیگران یا بیان عواطف و هیجانات خود، علایق محدود، رفتارهای کلیشه ای و حرکات تکراری، تمایل وسواس گونه به حفظ ثبات و یکنواختی در محیط یا در اعمال روزمره، حساسیت بیش از حد و یا کمتر از حد معمول به محرک ها، خنده و گریه های نابه جا، ناپختگی در مهارت های ظریف یا درشت حرکتی، خیره ماندن به دست ها یا اجزای اشیا، قشقرق های شدید، ضربه به سر و صورت خود یا دیگران."
            : "Autism is a disorder that is affecting more and more children. The most important features of this disorder are: lack or lack of social relationships, inattention to environmental stimuli such as naming his name, lack of eye contact, desire to be alone, lack of speech or having words without the intention of communication, repetitive speech and parrot-like imitation, Lack of imaginative and social games, serious inability to understand the emotions of others or express their own emotions, limited interests, stereotyped behaviors and repetitive movements, obsessive desire to maintain stability and uniformity in the environment or in everyday actions, hypersensitivity and Or less than usual to inappropriate stimuli, laughter and crying, immaturity in fine or gross motor skills, staring at hands or parts of objects, severe barking, blows to the head and face of oneself or others."}
        </p>
        <p className="seprator"></p>
        <p className="description-title">
          {lang === "fa"
            ? "طراحی یک سیستم هوشمند جهت غربالگری زودهنگام اتیسم با استفاده از صدای نوزادان / کودکان."
            : "Design of an intelligent system for early screening of autism using the voice of infants / children"}
        </p>
        <p className={"description " + lang}>
          {lang === "fa"
            ? "تحقیقات اولیه در مرکز تحقیقاتی سیستمهای هوشمند برای اتیسم دانشگاه تهران نشان می دهد که می توان از روی صدای دریافتی کودکان (بدون نیاز به حضور فیزیکی) در سنین کمتر از ۲ سال و حتی ۱۸ ماه، به غربالگری اولیه اتیسم پرداخت. برای تایید این نتایج و پیاده سازی عملی و کاربردی آن، نیاز به جمع آوری داده های انبوه و بسیار است. در همین راستا، جهت دریافت داده های صوتی از نوزادان وکودکان معمولی و همچنین کودکان مبتلا به اتیسم (با روش مشخص شده و یکسان) تا سن ۷ سال، برنامهای کاربردی طراحی شده است که افراد می توانند از طریق آن، صدای نوزادان و کودکان خود را برای ما ارسال نمایند و بدین ترتیب در جهت عملیاتی کردن این سیستم که نتیجه آن کمک به هم نوعان است نقش موثری داشته باشند. در صورت دستیابی به چنین سیستمی، این رویکرد برای نخستین بار در سطح جهان عملی خواهد شد و در نتیجه کمک شایانی به خانواده هایی است که با این اختلال مواجه خواهند بود.."
            : "Preliminary research at the Intelligent Systems Research Center for Autism at the University of Tehran shows that primary autism screening can be performed based on the voice received by children (without the need for physical presence) at the age of less than 2 years and even 18 months. To confirm these results and implement it in practice, it is necessary to collect a lot of data. In this regard, in order to receive audio data from normal infants and children, as well as children with autism (with the same method and the same method) up to the age of 7, applications have been designed through which people can voice their babies and children. To us and thus play an effective role in the operation of this system, which results in helping others. If such a system is achieved, this approach will be implemented for the first time in the world, and as a result, it will be a great help to the families that will face this disorder."}
        </p>
      </>
    );
  }
}

export default About;

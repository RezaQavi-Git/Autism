import React from "react";

import "./footer.css";

import Location from "../../static/images/location.png";
import Phone from "../../static/images/phone.png";
import Email from "../../static/images/email.png";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const lang = this.props.lang;

    return (
      <React.Fragment>
        <footer className="footer">
          <div className="footer-member">
            <img src={Email} alt="email" className="footer-img" />
            <p className="footer-detail">
              {lang === "fa" ? "ece@ece.ut.ac.ir" : "ece@ece.ut.ac.ir"}
            </p>
          </div>
          <div className="footer-member">
            <img src={Phone} alt="phone" className="footer-img" />
            <p className="footer-detail" dir="ltr">
              {lang === "fa" ? "+98 21 82084960" : "+98 21 82084960"}
            </p>
          </div>
          <div className="footer-member">
            <img src={Location} alt="location" className="footer-img" />
            <p className="footer-detail">
              {lang === "fa"
                ? "دانشکده مهندسی برق و کامپیوتر ، دانشکده فنی و مهندسی دانشگاه ، دانشگاه تهران ، خیابان کارگر شمالی ، تهران ، ایران"
                : "School of Electrical and Computer Engineering, University College of Engineering, University of Tehran, North Kargar st.Tehran, Iran."}
            </p>
          </div>
        </footer>
        <div className="footer-copyright">
          <p>
            {lang === "fa"
              ? "تمامی حقوق سایت متعلق به شرکت فلان میباشد . طراح "
              : " All rights of the site belong to a certain company . Designer "}
            <a href="https://github.com/RezaQavi-git">
              {lang === "fa" ? "رضا قوی" : "Reza Qavi"}
            </a>
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;

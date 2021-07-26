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

    if (lang === "en") {
      return (
        <React.Fragment>
          <footer className="footer">
            <div className="footer-member">
              <img
                src="https://img.icons8.com/ios/50/ffffff/email-open.png"
                alt="email"
                className="footer-img"
              />
              <p className="footer-detail">ece@ece.ut.ac.ir</p>
            </div>
            <div className="footer-member">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/phone.png"
                alt="phone"
                className="footer-img"
              />
              <p className="footer-detail" dir="ltr">
                +98 21 82084960
              </p>
            </div>
            <div className="footer-member">
              <img
                src="https://img.icons8.com/ios/50/ffffff/address--v1.png"
                alt="location"
                className="footer-img"
              />
              <p className="footer-detail">
                School of Electrical and Computer Engineering, University
                College of Engineering, University of Tehran, North Kargar st.,
                Tehran, Iran.
              </p>
            </div>
          </footer>
          <div className="footer-copyright">
            <p>
              {" "}
              All rights of the site belong to a certain company . designer{" "}
              <a href="https://github.com/RezaQavi-git">Reza Qavi</a>{" "}
            </p>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <footer className="footer">
            <div className="footer-member">
              <img src={Email} alt="email" className="footer-img" />
              <p className="footer-detail">ece@ece.ut.ac.ir</p>
            </div>
            <div className="footer-member">
              <img src={Phone} alt="phone" className="footer-img" />
              <p className="footer-detail" dir="ltr">
                +98 21 82084960
              </p>
            </div>
            <div className="footer-member">
              <img src={Location} alt="location" className="footer-img" />
              <p className="footer-detail">
                دانشکده مهندسی برق و کامپیوتر ، دانشکده فنی و مهندسی دانشگاه ،
                دانشگاه تهران ، خیابان کارگر شمالی ، تهران ، ایران.{" "}
              </p>
            </div>
          </footer>
          <div className="footer-copyright">
            <p>
              {" "}
              تمامی حقوق سایت متعلق به شرکت فلان میباشد . طراح{" "}
              <a href="https://github.com/RezaQavi-git">رضا قوی</a>{" "}
            </p>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Footer;

import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import "./HomeFooter.scss";

export default class HomeFooter extends Component {
  render() {
    return (
      <footer>
        <div className="home-footer px-5">
          <div className="d-lg-flex d-sm-block">
            <div className="col-lg-6 col-sm-12">
              {/* <NavLink to="/home">
                <img
                  title="Logo"
                  className="footer-logo"
                  src={require("../../assets/images/LogoWebsite.PNG")}
                  alt="Wellnesss"
                />
              </NavLink> */}
              <div className="footer-company">
                {/* <h2>
                    <FormattedMessage id={"homepage.footer.company"} />
                  </h2> */}
                <p>
                  <span>
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                  <FormattedMessage id={"homepage.footer.address"} />
                </p>
                {/*    */}
                <div className="footer-address">
                  <strong>Hotline</strong>
                  <br />
                  <span>0356168425</span> {"(7h30 - 18h)"}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12"></div>
            <div className="col-lg-3 col-sm-12">
              <div className="footer-address">
                <strong>
                  <FormattedMessage id={"homepage.footer.headquarters"} />
                </strong>
                <br />
                <FormattedMessage id={"homepage.footer.address"} />
              </div>
              <div className="footer-address">
                <strong>
                  <FormattedMessage id={"homepage.footer.support"} />
                </strong>
                <br />
                dqhhuy@gmail.com
              </div>
              {/* <div className="footer-address">
                <strong>Hotline</strong>
                <br />
                <span>0356168425</span> {"(7h30 - 18h)"}
              </div> */}
            </div>
          </div>
        </div>
        <div className="home-footer2 text-center">
          <small>&copy; Wellness.</small>
        </div>
      </footer>
    );
  }
}

import React from "react";
import logo from "../../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faFax,
  faPhone,
  faVoicemail,
} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer pt-5 bg-dark text-light mt-5">
      <div className="container">
        <div className="pb-3 border-bottom text-center">
          <img src={logo} alt="" />
          <h2 className="footer_custom_color">
            National Institute of Neuro-Sciences & Hospital
          </h2>
        </div>
        <div className="row pt-3">
          <div className="col-lg-3 col-md-6 col col-12">
            <h3 className="footer_custom_color">Navigation</h3>
            <p>
              <FontAwesomeIcon
                className="text-danger me-2"
                icon={faArrowRight}
              />
              Home
            </p>
            <p>
              <FontAwesomeIcon
                className="text-danger me-2"
                icon={faArrowRight}
              />
              About us
            </p>
            <p>
              <FontAwesomeIcon
                className="text-danger me-2"
                icon={faArrowRight}
              />
              Departments
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col col-12">
            <h3 className="footer_custom_color">Services</h3>
            <p>
              <FontAwesomeIcon
                className="text-danger me-2"
                icon={faArrowRight}
              />
              ICU
            </p>
            <p>
              <FontAwesomeIcon
                className="text-danger me-2"
                icon={faArrowRight}
              />
              Emergency Services
            </p>
            <p>
              <FontAwesomeIcon
                className="text-danger me-2"
                icon={faArrowRight}
              />
              Ambulance Services
            </p>
          </div>

          <div className="col-lg-3 col-md-6 col col-12">
            <h3 className="footer_custom_color">Training</h3>
            <p>
              <FontAwesomeIcon
                className="text-danger me-2"
                icon={faArrowRight}
              />
              Class Schedule
            </p>
            <p>
              <FontAwesomeIcon
                className="text-danger me-2"
                icon={faArrowRight}
              />
              Result
            </p>
            <p>
              <FontAwesomeIcon
                className="text-danger me-2"
                icon={faArrowRight}
              />
              Student Notice
            </p>
          </div>

          <div className="col-lg-3 col-md-6 col col-12">
            <h3 className="footer_custom_color">Contact</h3>
            <p>
              <FontAwesomeIcon className="text-danger me-2" icon={faPhone} />
              Tel:+88-02-9140752
            </p>
            <p>
              <FontAwesomeIcon className="text-danger me-2" icon={faFax} />
              Fax:+88-02-9137292
            </p>
            <p>
              <FontAwesomeIcon
                className="text-danger me-2"
                icon={faVoicemail}
              />
              hospital@yahoo.com
            </p>
          </div>
        </div>
      </div>
      <div className="bg-danger mt-5">
        <p className="text-center text-light">
          2021 National Institute of Neuro-Sciences & Hospital
        </p>
      </div>
    </div>
  );
};

export default Footer;

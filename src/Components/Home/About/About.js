import React from "react";
import { useHistory } from "react-router";
import about from "../../../images/about.png";
import "./About.css";

const About = () => {
  const history = useHistory();
  const clickhandler = () => {
    history.push("/departments");
  };
  return (
    <div className="container mt-5">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-6 col-sm-12">
            <div className="card-body">
              <h4 className="card-title text-uppercase fw-light border-bottom">
                About us
              </h4>
              <h5 className="card-title mt-4">
                We Are Specialize in Medical Diagnositics
              </h5>
              <p className="card-text">
                Nulla lacinia sapien a diam ullamcorper, sed congue leo
                vulputate. Phasellus et ante ultrices, sagittis purus vitae,
                sagittis quam. Quisque urna lectus, auctor quis tristique
                tincidunt, semper vel lectus. Mauris eget eleifend massa.
                Praesent ex felis, laoreet nec tellus in, laoreet commodo ipsum.
              </p>
              <button onClick={clickhandler} className="btn btn-danger">
                Learn More
              </button>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <img src={about} className="img rounded-end mx-auto" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

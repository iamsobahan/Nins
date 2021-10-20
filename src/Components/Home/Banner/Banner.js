import React from "react";
import { Carousel } from "react-bootstrap";
import slideOne from "../../../images/slide-1.jpg";
import slideTwo from "../../../images/slide-2.jpg";
import "./Banner.css";
import slidethree from "../../../images/slide-4.jpg";
import { useHistory } from "react-router";

const Banner = () => {
  const history = useHistory();
  const clickhandler = () => {
    history.push("/departments");
  };
  return (
    <Carousel>
      <Carousel.Item className="mother">
        <img
          className="d-block w-100 height"
          src={slideOne}
          alt="First slide"
        />
        <div className="container">
          <div className="overlay d-flex align-items-center justify-content-center">
            <div className="text-center text-light">
              <h1 className="fw-light">A hospital is no place to be sick.</h1>

              <p className="fw-light w-50 mx-auto">
                We’ve expanded telemedicine, so more patients can receive the
                care they need by connecting with their care teams from home.so
                more patients can receive the care they need by connecting with
                their care teams from home
              </p>
              <button onClick={clickhandler} className="btn btn-danger">
                Know More
              </button>
            </div>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item className="mother">
        <img
          className="d-block w-100 height"
          src={slideTwo}
          alt="First slide"
        />
        <div className="container">
          <div className="overlay d-flex align-items-center justify-content-center">
            <div className="text-center text-light">
              <h1 className="fw-light">Hospital are about healing.</h1>

              <p className="fw-light w-50 mx-auto">
                We’ve expanded telemedicine, so more patients can receive the
                care they need by connecting with their care teams from home.so
                more patients can receive the care they need by connecting with
                their care teams from home
              </p>
              <button onClick={clickhandler} className="btn btn-danger">
                Know More
              </button>
            </div>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item className="mother">
        <img
          className="d-block w-100 height"
          src={slidethree}
          alt="Third slide"
        />
        <div className="container">
          <div className="overlay d-flex align-items-center justify-content-center">
            <div className="text-center text-light">
              <h1 className="fw-light">We do the best practice</h1>

              <p className="fw-light w-50 mx-auto">
                We’ve expanded telemedicine, so more patients can receive the
                care they need by connecting with their care teams from home.so
                more patients can receive the care they need by connecting with
                their care teams from home
              </p>
              <button onClick={clickhandler} className="btn btn-danger">
                Know More
              </button>
            </div>
          </div>
        </div>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;

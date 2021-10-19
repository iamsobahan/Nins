import React from "react";
import { Card, Button } from "react-bootstrap";

const ServiceItem = (props) => {
  const [obj] = props.item;
  const { name, img, description, doctor, doctorImg } = obj;

  return (
    <div class="row g-0 border border-4 my-4">
      <div className="col-md-4 col-lg-4">
        <img src={img} className="img-fluid rounded-start" alt="..." />
      </div>
      <div className="col-md-8 col-lg-8">
        <div className="card-body">
          <h5 className="card-title">Doctor :{doctor}</h5>
          <span>
            <img className="w-25 h-25 rounded-pill" src={doctorImg} alt="" />
          </span>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <button className="btn btn-danger">Go to home</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;

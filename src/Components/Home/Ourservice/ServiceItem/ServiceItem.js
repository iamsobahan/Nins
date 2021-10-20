import React from "react";
import { useHistory } from "react-router";

const ServiceItem = (props) => {
  // array destructuring
  const [obj] = props.item;
  // object destructuring
  const { name, img, description, doctor, doctorImg } = obj;
  const history = useHistory();
  const clickhandler = () => {
    history.push("/home");
  };

  return (
    <div class="row g-0 border border-4 my-4">
      <div className="col-md-4 col-lg-4">
        <img src={img} className="img-fluid rounded-start" alt="..." />
      </div>
      <div className="col-md-8 col-lg-8">
        <div className="card-body">
          <h5 className="card-title">Doctor :{doctor}</h5>
          <span>
            <img
              className="w-25 h-25 mt-3 rounded-pill"
              src={doctorImg}
              alt=""
            />
          </span>
          <h5 className="card-title mt-5">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <button onClick={clickhandler} className="btn btn-danger mt-4">
              Go to home
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;

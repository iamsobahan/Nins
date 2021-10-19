import React from "react";
import notfound from "../../images/notfound.jpg";

const NotFound = () => {
  return (
    <div className="container text-center">
      <img src={notfound} className="img-fluid" alt="" />
    </div>
  );
};

export default NotFound;

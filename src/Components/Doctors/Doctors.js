import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Doctors.css";

const Doctors = (props) => {
  const { doctorImg, position, doctor } = props.doctor;
  return (
    <Col>
      <Card className="p-3">
        <Card.Img
          variant="top"
          className="img-fluid doctor_img"
          src={doctorImg}
        />
        <Card.Body className="text-center">
          <Card.Title>{doctor}</Card.Title>
          <Card.Text>expert at{position}</Card.Text>
        </Card.Body>
        <Link to="/home">
          <div className="text-center">
            <button className="btn btn-danger">go to home</button>
          </div>
        </Link>
      </Card>
    </Col>
  );
};

export default Doctors;

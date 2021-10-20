import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Doctor.css";

const Doctor = (props) => {
  const { doctorImg, doctor, position } = props.doctor;

  return (
    <Col>
      <Card>
        <Card.Img
          variant="top"
          className="img-fluid doctor_height border border-5"
          src={doctorImg}
        />
        <Card.Body>
          <Card.Title>Name : {doctor}</Card.Title>
          <Card.Text>
            <small>Speacialist at</small> {position}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Doctor;

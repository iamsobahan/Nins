import React from "react";
import { Card, Col, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Doctors.css";

const Doctors = (props) => {
  const { doctorImg, position, doctor, timeshokal, timerat } = props.doctor;
  console.log(props.doctor);
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
          <Card.Text>expert at {position}</Card.Text>
        </Card.Body>
        <div className="text-center">
          <Dropdown>
            <Dropdown.Toggle variant="danger" id="dropdown-basic">
              Appoinment Time
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item className="text-center" href="#/action-1">
                Visit : 600 Taka
              </Dropdown.Item>
              <Dropdown.Item className="text-center" href="#/action-2">
                Morning
              </Dropdown.Item>
              <Dropdown.Item className="text-center" href="#/action-2">
                {timeshokal}
              </Dropdown.Item>
              <Dropdown.Item className="text-center" href="#/action-2">
                Evening
              </Dropdown.Item>
              <Dropdown.Item className="text-center" href="#/action-3">
                {timerat}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Card>
    </Col>
  );
};

export default Doctors;

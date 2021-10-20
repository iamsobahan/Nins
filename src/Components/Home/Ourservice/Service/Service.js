import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { name, description, img, id } = props.service;

  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} className="img-fluid about-img" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description.slice(0, 100)}</Card.Text>
          <Link to={`/servicedetails/${id}`}>
            <button className="btn btn-danger">Know More</button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;

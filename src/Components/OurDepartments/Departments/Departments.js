import React from "react";
import { Card, Col } from "react-bootstrap";

const Departments = (props) => {
  const { name, description, doctor } = props.item;
  return (
    <Col className="text-center">
      <Card border="secondary" style={{ width: "18rem" }}>
        <Card.Header>{name}</Card.Header>
        <Card.Body>
          <Card.Title>{doctor}</Card.Title>
          <Card.Text>{description.slice(0, 80)}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Departments;

import React from "react";
import { Container, Row } from "react-bootstrap";
import useServices from "../../../../Hooks/useServices";
import Service from "../Service/Service";

const Services = () => {
  const [services] = useServices();

  return (
    <Container>
      <h2 className="fw-light text-center border-bottom my-5 pb-2">
        Our Services
      </h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {services.map((service) => (
          <Service
            key={service.id}
            service={service}
            fullServices={services}
          ></Service>
        ))}
      </Row>
    </Container>
  );
};

export default Services;

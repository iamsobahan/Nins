import React from "react";
import { Container, Row } from "react-bootstrap";
import useServices from "../../../../Hooks/useServices";
import Doctor from "../Doctor/Doctor";

const Doctors = () => {
  // loading data from custom hook where i had already put my data
  const [services] = useServices();
  return (
    <Container>
      <h2 className="fw-light text-center border-bottom my-5 pb-2">
        Our Doctors
      </h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {services.map((doctor) => (
          <Doctor key={doctor.id} doctor={doctor}></Doctor>
        ))}
      </Row>
    </Container>
  );
};

export default Doctors;

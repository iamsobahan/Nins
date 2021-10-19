import React, { useEffect, useState } from "react";
import { Accordion, Container, Row } from "react-bootstrap";
import Doctors from "../Doctors/Doctors";

const Ourdoctor = () => {
  const [doctors, setdoctor] = useState([]);

  useEffect(() => {
    fetch("https://iamsobahan.github.io/fetchapi/service.json")
      .then((result) => result.json())
      .then((data) => setdoctor(data));
  }, []);
  return (
    <Container className="my-5">
      <h2 className="border-bottom pb-3 my-3 text-center text-uppercase">
        Our doctors
      </h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {doctors.map((doctor) => (
          <Doctors doctor={doctor} key={doctor.key}></Doctors>
        ))}
      </Row>
      <h2 className="my-5 text-center text-uppercase">Franqly Ask Question</h2>
      <Accordion className="my-5" defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>How can i get appointment?</Accordion.Header>
          <Accordion.Body>
            Use a day planner or digital calendar. These help you plan and
            organize your day. Appointments should be written in your planner as
            you make them. One of the advantages of a digital calendar, such as
            Google Calendar, is that you have access on any device and can
            quickly refer to in when making new appointments.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Do you have Child speacialist</Accordion.Header>
          <Accordion.Body>
            We know that children are natural born learners and we encourage
            them by creating stimulating, age-appropriate learning environments.
            Our approach to early learning is big on nurturing, safety, secure
            relationships and of course, play! We spend time getting to know you
            and your child. We’ll be with you throughout their first five years,
            helping to prepare them for school and life.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Do you have Ambulance service</Accordion.Header>
          <Accordion.Body>
            We have brought you the best quality online ambulance service in
            Dhaka. Be it pandemic or other adverse situations. we are ready to
            transport the patient to the hospital or home. We value your lives
            and we will not let anyone die without getting proper treatment.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default Ourdoctor;

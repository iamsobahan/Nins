import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import ServiceItem from "../ServiceItem/ServiceItem";

const Servicedetails = () => {
  const { id } = useParams();
  const [service, setservice] = useState([]);
  const [serviceItem, setserviceItem] = useState([]);

  useEffect(() => {
    fetch("https://iamsobahan.github.io/fetchapi/service.json")
      .then((result) => result.json())
      .then((data) => setservice(data));
  }, []);

  useEffect(() => {
    if (service.length) {
      const arr = [];
      const items = service.filter((item) => {
        return item.id === parseInt(id);
      });
      if (items) {
        arr.push(items);
      }
      setserviceItem(arr);
    }
  }, [service]);

  return (
    <Container>
      {serviceItem.map((item) => (
        <ServiceItem key={item.key} item={item}></ServiceItem>
      ))}
    </Container>
  );
};

export default Servicedetails;

import React from "react";
import department from "../../../images/department.jpg";
import Chartdetails from "../../OurDepartments/Chartdetails/Chartdetails";
import useService from "../../../Hooks/useServices";
import { Row } from "react-bootstrap";
import Departments from "../Departments/Departments";

const Depchart = () => {
  const [services] = useService();

  const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const data02 = [
    { name: "A1", value: 100 },
    { name: "A2", value: 300 },
    { name: "B1", value: 100 },
    { name: "B2", value: 80 },
    { name: "B3", value: 40 },
    { name: "B4", value: 30 },
    { name: "B5", value: 50 },
    { name: "C1", value: 100 },
    { name: "C2", value: 200 },
    { name: "D1", value: 150 },
    { name: "D2", value: 50 },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-uppercase pb-3 border-bottom text-center my-5">
        Our Departments
      </h2>
      <Row md={2} xs={1} lg={3} className="g-4">
        {services.map((item) => (
          <Departments key={item.id} item={item}></Departments>
        ))}
      </Row>

      <div className="row align-items-center mt-5">
        <div className="col-lg-6 col-12">
          <img className="img-fluid" src={department} alt="" />
        </div>
        <div className="col-lg-6 col-12">
          <Chartdetails></Chartdetails>
        </div>
      </div>
    </div>
  );
};

export default Depchart;

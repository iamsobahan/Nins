import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../Ourservice/Services/Services";
import Doctors from "../HomeDoctor/Doctors/Doctors";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Doctors></Doctors>
    </div>
  );
};

export default Home;

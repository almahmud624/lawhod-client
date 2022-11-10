import { Rate } from "antd";
import React from "react";
import useDynamicTitle from "../../Hook/useDynamicTitle";
import CaseResult from "../CaseResult/CaseResult";
import Header from "../Header/Header";
import PracticeAreas from "../PracticeAreas/PracticeAreas";
import Testimonials from "../Testimonials/Testimonials";
import WhyChoose from "../WhyChoose/WhyChoose";

const Home = () => {
  // title show dynamically
  useDynamicTitle("Welcome Home");
  return (
    <div className="mx-auto">
      <Header />
      <PracticeAreas />
      <WhyChoose />
      <CaseResult />
      <Testimonials />
    </div>
  );
};

export default Home;

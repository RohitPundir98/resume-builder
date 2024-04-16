import React, { useState } from "react";
import aboutImg from "./Images/aboutCV.jpg";
import step1 from "./Images/step1.png";
import step2 from "./Images/step2.png";
import step3 from "./Images/step3.png";

import { connect } from "react-redux";
import TempleteCard from "./TempleteCard";
import temp from "../../Data/data";
import Navbar from "../../Components/Navbar";
import { settemplate, updatetemplate } from "../../Redux/actions/settemplate";

function Templetes(props) {
  // State to hold the templates
  const [template, setTemplate] = useState(temp);

  return (
    <>
      {/* Navbar Component for Navigation */}
      <Navbar />

      {/*  A breif about Resume Builder */}
      <div className="flex flex-col md:flex-row justify-between m-14 items-center">
        <div className=" order-2 md:order-1 md:mr-0 md:ml-16">
          <h2 className="mt-10 font-bold text-xl text-center md:text-left md:text-3xl">
            Resume Builder.
            <span className="hidden md:inline-block">
              <br />
            </span>
            The Best CV Maker Online.
          </h2>
          <p className="mt-6 font-bold text-xl text-left md:text-left md:text-xl">
            Fast. Easy. Effective. If a sheet of paper represents your entire
            work life, personality, and skills, it better be a pretty amazing
            piece of paper — Let Resume Builder do the heavy lifting.
          </p>
        </div>
        <div className="order-1 md:order-2 flex justify-center md:justify-end mt-4 md:mt-0 ">
          <img
            src={aboutImg}
            width="400px"
            alt="cv-mage"
            className="max-w-xs md:max-w-none rounded-3xl hover:scale-105 transition duration-300"
          />
        </div>
      </div>

      {/* Helping Steps to make resume*/}
      <div className="my-20 mx-16 steps flex flex-col md:flex-row justify-between">
        <div className="step1 max-w-xs md:w-1/4 flex flex-col items-center">
          <img
            src={step1}
            alt="step1"
            className="mt-4 hover:scale-105 transition duration-300"
          />
          <h4 className="text-lg font-bold">Pick a Template.</h4>
          <p>Choose the template of your liking.</p>
        </div>
        <div className="step2 max-w-xs md:w-1/4 flex flex-col items-center">
          <img
            src={step2}
            alt="step2"
            className="mt-4 hover:scale-105 transition duration-300"
          />
          <h4 className="text-lg font-bold">Fill all the details.</h4>
          <p>Write down your correct details and let us do the designing.</p>
        </div>
        <div className="step3 max-w-xs md:w-1/4 flex flex-col items-center">
          <img
            src={step3}
            alt="step3"
            className="mt-4 w-2/3 rounded-3xl object-contain hover:scale-105 transition duration-300"
          />
          <h4 className="text-lg font-bold">See the preview.</h4>
          <p>
            Check all the details are correct and then download your resume.
          </p>
        </div>
      </div>

      <h1 className="mt-8 font-bold text-3xl text-center md:text-5xl">
        Templates
      </h1>
      <p className="mt-4 font-bold text-xl text-center md:text-2xl">
        Pick a Template to Get Started
      </p>
      <div className="grid mb-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-32 mx-auto max-w-7xl mt-8 px-8">
        {/* Iterate over each template and render a TemplateCard component */}
        {template.map((templates) => (
          <TempleteCard
            key={templates.key}
            data={templates.data}
            thumbnail={templates.thumbnail}
          />
        ))}
      </div>
    </>
  );
}

// Map Redux state to component props
const mapStateToProps = (state) => {
  return {
    resume: state.templateReducer,
  };
};

// Map Redux dispatch actions to component props
const mapDispatchToProps = (dispatch) => {
  return {
    settemplate: (template) => dispatch(settemplate(template)),
    updatetemplate: (template) => dispatch(updatetemplate(template)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Templetes);

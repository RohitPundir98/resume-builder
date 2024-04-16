import React, { useState } from "react";
import { Button, Snackbar, Alert } from "@mui/material";
import PersonalInformation from "../../Components/PersonalInformation";
import Education from "../../Components/Education";
import WorkExperience from "../../Components/WorkExperience";
import Keyskills from "../../Components/Keyskills";
import Navbar from "../../Components/Navbar";
import "./sidebar.css";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import BuildIcon from "@mui/icons-material/Build";
import KeyboardDoubleArrowRightSharpIcon from "@mui/icons-material/KeyboardDoubleArrowRightSharp";

function Detailfilling(props) {
  const navigate = useNavigate();
  const [activeComponent, setActiveComponent] = useState("personal");
  const [open, setOpen] = useState(false);
  const [isArrowDisabled, setIsArrowDisabled] = useState(true);

  const handleSidebarClick = (componentName) => {
    let shouldNavigate = true;
    setIsArrowDisabled(true);

    switch (activeComponent) {
      case "personal":
        if (componentName === "education" && props.contact === null) {
          setOpen(true);
          shouldNavigate = false;
        }
        break;
      case "education":
        if (componentName === "work" && props.education === null) {
          setOpen(true);
          shouldNavigate = false;
        }
        break;
      case "work":
        if (componentName === "keyskill" && props.experience === null) {
          setOpen(true);
          shouldNavigate = false;
        }
        break;
      case "keyskill":
        if (componentName === "preview" && props.Keyskills === null) {
          setOpen(true);
          shouldNavigate = false;
        }
        break;
      default:
        break;
    }

    if (shouldNavigate) {
      if (
        (activeComponent === "personal" && componentName === "education") ||
        (activeComponent === "education" && componentName === "work") ||
        (activeComponent === "work" && componentName === "keyskill")
      ) {
        setActiveComponent(componentName);
        setIsArrowDisabled(false);
      } else if (
        (activeComponent === "education" && componentName === "personal") ||
        (activeComponent === "work" && componentName === "education") ||
        (activeComponent === "keyskill" && componentName === "work")
      ) {
        setActiveComponent(componentName);
        setIsArrowDisabled(false);
      }
    }
  };

  const handleNext = () => {
    switch (activeComponent) {
      case "personal":
        if (props.contact !== null) {
          setActiveComponent("education");
          setIsArrowDisabled(true);
        } else {
          setOpen(true);
        }
        break;
      case "education":
        if (props.education !== null) {
          setActiveComponent("work");
          setIsArrowDisabled(true);
        } else {
          setOpen(true);
        }
        break;
      case "work":
        if (props.experience !== null) {
          setActiveComponent("keyskill");
          setIsArrowDisabled(true);
        } else {
          setOpen(true);
        }
        break;
      case "keyskill":
        if (props.Keyskills !== null) {
          navigate("/preview");
        } else {
          setOpen(true);
        }
        break;
      default:
        break;
    }
  };

  const handleBack = () => {
    switch (activeComponent) {
      case "personal":
        navigate("/Templete");
        break;
      case "education":
        setActiveComponent("personal");
        setIsArrowDisabled(true);
        break;
      case "work":
        setActiveComponent("education");
        setIsArrowDisabled(true);
        break;
      case "keyskill":
        setActiveComponent("work");
        setIsArrowDisabled(true);
        break;
      default:
        break;
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap p-3 w-full">
        <div style={{ marginLeft: "7vw", width: "30vh" }}>
          <sidebar className="side">
            <ul className="mt-5 space-y-2">
              <li
                className={`cursor-pointer flex items-center justify-between border border-gray-300 rounded-lg p-4 ${
                  activeComponent === "personal"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-800"
                } hover:bg-blue-500 hover:text-white transition duration-300`}
                onClick={() => handleSidebarClick("personal")}
              >
                <div className="flex items-center">
                  <AccountBoxIcon className="mr-2" />
                  <span>Personal Info</span>
                </div>
                <KeyboardDoubleArrowRightSharpIcon
                  className={`text-gray-400 transition-opacity duration-300 ${
                    activeComponent === "personal" ? "opacity-0" : "opacity-100"
                  }`}
                  style={{ pointerEvents: isArrowDisabled ? "none" : "auto" }}
                />
              </li>
              <li
                className={`cursor-pointer flex items-center justify-between border border-gray-300 rounded-lg p-4 ${
                  activeComponent === "education"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-800"
                } hover:bg-blue-500 hover:text-white transition duration-300`}
                onClick={() => handleSidebarClick("education")}
              >
                <div className="flex items-center">
                  <SchoolIcon className="mr-2" />
                  <span>Education</span>
                </div>
                <KeyboardDoubleArrowRightSharpIcon
                  className={`text-gray-400 transition-opacity duration-300 ${
                    activeComponent === "education"
                      ? "opacity-0"
                      : "opacity-100"
                  }`}
                  style={{ pointerEvents: isArrowDisabled ? "none" : "auto" }}
                />
              </li>
              <li
                className={`cursor-pointer flex items-center justify-between border border-gray-300 rounded-lg p-4 ${
                  activeComponent === "work"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-800"
                } hover:bg-blue-500 hover:text-white transition duration-300`}
                onClick={() => handleSidebarClick("work")}
              >
                <div className="flex items-center">
                  <WorkIcon className="mr-2" />
                  <span>Work Experience</span>
                </div>
                <KeyboardDoubleArrowRightSharpIcon
                  className={`text-gray-400 transition-opacity duration-300 ${
                    activeComponent === "work" ? "opacity-0" : "opacity-100"
                  }`}
                  style={{ pointerEvents: isArrowDisabled ? "none" : "auto" }}
                />
              </li>
              <li
                className={`cursor-pointer flex items-center justify-between border border-gray-300 rounded-lg p-4 ${
                  activeComponent === "keyskill"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-800"
                } hover:bg-blue-500 hover:text-white transition duration-300`}
                onClick={() => handleSidebarClick("keyskill")}
              >
                <div className="flex items-center">
                  <BuildIcon className="mr-2" />
                  <span>Key Skill</span>
                </div>
                <KeyboardDoubleArrowRightSharpIcon
                  className={`text-gray-400 transition-opacity duration-300 ${
                    activeComponent === "keyskill" ? "opacity-0" : "opacity-100"
                  }`}
                  style={{ pointerEvents: isArrowDisabled ? "none" : "auto" }}
                />
              </li>
            </ul>
          </sidebar>
        </div>
        <div>
          {activeComponent === "personal" && <PersonalInformation />}
          {activeComponent === "education" && <Education />}
          {activeComponent === "work" && <WorkExperience />}
          {activeComponent === "keyskill" && <Keyskills />}
        </div>
        <div className="w-full flex flex-wrap justify-center mt-8 mb-8">
          <div className="w-full lg:w-[55vw] lg:ml-[10vw] md:w-[70vw] md:ml-[15vw] sm:w-[100vw] justifty-center items-center">
            <Button
              style={{
                backgroundColor: "blue",
                color: "#fff",
                width: "10vw",
                marginLeft: "13vw",
              }}
              onClick={handleBack}
            >
              Back
            </Button>
            <Button
              style={{
                backgroundColor: "blue",
                color: "#fff",
                width: "10vw",
                marginLeft: "20vw",
              }}
              onClick={handleNext}
            >
              {activeComponent === "keyskill" ? (
                <>
                  Preview <KeyboardDoubleArrowRightSharpIcon />
                </>
              ) : (
                "Next"
              )}
            </Button>
          </div>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Please Submit The Details First !!
        </Alert>
      </Snackbar>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    contact: state.contactReducer,
    education: state.educationReducer,
    experience: state.experienceReducer,
    Keyskills: state.keyskillsReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Detailfilling);

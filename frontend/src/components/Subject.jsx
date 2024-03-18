import React from "react";
import Calendar from "./Calendar";
import Subjectlist from "./Subjectlist";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import SimpleFooter from "./SimpleFooter"

const Subject = ({ subjectName }) => {

  return (
    <>
    <Header/>
      <div className="flex justify-around items-center">
        <h2>{subjectName}</h2>
        <Calendar subject={subjectName} />
      </div>
      <SimpleFooter/>
    </>
  );
};

export default Subject;

import React from "react";
import Calendar from "./Calendar";
import Subjectlist from "./Subjectlist";
import { useNavigate } from "react-router-dom";

const Subject = ({ subjectName }) => {

  return (
    <>
      <div className="flex justify-around items-center">
        <h2>{subjectName}</h2>

        <Calendar />
      </div>
    </>
  );
};

export default Subject;

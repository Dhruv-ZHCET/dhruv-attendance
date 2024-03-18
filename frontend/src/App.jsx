import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Subjectlist from "./components/Subjectlist";
import Subject from "./components/Subject";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Subjectlist />} />
        <Route
          path="/Signal and System"
          element={<Subject subjectName="Signal and System" />}
        />
        <Route
          path="/Discrete Mathematics"
          element={<Subject subjectName="Discrete Mathematics" />}
        />
        <Route
          path="/Numerical Analysis and Probability"
          element={<Subject subjectName="Numerical Analysis and Probability" />}
        />
        <Route
          path="/Software Engineering"
          element={<Subject subjectName="Software Engineering" />}
        />
        <Route
          path="/Design and Analysis of Algorithm"
          element={<Subject subjectName="Design and Analysis of Algorithm" />}
        />
        <Route
          path="/Computer Architecture"
          element={<Subject subjectName="Computer Architecture" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

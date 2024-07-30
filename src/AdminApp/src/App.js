// console.log("datasubcourses =", data);
//clone-model edureka updated now 8.35 AM 21-07-2023
import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Footer} from "./ADMIN_SCREEN/components";
import {Calendar, Stacked, Pyramid, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, } from "./ADMIN_SCREEN/pages";
import "./App.css";

import { useStateContext } from "./ADMIN_SCREEN/contexts/ContextProvider";
import Reports from "./ADMIN_SCREEN/pages/Reports"
import CoursesAD from "./ADMIN_SCREEN/pages/CoursesAD";
import Trainers from "./ADMIN_SCREEN/pages/Trainers";
import Learners from "./ADMIN_SCREEN/pages/Learners";
import CourseInformation from "./ADMIN_SCREEN/pages/CourseInformation";
import TrainersDetails from "./ADMIN_SCREEN/pages/TrainersDetails";
import StudentsInformation from "./ADMIN_SCREEN/pages/StudentsInformation";
import ThemesADMIN from "./ADMIN_SCREEN/components/ThemesADMIN";

const App1 = () => {
  const { setCurrentColor, setCurrentMode, currentMode } = useStateContext();
  const [subcourse, setSubcourse] = useState([]);
  const [trainers, setTrainers] = useState([]);
  const [learners, setLearners] = useState([]);
  const fetchLearners = async () => {
    try {
      const response = await fetch("/learners");
      const data = await response.json();
      // console.log("datalearners =", data);
      setLearners(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchLearners();
  }, []);

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  const fetchsubcourse = async () => {
    try {
      const response = await fetch("/Subcourse");
      const data = await response.json();
      // console.log("datasubcourses =", data);
      setSubcourse(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchsubcourse();
  }, []);

  const fetchTrainers = async () => {
    try {
      const response = await fetch("/trainers");
      const data = await response.json();
      // console.log("datatrainers =", data);
      setTrainers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTrainers();
  }, []);

  
  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
        <Routes>
          {/* dashboard  */}
          <Route
          path="/*"
            element={
              <>
                <ThemesADMIN />
                <Reports />
                <Footer />
              </>
            }
          />
         <Route
            path="/reports"
            element={
              <>
                <ThemesADMIN />
                <Reports />
                <Footer />
              </>
            }
          />
          {/* pages  */}
          <Route
            path="/courses"
            element={
              <>
                <ThemesADMIN />
                <CoursesAD />
                <Footer />
              </>
            }
          />
          <Route
            path="/trainers"
            element={
              <>
                <ThemesADMIN />
                <Trainers />
                <Footer />
              </>
            }
          />
          <Route
            path="/learners"
            element={
              <>
                <ThemesADMIN />
                <Learners />
                <Footer />
              </>
            }
          />
          <Route
            path="/courseinformation"
            element={
              <>
                <ThemesADMIN />
                <CourseInformation />
                <Footer />
              </>
            }
          />
          {subcourse.map((course) => (
            <Route
              key={course.subcourseid}
              path="/:subcoursename"
              element={
                <>
                  <ThemesADMIN />
                  <CourseInformation />
                  <Footer />
                </>
              }
            />
          ))}
          {trainers.map((course) => (
            <Route
              key={course.EmployeeID}
              path="/trainers/:EmployeeID"
              element={
                <>
                  <ThemesADMIN />
                  <TrainersDetails />
                  <Footer />
                </>
              }
            />
          ))}
          {learners.map((course) => (
            <Route
              key={course.LearnerID}
              path="/students-information/:LearnerID"
              element={
                <>
                  <ThemesADMIN />
                  <StudentsInformation />
                  <Footer />
                </>
              }
            />
          ))}

          {/* apps  */}
          <Route
            path="/kanban"
            element={
              <>
                <ThemesADMIN />
                <Kanban />
                <Footer />
              </>
            }
          />
          <Route
            path="/editor"
            element={
              <>
                <ThemesADMIN />
                <Editor />
                <Footer />
              </>
            }
          />
          <Route
            path="/calendar"
            element={
              <>
                <ThemesADMIN />
                <Calendar />
                <Footer />
              </>
            }
          />
          <Route
            path="/color-picker"
            element={
              <>
                <ThemesADMIN />
                <ColorPicker />
                <Footer />
              </>
            }
          />

          {/* charts  */}
          <Route
            path="/line"
            element={
              <>
                <ThemesADMIN />
                <Line />
                <Footer />
              </>
            }
          />
          <Route
            path="/area"
            element={
              <>
                <ThemesADMIN />
                <Area />
                <Footer />
              </>
            }
          />
          <Route
            path="/bar"
            element={
              <>
                <ThemesADMIN />
                <Bar />
                <Footer />
              </>
            }
          />
          <Route
            path="/pie"
            element={
              <>
                <ThemesADMIN />
                <Pie />
                <Footer />
              </>
            }
          />
          <Route
            path="/financial"
            element={
              <>
                <ThemesADMIN />
                <Financial />
                <Footer />
              </>
            }
          />
          <Route
            path="/color-mapping"
            element={
              <>
                <ThemesADMIN />
                <ColorMapping />
                <Footer />
              </>
            }
          />
          <Route
            path="/pyramid"
            element={
              <>
                <ThemesADMIN />
                <Pyramid />
                <Footer />
              </>
            }
          />
          <Route
            path="/stacked"
            element={
              <>
                <ThemesADMIN />
                <Stacked />
                <Footer />
              </>
            }
          />
        </Routes>
    </div>
  );
};

export default App1;

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomepageHeader from "./Homepage/HomepageHeader";
import HomepageNavbar from "./Homepage/HomepageNavbar";
import HomepageNavbar2 from "./Homepage/HomepageNavbar2";
import HomepageContent from "./Homepage/HomepageContent/HomepageContent";
import FooterUser from "./Footer/FooterUser";
import HomepagecontentInformation from "./Homepage/HomepagecontentInformation/HomepagecontentInformation";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import App1 from "./AdminApp/src/App";
import CoursesAD from "./AdminApp/src/ADMIN_SCREEN/pages/CoursesAD";
import { Footer, Pie, Stacked } from "./AdminApp/src/ADMIN_SCREEN/components";
import ThemesADMIN from "./AdminApp/src/ADMIN_SCREEN/components/ThemesADMIN";
import Trainers from "./AdminApp/src/ADMIN_SCREEN/pages/Trainers";
import Learners from "./AdminApp/src/ADMIN_SCREEN/pages/Learners";
import { Area, Bar, Calendar, ColorMapping, ColorPicker, Editor, Financial, Kanban, Line, Pyramid } from "./AdminApp/src/ADMIN_SCREEN/pages";
import StudentsInformation from "./AdminApp/src/ADMIN_SCREEN/pages/StudentsInformation";
import TrainersDetails from "./AdminApp/src/ADMIN_SCREEN/pages/TrainersDetails";
import CourseInformation from "./AdminApp/src/ADMIN_SCREEN/pages/CourseInformation";
import UserHomepage from "./UserApp/src/Admin/Body/NavBar/UserHomepage";
import UserNavbar from "./UserApp/src/Admin/Body/NavBar/UserNavbar";
import UserHomepagecontent from "./UserApp/src/Admin/Body/HomeBody/UserHomepagecontent";
import Myclassroom from "./UserApp/src/Admin/Body/Myclassroom/Myclassroom";
import MyclassContent from "./UserApp/src/Admin/Body/Myclassroom/MyclassContent/MyclassContent";
import GettingStarted from "./UserApp/src/Admin/Body/Myclassroom/GettingStarted/GettingStarted";

const App = () => {
  const [subcourse, setSubcourse] = useState([]);
  const [mainmenu, setMainmenu] = useState([]);
  const [sidemenu, setSidemenu] = useState([]);
  const [trainers, setTrainers] = useState([]);
  const [learners, setLearners] = useState([]);
  const [livecourses, setLivecourses] = useState([]);
  const [selfpacedcourses, setSelfpacedcourses] = useState([]);
  const [recommendedcourses, setRecommendedcourses] = useState([]);
  const [coursecontent, SetCourseContent] = useState([]);

  useEffect(() => {
    fetchlivecourses();
  }, []);
  const fetchlivecourses = async () => {
    try {
      const response = await fetch("/live-course");
      const data = await response.json();
      console.log("data = ", data);
      setLivecourses(data.recordset);
      console.log("dataRecordset = ", data.recordset);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchselfpacedcourses();
  }, []);
  const fetchselfpacedcourses = async () => {
    try {
      const response = await fetch("/selfpaced-course");
      const data1 = await response.json();
      console.log("data1 = ", data1);
      setSelfpacedcourses(data1.recordset);
      console.log("data1Recordset = ", data1.recordset);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchrecommendedcourses();
  }, []);
  const fetchrecommendedcourses = async () => {
    try {
      const response = await fetch("/recommended-course");
      const data2 = await response.json();
      console.log("data2 = ", data2);
      setRecommendedcourses(data2.recordset);
      console.log("data2Recordset = ", data2.recordset);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchcoursecontent();
  }, []);

  const fetchcoursecontent = async () => {
    try {
      const response = await fetch("/get-courseContent");
      const data = await response.json();
      console.log("data = ", data); // Log the data variable
      SetCourseContent(data.recordset);
      console.log("dataRecordset = ", data.recordset); // Log the data variable
    } catch (error) {
      console.log(error);
    }
  };


  const fetchsubcourse = async () => {
    try {
      const response = await fetch("/Subcourse");
      const data = await response.json();
      setSubcourse(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchsubcourse();
  }, []);

  const fetchmainmenu = async () => {
    try {
      const response = await fetch("/main-menu");
      const data3 = await response.json();
      setMainmenu(data3);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchmainmenu();
  }, []);

  const fetchsidemenu = async () => {
    try {
      const response = await fetch("/subcourseinfo");
      const data3 = await response.json();
      setSidemenu(data3);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchsidemenu();
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
    <div>
      <Router>
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <HomepageHeader />
                <HomepageNavbar />
                <HomepageNavbar2 />
                <HomepageContent />
                <FooterUser />
              </>
            }
          />

          {/* Main Menu Routes */}
          {mainmenu.map((course) => (
            <Route
              key={course.coursename}
              path={`/${course.category}`}
              element={
                <>
                  <HomepageHeader />
                  <HomepageNavbar />
                  <HomepageNavbar2 />
                  <HomepageContent />
                  <FooterUser />
                </>
              }
            />
          ))}

          {/* Sidemenu Routes */}
          {/* {Array.isArray(sidemenu) && sidemenu.map((course) => ( */}
          {sidemenu.map((course) => (
            <Route
              key={course.subcourseid}
              path={`/${course.subcourseid}`}
              element={
                <>
                  <HomepageHeader />
                  <HomepageNavbar />
                  <HomepagecontentInformation />
                  <FooterUser />
                </>
              }
            />
          ))}

          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Reports Route */}
          <Route path="/reports" element={<App1 />} />
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
{/*                    Enrolled customer app                                                       */}
{/*                    Enrolled customer app                                                       */}
{/*                    Enrolled customer app                                                       */}
{/*                    Enrolled customer app                                                       */}
            <Route
            path="/user_homepage"
            element={
              <>
                <HomepageHeader />
                <UserNavbar />
                <UserHomepagecontent />
              </>
            }
          />
          {/*                           user_homepage for main page                                                       */}
          {livecourses.map((course) => (
            <Route
              key={course.coursename}
              path={`/user_homepage/course/${course.coursename}`}
              element={
                <>
                <HomepageHeader />
                <UserNavbar />
                <UserHomepagecontent />
                </>
              }
            />
          ))}
          {selfpacedcourses.map((course) => (
            <Route
              key={course.coursename}
              path={`/user_homepage/course/${course.coursename}`}
              element={
                <>
                <HomepageHeader />
                <UserNavbar />
                <UserHomepagecontent />
                </>
              }
            />
          ))}
          {recommendedcourses.map((course) => (
            <Route
              key={course.coursename}
              path={`/user_homepage/course/${course.coursename}`}
              element={
                <>
                <HomepageHeader />
                <UserNavbar />
                <UserHomepagecontent />
                </>
              }
            />
          ))}
 {/*                          user_homepage/gettingdstarted for main page                                                            */}
 {livecourses.map((course) => (
            <Route
              key={course.coursename}
              path={`user_homepage/my-classroom/gettingstarted/${course.coursename}`}
              element={
                <>
                  <HomepageHeader />
                <UserNavbar />
                  <Myclassroom />
                  <MyclassContent />
                  <GettingStarted />
                </>
              }
            />
          ))}
          {selfpacedcourses.map((course) => (
            <Route
              key={course.coursename}
              path={`user_homepage/my-classroom/gettingstarted/${course.coursename}`}
              element={
                <>
                 <HomepageHeader />
                <UserNavbar />
                  <Myclassroom />
                  <MyclassContent />
                  <GettingStarted />
                </>
              }
            />
          ))}
          {recommendedcourses.map((course) => (
            <Route
              key={course.coursename}
              path={`user_homepage/my-classroom/gettingstarted/${course.coursename}`}
              element={
                <>
                  <HomepageHeader />
                <UserNavbar />
                  <Myclassroom />
                  <MyclassContent />
                  <GettingStarted />
                </>
              }
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
};

export default App;

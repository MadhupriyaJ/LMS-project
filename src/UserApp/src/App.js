import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";
import AdminHomepage from "./Admin/Body/NavBar/UserHomepage";
import Myclassroom from "./Admin/Body/Myclassroom/Myclassroom";
import AdminNavbar from "./Admin/Body/NavBar/UserNavbar";
import HomepageContent from "./Admin/Body/HomeBody/UserHomepagecontent";
import MyclassContent from "./Admin/Body/Myclassroom/MyclassContent/MyclassContent";
import GettingStarted from "./Admin/Body/Myclassroom/GettingStarted/GettingStarted";
import CourseContent from "./Admin/Body/Myclassroom/CourseContent/CourseContent";
import BrowsCategoriesNavBar from "./Admin/Body/BrowCategoryNav/BrowsCategoriesNavBar";
import Viewrecording from "./Admin/Body/Myclassroom/CourseContent/ViewRecording/Viewrecording";
import Livesession from "./Admin/Body/Myclassroom/Liveclass/Livesession";
import LiveShow from "./Admin/Body/Myclassroom/Liveclass/Liveshow";

const CourseComponent = () => {
  const { coursename } = useParams();
  const isAdminHomePage =
    window.location.pathname.startsWith("/admin_homepage");

  return (
    <>
      {isAdminHomePage ? <AdminHomepage /> : <HomepageContent />}
      <AdminNavbar />
      {/* Your shared content component here, e.g., HomepageContent */}
    </>
  );
};

const App = () => {
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

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/admin_homepage"
            element={
              <>
                <AdminHomepage />
                <AdminNavbar />
                <HomepageContent />
              </>
            }
          />
          {/*                           admin_homepage for main page                                                       */}
          {livecourses.map((course) => (
            <Route
              key={course.coursename}
              path={`/admin_homepage/course/${course.coursename}`}
              element={
                <>
                  <AdminHomepage />
                  <AdminNavbar />
                  <HomepageContent />
                </>
              }
            />
          ))}
          {selfpacedcourses.map((course) => (
            <Route
              key={course.coursename}
              path={`/admin_homepage/course/${course.coursename}`}
              element={
                <>
                  <AdminHomepage />
                  <AdminNavbar />
                  <HomepageContent />
                </>
              }
            />
          ))}
          {recommendedcourses.map((course) => (
            <Route
              key={course.coursename}
              path={`/admin_homepage/course/${course.coursename}`}
              element={
                <>
                  <AdminHomepage />
                  <AdminNavbar />
                  <HomepageContent />
                </>
              }
            />
          ))}
          {/*                          homepage for main page                                                            */}
          {livecourses.map((course) => (
            <Route
              key={course.coursename}
              path={`/homepage/course/${course.coursename}`}
              element={
                <>
                  <AdminHomepage />
                  <AdminNavbar />
                  <HomepageContent />
                </>
              }
            />
          ))}
          {selfpacedcourses.map((course) => (
            <Route
              key={course.coursename}
              path={`/homepage/course/${course.coursename}`}
              element={
                <>
                  <AdminHomepage />
                  <AdminNavbar />
                  <HomepageContent />
                </>
              }
            />
          ))}
          {recommendedcourses.map((course) => (
            <Route
              key={course.coursename}
              path={`/homepage/course/${course.coursename}`}
              element={
                <>
                  <AdminHomepage />
                  <AdminNavbar />
                  <HomepageContent />
                </>
              }
            />
          ))}
          {/*                          admin_homepage/gettingdstarted for main page                                                            */}
          {livecourses.map((course) => (
            <Route
              key={course.coursename}
              path={`admin_homepage/my-classroom/gettingstarted/${course.coursename}`}
              element={
                <>
                  <AdminHomepage />
                  <AdminNavbar />
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
              path={`admin_homepage/my-classroom/gettingstarted/${course.coursename}`}
              element={
                <>
                  <AdminHomepage />
                  <AdminNavbar />
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
              path={`admin_homepage/my-classroom/gettingstarted/${course.coursename}`}
              element={
                <>
                  <AdminHomepage />
                  <AdminNavbar />
                  <Myclassroom />
                  <MyclassContent />
                  <GettingStarted />
                </>
              }
            />
          ))}
          {/*                        homepage/gettingstarted for main page                                                            */}
          {livecourses.map((course) => (
            <Route
              key={course.coursename}
              path={`homepage/my-classroom/gettingstarted/${course.coursename}`}
              element={
                <>
                  <AdminHomepage />
                  <AdminNavbar />
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
              path={`homepage/my-classroom/gettingstarted/${course.coursename}`}
              element={
                <>
                  <AdminHomepage />
                  <AdminNavbar />
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
              path={`homepage/my-classroom/gettingstarted/${course.coursename}`}
              element={
                <>
                  <AdminHomepage />
                  <AdminNavbar />
                  <Myclassroom />
                  <MyclassContent />
                  <GettingStarted />
                </>
              }
            />
          ))}
          {/*                          admin_homepage/coursecontent for main page                                                            */}
          {livecourses.map((course) => (
            <Route
              key={course.coursename}
              path={`admin_homepage/my-classroom/coursecontent/page/:page/${course.coursename}`}
              element={
                <>
                  <AdminHomepage />
                  <AdminNavbar />
                  <Myclassroom />
                  <MyclassContent />
                  <CourseContent />
                </>
              }
            />
          ))}
          {selfpacedcourses.map((course) => (
            <Route
              key={course.coursename}
              path={`admin_homepage/my-classroom/coursecontent/page/:page/${course.coursename}`}
              element={
                <>
                  <AdminHomepage />
                  <AdminNavbar />
                  <Myclassroom />
                  <MyclassContent />
                  <CourseContent />
                </>
              }
            />
          ))}
          {recommendedcourses.map((course) => (
            <Route
              key={course.coursename}
              path={`admin_homepage/my-classroom/coursecontent/page/:page/${course.coursename}`}
              element={
                <>
                  <AdminHomepage />
                  <AdminNavbar />
                  <Myclassroom />
                  <MyclassContent />
                  <CourseContent />
                </>
              }
            />
          ))}
          {/*                        homepage/coursecontent for main page                                                            */}
          {livecourses.map((course) => (
            <Route
              key={course.coursename}
              path={`homepage/my-classroom/coursecontent/page/:page/${course.coursename}`}
              element={
                <>
                  <AdminHomepage />
                  <AdminNavbar />
                  <Myclassroom />
                  <MyclassContent />
                  <CourseContent />
                </>
              }
            />
          ))}
          {selfpacedcourses.map((course) => (
            <Route
              key={course.coursename}
              path={`homepage/my-classroom/coursecontent/page/:page/${course.coursename}`}
              element={
                <>
                  <AdminHomepage />
                  <AdminNavbar />
                  <Myclassroom />
                  <MyclassContent />
                  <CourseContent />
                </>
              }
            />
          ))}
          {recommendedcourses.map((course) => (
            <Route
              key={course.coursename}
              path={`homepage/my-classroom/coursecontent/page/:page/${course.coursename}`}
              element={
                <>
                  <AdminHomepage />
                  <AdminNavbar />
                  <Myclassroom />
                  <MyclassContent />
                  <CourseContent />
                </>
              }
            />
          ))}
          {/*                        admin_homepage/LiveSession                                                                            */}
          {livecourses.map((course) => (
            <Route
              key={course.coursename}
              path={`admin_homepage/my-classroom/LiveSession/${course.coursename}`}
              //{`${location.pathname.startsWith('/homepage') ? '/homepage' : '/admin_homepage'}/my-classroom/LiveSession/${coursename}`}
              element={
                <>
                  <AdminHomepage />
                  <AdminNavbar />
                  <Myclassroom />
                  <MyclassContent />
                  <Livesession />
                </>
              }
            />
          ))}
          {/*                        homepage/LiveSession                                                                            */}
          {livecourses.map((course) => (
            <Route
              key={course.coursename}
              path={`homepage/my-classroom/LiveSession/${course.coursename}`}
              //{`${location.pathname.startsWith('/homepage') ? '/homepage' : '/admin_homepage'}/my-classroom/LiveSession/${coursename}`}
              element={
                <>
                  <AdminHomepage />
                  <AdminNavbar />
                  <Myclassroom />
                  <MyclassContent />
                  <Livesession />
                </>
              }
            />
          ))}
          {/*                        admin_homepage/LiveSession/join                                                                            */}
          {/* {`${location.pathname.startsWith('/homepage') ? '/homepage' : '/admin_homepage'}/my-classroom/LiveSession/join/${coursename}`} */}

          {livecourses.map((course) => (
            <Route
              key={course.coursename}
              path={`admin_homepage/my-classroom/LiveSession/join/${course.coursename}`}
              element={
                <>
                  <AdminNavbar />
                  <LiveShow />
                </>
              }
            />
          ))}

          {/*                        homepage/LiveSession/join                                                                            */}
          {/* {`${location.pathname.startsWith('/homepage') ? '/homepage' : '/admin_homepage'}/my-classroom/LiveSession/join/${coursename}`} */}

          {livecourses.map((course) => (
            <Route
              key={course.coursename}
              path={`homepage/my-classroom/LiveSession/join/${course.coursename}`}
              element={
                <>
                  <AdminNavbar />
                  <LiveShow />
                </>
              }
            />
          ))}

          {/*  */}
          {/*                        admin_homepage/viewrecording for main page                                                            */}
          {/* {`${location.pathname.startsWith('/homepage') ? '/homepage' : '/admin_homepage'}/view-recording/page/${sliceValue}/${coursename}`} */}
          {livecourses.map((course) => (
            <Route
              key={course.coursename}
              path={`admin_homepage/view-recording/page/:page/${course.coursename}`}
              element={
                <>
                  <AdminNavbar />
                  <Viewrecording />
                </>
              }
            />
          ))}
          {selfpacedcourses.map((course) => (
            <Route
              key={course.coursename}
              path={`admin_homepage/view-recording/page/:page/${course.coursename}`}
              element={
                <>
                  <AdminNavbar />
                  <Viewrecording />
                </>
              }
            />
          ))}
          {recommendedcourses.map((course) => (
            <Route
              key={course.coursename}
              path={`admin_homepage/view-recording/page/:page/${course.coursename}`}
              element={
                <>
                  <AdminNavbar />
                  <Viewrecording />
                </>
              }
            />
          ))}

          {/*                        homepage/viewrecording for main page                                                            */}

          {livecourses.map((course) => (
            <Route
              key={course.coursename}
              path={`homepage/view-recording/page/:page/${course.coursename}`}
              element={
                <>
                  <AdminNavbar />
                  <Viewrecording />
                </>
              }
            />
          ))}
          {selfpacedcourses.map((course) => (
            <Route
              key={course.coursename}
              path={`homepage/view-recording/page/:page/${course.coursename}`}
              element={
                <>
                  <AdminNavbar />
                  <Viewrecording />
                </>
              }
            />
          ))}
          {recommendedcourses.map((course) => (
            <Route
              key={course.coursename}
              path={`homepage/view-recording/page/:page/${course.coursename}`}
              element={
                <>
                  <AdminNavbar />
                  <Viewrecording />
                </>
              }
            />
          ))}

          {/*                                                                                                                        */}
          <Route
            path="/my-classroom"
            element={
              <>
                <AdminHomepage />
                <AdminNavbar />
                <Myclassroom />
                <MyclassContent />
              </>
            }
          />
          <Route
            path="/my-classroom/gettingstarted/"
            element={
              <>
                <AdminHomepage />
                <AdminNavbar />
                <Myclassroom />
                <MyclassContent />
                <GettingStarted />
              </>
            }
          />

          <Route
            path="/my-classroom/coursecontent"
            element={
              <>
                <AdminHomepage />
                <AdminNavbar />
                <Myclassroom />
                <MyclassContent />
                <CourseContent />
              </>
            }
          />
          <Route
            path="/my-classroom/coursecontent/page/:page"
            element={
              <>
                <AdminHomepage />
                <AdminNavbar />
                <Myclassroom />
                <MyclassContent />
                <CourseContent />
              </>
            }
          />
          <Route
            path="/brows-categories"
            element={
              <>
                <AdminHomepage />
                <BrowsCategoriesNavBar />
              </>
            }
          />
          {/* user - pages */}
          <Route
            path="/homepage"
            element={
              <>
                <AdminHomepage />
                <AdminNavbar />
                <HomepageContent />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

// {livecourses.map((course) => (
//   <Route
//     path={`/my-classroom/coursecontent/${course.coursename}`}
//     element={
//       <>
//         <AdminHomepage />
//         <AdminNavbar />
//         <Myclassroom />
//         <MyclassContent/>
//         <CourseContent />
//       </>
//     }
//   />
//    ))}
//    {selfpacedcourses.map((course) => (
//   <Route
//     path={`/my-classroom/coursecontent/${course.coursename}`}
//     element={
//       <>
//         <AdminHomepage />
//         <AdminNavbar />
//         <Myclassroom />
//         <MyclassContent/>
//         <CourseContent />
//       </>
//     }
//   />
//    ))}
//    {recommendedcourses.map((course) => (
//   <Route
//     path={`/my-classroom/coursecontent/${course.coursename}`}
//     element={
//       <>
//         <AdminHomepage />
//         <AdminNavbar />
//         <Myclassroom />
//         <MyclassContent/>
//         <CourseContent />
//       </>
//     }
//   />
//    ))}

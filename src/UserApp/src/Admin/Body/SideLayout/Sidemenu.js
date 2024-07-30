import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";


const Sidemenu = () => {
  const [livecourses, setLivecourses] = useState([]);
  const [selfpacedcourses, setSelfpacedcourses] = useState([]);
  const [recommendedcourses, setRecommendedcourses] = useState([]);
  const [expanded, setExpanded] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const location = useLocation();

  useEffect(() => {
    fetchlivecourses();
    fetchselfpacedcourses();
    fetchrecommendedcourses();
  }, []);

  const fetchlivecourses = async () => {
    try {
      const response = await fetch("/live-course");
      const data = await response.json();
      setLivecourses(data.recordset);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchselfpacedcourses = async () => {
    try {
      const response = await fetch("/selfpaced-course");
      const data1 = await response.json();
      setSelfpacedcourses(data1.recordset);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchrecommendedcourses = async () => {
    try {
      const response = await fetch("/recommended-course");
      const data2 = await response.json();
      setRecommendedcourses(data2.recordset);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleCourseSelection = (courseName) => {
    setSelectedCourse(courseName);
    console.log("Selected Course:", courseName);
  };

  // --------------------------- Accordion Details -----------------------
  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  }));
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, .05)"
        : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
  }));
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  }));

  
  return (
    <div className="rounded-lg shadow-md mt-10 w-3/4 md:-ml-96 md:w-80">
          {/* Accordion Div */}
          <div className="">
            <Accordion>
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <Typography>
                  Live Courses
                </Typography>
              </AccordionSummary>
              {livecourses.map((course) => (
                <div
                  key={course.courseid}
                  className="hover:bg-slate-100 hover:text-blue-600"
                >
                  <AccordionDetails>
                    <Typography>
                      {" "}
                      <Link
                        to={`/user_homepage/course/${course.coursename}`}
                        onClick={() => handleCourseSelection(course.coursename)}
                      >
                        {course.coursename}
                      </Link>
                    </Typography>
                  </AccordionDetails>
                </div>
              ))}
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <Typography>Self Paced Courses</Typography>
              </AccordionSummary>
              {selfpacedcourses.map((course) => (
                <div
                  key={course.courseid}
                  className="hover:bg-slate-100 hover:text-blue-600"
                >
                  <AccordionDetails>
                    <Typography>
                      {" "}
                      <Link
                        to={`/user_homepage/course/${course.coursename}`}
                        onClick={() => handleCourseSelection(course.coursename)}
                      >
                        {course.coursename}
                      </Link>
                    </Typography>
                  </AccordionDetails>
                </div>
              ))}
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <Typography>Recommended Courses</Typography>
              </AccordionSummary>
              {recommendedcourses && recommendedcourses.length > 0 ? (
            recommendedcourses.map((course) => (
              <div
                key={course.courseid}
                className="hover:bg-slate-100 hover:text-blue-600"
              >
                <AccordionDetails>
                  <Typography>
                    <Link
                      to={`/user_homepage/course/${course.coursename}`}
                      onClick={() => handleCourseSelection(course.coursename)}
                    >
                      {course.coursename}
                    </Link>
                  </Typography>
                </AccordionDetails>
              </div>
            ))
          ) : (
            <AccordionDetails>
              <Typography>No recommended courses available.</Typography>
            </AccordionDetails>
          )}
        </Accordion>
      </div>
    </div>
  );
};

export default Sidemenu;
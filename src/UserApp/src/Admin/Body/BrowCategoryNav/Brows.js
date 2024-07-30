import React from "react";
import "./Brows.css";
import { useState } from "react";
// import { useRef } from "react";
import { MenuItem } from "@mui/material";
import MUIMegaNav from "./MUIMegaNav";

const Brows = () => {
  const [showCloudComputing, setShowCloudComputing] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);

  const handleToggleCloudComputing = () => {
    setShowCloudComputing(!showCloudComputing);
  };

  const handleToggleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };

  return (
    <div className="dropdown dropdown_category_list">
      <a
        href="#/"
        className="nav-link2"
        data-toggle="dropdown"
        onMouseEnter={handleToggleCloudComputing}
        onMouseLeave={handleToggleCloudComputing}
      >
        <span className="">
          Browse
          <br />
          Categories<b className="caret"></b>
        </span>

        {/* cloud computing */}
        {showCloudComputing && (
          <div
            className={`dropdown-menu ${showSubmenu ? "show" : ""}`}
            onMouseEnter={handleToggleSubmenu}
            onMouseLeave={handleToggleSubmenu}
          >
            <MenuItem>
              <a
                href="#/cloud-computing-certification-courses"
                className="nav-link"
                data-toggle=""
              >
               
                <MUIMegaNav/>






































                {/* cloud computing sub menu */}
                 {/* <span>Cloud Computing</span> */}
                {/* {showSubmenu && (
                  <div className="nested-menu cardelement1">
                    <MenuItem>
                      <a
                        href="#/cloud-architect-training"
                        className="ga_top_categories_course"
                        data-categoryname="Cloud Computing"
                      >
                        Cloud Architect Masters Program
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#/azure-cloud-engineer-certification-training"
                        className="ga_top_categories_course"
                        data-categoryname="Cloud Computing"
                      >
                        Microsoft Azure Cloud Engineer Masters Program
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#/salesforce-architect-certification-course"
                        className="ga_top_categories_course"
                        data-categoryname="Cloud Computing"
                      >
                        Salesforce CRM Masters Certification Program
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#/aws-cloud-certification-training"
                        className="ga_top_categories_course"
                        data-categoryname="Cloud Computing"
                      >
                        AWS Masters Program
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#/"
                        className="ga_top_categories_course"
                        data-categoryname="Cloud Computing"
                      >
                        Microsoft Azure Architect Certification Training Course
                        (AZ-305)
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#/microservices-architecture-training"
                        className="ga_top_categories_course"
                        data-categoryname="Cloud Computing"
                      >
                        Microservices Certification Training Course
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#/aws-developer-certification-training"
                        className="ga_top_categories_course"
                        data-categoryname="Cloud Computing"
                      >
                        AWS Developer Certification Training
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#/google-cloud-architect-certification-training"
                        className="ga_top_categories_course"
                        data-categoryname="Cloud Computing"
                      >
                        Google Cloud Platform (GCP) Certification Training
                      </a>
                    </MenuItem>
                  </div>
                )}*/}
              </a> 
            </MenuItem>

            {/* <MenuItem>
              <a
                href="/devops-certification-courses"
                className="nav-link"
                data-toggle=""
              >
                DevOps
              </a>
            </MenuItem>

            <MenuItem>
              <a
                href="/bi-and-visualization-certification-courses"
                className="nav-link"
                data-toggle=""
              >
                BI and Visualization
              </a>
            </MenuItem>

            <MenuItem>
              <a className="nav-link " href="/cyber-security-certification-courses">
                Cyber Security
              </a>
            </MenuItem>

            <MenuItem>
              <a className="nav-link " href="/data-science-certification-courses">
                Data Science
              </a>
            </MenuItem>

            <MenuItem>
              <a
                className="nav-link "
                href="/programming-and-frameworks-certification-courses"
              >
                Programming &amp; Frameworks
              </a>
            </MenuItem>

            <MenuItem>
              <a href="/project-management-and-methodologies-certification-courses">
                Project Management and Methodologies
              </a>
            </MenuItem>

            <MenuItem>
              <a href="/highered">HigherEd</a>
            </MenuItem>

            <MenuItem>
              <a href="/software-testing-certification-courses">
                Software Testing
              </a>
            </MenuItem>

            <MenuItem>
              <a href="/big-data-and-analytics">Big Data</a>
            </MenuItem>

            <MenuItem>
              <a href="/artificial-intelligence-certification-courses">
                Artificial Intelligence
              </a>
            </MenuItem>

            <MenuItem>
              <a href="/frontend-development-certification-courses">
                Frontend Development
              </a>
            </MenuItem>

            <MenuItem>
              <a href="/databases-certification-courses">Databases</a>
            </MenuItem>

            <MenuItem>
              <a href="/robotic-process-automation-certification-courses">
                Robotic Process Automation
              </a>
            </MenuItem>

            <MenuItem>
              <a href="/data-warehousing-and-etl-certification-courses">
                Data Warehousing and ETL
              </a>
            </MenuItem>

            <MenuItem>
              <a href="/digital-marketing-certification-courses">
                Digital Marketing
              </a>
            </MenuItem>

            <MenuItem>
              <a href="/operating-systems-certification-courses">
                Operating Systems
              </a>
            </MenuItem>

            <MenuItem>
              <a href="/mobile-development-certification-courses">
                Mobile Development
              </a>
            </MenuItem>

            <MenuItem>
              <a href="/architecture-and-design-patterns-certification-courses">
                Architecture &amp; Design Patterns
              </a>
            </MenuItem>

            <MenuItem>
              <a href="/blockchain-certification-courses">Blockchain</a>
            </MenuItem>
          */}
          </div>
        )}
      </a>
    </div>
  );
};

export default Brows;

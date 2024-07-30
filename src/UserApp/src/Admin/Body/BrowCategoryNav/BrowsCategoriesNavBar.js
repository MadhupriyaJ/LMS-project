import React from "react";
import "./BrowsCategoriesNavBar.css";
import Menu from "@mui/material/Menu";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import MenuItem from "@mui/material/MenuItem";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import Modal from "@mui/material/Modal";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import { useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Brows from "./Brows";
// import './BrowsNavbar.json';


function BrowsCategoriesNavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);
  const handleFileChange = (event) => {
    const files = event.target.files;
    // Handle the selected files here
    setUploading(true);
    // Simulate upload delay
    setTimeout(() => {
      // Handle the selected files here
      setUploading(false);
    }, 2000);
  };
  const handleAddIconClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuItemClick = () => {
    fileInputRef.current.click(); // Programmatically trigger file selection
    setAnchorEl(null);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div>
    <nav
      class="navbar navbar-default nav_category"
      style={{ overflow: "visible" }}
    >
     
      {/* <Brows/> */}
      <div class="navbar-collapse " id="navbarNavDropdown">
       
        {/* <div className="navlist"> */}
        <span>  <Brows/></span>
     
        <ul class="navbar-nav" id="nav">
        
          <li class="nav-item1  ">
            <a class="nav-link " href="/cloudcomputing">
              Cloud Computing
            </a>
          </li>

          <li class="nav-item2  ">
            <a class="nav-link " href="/DevOps">
              DevOps
            </a>
          </li>
          <li class="nav-item3  ">
            <a
              class="nav-link "
              href="/BigData"
            >
              BigData
            </a>
          </li>
          <li class="nav-item3  ">
            <a
              class="nav-link "
              href="/BIandVisualization"
            >
              BI and Visualization
            </a>
          </li>

          <li class="nav-item4  ">
            <a class="nav-link " href="/CyberSecurity">
              Cyber Security
            </a>
          </li>

          <li class="nav-item5  ">
            <a class="nav-link " href="/DataScience">
              Data Science
            </a>
          </li>

          <li class="nav-item6  ">
            <a
              class="nav-link "
              href="/ProgrammingFrameworks"
            >
              Programming &amp; Frameworks
            </a>
          </li>

          <li class="nav-item7  ">
            <a
              class="nav-link "
              href="/ProjectManagement"
            >
              Project Management and Methodologies
            </a>
          </li>
          <li class="nav-item9  ">
            <a
              class="nav-link "
              href="/SoftwareTesting"
            >
              Software Testing
            </a>
          </li>
          <li class="nav-item10  ">
            <a
              class="nav-link "
              href="/ArtificialIntelligence"
            >
           AI
            </a>
          </li>

        <li class="nav-item11 dropdown">

          <a
            class="nav-link dropdown-toggl"
            href="#/"
            aria-label="hamburger icon"
            id="navbarDropdownMenu"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <Box sx={{ "& > :not(style)": { m: -5 } }}>
              <MenuIcon onClick={handleAddIconClick}></MenuIcon>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                keepMounted
              >

                {/*  */}
                <MenuItem>
                    <a
                      href="/ProjectManagement"
                    >
                      Project Management and Methodologies
                    </a>
                    </MenuItem>
                    <MenuItem>
                    <a href="/highered">
                      HigherEd
                    </a>
                    </MenuItem>

                    <MenuItem>
                    <a
                      href="/SoftwareTesting"
                    >
                      Software Testing
                    </a>
                    </MenuItem>

                    <MenuItem>
                    <a
                      
                      href="/BigData"
                    >
                      Big Data
                    </a>
                    </MenuItem>
                    <MenuItem>
                    <a
                      
                      href="/ArtificialIntelligence"
                    >
                      Artificial Intelligence
                    </a>
                    </MenuItem>
                    <MenuItem>
                    <a
                      
                      href="/FrontEnd"
                    >
                      Frontend Development
                    </a>
                    </MenuItem>
                    <MenuItem>
                    <a
                      
                      href="/Database"
                    >
                      Databases
                    </a>
                    </MenuItem>
                    <MenuItem>
                    <a
                      
                      href="/Robotics"
                    >
                      Robotic Process Automation
                    </a>
                    </MenuItem>
                    <MenuItem>
                    <a
                      
                      href="/Datawarehouse"
                    >
                      Data Warehousing and ETL
                    </a>
                    </MenuItem>
                    <MenuItem>
                    <a
                      
                      href="/DigitalMarketting"
                    >
                      Digital Marketing
                    </a>
                    </MenuItem>
                    <MenuItem>
                    <a
                      
                      href="/OS"
                    >
                      Operating Systems
                    </a>
                    </MenuItem>
                    <MenuItem>
                    <a
                      
                      href="/MobileDevelopment"
                    >
                      Mobile Development
                    </a>
                    </MenuItem>
                    <MenuItem>
                    <a
                      
                      href="/ArchitectureDesign"
                    >
                      Architecture &amp; Design Patterns
                    </a>
                    </MenuItem>
                    <MenuItem>
                    <a
                      
                      href="/Blockchain"
                    >
                      Blockchain
                    </a>
                </MenuItem>
              </Menu>
            </Box>
          </a>
          </li>

        </ul>
        
      </div>
    </nav>
    
    </div>
  );
}

export default BrowsCategoriesNavBar;
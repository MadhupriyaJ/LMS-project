import React from "react";
import "./UserNavbar.css";
import { useLocation } from "react-router-dom";

const UserNavbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const encodedCoursename = pathname.split("/").pop();
  const coursename = decodeURIComponent(encodedCoursename);
  return (
    <div>
      <div className="bg">
        <div className="heading1">
          <span>
            <a className="home" href="/admin_homepage">
              Home
            </a>
          </span>
          <span>
            <a className="allCourses" href="https://www.edureka.co/all-courses">
            All Courses 
            </a>
          </span>
          <span className="allCourses">My Classroom</span>
          {pathname !== "/admin_homepage" && pathname !== "/homepage" ?  
        <span class="allCourses">
             {coursename}
          </span> : null}
        </div>
        <div className="heading2">
          <a className="forum_index" target="_blank" href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chat-right-text"
              viewBox="0 0 16 16"
            >
              <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
              <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
            </svg>
            <button className="heading2">Discussion Forum</button>
          </a>
          <a className="Support_index" target="_blank" href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-envelope"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
            </svg>
            <button className="heading2">Support</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;


// import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";

// const navStyle = {
//   width: "100%",
//   display: "flex",
//   justifyContent: "space-between",
//   backgroundColor: "#0D2B3E", // Background color
//   opacity: 0.85,
//   padding: "0.5rem",
// };

// const breadcrumbStyle = {
//   listStyle: "none",
//   display: "flex",
// };

// const breadcrumbLinkStyle = (isActive) => ({
//   fontSize: "0.875rem",
//   color: isActive ? "#3182CE" : "#D1D5DB",
//   transition: "color 150ms ease-in-out",
//   margin: "0",
// });

// const breadcrumbSeparatorStyle = {
//   margin: "0 0.25rem",
//   color: "#9CA3AF",
// };

// const buttonStyle = {
//   display: "flex",
//   justifyContent: "space-between",
//   margin: "0 0.5rem",
// };

// const AdminNavbar = () => {
//    // ------------------------------ Paths ------------------------------
//    const [mainmenu, setMainmenu] = useState([]);
//    useEffect(() => {
//      fetchMainMenu();
//    }, []);
//    const fetchMainMenu = async () => {
//      try {
//        const response = await fetch("/main-menu");
//        const data = await response.json();
//        setMainmenu(data);
//      } catch (error) {
//        console.log(error);
//      }
//    };
//    //------------------------------- Breadcrumbs ----------------------
//    const location = useLocation();
//    // Get the current path
//    const currentPath = location.pathname;
//    // Define the breadcrumb link texts based on the current page
//    const breadcrumbLinks = [
//      { path: "/CCC", text: "Home" },
//      { path: "/admin_homepage", text: "All Courses" },
//    ];
 
//   return (
//     <nav style={navStyle}>
//       <div>
//         <ol style={breadcrumbStyle}>
//           {breadcrumbLinks.map((link, index) => (
//             <React.Fragment key={index}>
//               <li>
//                 <Link
//                   to={link.path}
//                   style={breadcrumbLinkStyle(link.path === currentPath)}
//                 >
//                   {link.text}
//                 </Link>
//               </li>
//               {index !== breadcrumbLinks.length - 1 && (
//                 <li style={breadcrumbSeparatorStyle}>&gt;</li>
//               )}
//             </React.Fragment>
//           ))}
//         </ol>
//       </div>
//       <div style={buttonStyle}>
//         <a
//           style={buttonStyle}
//           rel="noopener noreferrer"
//           target="_blank"
//           href="/discussion_forum"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="16"
//             height="16"
//             fill="currentColor"
//             className="bi bi-chat-right-text"
//             viewBox="0 0 16 16"
//             style={{ marginRight: "0.5rem" }}
//           >
//             {/* Add the SVG path for the chat icon */}
//           </svg>
//           <button style={{ color: "#FFFFFF" }}>Discussion Forum</button>
//         </a>
//         <a
//           style={buttonStyle}
//           rel="noopener noreferrer"
//           target="_blank"
//           href="/support"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="16"
//             height="16"
//             fill="currentColor"
//             className="bi bi-envelope"
//             viewBox="0 0 16 16"
//             style={{ marginRight: "0.5rem" }}
//           >
//             {/* Add the SVG path for the envelope icon */}
//           </svg>
//           <button style={{ color: "#FFFFFF" }}>Support</button>
//         </a>
//       </div>
//     </nav>
//   );
// };

// export default AdminNavbar;

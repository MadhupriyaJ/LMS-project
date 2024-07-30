import React from "react";
import "./UserHomepage.css";
import SearchIcon from "@material-ui/icons/Search";
import { useLocation } from "react-router-dom";


const UserHomepage = () => {
  const location = useLocation();
  return (
    <div>
      <header className="header_edureka_hdv2_main_withoffer">
        <nav className="navbar-navbar-fixed-top">
          
          <div className="navbar-headerw">
            <a
              aria-label="logo"
              className="trackButton"
              data-button-name="Edureka"
              data-button-location="First fold navigation"
              data-button-type="Static"
              href="/brows-categories"
              target="_self"
            >
              <img
                style={{ minHeight: "10px" }}
                className="logo"
                src="https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1686587323/img/Edureka_V_W_logo.webp"
                alt="logo"

              />
            </a>
          </div>
          <div className="search_header">
            <input
              className="open_search"
              aria-label="Enter Course, Category or keyword"
              type="text"
              placeholder="Enter Course, Category or keyword"
            />
            <SearchIcon className="header__searchIcon" />
            
            <div className="Mycourses">
              <a className = "atagadmin"  href={`${location.pathname.startsWith('/homepage') ? '/homepage' : '/admin_homepage'}`} >
                My Courses
              </a>
            </div>
         
          </div>
          
          <div className="pull_right_after_login_menu">
            <ul className="nav_navbar_nav_home_login_w_auto">
              <li
                className="walleticonheader_hidden_sm_hidden_xs"
                style={{ display: "none" }}
              >
                <a href="https://learning.edureka.co/my-profile/referral">
                  <i className="icon-edureka-refer-icon"></i>
                  <span className="referamt-usable-referal"></span>
                </a>
                <div className="refer-edu-cash-expiring-points-message-refer-hide">
                  <div className="loader-refer">
                    <img
                      src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs"
                      data-src="https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1686587323/img/refer-anim.gif"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li className="refer-text-link-hidden-sm-hidden-xs">
                <a
                  clasName="trackButton"
                  data-button-name="Refer"
                  data-button-location="First fold navigation"
                  data-button-type="Static"
                  href="/refer"
                >
                  <span className="refertxt">Refer</span>
                </a>
              </li>{" "}
              <li className="hidden-sm-hidden-xs">
                <a
                  href="https://learning.edureka.co/mycourses"
                  className="dropdown-toggle-ga_header_info-giTrackElementHeader"
                  data-button-name="My Courses"
                  data-button-location="First fold navigation"
                  data-button-type="Static"
                  data-gacat="Header"
                  data-gaact="Courses - My Classroom"
                  data-gi-label-expanded="true"
                  data-gi-action="Courses-My Classroom"
                  data-gi-label="default"
                  data-gi-category="Header"
                >
                  My Courses
                </a>{" "}
              </li>
              <li className="Community_drop-hidden-sm-hidden-xs">
                <div className="dropdown-menu-dropdown">
                  <a
                    href="/"
                    className="dropdown-toggle-ga_ecom_info-trackButton"
                    id="dropdownMenu4"
                    data-button-name="Community"
                    data-button-location="First fold navigation"
                    data-button-type="Static"
                    data-toggle="dropdown"
                    aria-expanded="true"
                    data-gacat="Header"
                    data-gaact="Community"
                  >
                    {" "}
                    Community <i className="icon-down-arrow_ico"></i>{" "}
                  </a>
                  <ul
                    aria-labelledby="dropdownMenu4"
                    role="menu"
                    className="dropdown-menu-dropdown-menu-right"
                  >
                    <li
                      className="ga_ecom_info-trackButton"
                      target="_blank"
                      data-button-name="Community Forum"
                      data-button-location="First fold navigation"
                      data-button-type="Static"
                      data-gacat="Header"
                      data-gaact="Community - Forum"
                    >
                      <a
                        className="trackButton"
                        data-button-name="Forum"
                        data-button-location="First fold navigation"
                        data-button-type="Static"
                        href="/"
                        target="_blank"
                      >
                        Forum
                      </a>
                    </li>
                    <li
                      className="ga-blog-ga_ecom_info"
                      target="_blank"
                      data-button-name="Community Blog"
                      data-button-location="First fold navigation"
                      data-button-type="Static"
                      data-gacat="Header"
                      data-gaact="Community - Blog"
                    >
                      <a
                        className="giTrackElementHeader"
                        data-gi-label-expanded="true"
                        data-gi-action="Blog_v2"
                        data-gi-label="default"
                        data-gi-category="Header_v2"
                        data-button-name="Blog"
                        data-button-location="First fold navigation"
                        data-button-type="Static"
                        href="/blog/"
                        target="_blank"
                      >
                        Blog
                      </a>{" "}
                    </li>{" "}
                  </ul>
                </div>
              </li>
              <li className="dropdown-notifydrop">
                <a
                  href="/"
                  className="dropdown-toggle-note-pos-open-notifications-markasread-trackButton"
                  data-button-name="Notifications  click"
                  data-button-location="All fold Navigation"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="icon-fa-bell"></i>
                  <sup
                    className="notificationcount-webinar-count-notification-count"
                    style={{ display: "none" }}
                  >
                    0
                  </sup>
                </a>
                <ul
                  id="notificationsListWrapper"
                  className="dropdown-menu-notify-arrow-notify-menu-dropdown-menu-scrollbar-dropdown-menu-right-mCustomScrollbar_mCS_1_mCS-autoHide-mCS_no_scrollbar"
                  style={{ overflow: "visible" }}
                >
                  <div
                    id="mCSB_1"
                    className="mCustomScrollBox-mCS-minimal-dark-mCSB_vertical-mCSB_outside"
                    style={{ maxHeight: "57px" }}
                    tabindex="0"
                  ></div>
                  <div
                    id="mCSB_1_scrollbar_vertical"
                    className="mCSB_scrollTools-mCSB_1_scrollbar-mCS-minimal-dark-mCSB_scrollTools_vertical"
                    style={{ display: "none" }}
                  >
                    <div className="mCSB_draggerContainer">
                      <div
                        id="mCSB_1_dragger_vertical"
                        className="mCSB_dragger"
                        style={{
                          position: "absolute",
                          minHeight: "50px",
                          top: "0px",
                        }}
                        oncontextmenu="return false;"
                      >
                        <div
                          className="mCSB_dragger_bar"
                          style={{ lineHeight: "50px" }}
                        ></div>
                      </div>
                      <div className="mCSB_draggerRail"></div>
                    </div>
                  </div>
                </ul>
              </li>
              <div
                id="notificationsWrapper"
                className="hide"
                data-url="/api/1.0/notifications"
                data-view-url="/api/1.0/notifications/view"
              ></div>
              <div id="popupnotificationwrapper" className="hide"></div>
              <li className="dropdown userdrop  profile-pic-header">
                <a
                  href="/"
                  className="dropdown-toggle-trackButton"
                  data-button-name="Profile picture"
                  data-button-location="First fold navigation"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="webinar-profile-name">Shahul </span>
                  <span className="user_image">
                    <img
                      src="https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1686587323/img/defaultpp2.png"
                      className="img30"
                      alt=""
                    />{" "}
                  </span>
                </a>
                <ul className="dropdown-menu-user-menu-dropdown-menu-right">
                  <li>
                    <a href="/refer" className="hidden-lg-hidden-md">
                      Refer
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://learning.edureka.co/my-profile"
                      className="giTrackElementHeader"
                      data-button-name="My Profile"
                      data-button-location="First fold navigation"
                      data-button-type="Static"
                      data-gi-label-expanded="true"
                      data-gi-action="Profile"
                      data-gi-label="default"
                      data-gi-category="Header_V2"
                    >
                      My Profile
                    </a>{" "}
                  </li>
                  <li>
                    <a
                      href="https://learning.edureka.co/my-profile/orders"
                      className="giTrackElementHeader"
                      data-button-name="My Orders"
                      data-button-location="First fold navigation"
                      data-button-type="Static"
                      data-gi-label-expanded="true"
                      data-gi-action="Order"
                      data-gi-label="default"
                      data-gi-category="Header_V2"
                    >
                      My Orders
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      className="hidden-lg-hidden-md"
                      href="https://learning.edureka.co/mycourses"
                    >
                      My Classroom
                    </a>
                  </li>
                  <li>
                    <a
                      className="hidden-lg-hidden-md"
                      href="/all-courses"
                      target="_blank"
                    >
                      All Courses
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://learning.edureka.co/change-password"
                      className="trackButton"
                      data-button-name="change Password"
                      data-button-location="First fold navigation"
                      data-button-type="Static"
                    >
                      Change Password
                    </a>{" "}
                  </li>
                  <li>
                    <a
                      href="https://www.edureka.co/signout"
                      className="trackButton"
                      data-button-name="Logout"
                      data-button-location="First fold navigation"
                      data-button-type="Static"
                    >
                      Log Out
                    </a>{" "}
                  </li>
                </ul>
              </li>
            </ul>
          </div>{" "}
          {/* dropdowns */}
          <input
            type="hidden"
            name="existing_cust"
            id="existing_cust"
            value="1"
          />
          <input
            type="hidden"
            name="referpopupvialink"
            id="referpopupvialink"
            value="false"
          />
          <input type="hidden" value="2840142" id="ugaid" />
          <input type="hidden" value="shahul@hotmail.com" id="uemailid" />
          <input type="hidden" value="2023-06-14 15:28:06" id="current_date" />
        </nav>
      </header>
      
    </div>
  );
};

export default UserHomepage;

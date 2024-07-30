import React, { useEffect, useState } from "react";
import "./MainContent.css";
import { useLocation } from "react-router-dom";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";


const MainContent = ({ selectedCourse }) => {
  const location = useLocation();
  const { pathname } = location;
  const encodedCoursename = pathname.split("/").pop();
  const coursename = decodeURIComponent(encodedCoursename);
  const [courseNameState, setCourseNameState] = useState("");

  const handleButtonClick = () => {
    if (pathname !== "/user_homepage") {
      setCourseNameState(coursename);
    }
  };
  useEffect(() => {
    console.log("Course Name: ", courseNameState);
  }, [courseNameState]);
 
  return (
    <div className="main__content">
      <div className="card bg-white shadow-md cardelement02">
        <img
          className="imge"
          alt="Referral Illustration"
          src="https://d3ejdag3om7lbm.cloudfront.net/assets/img/referral-ilustration.png"
        />

        <div className="refermain col-lg-6 col-md-7 col-sm-8 col-xs-12 no-padding">
          <h4 className="refermaintxt">Join Edureka's Referral Program</h4>
          <span className="subhead hidden-xs">
            <span className="earntxt">
              EARN upto 3000 Edureka Cash everytime your friends enroll
            </span>
          </span>

          <form
            className="referwidginput ng-untouched ng-pristine ng-valid"
            novalidate=""
          >
            <div className="referinputcont">
              <tag-input
                className="ng-tns-c22-0 ng-untouched ng-pristine ng-valid"
                formcontrolname="items"
                placeholder="Paul@abc.com, xyz@gmail.com, ..."
                secondaryplaceholder="Paul@abc.com, xyz@gmail.com, ..."
                _nghost-c22=""
                tabindex=""
              >
                <div
                  _ngcontent-c22=""
                  className="ng-tns-c22-0 ng2-tag-input"
                  tabindex="-1"
                >
                  <div _ngcontent-c22="" className="ng2-tags-container">
                    <tag-input-form
                      _ngcontent-c22=""
                      className="ng-tns-c22-0"
                      _nghost-c24=""
                    >
                      <form
                        _ngcontent-c24=""
                        novalidate=""
                        className="ng-untouched ng-pristine ng-valid"
                      >
                        <input
                          _ngcontent-c24=""
                          autocomplete="off"
                          className="inputc"
                          minlength="1"
                          type="text"
                          tabindex=""
                          id=""
                          placeholder="Paul@abc.com"
                          aria-label="Paul@abc.com, xyz@gmail.com, ..."
                        />
                      </form>
                    </tag-input-form>
                  </div>
                </div>
              </tag-input>
              <button className="inputreferbtn" type="submit">
                INVITE
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-white shadow-md cardelement">
        <h4 className="text-base font-semibold flex items-center">
          <TextSnippetIcon />
          <span> Welcome back! Here’s wishing you a happy learning today!</span>
        </h4>
      </div>
      <div className="card bg-white shadow-md cardelements1">
        <div
          class="col-lg-12 col-md-12 col-sm-12 col-xs-12 box_mycourse"
          id="Course_1"
        >
          <div>
            <div class="ongoing col-lg-6 col-md-6 col-sm-6 col-xs-6 text-left batch_status">
              Ongoing
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-right batch_select pull-right"></div>
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 course-cour-box coursemybox1">
              <div class="coursetitle_cour">
              {pathname !== "/user_homepage" && pathname !== "/homepage" ? <h2>{coursename}</h2> : null}


                <div class="join_your_batch">
                  <div class="join_batch_detail">
                    <span class="arrow_container">
                      <i class="icon-Right-arrow"></i>
                    </span>
                    All live classes for this course have been completed
                  </div>
                </div>
              </div>
            </div>
          </div>
          <app-mycourse-course-feedback>
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 course_feedback_user">
              <p
                class="title"
                style={{
                  fontSize: "20px",
                  fontWeight: "initial",
                  color: "#192F60",
                }}
              >
                Hello, Rate us!
                <img
                  alt=""
                  src="../../../../assets/img/hand_icon.png"
                  style={{ marginLeft: "10px" }}
                />
              </p>

              {pathname !== "/user_homepage" && pathname !== "/homepage" ? (
                <p class="sub" style={{ color: "#42526E" }}>
                  How likely are you to recommend Edureka {coursename} to your
                  friends &amp; family?
                </p>
              ): null}
              <div class="rating_with_smily_container">
                <div class="rating_with_smily_box">
                  <div class="rating_smily_tooltip">Not at all likely</div>
                  <li class="rating_list_number li_rate_0">0</li>
                  <div class="smiley-rate-common smiley-rate-0 floatleft"></div>
                </div>
                <div class="rating_with_smily_box">
                  <div class="rating_smily_tooltip">Not at all likely</div>
                  <li class="rating_list_number li_rate_1">1</li>
                  <div class="smiley-rate-common smiley-rate-1 floatleft"></div>
                </div>
                <div class="rating_with_smily_box">
                  <div class="rating_smily_tooltip">Not at all likely</div>
                  <li class="rating_list_number li_rate_2">2</li>
                  <div class="smiley-rate-common smiley-rate-2 floatleft"></div>
                </div>
                <div class="rating_with_smily_box">
                  <div class="rating_smily_tooltip">Not at all likely</div>
                  <li class="rating_list_number li_rate_3">3</li>
                  <div class="smiley-rate-common smiley-rate-3 floatleft"></div>
                </div>
                <div class="rating_with_smily_box">
                  <div class="rating_smily_tooltip">Not at all likely</div>
                  <li class="rating_list_number li_rate_4">4</li>
                  <div class="smiley-rate-common smiley-rate-4 floatleft"></div>
                </div>
                <div class="rating_with_smily_box">
                  <div class="rating_smily_tooltip">Not at all likely</div>
                  <li class="rating_list_number li_rate_5">5</li>
                  <div class="smiley-rate-common smiley-rate-5 floatleft"></div>
                </div>
                <div class="rating_with_smily_box">
                  <div class="rating_smily_tooltip">Not at all likely</div>
                  <li class="rating_list_number li_rate_6">6</li>
                  <div class="smiley-rate-common smiley-rate-6 floatleft"></div>
                </div>
                <div class="rating_with_smily_box">
                  <div class="rating_smily_tooltip">Not at all likely</div>
                  <li class="rating_list_number li_rate_7">7</li>
                  <div class="smiley-rate-common smiley-rate-7 floatleft"></div>
                </div>
                <div class="rating_with_smily_box">
                  <div class="rating_smily_tooltip">Neutral</div>
                  <li class="rating_list_number li_rate_8">8</li>
                  <div class="smiley-rate-common smiley-rate-8 floatleft"></div>
                </div>
                <div class="rating_with_smily_box">
                  <div class="rating_smily_tooltip">Extremely Likely</div>
                  <li class="rating_list_number li_rate_9">9</li>
                  <div class="smiley-rate-common smiley-rate-9 floatleft"></div>
                </div>
                <div class="rating_with_smily_box">
                  <div class="rating_smily_tooltip">Extremely Likely</div>
                  <li class="rating_list_number li_rate_10">10</li>
                  <div class="smiley-rate-common smiley-rate-10 floatleft"></div>
                </div>
              </div>
            </div>
          </app-mycourse-course-feedback>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 click_to_new">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 course_progress mob_pro">
              <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12"></div>
              <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 course_percen"></div>
            </div>
            <div className="flex-row">
            {pathname !== "/user_homepage" && pathname !== "/homepage" ? 
            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6 text-left right-10 go_course">
              {/* href="/my-classroom" */}
              <a href= {`${location.pathname.startsWith('/homepage') ? '/homepage' : '/user_homepage'}/my-classroom/gettingstarted/${coursename}`} classname="atag">
          
               <button
                  className="gotocoursebutton"
                >
                  Go to Course
                </button>
              </a>
            </div>
            : null}
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 course_progress desk_pro">
              <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                <div class="courseprogressbar">
                  <progressbar type="success" _nghost-c12="">
                    <div
                      _ngcontent-c12=""
                      progress=""
                      max="100"
                      class="progress"
                      style={{ width: "auto" }}
                    >
                      <bar _ngcontent-c12="">
                        <div
                          aria-valuemin="0"
                          class="progress-bar progress-bar-success bg-success"
                          role="progressbar"
                          style={{ minWidth: "0px", width: "4%" }}
                          aria-valuenow="4"
                          aria-valuetext="4%"
                        ></div>
                      </bar>
                    </div>
                  </progressbar>
                </div>
              </div>
              <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 course_percen">
                <div class="pull-left">
                  {/* <span>4%</span> */}
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;

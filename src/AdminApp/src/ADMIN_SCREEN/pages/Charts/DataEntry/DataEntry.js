// import React, { useEffect } from "react";
// import { useState } from "react";
// import "./DataEntry.css";
// import { Autocomplete, Stack } from "@mui/material";
// import {
//   Box,
//   Button,
//   FormControlLabel,
//   MenuItem,
//   Radio,
//   RadioGroup,
//   Select,
//   TextField,
// } from "@mui/material";
// const DataEntry = () => {
//   // --------------------------------- MAIN MENU
//   const [mainmenuid, setMainmenuid] = useState('');
//   const [mainmenuname, setMainmenuname] = useState('');
//   const [category, setCategory] = useState('');
//   const [tagheading, setTagheading] = useState('');
//   const [tagtext, setTagtext] = useState('');
//   const [status, setStatus] = useState('');

//   const handleChangeStatus = (e) => {
//     setStatus(e.target.value);
//   };

//   const handleChangeCategory = (event) => {
//     setCategory(event.target.value);
//   };

//   // --------------------------------- SUBCOURSE
//   const [subcourseid, setSubcourseid] = useState('');
//   const [subcoursename, setSubcoursename] = useState('');
//   const [image, setImage] = useState('');
//   const [enrolledcustomers, setEnrolledcustomers] = useState('');
//   const [sessionmodecategory, setSessionmodecategory] = useState('');
//   const [classmodecategory, setClassmodecategory] = useState('');
//   const [batchstartdate, setBatchstartdate] = useState('');
//   const [syllabus, setSyllabus] = useState('');
//   const [coursecompletionrate, setCoursecompletionrate] = useState('');
//   const [Trainer, setTrainer] = useState("");
//   const [Courseamount, setCourseamount] = useState("");
//   const [Status, setstatus] = useState("");

//   const handleChangeSessionModeCategory = (e) => {
//     setSessionmodecategory(e.target.value);
//   };

//   const handleChangeClassModeCategory = (e) => {
//     setClassmodecategory(e.target.value);
//   };

//   // ---------------------------------- MASTER COURSE
//   const [mastercourseid, setMastercourseid] = useState('');
//   const [mastercoursename, setMastercoursename] = useState('');
//   const [Reviews, setReviews] = useState('');
//   const [numberofcourses, setNumberofcourses] = useState('');
//   const [coursehours, setCoursehours] = useState('');
//   const [numberoflearners, setNumberoflearners] = useState('');
//   const [minicoursesyllabus, setMinicoursesyllabus] = useState('');

//   // ------------------------------------ MAIN MENU ADD
//   const handleSubmit = (e) => {
//     console.log('Handling form submission...');

//     console.log('mainmenuid: ', mainmenuid);
//     console.log('mainmenuname: ', mainmenuname);
//     console.log('category: ', category);
//     console.log('tagheading: ', tagheading);
//     console.log('tagtext: ', tagtext);
//     console.log('status: ', status);

//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('mainmenuid', mainmenuid);
//     formData.append('mainmenuname', mainmenuname);
//     formData.append('category', category);
//     formData.append('tagheading', tagheading);
//     formData.append('tagtext', tagtext);
//     formData.append('status', status);
//     console.log('Form Data:', Object.fromEntries(formData)); // Display form data as an object
//     console.log('Sending POST request to server...');
//     fetch('/save-mainmenu', {
//       method: 'POST',
//       body: formData,
//     })
//       .then((response) => {
//         if (response.ok) {
//           console.log('Request successful');
//         } else {
//           throw new Error('Upload Failed');
//         }
//         return response.json(); // Parse the response as JSON
//       })
//       .then((data) => {
//         console.log('Response data:', data);
//       })
//       .catch((error) => {
//         console.log('Error:', error);
//       });
//   };

//   // -------------------------------- SUBCOURSE ADD
//   const handleSubmitbutton = (e) => {
//     console.log('Handling form submission...');
//     console.log('mainmenuid:', mainmenuid);
//     console.log('subcourseid :', subcourseid);
//     console.log('subcoursename:', subcoursename);
//     console.log('image:', image);
//     console.log('enrolledcustomers:', enrolledcustomers);
//     console.log('sessionmodecategory:', sessionmodecategory);
//     console.log('classmodecategory:', classmodecategory);
//     console.log('batchstartdate:', batchstartdate);
//     console.log('syllabus:', syllabus);
//     console.log('coursecompletionrate:', coursecompletionrate);
//     console.log("Trainer", Trainer);
//     console.log("Courseamount", Courseamount);
//     console.log("Status", Status);
//     console.log('category', category);
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('mainmenuid', mainmenuid);
//     formData.append('subcourseid', subcourseid);
//     formData.append('subcoursename', subcoursename);
//     formData.append('image', image);
//     formData.append('enrolledcustomers', enrolledcustomers);
//     formData.append('sessionmodecategory', sessionmodecategory);
//     formData.append('classmodecategory', classmodecategory);
//     formData.append('batchstartdate', batchstartdate);
//     formData.append('syllabus', syllabus);
//     formData.append('coursecompletionrate', coursecompletionrate);
//     formData.append("Trainer", Trainer);
//     formData.append("Courseamount", Courseamount);
//     formData.append("Status", Status);
//     formData.append('category', category);
//     console.log('Form Data:', Object.fromEntries(formData)); // Display form data as an object
//     console.log('Sending POST request to server...');
//     fetch('/save-subcourse', {
//       method: 'POST',
//       body: formData,
//     })
//       .then((response) => {
//         if (response.ok) {
//           console.log('Request successful');
//         } else {
//           throw new Error('Upload Failed');
//         }
//         return response.json(); // Parse the response as JSON
//       })
//       .then((data) => {
//         console.log('Response data:', data);
//       })
//       .catch((error) => {
//         console.log('Error:', error);
//       });
//   };
//   // -------------------------------- MASTER COURSE ADD
//   const handleSubmitmastercourse = (e) => {
//     e.preventDefault();
//     // Access the state values
//     console.log('Handling form submission...');
//     console.log('mainmenuid:', mainmenuid);
//     console.log('mastercourseid :', mastercourseid);
//     console.log(' mastercoursename:', mastercoursename);
//     console.log('Reviews:', Reviews);
//     console.log('numberofcourses:', numberofcourses);
//     console.log('coursehours:', coursehours);
//     console.log('numberoflearners:', numberoflearners);
//     console.log('minicoursesyllabus:', minicoursesyllabus);
//     console.log('category', category);
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('mainmenuid', mainmenuid);
//     formData.append('mastercourseid', mastercourseid);
//     formData.append('mastercoursename', mastercoursename);
//     formData.append('Reviews', Reviews);
//     formData.append('numberofcourses', numberofcourses);
//     formData.append('coursehours', coursehours);
//     formData.append('numberoflearners', numberoflearners);
//     formData.append('minicoursesyllabus', minicoursesyllabus);
//     formData.append('category', category);
//     console.log('Form Data:', Object.fromEntries(formData)); // Display form data as an object
//     console.log('Sending POST request to server...');
//     fetch('/save-mastercourse', {
//       method: 'POST',
//       body: formData,
//     })
//       .then((response) => {
//         if (response.ok) {
//           console.log('Request successful');
//         } else {
//           throw new Error('Upload Failed');
//         }
//         return response.json(); // Parse the response as JSON
//       })
//       .then((data) => {
//         console.log('Response data:', data);
//       })
//       .catch((error) => {
//         console.log('Error:', error);
//       });
//   };
//   return (
//     <div className="Dentry grid lg:grid-cols-3">
//       {/* MAIN MENU ADD */}
//       <div className="firstDiv bg-slate-200 rounded-lg">
//         <p className="heading1 text-2xl text-blue-900 mb-8">Main Menu</p>
//         <div className="temp">
//           <TextField
//             className="Textfield"
//             required
//             id="outlined-required"
//             label="mainmenuid"
//             placeholder="100001"
//             defaultValue=""
//             size="small"
//             onChange={(e) => setMainmenuid(e.target.value)}
//           />
//           <TextField
//             className="Textfield"
//             style={{ marginTop: '18px' }}
//             required
//             id="outlined-required"
//             label="Mainmenuname Required"
//             defaultValue=""
//             size="small"
//             onChange={(e) => setMainmenuname(e.target.value)}
//           />
//           <TextField
//             className="Textfield"
//             style={{ marginTop: '18px' }}
//             required
//             id="outlined-required"
//             label="Category Required"
//             defaultValue=""
//             size="small"
//             onChange={(e) => setCategory(e.target.value)}
//           />
//           <TextField
//             className="Textfield"
//             style={{ marginTop: '18px' }}
//             required
//             id="outlined-required"
//             label="Tag Heading Required"
//             defaultValue=""
//             size="small"
//             onChange={(e) => setTagheading(e.target.value)}
//           />
//           <TextField
//             className="Textfield"
//             style={{ marginTop: '18px' }}
//             required
//             id="outlined-required"
//             label="Tag Text Required"
//             multiline
//             rows={3}
//             defaultValue=""
//             size="small"
//             onChange={(e) => setTagtext(e.target.value)}
//           />
//           <div>
//             <RadioGroup
//               className="Textfield"
//               style={{ marginTop: '18px' }}
//               required
//               name="status"
//               value={status}
//               onChange={handleChangeStatus}
//             >
//               <div>
//                 <div>Status Required *</div>
//                 <div className="flex">
//                   <FormControlLabel value="Active" control={<Radio />} label="Active" />
//                   <FormControlLabel value="Non-Active" control={<Radio />} label="Non-Active" />
//                 </div>
//               </div>
//             </RadioGroup>
//           </div>
//           <div>
//             <Box sx={{ '& > :not(style)': { marginX: 'auto', width: '100%', marginTop: 3 } }}>
//               <Button
//                 className="SubmitButton"
//                 variant="contained"
//                 size="large"
//                 onClick={handleSubmit}
//               >
//                 Submit
//               </Button>
//             </Box>
//           </div>
//         </div>
//       </div>
//       {/* second subcourse insert card */}
//       <div className="firstDiv bg-white rounded-t-md">
//         <p className="heading1 text-2xl text-blue-950 mb-8">
//           Subcourse Data Entry
//         </p>
//         <div className="temp">
//           <Stack spacing={2} sx={{ width: 400, marginTop: "18px" }}>
//             <Autocomplete
//               id="mainmenuid"
//               mainmenuid
//               options={mainmenu.map((option) => option.mainmenuid)}
//               value={mainmenuid} 
//               onChange={(event, newValue) => setMainmenuid(newValue)} 
//               renderInput={(params) => (
//                 <TextField {...params} label="mainmenuid" />
//               )}
//             />
//           </Stack>
//           <TextField
//             className="Textfield"
//             style={{ marginTop: "18px" }}
//             required
//             id="outlined-required"
//             label="subcourseid Required"
//             defaultValue=""
//             size="small"
//             onChange={(e) => setSubcourseid(e.target.value)}
//           />
//           <TextField
//             className="Textfield"
//             style={{ marginTop: "18px" }}
//             required
//             id="outlined-required"
//             label="subcoursename Required"
//             defaultValue=""
//             size="small"
//             onChange={(e) => setSubcoursename(e.target.value)}
//           />
//           <TextField
//             className="Textfield"
//             style={{ marginTop: "18px" }}
//             required
//             id="outlined-required"
//             label="image Required"
//             defaultValue=""
//             size="small"
//             onChange={(e) => setImage(e.target.value)}
//           />
//           <TextField
//             className="Textfield"
//             style={{ marginTop: "18px" }}
//             required
//             id="outlined-required"
//             label="enrolledcustomers Required"
//             defaultValue=""
//             size="small"
//             onChange={(e) => setEnrolledcustomers(e.target.value)}
//           />
//           <div>
//             <RadioGroup
//               className="Textfield"
//               style={{ marginTop: "18px" }}
//               required
//               name="sessionmodecategory"
//               value={sessionmodecategory}
//               onChange={handleChangeSessionModeCategory}
//             >
//               <div>
//                 <div>Session Mode Required *</div>
//                 <div>
//                   <FormControlLabel
//                     value="Weekend/Weekday"
//                     control={<Radio />}
//                     label="Weekend/Weekday"
//                   />
//                   <FormControlLabel
//                     value="Weekend"
//                     control={<Radio />}
//                     label="Weekend"
//                   />
//                 </div>
//               </div>
//             </RadioGroup>
//           </div>
//           <div>
//             <RadioGroup
//               className="Textfield"
//               style={{ marginTop: "18px" }}
//               required
//               name="classmodecategory"
//               value={classmodecategory}
//               onChange={handleChangeClassModeCategory}
//             >
//               <div>
//                 <div>Class Mode Required *</div>
//                 <div>
//                   <FormControlLabel
//                     value="LiveClass"
//                     control={<Radio />}
//                     label="LiveClass"
//                   />
//                   <FormControlLabel
//                     value="LiveClass/Self-Paced Course"
//                     control={<Radio />}
//                     label="LiveClass/Self-Paced Course"
//                   />
//                 </div>
//               </div>
//             </RadioGroup>
//           </div>
//           <TextField
//             className="Textfield"
//             style={{ marginTop: "18px" }}
//             required
//             id="outlined-required"
//             label="batchstartdate Required"
//             defaultValue=""
//             size="small"
//             onChange={(e) => setBatchstartdate(e.target.value)}
//           />
//           <TextField
//             className="TextField"
//             style={{ marginTop: "18px" }}
//             required
//             multiline
//             rows={4}
//             id="outlined-required"
//             label="syllabus Required"
//             defaultValue=""
//             size="small"
//             onChange={(e) => setSyllabus(e.target.value)}
//           />
//           <TextField
//             className="Textfield"
//             style={{ marginTop: "18px" }}
//             required
//             id="outlined-required"
//             label="coursecompletionrate Required"
//             defaultValue=""
//             size="small"
//             onChange={(e) => setCoursecompletionrate(e.target.value)}
//           />
//           <Stack spacing={2} sx={{ width: 400, marginTop: "18px" }}>
//             <Autocomplete
//               id="category"
//               category
//               options={mainmenu.map((option) => option.category)}
//               value={category} // Set the value of the Autocomplete to the state variable
//               onChange={(event, newValue) => setCategory(newValue)}
//               renderInput={(params) => (
//                 <TextField {...params} label="category" />
//               )}
//             />
//           </Stack>

//           <TextField
//             className="Textfield"
//             style={{ marginTop: "18px" }}
//             required
//             id="outlined-required"
//             label="Trainer Required"
//             defaultValue=""
//             size="small"
//             onChange={(e) => setTrainer(e.target.value)}
//           />
//           <TextField
//             className="Textfield"
//             style={{ marginTop: "18px" }}
//             required
//             id="outlined-required"
//             label="courseamount Required"
//             defaultValue=""
//             size="small"
//             onChange={(e) => setCourseamount(e.target.value)}
//           />
//           <TextField
//             className="Textfield"
//             style={{ marginTop: "18px" }}
//             required
//             id="outlined-required"
//             label="Status Required"
//             defaultValue=""
//             size="small"
//             onChange={(e) => setstatus(e.target.value)}
//           />
//           <Box
//             sx={{
//               "& > :not(style)": {
//                 marginX: "auto",
//                 width: "100%",
//                 marginTop: 3,
//               },
//             }}
//           >
//             <Button
//               className="SubmitButton"
//               variant="contained"
//               size="large"
//               onClick={handleSubmitbutton}
//             >
//               Submit
//             </Button>
//           </Box>
//         </div>
//       </div>
//       {/* MASTER COURSE ADD */}
//       <div className="firstDiv bg-slate-200 rounded-md">
//         <p className="heading1 text-2xl text-blue-900 mb-8">Master Course</p>
//         <div className="temp">
//           <TextField
//             className="Textfield"
//             required
//             id="outlined-required"
//             label="mainmenuid Required"
//             defaultValue=""
//             placeholder="100001"
//             size="small"
//             onChange={(e) => setMainmenuid(e.target.value)}
//           />
//           <TextField
//             className="Textfield"
//             style={{ marginTop: '10px' }}
//             required
//             id="outlined-required"
//             label="mastercourseid Required"
//             defaultValue=""
//             placeholder="11001"
//             size="small"
//             onChange={(e) => setMastercourseid(e.target.value)}
//           />
//           <TextField
//             className="Textfield"
//             style={{ marginTop: '10px' }}
//             required
//             id="outlined-required"
//             label="mastercoursename Required"
//             defaultValue=""
//             placeholder=" Masters Program names"
//             size="small"
//             onChange={(e) => setMastercoursename(e.target.value)}
//           />
//           <TextField
//             className="Textfield"
//             style={{ marginTop: '10px' }}
//             required
//             id="outlined-required"
//             label="Reviews Required"
//             defaultValue=""
//             placeholder="4.4(12645)"
//             size="small"
//             onChange={(e) => setReviews(e.target.value)}
//           />
//           <TextField
//             className="Textfield"
//             style={{ marginTop: '10px' }}
//             required
//             id="outlined-required"
//             label="numberofcourses Required"
//             defaultValue=""
//             placeholder="6"
//             size="small"
//             onChange={(e) => setNumberofcourses(e.target.value)}
//           />
//           <TextField
//             className="Textfield"
//             style={{ marginTop: '10px' }}
//             required
//             id="outlined-required"
//             label="coursehours Required"
//             defaultValue=""
//             placeholder="250/200"
//             size="small"
//             onChange={(e) => setCoursehours(e.target.value)}
//           />
//           <TextField
//             className="Textfield"
//             style={{ marginTop: '10px' }}
//             required
//             id="outlined-required"
//             label="numberoflearners Required"
//             defaultValue=""
//             placeholder="31376"
//             size="small"
//             onChange={(e) => setNumberoflearners(e.target.value)}
//           />
//           <TextField
//             className="TextField"
//             style={{ marginTop: '10px' }}
//             required
//             multiline
//             rows={3}
//             id="outlined-required"
//             label="minicourse syllabus Required"
//             defaultValue=""
//             placeholder="syllabus"
//             size="small"
//             onChange={(e) => setMinicoursesyllabus(e.target.value)}
//           />
//           <FormControl fullWidth sx={{ marginTop: '18px' }}>
//             <InputLabel id="demo-simple-select-label">Category</InputLabel>
//             <Select
//               labelId="demo-simple-select-label"
//               id="demo-simple-select"
//               required
//               value={category}
//               label="Category"
//               defaultValue="CCC"
//               size="small"
//               onChange={handleChangeCategory}
//             >
//               <MenuItem value="CCC">CCC</MenuItem>
//               <MenuItem value="DOC">DOC</MenuItem>
//               <MenuItem value="BDC">BDC</MenuItem>
//               <MenuItem value="BVC">BVC</MenuItem>
//               <MenuItem value="CYS">CYS</MenuItem>
//               <MenuItem value="DSC">DSC</MenuItem>
//               <MenuItem value="P&F">P&F</MenuItem>
//               <MenuItem value="PMM">PMM</MenuItem>
//               <MenuItem value="STC">STC</MenuItem>
//               <MenuItem value="AIC">AIC</MenuItem>
//               <MenuItem value="FDC">FDC</MenuItem>
//               <MenuItem value="DBC">DBC</MenuItem>
//               <MenuItem value="RPA">RPA</MenuItem>
//               <MenuItem value="DWC">DWC</MenuItem>
//               <MenuItem value="DMC">DMC</MenuItem>
//               <MenuItem value="OSC">OSC</MenuItem>
//               <MenuItem value="MDC">MDC</MenuItem>
//               <MenuItem value="APC">APC</MenuItem>
//               <MenuItem value="BCC">BCC</MenuItem>
//             </Select>
//           </FormControl>
//           <Box sx={{
//             '& > :not(style)': {
//               marginX: 'auto',
//               width: '100%',
//               marginTop: 3,
//             },
//           }}
//           >
//             <Button
//               className="SubmitButton"
//               variant="contained"
//               size="large"
//               onClick={handleSubmitmastercourse}
//             >
//               Submit
//             </Button>
//           </Box>
//         </div>
//       </div>
//       <div>Hello</div>
//     </div>
//   );
// };
// export default DataEntry;


import React, { useEffect } from "react";
import { useState } from "react";
import "./DataEntry.css";
import { Autocomplete, Stack } from "@mui/material";
import {
  Box,
  Button,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";

const DataEntry = () => {
  //--------------------------------- MAIN MENU
  const [mainmenuid, setMainmenuid] = useState("");
  const [mainmenuname, setMainmenuname] = useState("");
  const [category, setCategory] = useState("");
  const [tagheading, setTagheading] = useState("");
  const [tagtext, setTagtext] = useState("");
  const [status, setStatus] = useState("");
  const[modified_by,setModified_by] = useState("");

  const handleChangeStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleChangemodified = (e) => {
    setModified_by(e.target.value);
  };
  //--------------------------------- SUBCOURSE
  const [subcourseid, setSubcourseid] = useState("");
  const [subcoursename, setSubcoursename] = useState("");
  const [image, setImage] = useState("");
  const [enrolledcustomers, setEnrolledcustomers] = useState("");
  const [sessionmodecategory, setSessionmodecategory] = useState("");
  const [classmodecategory, setClassmodecategory] = useState("");
  const [batchstartdate, setBatchstartdate] = useState("");
  const [syllabus, setSyllabus] = useState("");
  const [coursecompletionrate, setCoursecompletionrate] = useState("");
  const [Trainer, setTrainer] = useState("");
  const [Courseamount, setCourseamount] = useState("");
  const [Status, setstatus] = useState("");

  const handleChangeSessionModeCategory = (e) => {
    setSessionmodecategory(e.target.value);
  };

  const handleChangeClassModeCategory = (e) => {
    setClassmodecategory(e.target.value);
  };

  //---------------------------------- MASTER COURSE
  const [mastercourseid, setMastercourseid] = useState("");
  const [mastercoursename, setMastercoursename] = useState("");
  const [Reviews, setReviews] = useState("");
  const [numberofcourses, setNumberofcourses] = useState("");
  const [coursehours, setCoursehours] = useState("");
  const [numberoflearners, setNumberoflearners] = useState("");
  const [minicoursesyllabus, setMinicoursesyllabus] = useState("");
  //--------------------------------------------------SUBCOURSE INFORMATION
  const [videolink, setVideolink] = useState("");
  const [coursedescription, setCoursedescription] = useState("");
  const [googlereviews, setGooglereviews] = useState("");
  const [trustpilotreviews, setTrustpilotreviews] = useState("");
  const [Gtworeviews, setGtworeviews] = useState("");
  const [sitejabberreviews, setSitejabberreviews] = useState("");
  const [batchdays, setBatchdays] = useState("");
  const [batchTiming, setBatchTiming] = useState("");
  const [subcoursefees, setSubcoursefees] = useState("");
  const [subcoursediscount, setSubcoursediscount] = useState("");
  const [syllabusid, setSyllabusid] = useState("");
  const [syllabusheading, setSyllabusheading] = useState("");
  const [topics, setTopics] = useState("");
  const [handson, setHandson] = useState("");
  const [skillsyouwilllearn, setSkillsyouwilllearn] = useState("");
  const [shortheading, setShortheading] = useState("");
  const [nooftopics, setNooftopics] = useState("");
  const [subcourseemimonth, setSubcourseemimonth] = useState("");
  const [monthdate, setMonthdate] = useState("");
// --------------------------------------------------Mastercourse information
const [syllabusname,setSyllabusname] = useState("");
const [syllabustext,setSyllabustext] = useState("");
const [noofweeks,setNoofweeks] = useState("");
const [noofmodules,setNoofmodules] = useState("");
const [hours,setHours] = useState("");
const [skills,setSkills] = useState("");
const [syllabusVideolink,setSyllabusvideolink] = useState("");
const [coursefees,setCoursefees] = useState("");
const [coursediscount,setCoursediscount] = useState("");
const[courseemimonth,setCourseemimonth]=useState("");
  // ------------------------------------------------------------------------------
  const [mainmenu, setMainmenu] = useState([]);
  const [subcourse, setSubcourse] = useState([]);
  const [mastercourse,setMastercourse]= useState([]);

  useEffect(() => {
    fetchmainmenu();
  }, []);

  const fetchmainmenu = async () => {
    try {
      const response = await fetch("/main-menu");
      const data = await response.json();
      console.log("data =", data);
      setMainmenu(data);
      console.log("dataRecordset =", data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchsubcourse();
  }, []);

  const fetchsubcourse = async () => {
    try {
      const response = await fetch("/Subcourse");
      const data = await response.json();
      console.log("data =", data);
      setSubcourse(data);
      console.log("dataRecordset =", data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchmastercourse();
  }, []);

  const fetchmastercourse = async () => {
    try {
      const response = await fetch("/mastercourse");
      const data = await response.json();
      console.log("data =", data);
      setMastercourse(data);
      console.log("dataRecordset =", data);
    } catch (error) {
      console.log(error);
    }
  };
  //------------------------------------ MAIN MENU ADD
  const handleSubmit = (e) => {
    console.log("Handling form submission...");
    console.log("mainmenuid: ", mainmenuid);
    console.log("mainmenuname: ", mainmenuname);
    console.log("category: ", category);
    console.log("tagheading: ", tagheading);
    console.log("tagtext: ", tagtext);
    console.log("status: ", status);

    e.preventDefault();

  
    const formData = new FormData();
    formData.append("mainmenuid", mainmenuid || null);
    formData.append("mainmenuname", mainmenuname || null);
    formData.append("category", category);
    formData.append("tagheading", tagheading || null);
    formData.append("tagtext", tagtext || null);
    formData.append("status", status || null);
    console.log("Form Data:", Object.fromEntries(formData)); // Display form data as an object
    console.log("Sending POST request to server...");
    fetch("/save-mainmenu", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          console.log("Request successful");
        } else {
          throw new Error("Upload Failed");
        }
        return response.json(); // Parse the response as JSON
      })
      .then((data) => {
        console.log("Response data:", data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  //-------------------------------- SUBCOURSE ADD
  const handleSubmitbutton = (e) => {
    console.log("Handling form submission...");
    console.log("mainmenuid:", mainmenuid);
    console.log("subcourseid :", subcourseid);
    console.log("subcoursename:", subcoursename);
    console.log("image:", image);
    console.log("enrolledcustomers:", enrolledcustomers);
    console.log("sessionmodecategory:", sessionmodecategory);
    console.log("classmodecategory:", classmodecategory);
    console.log("batchstartdate:", batchstartdate);
    console.log("syllabus:", syllabus);
    console.log("coursecompletionrate:", coursecompletionrate);
    console.log("category", category);
    console.log("Trainer", Trainer);
    console.log("Courseamount", Courseamount);
    console.log("Status", Status);
    e.preventDefault();
    const formData = new FormData();
    formData.append("mainmenuid", mainmenuid);
    formData.append("subcourseid", subcourseid);
    formData.append("subcoursename", subcoursename);
    formData.append("image", image);
    formData.append("enrolledcustomers", enrolledcustomers);
    formData.append("sessionmodecategory", sessionmodecategory);
    formData.append("classmodecategory", classmodecategory);
    formData.append("batchstartdate", batchstartdate);
    formData.append("syllabus", syllabus);
    formData.append("coursecompletionrate", coursecompletionrate);
    formData.append("category", category);
    formData.append("Trainer", Trainer);
    formData.append("Courseamount", Courseamount);
    formData.append("Status", Status);
    console.log("Form Data:", Object.fromEntries(formData)); // Display form data as an object
    console.log("Sending POST request to server...");
    fetch("/save-subcourse", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          console.log("Request successful");
        } else {
          throw new Error("Upload Failed");
        }
        return response.json(); // Parse the response as JSON
      })
      .then((data) => {
        console.log("Response data:", data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };
  //-------------------------------- MASTER COURSE ADD
  const handleSubmitmastercourse = (e) => {
    e.preventDefault();
    // Access the state values
    console.log("Handling form submission...");
    console.log("mainmenuid:", mainmenuid);
    console.log("mastercourseid :", mastercourseid);
    console.log("mastercoursename:", mastercoursename);
    console.log("Reviews:", Reviews);
    console.log("numberofcourses:", numberofcourses);
    console.log("coursehours:", coursehours);
    console.log("numberoflearners:", numberoflearners);
    console.log("minicoursesyllabus:", minicoursesyllabus);
    console.log("category", category);
    e.preventDefault();
    const formData = new FormData();
    formData.append("mainmenuid", mainmenuid);
    formData.append("mastercourseid", mastercourseid);
    formData.append("mastercoursename", mastercoursename);
    formData.append("Reviews", Reviews);
    formData.append("numberofcourses", numberofcourses);
    formData.append("coursehours", coursehours);
    formData.append("numberoflearners", numberoflearners);
    formData.append("minicoursesyllabus", minicoursesyllabus);
    formData.append("category", category);
    console.log("Form Data:", Object.fromEntries(formData)); // Display form data as an object
    console.log("Sending POST request to server...");
    fetch("/save-mastercourse", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          console.log("Request successful");
        } else {
          throw new Error("Upload Failed");
        }
        return response.json(); // Parse the response as JSON
      })
      .then((data) => {
        console.log("Response data:", data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  //   -------------------------------------SUBCOURSE INFORMATION ADD
  const handleSubcourseinformation = (e) => {
    e.preventDefault();
    // Access the state values
    console.log("Handling form submission...");
    console.log("mainmenuid:", mainmenuid);
    console.log("subcourseid:", subcourseid);
    console.log("subcoursename", subcoursename);
    console.log("enrolledcustomers", enrolledcustomers);
    console.log("videolink:", videolink);
    console.log("coursedescription", coursedescription);
    console.log("batchstartdate", batchstartdate);
    console.log("monthdate", monthdate);
    console.log("googlereviews", googlereviews);
    console.log("trustpilotreviews", trustpilotreviews);
    console.log("Gtworeviews", Gtworeviews);
    console.log("sitejabberreviews", sitejabberreviews);
    console.log("batchdays", batchdays);
    console.log("batchTiming", batchTiming);
    console.log("subcoursefees", subcoursefees);
    console.log("subcoursediscount", subcoursediscount);
    console.log("subcourseemimonth", subcourseemimonth);
    console.log("syllabusid", syllabusid);
    console.log("syllabusheading", syllabusheading);
    console.log("topics", topics);
    console.log("handson", handson);
    console.log("skillsyouwilllearn", skillsyouwilllearn);
    console.log("shortheading", shortheading);
    console.log("nooftopics", nooftopics);
    console.log("category", category);
    e.preventDefault();
    const formData = new FormData();
    formData.append("mainmenuid", mainmenuid);
    formData.append("subcourseid", subcourseid);
    formData.append("subcoursename", subcoursename);
    formData.append("enrolledcustomers", enrolledcustomers);
    formData.append("videolink", videolink);
    formData.append("coursedescription", coursedescription);
    formData.append("batchstartdate", batchstartdate);
    formData.append("monthdate", monthdate);
    formData.append("googlereviews", googlereviews);
    formData.append("trustpilotreviews", trustpilotreviews);
    formData.append("Gtworeviews", Gtworeviews);
    formData.append("sitejabberreviews", sitejabberreviews);
    formData.append("batchdays", batchdays);
    formData.append("batchTiming", batchTiming);
    formData.append("subcoursefees", subcoursefees);
    formData.append("subcoursediscount", subcoursediscount);
    formData.append("subcourseemimonth", subcourseemimonth);
    formData.append("syllabusid", syllabusid);
    formData.append("syllabusheading", syllabusheading);
    formData.append("topics", topics);
    formData.append("handson", handson);
    formData.append("skillsyouwilllearn", skillsyouwilllearn);
    formData.append("shortheading", shortheading);
    formData.append("nooftopics", nooftopics);
    formData.append("category", category);
    console.log("Form Data:", Object.fromEntries(formData)); // Display form data as an object
    console.log("Sending POST request to server...");
    fetch("/savesubcourseinformation", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          console.log("Request successful");
        } else {
          throw new Error("Upload Failed");
        }
        return response.json(); // Parse the response as JSON
      })
      .then((data) => {
        console.log("Response data:", data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };
// master course information
const handleSubmitmastercourseInformation = (e) => {
  e.preventDefault();
  // Access the state values
  console.log("Handling form submission...");
  console.log("mainmenuid:", mainmenuid);
  console.log("mastercourseid :", mastercourseid);
  console.log("mastercoursename:", mastercoursename);
  console.log("tagtext",tagtext);
  console.log("videolink",videolink);
  console.log("syllabusid",syllabusid);
  console.log("classmodecategory",classmodecategory);
  console.log("syllabusname",syllabusname);
  console.log("syllabustext",syllabustext);
  console.log("noofweeks",noofweeks);
  console.log("noofmodules",noofmodules);
  console.log("hours",hours);
  console.log("skills",skills);
  console.log("syllabusVideolink",syllabusVideolink);
  console.log("coursefees",coursefees);
  console.log("coursediscount",coursediscount);
  console.log("courseemimonth",courseemimonth);
  console.log("status",status);
  console.log("category",category);
 
  e.preventDefault();
  const formData = new FormData();
  formData.append("mainmenuid", mainmenuid);
  formData.append("mastercourseid", mastercourseid);
  formData.append("mastercoursename", mastercoursename);
  formData.append("tagtext",tagtext);
  formData.append("videolink",videolink);
  formData.append("syllabusid",syllabusid);
  formData.append("classmodecategory",classmodecategory);
  formData.append("syllabusname",syllabusname);
  formData.append("syllabustext",syllabustext);
  formData.append("noofweeks",noofweeks);
  formData.append("noofmodules",noofmodules);
  formData.append("hours",hours);
  formData.append("skills",skills);
  formData.append("syllabusVideolink", syllabusVideolink);
  formData.append("coursefees", coursefees);
  formData.append("coursediscount", coursediscount);
  formData.append("courseemimonth", courseemimonth);
  formData.append("status",status);
  formData.append("category", category);
  console.log("Form Data:", Object.fromEntries(formData)); // Display form data as an object
  console.log("Sending POST request to server...");
  fetch("/save-mastercourseInformation", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        console.log("Request successful");
      } else {
        throw new Error("Upload Failed");
      }
      return response.json(); // Parse the response as JSON
    })
    .then((data) => {
      console.log("Response data:", data);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
};

  return (
    <div className="Dentry grid grid-cols-1 w-3/4 bg-slate-500">
      <div className="firstDiv rounded-b-lg bg-white ">
        <p className="text-2xl text-blue-950 mb-8">
          Main Menu Data Entry
        </p>
        <div className="temp">
          <TextField
            className="Textfield"
            style={{ marginTop: "18px" }}
            required
            id="outlined-required"
            label="Mainmenuname Required"
            // defaultValue=""
            size="small"
            onChange={(e) => setMainmenuname(e.target.value)}
          />
          <TextField
            className="Textfield"
            style={{ marginTop: "18px" }}
            required
            id="outlined-required"
            label="Category Required"
            // defaultValue=""
            size="small"
            onChange={(e) => setCategory(e.target.value)}
          />
          <TextField
            className="Textfield"
            style={{ marginTop: "18px" }}
            required
            id="outlined-required"
            label="Tag Heading Required"
            // defaultValue=""
            size="small"
            onChange={(e) => setTagheading(e.target.value)}
          />
          <TextField
            className="Textfield"
            style={{ marginTop: "18px" }}
            required
            id="outlined-required"
            label="Tag Text Required"
            multiline
            rows={3}
            // defaultValue=""
            size="small"
            onChange={(e) => setTagtext(e.target.value)}
          />
          <div>
            <RadioGroup
              className="Textfield"
              style={{ marginTop: "18px" }}
              required
              name="status"
              value={status}
              onChange={handleChangeStatus}
            >
              {" "}
              <div>
                <div>Status Required *</div>
                <div className="flex">
                  <FormControlLabel
                    value="Active"
                    control={<Radio />}
                    label="Active"
                  />
                  <FormControlLabel
                    value="Non-Active"
                    control={<Radio />}
                    label="InActive"
                  />
                </div>
              </div>
            </RadioGroup>
          </div>

          <div>
            <RadioGroup
              className="Textfield"
              style={{ marginTop: "18px" }}
              required
              name="MODIFIED_BY"
              value={modified_by}
               onChange={handleChangemodified}
            >
              {" "}
              <div>
                <div>Status Required *</div>
                <div className="flex">
                  <FormControlLabel
                    value="ADMIN"
                    control={<Radio />}
                    label="ADMIN"
                  />
                  <FormControlLabel
                    value="TEACHER"
                    control={<Radio />}
                    label="TEACHER"
                  />
                </div>
              </div>
            </RadioGroup>
          </div>
          <div>
            <Box
              sx={{
                "& > :not(style)": {
                  marginX: "auto",
                  width: "100%",
                  marginTop: 3,
                },
              }}
            >
              <Button
                className="SubmitButton"
                variant="contained"
                size="large"
                onClick={handleSubmit}
              >
                Add
              </Button>

              <Button
                className="SubmitButton"
                variant="contained"
                size="large"
                // onClick={handleSubmit}
              >
                Edit
              </Button>
              <Button
                className="SubmitButton"
                variant="contained"
                size="large"
                // onClick={handleSubmit}
              >
               Reset
              </Button>
            </Box>
          </div>
        </div>
      </div>
      {/* second subcourse insert card */}
      <div className="firstDiv  rounded-t-md bg-white ">
        <p className="text-2xl text-blue-950 mb-8 ">
          Subcourse Data Entry
        </p>
        <div className="temp">
          <Stack spacing={2} sx={{ width: 290, marginTop: "18px" }}>
            <Autocomplete
              id="mainmenuid"
              mainmenuid
              options={mainmenu.map((option) => option.mainmenuid)}
              value={mainmenuid} 
              onChange={(event, newValue) => setMainmenuid(newValue)} 
              renderInput={(params) => (
                <TextField {...params} label="mainmenuid" />
              )}
            />
          </Stack>
          <TextField
            className="Textfield"
            style={{ marginTop: "18px" }}
            required
            id="outlined-required"
            label="subcourseid Required"
            defaultValue=""
            size="small"
            onChange={(e) => setSubcourseid(e.target.value)}
          />
          <TextField
            className="Textfield"
            style={{ marginTop: "18px" }}
            required
            id="outlined-required"
            label="subcoursename Required"
            defaultValue=""
            size="small"
            onChange={(e) => setSubcoursename(e.target.value)}
          />
          <TextField
            className="Textfield"
            style={{ marginTop: "18px" }}
            required
            id="outlined-required"
            label="image Required"
            defaultValue=""
            size="small"
            onChange={(e) => setImage(e.target.value)}
          />
          <TextField
            className="Textfield"
            style={{ marginTop: "18px" }}
            required
            id="outlined-required"
            label="enrolledcustomers Required"
            defaultValue=""
            size="small"
            onChange={(e) => setEnrolledcustomers(e.target.value)}
          />
          <div>
            <RadioGroup
              className="Textfield"
              style={{ marginTop: "18px" }}
              required
              name="sessionmodecategory"
              value={sessionmodecategory}
              onChange={handleChangeSessionModeCategory}
            >
              <div>
                <div>Session Mode Required *</div>
                <div>
                  <FormControlLabel
                    value="Weekend/Weekday"
                    control={<Radio />}
                    label="Weekend/Weekday"
                  />
                  <FormControlLabel
                    value="Weekend"
                    control={<Radio />}
                    label="Weekend"
                  />
                </div>
              </div>
            </RadioGroup>
          </div>
          <div>
            <RadioGroup
              className="Textfield"
              style={{ marginTop: "18px" }}
              required
              name="classmodecategory"
              value={classmodecategory}
              onChange={handleChangeClassModeCategory}
            >
              <div>
                <div>Class Mode Required *</div>
                <div>
                  <FormControlLabel
                    value="LiveClass"
                    control={<Radio />}
                    label="LiveClass"
                  />
                  <FormControlLabel
                    value="LiveClass/Self-Paced Course"
                    control={<Radio />}
                    label="LiveClass/Self-Paced Course"
                  />
                </div>
              </div>
            </RadioGroup>
          </div>
          <TextField
            className="Textfield"
            style={{ marginTop: "18px" }}
            required
            id="outlined-required"
            label="batchstartdate Required"
            defaultValue=""
            size="small"
            onChange={(e) => setBatchstartdate(e.target.value)}
          />
          <TextField
            className="TextField"
            style={{ marginTop: "18px" }}
            required
            multiline
            rows={4}
            id="outlined-required"
            label="syllabus Required"
            defaultValue=""
            size="small"
            onChange={(e) => setSyllabus(e.target.value)}
          />
          <TextField
            className="Textfield"
            style={{ marginTop: "18px" }}
            required
            id="outlined-required"
            label="coursecompletionrate Required"
            defaultValue=""
            size="small"
            onChange={(e) => setCoursecompletionrate(e.target.value)}
          />
          <Stack spacing={2} sx={{ width: 290, marginTop: "18px" }}>
            <Autocomplete
              id="category"
              category
              options={mainmenu.map((option) => option.category)}
              value={category} // Set the value of the Autocomplete to the state variable
              onChange={(event, newValue) => setCategory(newValue)}
              renderInput={(params) => (
                <TextField {...params} label="category" />
              )}
            />
          </Stack>

          <TextField
            className="Textfield"
            style={{ marginTop: "18px" }}
            required
            id="outlined-required"
            label="Trainer Required"
            defaultValue=""
            size="small"
            onChange={(e) => setTrainer(e.target.value)}
          />
          <TextField
            className="Textfield"
            style={{ marginTop: "18px" }}
            required
            id="outlined-required"
            label="courseamount Required"
            defaultValue=""
            size="small"
            onChange={(e) => setCourseamount(e.target.value)}
          />
          <TextField
            className="Textfield"
            style={{ marginTop: "18px" }}
            required
            id="outlined-required"
            label="Status Required"
            defaultValue=""
            size="small"
            onChange={(e) => setstatus(e.target.value)}
          />
          <Box
            sx={{
              "& > :not(style)": {
                marginX: "auto",
                width: "100%",
                marginTop: 3,
              },
            }}
          >
            <Button
              className="SubmitButton"
              variant="contained"
              size="large"
              onClick={handleSubmitbutton}
            >
              Submit
            </Button>
          </Box>
        </div>
      </div>

      {/* master course data entry */}
      <div className="firstDiv  rounded-t-md bg-white ">
        <p className="text-2xl text-blue-950 mb-8">
          MasterCourse Data Entry
        </p>
        <div className="temp">
        <Stack spacing={2} sx={{ width: 290, marginTop: "18px" }}>
            <Autocomplete
              id="mainmenuid"
              mainmenuid
              options={mainmenu.map((option) => option.mainmenuid)}
              value={mainmenuid} 
              onChange={(event, newValue) => setMainmenuid(newValue)} 
              renderInput={(params) => (
                <TextField {...params} label="mainmenuid" />
              )}
            />
          </Stack>
          <TextField
            className="Textfield"
            style={{ marginTop: "10px" }}
            required
            id="outlined-required"
            label="mastercourseid Required"
            defaultValue=""
            placeholder="11001"
            size="small"
            onChange={(e) => setMastercourseid(e.target.value)}
          />
          <TextField
            className="Textfield"
            style={{ marginTop: "10px" }}
            required
            id="outlined-required"
            label="mastercoursename Required"
            defaultValue=""
            placeholder=" Masters Program names"
            size="small"
            onChange={(e) => setMastercoursename(e.target.value)}
          />
          <TextField
            className="Textfield"
            style={{ marginTop: "10px" }}
            required
            id="outlined-required"
            label="Reviews Required"
            defaultValue=""
            placeholder="4.4(12645)"
            size="small"
            onChange={(e) => setReviews(e.target.value)}
          />
          <TextField
            className="Textfield"
            style={{ marginTop: "10px" }}
            required
            id="outlined-required"
            label="numberofcourses Required"
            defaultValue=""
            placeholder="6"
            size="small"
            onChange={(e) => setNumberofcourses(e.target.value)}
          />
          <TextField
            className="Textfield"
            style={{ marginTop: "10px" }}
            required
            id="outlined-required"
            label="coursehours Required"
            defaultValue=""
            placeholder="250/200"
            size="small"
            onChange={(e) => setCoursehours(e.target.value)}
          />
          <TextField
            className="Textfield"
            style={{ marginTop: "10px" }}
            required
            id="outlined-required"
            label="numberoflearners Required"
            defaultValue=""
            placeholder="31376"
            size="small"
            onChange={(e) => setNumberoflearners(e.target.value)}
          />
          <TextField
            className="TextField"
            style={{ marginTop: "10px" }}
            required
            multiline
            rows={3}
            id="outlined-required"
            label="minicourse syllabus Required"
            defaultValue=""
            placeholder="syllabus"
            size="small"
            onChange={(e) => setMinicoursesyllabus(e.target.value)}
          />
         <Stack spacing={2} sx={{ width: 290, marginTop: "18px" }}>
            <Autocomplete
              id="category"
              category
              options={mainmenu.map((option) => option.category)}
              value={category} // Set the value of the Autocomplete to the state variable
              onChange={(event, newValue) => setCategory(newValue)}
              renderInput={(params) => (
                <TextField {...params} label="category" />
              )}
            />
          </Stack>
          <Box
            sx={{
              "& > :not(style)": {
                marginX: "auto",
                width: "100%",
                marginTop: 3,
              },
            }}
          >
            <Button
              className="SubmitButton"
              variant="contained"
              size="large"
              onClick={handleSubmitmastercourse}
            >
              Submit
            </Button>
          </Box>
        </div>
      </div>
       {/* Subcourse Information Data Entry */}
      <div>
        {" "}
        <div className="firstDiv bg-white rounded-t-md">
          <p className=" text-2xl text-blue-950 mb-8">
            Subcourse Information Data Entry
          </p>
          <div className="temp">
          <Stack spacing={2} sx={{ width: 290, marginTop: "18px" }}>
            <Autocomplete
              id="mainmenuid"
              mainmenuid
              options={mainmenu.map((option) => option.mainmenuid)}
              value={mainmenuid} 
              onChange={(event, newValue) => setMainmenuid(newValue)} 
              renderInput={(params) => (
                <TextField {...params} label="mainmenuid" />
              )}
            />
          </Stack>
            <Stack spacing={2} sx={{ width: 290, marginTop: "18px" }}>
              <Autocomplete
                id="subcourseid"
                subcourseid
                options={subcourse.map((option) => option.subcourseid)}
                value={subcourseid} // Set the value of the Autocomplete to the state variable
              onChange={(event, newValue) => setSubcourseid(newValue)}
                renderInput={(params) => (
                  <TextField {...params} label="subcourseid" />
                )}
              />
            </Stack>
            <Stack spacing={2} sx={{ width: 290, marginTop: "18px" }}>
              <Autocomplete
                id="subcourse Name"
                subcourse
                Name
                options={subcourse.map((option) => option.subcoursename)}
                value={subcoursename} // Set the value of the Autocomplete to the state variable
                onChange={(event, newValue) => setSubcoursename(newValue)}
                renderInput={(params) => (
                  <TextField {...params} label="subcourse Name" />
                )}
              />
            </Stack>

            <TextField
              className="Textfield"
              style={{ marginTop: "10px" }}
              required
              id="outlined-required"
              label="subcoursefees Required"
              defaultValue=""
              placeholder=""
              size="small"
              onChange={(e) => setSubcoursefees(e.target.value)}
            />
            <TextField
              className="Textfield"
              style={{ marginTop: "10px" }}
              required
              id="outlined-required"
              label="subcoursediscount Required"
              defaultValue=""
              placeholder=" subcoursediscount"
              size="small"
              onChange={(e) => setSubcoursediscount(e.target.value)}
            />

            <TextField
              className="Textfield"
              style={{ marginTop: "10px" }}
              required
              id="outlined-required"
              label="subcourseemimonth Required"
              defaultValue=""
              placeholder="subcourseemimonth"
              size="small"
              onChange={(e) => setSubcourseemimonth(e.target.value)}
            />

            <TextField
              className="Textfield"
              style={{ marginTop: "10px" }}
              required
              id="outlined-required"
              label="enrolledcustomers Required"
              defaultValue=""
              placeholder=" enrolledcustomers"
              size="small"
              onChange={(e) => setEnrolledcustomers(e.target.value)}
            />

            <TextField
              className="Textfield"
              style={{ marginTop: "10px" }}
              required
              id="outlined-required"
              label="videolink Required"
              defaultValue=""
              placeholder="videolink"
              size="small"
              onChange={(e) => setVideolink(e.target.value)}
            />
            <TextField
              className="Textfield"
              style={{ marginTop: "10px" }}
              required
              id="outlined-required"
              label="coursedescription Required"
              defaultValue=""
              placeholder=""
              size="small"
              onChange={(e) => setCoursedescription(e.target.value)}
            />
            <TextField
              className="Textfield"
              style={{ marginTop: "10px" }}
              required
              id="outlined-required"
              label="batchstartdate Required"
              defaultValue=""
              placeholder="DateTIME"
              size="small"
              onChange={(e) => setBatchstartdate(e.target.value)}
            />
            <TextField
              className="Textfield"
              style={{ marginTop: "10px" }}
              required
              id="outlined-required"
              label="monthdate Required"
              defaultValue=""
              placeholder="monthdate"
              size="small"
              onChange={(e) => setMonthdate(e.target.value)}
            />
            <TextField
              className="Textfield"
              style={{ marginTop: "10px" }}
              required
              id="outlined-required"
              label="batchdays Required"
              defaultValue=""
              placeholder="Days"
              size="small"
              onChange={(e) => setBatchdays(e.target.value)}
            />
            <TextField
              className="Textfield"
              style={{ marginTop: "10px" }}
              required
              id="outlined-required"
              label="batchTiming Required"
              defaultValue=""
              placeholder="batchTiming"
              size="small"
              onChange={(e) => setBatchTiming(e.target.value)}
            />

            <TextField
              className="Textfield"
              style={{ marginTop: "10px" }}
              required
              id="outlined-required"
              label="googlereviews Required"
              defaultValue=""
              placeholder="googlereviews"
              size="small"
              onChange={(e) => setGooglereviews(e.target.value)}
            />
            <TextField
              className="TextField"
              style={{ marginTop: "10px" }}
              required
              multiline
              rows={3}
              id="outlined-required"
              label="trustpilotreviews Required"
              defaultValue=""
              placeholder="trustpilotreviews"
              size="small"
              onChange={(e) => setTrustpilotreviews(e.target.value)}
            />
            <TextField
              className="Textfield"
              style={{ marginTop: "10px" }}
              required
              id="outlined-required"
              label="Gtworeviews Required"
              defaultValue=""
              placeholder="Gtworeviews"
              size="small"
              onChange={(e) => setGtworeviews(e.target.value)}
            />
            <TextField
              className="Textfield"
              style={{ marginTop: "10px" }}
              required
              id="outlined-required"
              label="sitejabberreviews Required"
              defaultValue=""
              placeholder="sitejabberreviews"
              size="small"
              onChange={(e) => setSitejabberreviews(e.target.value)}
            />
            <Stack spacing={2} sx={{ width: 290, marginTop: "18px" }}>
            <Autocomplete
              id="category"
              category
              options={mainmenu.map((option) => option.category)}
              value={category} // Set the value of the Autocomplete to the state variable
              onChange={(event, newValue) => setCategory(newValue)}
              renderInput={(params) => (
                <TextField {...params} label="category" />
              )}
            />
          </Stack>

            <TextField
              className="Textfield"
              style={{ marginTop: "10px" }}
              required
              id="outlined-required"
              label="syllabusid Required"
              defaultValue=""
              placeholder="syllabusid"
              size="small"
              onChange={(e) => setSyllabusid(e.target.value)}
            />
            <TextField
              className="Textfield"
              style={{ marginTop: "10px" }}
              required
              id="outlined-required"
              label=" syllabusheading Required"
              defaultValue=""
              placeholder=" syllabusheading"
              size="small"
              onChange={(e) => setSyllabusheading(e.target.value)}
            />
            <TextField
              className="Textfield"
              style={{ marginTop: "10px" }}
              required
              id="outlined-required"
              label=" topics Required"
              defaultValue=""
              placeholder="topics"
              size="small"
              onChange={(e) => setTopics(e.target.value)}
            />
            <TextField
              className="Textfield"
              style={{ marginTop: "10px" }}
              required
              id="outlined-required"
              label=" handson Required"
              defaultValue=""
              placeholder="handson"
              size="small"
              onChange={(e) => setHandson(e.target.value)}
            />

            <TextField
              className="Textfield"
              style={{ marginTop: "10px" }}
              required
              id="outlined-required"
              label=" skillsyouwilllearn Required"
              defaultValue=""
              placeholder="skillsyouwilllearn"
              size="small"
              onChange={(e) => setSkillsyouwilllearn(e.target.value)}
            />

            <TextField
              className="Textfield"
              style={{ marginTop: "10px" }}
              required
              id="outlined-required"
              label="shortheading Required"
              defaultValue=""
              placeholder="shortheading"
              size="small"
              onChange={(e) => setShortheading(e.target.value)}
            />
            <TextField
              className="Textfield"
              style={{ marginTop: "10px" }}
              required
              id="outlined-required"
              label="nooftopics Required"
              defaultValue=""
              placeholder="nooftopics"
              size="small"
              onChange={(e) => setNooftopics(e.target.value)}
            />
            <Box
              sx={{
                "& > :not(style)": {
                  marginX: "auto",
                  width: "100%",
                  marginTop: 3,
                },
              }}
            >
              <Button
                className="SubmitButton"
                variant="contained"
                size="large"
                onClick={handleSubcourseinformation}
              >
                Submit
              </Button>
            </Box>
          </div>
        </div>
      </div>

      {/* master course information */}
      <div>
        {" "}
        <div className="firstDiv bg-white  rounded-t-md">
          <p className=" text-2xl text-blue-950 mb-8">
            Mastercourse Information Data Entry
          </p>
          <div className="temp">
          <Stack spacing={2} sx={{ width: 290, marginTop: "18px" }}>
            <Autocomplete
              id="mainmenuid"
              mainmenuid
              options={mainmenu.map((option) => option.mainmenuid)}
              value={mainmenuid} 
              onChange={(event, newValue) => setMainmenuid(newValue)} 
              renderInput={(params) => (
                <TextField {...params} label="mainmenuid" />                                                               
              )}
            />
          </Stack>

             <Stack spacing={2} sx={{ width: 290, marginTop: "18px" }}>
            <Autocomplete
              id="mastercourseid"
              mastercourseid
              options={mastercourse.map((option) => option.mastercourseid)}
              value={mastercourseid}
              onChange={(event, newValue) => setMastercourseid(newValue)} 
              renderInput={(params) => (
                <TextField {...params} label="mastercourseid" />
              )}
            />
          </Stack>
          <Stack spacing={2} sx={{ width: 290, marginTop: "18px" }}>
            <Autocomplete
              id="mastercoursename"
              mastercoursename
              options={mastercourse.map((option) => option.mastercoursename)}
              value={mastercoursename}
              onChange={(event, newValue) => setMastercoursename(newValue)} 
              renderInput={(params) => (
                <TextField {...params} label="mastercoursename" />
              )}
            />
          </Stack>
            <TextField
              className="Textfield"
              style={{ marginTop: "10px" }}
              required
              id="outlined-required"
              label="tagtext Required"
              defaultValue=""
              placeholder="tagtext"
              size="small"
          onChange={(e) => setTagtext(e.target.value)}
            />
              <TextField
              className="Textfield"
              style={{ marginTop: "10px" }}
              required
              id="outlined-required"
              label="VIDEOLINK Required"
              defaultValue=""
              placeholder="VIDEOLINK"
              size="small"
             onChange={(e) => setVideolink(e.target.value)}
            />

<TextField
              className="Textfield"
              style={{ marginTop: "10px" }}
              required
              id="outlined-required"
              label="syllabusid Required"
              defaultValue=""
              placeholder="SYLLABUSID"
              size="small"
          onChange={(e) => setSyllabusid(e.target.value)}
            />



            <TextField
              className="Textfield"
              style={{ marginTop: "10px" }}
              required
              id="outlined-required"
              label="classmodecategory Required"
              defaultValue=""
              placeholder="classmodecategory"
              size="small"
             onChange={(e) => setClassmodecategory(e.target.value)}
            />
            <TextField
              className="Textfield"
              style={{ marginTop: "10px" }}
              required
              id="outlined-required"
              label="syllabusname Required"
              defaultValue=""
              placeholder="syllabusname"
              size="small"
          onChange={(e) => setSyllabusname(e.target.value)}
            />
            <TextField
              className="Textfield"
              style={{ marginTop: "10px" }}
              required
              id="outlined-required"
              label="syllabustext Required"
              defaultValue=""
              placeholder="syllabustext"
              size="small"
             onChange={(e) => setSyllabustext(e.target.value)}
            />
            <TextField
              className="Textfield"
              style={{ marginTop: "10px" }}
              required
              id="outlined-required"
              label="noofweeks Required"
              defaultValue=""
              placeholder="noofweeks"
              size="small"
            onChange={(e) => setNoofweeks(e.target.value)}
            />
            <TextField
              className="Textfield"
              style={{ marginTop: "10px" }}
              required
              id="outlined-required"
              label="noofmodules Required"
              defaultValue=""
              placeholder="noofmodules"
              size="small"
          onChange={(e) => setNoofmodules(e.target.value)}
            />
            <TextField
              className="Textfield"
              style={{ marginTop: "10px" }}
              required
              id="outlined-required"
              label="hours Required"
              defaultValue=""
              placeholder="hourse"
              size="small"
             onChange={(e) => setHours(e.target.value)}
            />
            <TextField
              className="Textfield"
              style={{ marginTop: "10px" }}
              required
              id="outlined-required"
              label="skills Required"
              defaultValue=""
              placeholder="skills"
              size="small"
             onChange={(e) => setSkills(e.target.value)}
            />
            <TextField
              className="Textfield"
              style={{ marginTop: "10px" }}
              required
              id="outlined-required"
              label="syllabus video link Required"
              defaultValue=""
              placeholder="syllabus videolink"
              size="small"
            onChange={(e) => setSyllabusvideolink(e.target.value)}
            />
             <TextField
              className="Textfield"
              style={{ marginTop: "10px" }}
              required
              id="outlined-required"
              label="coursefees Required"
              defaultValue=""
              placeholder="coursefees"
              size="small"
            onChange={(e) => setCoursefees(e.target.value)}
            />
            <TextField
              className="Textfield"
              style={{ marginTop: "10px" }}
              required
              id="outlined-required"
              label="coursediscount Required"
              defaultValue=""
              placeholder="discount "
              size="small"
           onChange={(e) => setCoursediscount(e.target.value)}
            />

            <TextField
              className="Textfield"
              style={{ marginTop: "10px" }}
              required
              id="outlined-required"
              label="courseemimonth Required"
              defaultValue=""
              placeholder="courseemimonth"
              size="small"
            onChange={(e) => setCourseemimonth(e.target.value)}
            />


            <TextField
              className="Textfield"
              style={{ marginTop: "10px" }}
              required
              id="outlined-required"
              label="status Required"
              defaultValue=""
              placeholder="status"
              size="small"
               onChange={(e) => setStatus(e.target.value)}
            />
            <Stack spacing={2} sx={{ width: 290, marginTop: "18px" }}>
            <Autocomplete
              id="category"
              category
              options={mainmenu.map((option) => option.category)}
              value={category} // Set the value of the Autocomplete to the state variable
              onChange={(event, newValue) => setCategory(newValue)}
              renderInput={(params) => (
                <TextField {...params} label="category" />
              )}
            />
          </Stack>
            <Box
              sx={{
                "& > :not(style)": {
                  marginX: "auto",
                  width: "100%",
                  marginTop: 3,
                },
              }}
            >
              <Button
                className="SubmitButton"
                variant="contained"
                size="large"
             onClick={handleSubmitmastercourseInformation}
              >
                Submit
              </Button>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DataEntry;



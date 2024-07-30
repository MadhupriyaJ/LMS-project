const dbOperation = require('./src/dbFiles/dbOperation');
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const PORT = process.env.PORT || 5000;
const multer = require('multer');
const app = express();

app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'public', 'Contents')); // Use a temporary directory for uploads
  },
  filename: (req, file, cb) => {
    // Preserve the original file name provided by the client
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.get('/', (req, res) => {
  res.send('Hello, this is the root URL!');
});


app.get('/Subcourse', async (req, res) => {
  try {
    const Subcourses = await dbOperation.GetSubcourses();
    res.json(Subcourses);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error for Subcourses' });
  }
});

app.get('/customerSubcourse', async (req, res) => {
  try {
    const Subcourses = await dbOperation.GetCustomerSubcourses();
    res.json(Subcourses);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error for Subcourses' });
  }
});

// ----------------------------------------------------------------------------
app.post('/register', async (req, res) => {
  const { email, passwordHash } = req.body;
  // console.log('Received email:', email); // Add this line to log the received email
  // console.log('Received password:', passwordHash); // Add this line to log the received password
  try {
    // Check if the email already exists in the database
    const existingUser = await dbOperation.getUserByEmail(email);

    if (existingUser) {
      // If the email already exists, send an error response
      return res.status(400).json({ error: 'Email already exists' });
    }

    // If the email doesn't exist, proceed with user registration
    await dbOperation.registerUser(email, passwordHash);
    res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to register user' });
  }
});

app.post('/login', async (req, res) => {
  const { email, passwordHash } = req.body;
  try {
    const isAuthenticated = await dbOperation.loginUser(email, passwordHash);
    if (isAuthenticated) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to login user' });
  }
});

app.get('/main-menu', async (req, res) => {
  try {
    const mainmenu = await dbOperation.getMainMenu();
    res.json(mainmenu.recordset);
    // console.log(mainmenu);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error for mainmenu' });
  }
});

app.get('/subcoursefees', async (req, res) => {
  try {
    const subcoursefees = await dbOperation.getSubCoursefees();
    res.json(subcoursefees.recordset);
    // console.log(subcoursefees);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error for selfpacedcourses' });
  }
});

app.get('/subcourseinfo', async (req, res) => {
  try {
    const subcourseinfo = await dbOperation.getSubCourseinfo();
    res.json(subcourseinfo.recordset);
    // console.log(subcourseinfo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error for selfpacedcourses' });
  }
});

app.get('/mastercourse', async (req, res) => {
  try {
    const mastercourse = await dbOperation.getMasterCourse();
    res.json(mastercourse.recordset);
    // console.log(mastercourse);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error for selfpacedcourses' });
  }
});

app.get('/Subcoursestable', async (req, res) => {
  try {
    const Subcourses = await dbOperation.GetSubcoursestable();
    res.json(Subcourses);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error for Subcourses' });
  }
});
app.get('/trainers', async (req, res) => {
  try {
    const Trainers = await dbOperation.GetTrainers();
    res.json(Trainers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error for Trainers' });
  }
});
app.get('/trainerstable', async (req, res) => {
  try {
    const Trainers = await dbOperation.GetTrainerstable();
    res.json(Trainers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error for Trainers' });
  }
});
app.get('/learners', async (req, res) => {
  try {
    const Learners = await dbOperation.GetLearners();
    res.json(Learners);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error for Learners' });
  }
});
app.post('/insertorupdatecourseschedule', async (req, res) => {
  console.log('Received POST request from client:', req.body);
  const {
    subcourseName,
    employeeID,
    session,
    totalLearners,
    classTimingsFrom,
    classTimingsTo,
    dateRangefrom,
    dateRangeto
  } = req.body;

  try {
    console.log("Received Data:", req.body);
    console.log("subcourseName:", subcourseName);
    console.log("employeeID:", employeeID);
    console.log("session:", session);
    console.log("totalLearners:", totalLearners);
    console.log('classTimingsFrom:', classTimingsFrom);
    console.log('classTimingsTo:', classTimingsTo);
    console.log('dateRangefrom:', dateRangefrom);
    console.log('dateRangeto:', dateRangeto);

    // Insert or update the course schedule in the database
    await dbOperation.Insertorupdatecourseschedule(
      subcourseName,
      employeeID,
      session,
      totalLearners,
      classTimingsFrom,
      classTimingsTo,
      dateRangefrom,
      dateRangeto
    );

    console.log("Course schedule saved successfully.");
    res.status(200).json({ message: 'Course schedule saved successfully.' });
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ error: 'Failed to save course schedule.' });
  }
});

app.post("/savesubcourseinformation", async (req, res) => {
  const { mainmenuid, subcourseid, subcoursename, enrolledcustomers, videolink, coursedescription, batchstartdate, monthdate, googlereviews, trustpilotreviews, Gtworeviews, sitejabberreviews, batchdays, batchTiming, subcoursefees, subcoursediscount, subcourseemimonth, syllabusid, syllabusheading, topics, handson, skillsyouwilllearn, shortheading, nooftopics, category } = req.body;
  try {
    console.log("Received Data:", req.body);
    // Log the individual values to the console
    console.log("mainmenuid:", mainmenuid);
    console.log("subcourseid:", subcourseid);
    console.log("subcoursename", subcoursename);
    console.log("enrolledcustomers", enrolledcustomers);
    console.log("videolink", videolink);
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
    await dbOperation.saveSubcourseinformation(
      mainmenuid, subcourseid, subcoursename, enrolledcustomers, videolink, coursedescription, batchstartdate, monthdate, googlereviews, trustpilotreviews, Gtworeviews, sitejabberreviews, batchdays, batchTiming, subcoursefees, subcoursediscount, subcourseemimonth, syllabusid, syllabusheading, topics, handson, skillsyouwilllearn, shortheading, nooftopics, category );
    res.status(200) 
       .json({ message: "Subcourseinformation saved successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to save Subcourseinformation" });
  }
});

app.post('/save-mainmenu', async (req, res) => {
  const { mainmenuid, mainmenuname, category, tagheading, tagtext, status } = req.body;
  try {
    console.log("Received Data:", req.body);
    console.log("mainmenuid:", mainmenuid);
    console.log("mainmenuname:", mainmenuname);
    console.log("category:", category);
    console.log("tagheading:", tagheading);
    console.log("tagtext:", tagtext);
    console.log("status:", status);
    await dbOperation.savemainmenucourse(mainmenuid, mainmenuname, category, tagheading, tagtext, status);
    res.status(200).json({ message: 'Maincourse saved successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to save mainmenu' });
  }
});

app.post('/save-subcourse',upload.none(), async (req, res) => {
  const { mainmenuid, subcourseid,
     subcoursename, image, enrolledcustomers,
      sessionmodecategory, classmodecategory,
       batchstartdate, syllabus,
        coursecompletionrate, category,
        Trainer, Courseamount, Status } = req.body;
  try {
    console.log("Received Data:", req.body);
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
    await dbOperation.savesubcourse( mainmenuid, subcourseid, subcoursename, image, enrolledcustomers, sessionmodecategory, classmodecategory, batchstartdate, syllabus, coursecompletionrate, category, Trainer, Courseamount, Status );
    res.status(200).json({ message: 'Subcourse saved successfully' });
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: 'Failed to save subcourse' });
  }
});

app.post("/save-mastercourse", async (req, res) => {
  const { mainmenuid, mastercourseid, mastercoursename, Reviews, numberofcourses, coursehours, numberoflearners, minicoursesyllabus, category } = req.body;
  try {
    console.log("Received Data:", req.body);
    console.log("mainmenuid:", mainmenuid);
    console.log("mastercourseid :", mastercourseid);
    console.log("mastercoursename:", mastercoursename);
    console.log("reviews:", Reviews);
    console.log(" numberofcourses:", numberofcourses);
    console.log("coursehours:", coursehours);
    console.log("numberoflearners:", numberoflearners);
    console.log("minicoursesyllabus:", minicoursesyllabus);
    console.log("category", category);
    await dbOperation.savemastercourse(mainmenuid, mastercourseid, mastercoursename, Reviews, numberofcourses, coursehours, numberoflearners, minicoursesyllabus, category);
    res.status(200).json({ message: "Mastercourse saved successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to save Mastercourse" });
  }
});




app.get('/live-course', async (req, res) => {
  try {
    const livecourses = await dbOperation.getlivecourses();
    res.json(livecourses);
    // console.log(livecourses);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error for livecourses' });
  }
});

app.get('/selfpaced-course', async (req, res) => {
  try {
    const selfpacedcourses = await dbOperation.getselfpacedcourses();
    res.json(selfpacedcourses);
    // console.log(selfpacedcourses);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error for selfpacedcourses' });
  }
});

app.get('/recommended-course', async (req, res) => {
  try {
    const recommendedcourses = await dbOperation.getrecommendedcourses();
    res.json(recommendedcourses);
    // console.log(recommendedcourses);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error for recommendedcourses' });
  }
});



// Function to determine file type based on file extension
// function getFileType(fileName) {
//   const extension = path.extname(fileName).toLowerCase();

//   if (extension === '.zip') {
//     return 'zip';
//   } else if (extension === '.mp4' || extension === '.avi' || extension === '.mov' || extension === '.mkv') {
//     return 'video';
//   } else if (
//     extension === '.doc' ||
//     extension === '.docx' ||
//     extension === '.pdf' ||
//     extension === '.ppt' ||
//     extension === '.xls' ||
//     extension === '.xlsx' ||
//     extension === '.txt' ||
//     extension === '.csv'
//   ) {
//     return 'document';
//   } else if (extension === '') {
//     return 'folder';
//   } else {
//     return 'other'; // Handle other file types
//   }
// }

app.get('/get-courseContent', async (req, res) => {
  try {
    const getcoursecontent = await dbOperation.getcourseContent();
    res.json(getcoursecontent);
    console.log("server getcoursecontent : ",getcoursecontent);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error for getcoursecontent' });
  }
});

// post
app.post('/insertupdatetrainer', upload.none(), async (req, res) => {
  console.log("Received POST request from client:", req.body);

  const { employeeID, name, designation, courses, hiredDate, reportsTo, status, phoneNumber, location, payslip, monthlysalary } = req.body;
  console.log("Received Data:", req.body);
  console.log("employeeID:", employeeID);
  console.log("name:", name);
  console.log("designation:", designation);
  console.log("courses:", courses);
  console.log("hiredDate:", hiredDate);
  console.log("reportsTo:", reportsTo);
  console.log("status:", status);
  console.log("phoneNumber:", phoneNumber);
  console.log("location:", location);
  console.log("payslip:", payslip);
  console.log("monthlysalary:", monthlysalary);

  try {
    await dbOperation.Insertupdatetrainer(employeeID, name, designation, courses, hiredDate, reportsTo, status, phoneNumber, location, payslip, monthlysalary);
    res.status(200).json({ message: 'Insertupdatetrainer saved successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to save Insertupdatetrainer' });
  }
});
app.post('/insertupdatelearner', upload.none(), async (req, res) => {
  console.log("Received Data LEARNERS:", req.body);
  const { LearnerID,
    Name,
    Age,
    CoursesEnrolled,
    Batch,
    BatchTimings,
    classmodeCategory,
    sessionmodeCategory,
    Grade,
    Trainer,
    Progress,
    Payment,
    PhoneNumber,
    Email} = req.body;
  try {
    console.log("Received Data:", req.body);
    console.log("LearnerID:", LearnerID);
    console.log("Name :", Name);
    console.log("Age:", Age);
    console.log("CoursesEnrolled:", CoursesEnrolled);
    console.log("Batch:", Batch);
    console.log("BatchTimings:", BatchTimings);
    console.log("classmodeCategory:",classmodeCategory);
    console.log("sessionmodeCategory:", sessionmodeCategory);
    console.log("Grade:", Grade);
    console.log("Trainer:", Trainer);
    console.log("Progress", Progress);
    console.log("Payment", Payment);
    console.log("PhoneNumber", PhoneNumber);
    console.log("Email", Email);
    await dbOperation.InsertupdateLearner(
      LearnerID,
      Name,
      Age,
      CoursesEnrolled,
      Batch,
      BatchTimings,
      classmodeCategory,
      sessionmodeCategory,
      Grade,
      Trainer,
      Progress,
      Payment,
      PhoneNumber,
      Email);
    res.status(200).json({ message: 'InsertupdateLearner saved successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to save InsertupdateLearner' });
  }
});
// Route for handling file uploads
app.post('/course-content', upload.array('files'), async (req, res) => {
  const { courseId, description, predefinedPath, chapterid } = req.body;

  console.log('Received data from client:');
  console.log('courseId: ', courseId);
  console.log('description: ', description);
  console.log('predefinedPath: ', predefinedPath);
  console.log('CHAPTER ID: ',chapterid)

  try {
    if (typeof predefinedPath === 'undefined') {
      throw new Error('Missing file information');
    }

    for (const file of req.files) {
      const fileName = file.originalname;
      const sourcePath = path.join(predefinedPath, fileName); // Fix: Use path.join() instead of path.normalize()
      // const ext = path.extname(fileName);
      // const uniqueFileName = `${uuidv4()}${ext}`;
      const filePath = path.join('E:\\Snowflake\\snowflakesolution\\public\\Contents', fileName);
      console.log('Uploaded file:', file);
      console.log('Source path:', sourcePath);
      console.log('Destination path:', filePath);

      console.log('Moving file:', fileName, 'from:', sourcePath, 'to:', filePath);

      // Call the dbOperation function to save the file information to the database
      console.log('Saving course content to the database');
      await dbOperation.courseContent(courseId, fileName, filePath, description, chapterid);
      console.log('Course content saved to the database');
    }

    res.status(200).json({ message: 'courseContent saved successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error for courseContent' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

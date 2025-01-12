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

app.post("/savesubcourseinformation",upload.none(), async (req, res) => {
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

app.post('/save-mainmenu',upload.none(), async (req, res) => {
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
  const { mainmenuid, subcourseid, subcoursename, image, enrolledcustomers, sessionmodecategory, classmodecategory, batchstartdate, syllabus, coursecompletionrate, category, trainer, courseamount, status } = req.body;
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
    console.log("trainer", trainer);
    console.log("courseamount", courseamount);
    console.log("status", status);
    await dbOperation.savesubcourse( mainmenuid, subcourseid, subcoursename, image, enrolledcustomers, sessionmodecategory, classmodecategory, batchstartdate, syllabus, coursecompletionrate, category, trainer, courseamount, status );
    res.status(200).json({ message: 'Subcourse saved successfully' });
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: 'Failed to save subcourse' });
  }
});

app.post("/save-mastercourse",upload.none(), async (req, res) => {
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





app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

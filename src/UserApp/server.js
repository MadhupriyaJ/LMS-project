const express = require('express');
const dbOperation = require('./src/dbFiles/dbOperation');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');
const fs = require('fs-extra');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');


app.use(cors());
app.use(express.json()); // Add this line to parse JSON in the request body

// Set up multer storage and options
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'D:\\edureka_clone\\edureka\\public\\Contents');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ 
  storage,
  // Overwrite existing files with the same name
  fileFilter: (req, file, cb) => {
    cb(null, true);
  }
});



app.get('/', (req, res) => {
  res.send('Hello, this is the root URL!');
});

app.post('/register', async (req, res) => {
  const { email, passwordHash } = req.body;
  console.log('Received email:', email); // Add this line to log the received email
  console.log('Received password:', passwordHash); // Add this line to log the received password
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
      const filePath = path.join('D:\\edureka_clone\\edureka\\public\\Contents', fileName);

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

app.get('/main-menuname', async (req, res) => {
  try {
    const mainMenuName = await dbOperation.GetMainMenuNames();
    res.json(mainMenuName);
    // console.log('loajsasijdidjws servermain',mainMenuName);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error for mainmenuname' });
  }
});


app.get('/Subcourse', async (req, res) => {
  try {
    const Subcourses = await dbOperation.GetSubcourses();
    res.json(Subcourses);
    console.log('server Subcourses',Subcourses);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error for Subcourses' });
  }
});

app.get('/Subcourseinformation', async (req, res) => {
  try {
    const Subcoursesinformation = await dbOperation.GetSubcourseInformation();
    res.json(Subcoursesinformation);
    console.log('server Subcoursesinformation',Subcoursesinformation);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error for Subcoursesinformation' });
  }
});

app.get('/subcoursefees', async (req, res) => {
  try {
    const Subcoursesfees = await dbOperation.Getsubcoursefees();
    res.json(Subcoursesfees);
    console.log('server Subcoursesfees',Subcoursesfees);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error for Subcoursesfees' });
  }
});

app.get('/mastercourse', async (req, res) => {
  try {
    const mastercourse = await dbOperation.GetMastercourse();
    res.json(mastercourse);
    console.log('server mastercourse',mastercourse);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error for mastercourse' });
  }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
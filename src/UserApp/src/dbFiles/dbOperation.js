const config = require('./dbConfig');
const sql = require('mssql');


const getUserByEmail = async (email) => {
  try {
    let pool = await sql.connect(config);
    
    const result = await pool
      .request()
      .input('Email', sql.NVarChar(255), email)
      .query('SELECT * FROM AdminandUserLogin WHERE Email = @Email');

    return result.recordset[0];
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch user by email');
  }
};

const registerUser = async (email, passwordHash) => {
  try {
    console.log('Received email in dbOperation:', email);
    console.log('Received passwordHash in dbOperation:', passwordHash);
    let pool = await sql.connect(config);
    await pool
      .request()
      .input('Email', sql.NVarChar(255), email)
      .input('PasswordHash', sql.NVarChar(64), passwordHash)
      .execute('InsertAdminandUserLogin');
  } catch (error) {
    console.log(error);
    throw new Error('Failed to register user');
  }
};



const loginUser = async (email, passwordHash) => {
  try {
    let pool = await sql.connect(config);
    const result = await pool
      .request()
      .input("Email", sql.NVarChar(255), email)
      .input("PasswordHash", sql.NVarChar(64), passwordHash)
      .query("SELECT COUNT(*) AS UserCount FROM AdminandUserLogin WHERE Email = @Email AND PasswordHash = @PasswordHash");
    const userCount = result.recordset[0].UserCount;
    return userCount === 1; // Return true if user exists, false otherwise
  } catch (error) {
    console.log(error);

  }
};

  const courseContent = async (courseId, fileName, filePath, description, chapterid) => {
  console.log('dbOperation - courseContent function called');
  try {
    console.log('Inserting course content:');
    console.log('Course ID:', courseId);
    console.log('File Name:', fileName);
    console.log('File Path:', filePath);
    console.log('Description:', description);

    let pool = await sql.connect(config);
    await pool
      .request()
      .input('courseid', sql.Int, courseId)
      .input('FileName', sql.VarChar(sql.MAX), fileName)
      .input('FilePath', sql.VarChar(sql.MAX), filePath)
      .input('Description', sql.VarChar(sql.MAX), description)
      .input('ChapterID',sql.VarChar(255),chapterid)
      .execute('InsertCoursesContent');

    console.log('CoursesContent inserted successfully');
  } catch (error) {
    console.log(error);
    throw new Error('Failed to save CoursesContent');
  }
};


const getcourseContent = async () => {
  try {
    let pool = await sql.connect(config);
    const result = await pool
      .request()
      .query("SELECT * FROM CoursesContent");
      console.log("CoursesContent db = ",result);
    return result; // Return the recordset instead of the result object
   
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get livecourses coursename');
  }
};

const getlivecourses = async () => {
  try {
    let pool = await sql.connect(config);
    const result = await pool
      .request()
      .query("SELECT * FROM LiveCourses");
      // console.log("db ope livecourses = ",result);
    return result;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get livecourses coursename');
  }
};

const getselfpacedcourses = async () => {
  try {
    let pool = await sql.connect(config);
    const result = await pool
      .request()
      .query("SELECT * FROM SelfPacedCourse");
      // console.log("selfpacedcourses = ",result);
      return result;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get SelfPacedCourse coursename');
  }
};

const getrecommendedcourses = async () => {
  try {
    let pool = await sql.connect(config);
    const result = await pool
      .request()
      .query("SELECT * FROM RecommendedCourse");
      // console.log("selfpacedcourses = ",result);
      return result;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get RecommendedCourse coursename');
  }
};


// Maincourses
const GetMainMenuNames = async () => {
  try {
    let pool = await sql.connect(config);
    const result = await pool
      .request()
      .query("SELECT * FROM mainmenus");

      // console.log("mainMenuName = ",result.recordset);
      return result.recordset;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get mainMenuName');
  }
};

const GetSubcourses = async () => {
  try {
    let pool = await sql.connect(config);
    const result = await pool
      .request()
      .query("SELECT * FROM Subcourse");
      console.log("db operation Subcourses = ",result.recordset);
      return result.recordset;
}catch (error) {
  console.log(error);
  throw new Error('Failed to get Subcourses');
}
};

const GetSubcourseInformation = async () => {
  try {
    let pool = await sql.connect(config);
    const result = await pool
      .request()
      .query("SELECT * FROM SubcourseInformation");
      console.log("db operation SubcourseInformation = ",result.recordset);
      return result.recordset;
}catch (error) {
  console.log(error);
  throw new Error('Failed to get SubcourseInformation');
}
};

const Getsubcoursefees = async () => {
  try {
    let pool = await sql.connect(config);
    const result = await pool
      .request()
      .query("SELECT * FROM Subcoursefees");
      console.log("db operation Subcoursefees = ",result.recordset);
      return result.recordset;
}catch (error) {
  console.log(error);
  throw new Error('Failed to get Subcoursefees');
}
};
  
const GetMastercourse = async () => {
  try {
    let pool = await sql.connect(config);
    const result = await pool
      .request()
      .query("SELECT * FROM MasterCourse");
      console.log("db operation MasterCourse = ",result.recordset);
      return result.recordset;
}catch (error) {
  console.log(error);
  throw new Error('Failed to get MasterCourse');
}
};
  


module.exports = {
  sql,
  getUserByEmail,
  registerUser,
  loginUser,
  getlivecourses,
  getselfpacedcourses,
  getrecommendedcourses,
  courseContent,
  getcourseContent,
  GetMainMenuNames,
  GetSubcourses,
  GetSubcourseInformation,
  Getsubcoursefees,
  GetMastercourse,
};
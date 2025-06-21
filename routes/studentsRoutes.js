const express=require('express');
const router=express.Router();
const studentsData=require('../data/students');

router.get("/",(req,res)=>
{
    const students=studentsData.getAllStudents();
    res.json({
        message:"Here are all our amazing students!",
        count:studentsData.getStudentsCount(),
        students:students
    });
});

//GET ab agr id provide kre to find krege hum id se mtlb hum id as a perameter ps kr rhe request m ok to as hoga req.params.id
router.get('/:id',(req,res)=>
{
    const student=studentsData.getStudentById(req.params.id);
    if(!student)
    {
        return res.status(404).json({
            error:"Student not found!",
            message:"The student you're looking for doesn't exist."
        });
    }
    
    res.json({
        message:"Student found!!!",
        student:student
    });
});

//POST mtlb nya student create krna ho to
router.post('/',(req,res)=>{
    const{name,email,age}=req.body;
    if(!name||!email||!age)
    {
        return res.status(400).json({
            error:"Missing required fields",
            required:["name","email","age"],
            received:req.body
        });
    }
    //agr humne email ka format galat dala ho tb
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email))
    {
        return res.status(400).json({
            error:"Invalid email format!",
            message:"Please provide a valid email address."
        });
    }
    if(age<16||age>100)
    {
        return res.status(400).json({
            error:"Invalid age!",
            message:"Age must be between 16 and 100."
        });
    }
    try{
        const newStudent=studentsData.createStudent({
            name,email,age
        });
        res.status(201).json({
            message:"Student created successfully",
            student:newStudent
        });
    }
     catch (error) {
  res.status(500).json({
  error: "Failed to create student! ",
  message: error.message
  });
 }
  });
 
  
  router.put('/:id', (req, res) => {
  const { name, email, age } = req.body;

    const student = studentsData.getStudentById(req.params.id);
 
  if (!student) {
  return res.status(404).json({
  error: "Student not found! ",
  message: "Cannot update a student that doesn’t exist."
  });
  }
   try {
  const updatedStudent = studentsData.updateStudent(req.params.id
 , {
  name, email, age
  });
 
  res.status(201).json({
  message: "Student updated successfully! ",
  student: updatedStudent
  });
  } catch (error) {
  res.status(500).json({
  error: "Failed to update student! ",
  message: error.message
  });
  }
});


  router.delete('/:id', (req, res) => {
  const student = studentsData.getStudentById(req.params.id);
 
  if (!student) {
  return res.status(404).json({
  error: "Student not found! ",
  message: "Cannot delete a student that doesn’t exist."
  });
  }
 
  try {
  const deletedStudent = studentsData.deleteStudent(req.params.id
 );
 
  res.json({
  message: "Student deleted successfully! ",
  deletedStudent: deletedStudent,
  remainingCount: studentsData.getStudentsCount()
  });
  } catch (error) {
  res.status(500).json({
  error: "Failed to delete student! ",
  message: error.message
  });
  }
  });
module.exports = router;
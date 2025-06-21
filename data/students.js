let students=[{
  id: 1,
  name:"Alice Johnson",
  email:"alice@email.com",
  age: 20
  },
  {
  id: 2,
  name:"Bob Smith",
  email:"bob@email.com",
  age: 22
  },
  {
  id: 3,
  name:"Charlie Brown",
  email:"charlie@email.com",
  age: 19
  }
];

//function to get nextid
//conditional operatior 
const getNextId=()=>{
    return students.length>0?Math.max(...students.map(s => s.id))+1 : 1;
};
module.exports={
    getAllStudents:()=>students,
    getStudentById:(id)=>{
        return students.find(student=>student.id===parseInt(id))
    },

    //creating new studnet
    createStudent:(studentData)=>{
        const newStudent={
            id:getNextId(),
            name:studentData.name,
            email:studentData.email,
            age:parseInt(studentData.age)
        };
        students.push(newStudent);
        return newStudent;
    },
    //upr dekh ek function getalldata m wo simply students ki details return krega dusri method h getnextid that means ki jo sbse upr method h wo isliye h taki id increment hoti rhe length se conditional operator use kiya h usme uske bd getstudentbyid mtlb agr m server p request dalu ki mujhe y id ka student chaiye to wo find. method se pta lagayega ku humare database m kaha wo id h fir uski sari details return hogi ek method h create usme hum as a arguement name email age dal rhe h jo simple newstudent constant m save krege or id increment hogi getnextid method se or ye sb data humare database m push ho jayega thik.
    //ab method update krne k liye
    //crud yani create jo kiya read yani getting data on display ab update
    //koi pdate aise karega ki update kro jaha ye id h 
    updateStudent:(id,updateData)=>{
        const index=students.findIndex(s=>s.id===parseInt(id));
        if(index===-1) return null;
        //else
        if(updateData.name) students[index].name=updateData.name;
        if(updateData.email) students[index].email=updateData.email;
        if(updateData.age) students[index].age=parseInt(updateData.age);
        return students[index];
    },
    //ab last method delete same as jo id provide ki hogi uski details delete hogi
    deleteStudent:(id)=>{
        const index=students.findIndex(s=>s.id===parseInt(id));
        if(index===-1) return null;
        //else
        return students.splice(index,1)[0];
    },
    //splice ye h ki jaha se 
    //ab function y ki students kitne h wo mtlb length of our array right
    getStudentsCount:()=>students.length
};
const router = require('express').Router();
let students = [
    {
        id:1,
        name: 'Abhinav',
        age: 20,
        subject:'Web',
        marks: 75
    },
    {
        id:2,
        name: 'Apurba',
        age: 18,
        subject:'CPP',
        marks: 70
    },
    {
        id:3,
        name: 'Yash',
        age: 22,
        subject:'Java',
        marks: 80
    }
];

router.get('/',(req,res,next)=>{
    res.render('students',{
        students
    })
});

router.get('/:id',(req,res,next)=>{
    const {id} = req.params;
    let student = students.filter((s)=>s.id === parseInt(id));
    console.log(student);
    res.render('studentinfo',{
        student: student[0]
    })
})

module.exports = router;
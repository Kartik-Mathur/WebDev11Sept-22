const router = require('express').Router();
let teachers = [
    {
        id:1,
        name: 'Kartik',
        age: 20,
        subject:'Web'
    },
    {
        id:2,
        name: 'Sabeel',
        age: 18,
        subject:'CPP'
    },
    {
        id:3,
        name: 'Monu',
        age: 22,
        subject:'Java'
    }
];

router.get('/',(req,res,next)=>{
    res.render('teachers',{
        teachers
    })
});

router.get('/:id',(req,res,next)=>{
    const {id} = req.params;
    let teacher = teachers.filter((s)=>s.id === parseInt(id));
    console.log(teacher);
    res.render('teacherinfo',{
        teacher: teacher[0]
    })
})

module.exports = router;
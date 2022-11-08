console.log(document);
const para = document.getElementById('para');
console.log(para);

for(let i = 0 ; i < para.children.length ; i++){
    // console.log(para.children[i]);
    // para.children[i].innerText = "ashdahdadmabdhba,fakdadb";
}
para.classList.remove('randomClass');

const courses = document.getElementsByClassName("course");
console.log(courses);

for(let course of courses){
    course.innerHTML = `<h1>${course.innerText}  -Course</h1>`;
}

const headers = document.getElementsByTagName('header');
console.log(headers);
for(let header of headers){
    // header.style.border = '2px solid black';
    header.classList.add('border1px');
}

const liItem = document.querySelectorAll('li');
console.log(liItem);
for(let it of liItem){
    it.style.color = 'purple';
}

const myPara = document.querySelector('#para');
console.log(myPara);

const mycourses = document.querySelectorAll('.course');
console.log(mycourses);
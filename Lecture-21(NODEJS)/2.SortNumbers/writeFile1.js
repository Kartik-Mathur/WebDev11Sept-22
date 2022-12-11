const fs = require('fs');

let arr = [1,4,5,6,7,8,5,3,23,5,5,24,235,43,45,2,6436,34,523,532,43,643,25,246,34,6435,23,34,63,634];

fs.writeFile(
    'File1.json',
    JSON.stringify(arr),
    (err)=>{
        if(err) throw new Error('Nahi likh paaye in file1');
        console.log("File-1 success");
    }
)

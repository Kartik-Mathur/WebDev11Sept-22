const fs = require('fs');

fs.readFile(
    'movies.txt',
    {encoding:'utf-8'},
    (err,data)=>{
        if(err) throw new Error("Read karte time, issue aaya");
        console.log(data);
        // console.log(data.toString());
    }
)
console.log("Idhar hum abhi hai present");
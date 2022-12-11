const fs = require('fs');

let data = `DHOL
Golmaal
Chacha Choudhary
Indira the Tiger
Golmaal 2
`;
fs.writeFile(
    'movies.txt',
    data,
    {
        encoding:'utf-8',
        flag:'w'
    },
    (err)=>{
        if(err) throw new Error('Write karte time, dikkat aa gai');
        console.log('File sahi se write ho gai');
    }
)
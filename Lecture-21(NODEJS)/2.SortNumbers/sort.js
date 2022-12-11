const fs = require('fs');
let arr;

fs.readFile(
    'File1.json',
    { encoding: 'utf-8' },
    (err, data1) => {
        if (err) throw new Error('Nahi read kar paaye from file1');
        arr = JSON.parse(data1);
        // console.log(arr);

        fs.readFile('File2.json', { encoding: 'utf-8' },
            (err, data2) => {
                let arr2 = JSON.parse(data2);
                let result = [...arr, ...arr2];

                result.sort((a, b) => a - b);
                console.log(result);

                fs.writeFile(
                    'result.json',
                    JSON.stringify(result),
                    (err) => {
                        console.log('Done');
                    }
                )
            })
    }
)

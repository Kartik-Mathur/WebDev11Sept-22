// url = 'http://abc.com/img.jpg';
function download(url) {
    return new Promise((resolve,reject)=>{
        if (!url.startsWith('http')) {
            reject(new Error("Invalid url"));
            return;
        }
        console.log("Download Start from", url);
        setTimeout(()=> {
            let downloadedFile = url.split('/').pop();
            resolve(downloadedFile);
        }, 3000);
    })
}

function compression(downloadedFile) {
    return new Promise((resolve,reject)=>{
        if (
            ['jpg', 'png', 'webp', 'svg'].indexOf(downloadedFile.split('.').pop()) == -1
        ) {
            return reject(
                new Error("Invalid file we can only compress jpg,svg,webp,png")
            );
        }
        console.log("Compression Start", downloadedFile);
        setTimeout(()=> {
            let compressedFile = downloadedFile.split('.')[0] + '.zip';
            resolve(compressedFile);
        }, 3000);
    })
}

function uploadFile(compressedFile) {
    return new Promise((resolve,reject)=>{
        console.log("Upload starting of", compressedFile);
        setTimeout(()=> {
            let newUrl = 'https://newsite.com/' + compressedFile;
            resolve(newUrl);
        }, 3000);
    })
}

let url = 'http://abc.com/img.jpg';
download(url)
    .then(compression)
    .then(uploadFile)
    .then(function (newUrl) {
        console.log("Upload success", newUrl);
        return "All Done";
    })
    .then((msg) => {
        console.log(msg);
    })
    .catch(function (err) {
        console.log(err.message);
    })


// url = 'http://abc.com/img.jpg';
function download(url) {
    return new Promise(function (resolve, reject) {
        if (!url.startsWith('http')) {
            reject(new Error("Invalid url"));
            return;
        }
        console.log("Download Start from", url);
        setTimeout(function () {
            let downloadedFile = url.split('/').pop();
            resolve(downloadedFile);
        }, 3000);
    })
}

function compression(downloadedFile) {
    return new Promise(function (resolve, reject) {
        if (
            ['jpg', 'png', 'webp', 'svg'].indexOf(downloadedFile.split('.').pop()) == -1
        ) {
            return reject(
                new Error("Invalid file we can only compress jpg,svg,webp,png")
            );
        }
        console.log("Compression Start", downloadedFile);
        setTimeout(function(){
            let compressedFile = downloadedFile.split('.')[0] + '.zip';
            resolve(compressedFile);
        },3000);
    })
}

function uploadFile(compressedFile){
    return new Promise(function(resolve,reject){
        console.log("Upload starting of",compressedFile);        setTimeout(function(){
            let newUrl = 'https://newsite.com/'+compressedFile;
            resolve(newUrl);
        },3000);
    })
}

let url = 'http://abc.com/img.jpg';
download(url)
    .then(function (downloadedFile) {
        console.log("Downloaded File Success", downloadedFile);
        compression(downloadedFile)
            .then(function(compressedFile){
                console.log("Compression success",compressedFile);

                uploadFile(compressedFile)
                    .then(function(newUrl){
                        console.log("Upload success",newUrl);
                    })
                    .catch(function(err){
                        console.log(err.message);
                    })
            })
            .catch(function(err){
                console.log(err.message);
            })

    })
    .catch(function (err) {
        console.log(err.message);
    })
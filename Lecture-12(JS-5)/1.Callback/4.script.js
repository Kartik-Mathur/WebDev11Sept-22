// url: https://abc.com/file.jpg
function download(url, cb){
    console.log("Download start ho gai");
    setTimeout(function(){
        console.log("Download poora hua");
        let downloadedFile = url.split('/').pop();
        cb(downloadedFile);
    },3000);
}

function compression(downloadedFile, cb){
    console.log("Compression starts of",downloadedFile);
    setTimeout(function(){
        console.log("Compression completed");
        let compressedFile = downloadedFile.split('.')[0] + '.zip';
        cb(compressedFile);
    },3000);
}

function uploadFile(compressedFile, cb){
    console.log("Uploading starts of",compressedFile);
    setTimeout(function(){
        let newurl = 'https://newsite.com/'+compressedFile;
        console.log("Uploading done at url",newurl);
        cb(newurl);
    },3000);
}

function allDone(){
    console.log("Everything done successfully");
}

download('https://abc.com/file.jpg',function(downloadedFile){
    console.log("Download poora hua",downloadedFile);
    compression(downloadedFile, function(compressedFile){
        console.log("Compression is done",compressedFile);
        uploadFile(compressedFile,function(newurl){
            console.log("Uploading done",newurl);
        })
    });
});
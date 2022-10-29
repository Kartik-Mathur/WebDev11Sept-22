// url: https://abc.com/file.jpg
function download(url, compression){
    console.log("Download start ho gai");
    setTimeout(function(){
        console.log("Download poora hua");
        let downloadedFile = url.split('/').pop();
        compression(downloadedFile, uploadFile);
    },3000);
}

function compression(downloadedFile, uploadFile){
    console.log("Compression starts of",downloadedFile);
    setTimeout(function(){
        console.log("Compression completed");
        let compressedFile = downloadedFile.split('.')[0] + '.zip';
        uploadFile(compressedFile, allDone);
    },3000);
}

function uploadFile(compressedFile, allDone){
    console.log("Uploading starts of",compressedFile);
    setTimeout(function(){
        let newurl = 'https://newsite.com/'+compressedFile;
        console.log("Uploading done at url",newurl);
        allDone();
    },3000);
}

function allDone(){
    console.log("Everything done successfully");
}

download('https://abc.com/file.jpg',compression);
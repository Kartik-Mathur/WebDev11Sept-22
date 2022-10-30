let p = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject(); // Yeh call ho gaya matlab fulfill ho gaya
    }, 3000);
});

p
    .then(
        function () {
            console.log("Movie ho gai download");
        },
        function(){
            console.log("Movie nahiii ho paai!");
        }
    )
// p
//     .then(function () {
//         console.log("Movie ho gai download");
//     })
//     .catch(function () {
//         console.log("Movie nahi ho paai download");
//     })
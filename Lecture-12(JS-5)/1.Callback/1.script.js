function choriKarna(policePakdegi){
    console.log("Chori start ho rahi hai");
    setTimeout(function(){
        console.log("Chori Khatam ho gai");
        policePakdegi();
    },3000);
}

choriKarna(function(){
    console.log("Police ne pakda");
});

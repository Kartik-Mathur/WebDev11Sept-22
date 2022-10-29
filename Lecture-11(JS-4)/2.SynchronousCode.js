function waitASec(){
    let cT = new Date().getTime();

    while(new Date().getTime() < cT + 1000){

    }
}

function waitNSec(N){
    for(let i = 0 ; i < N ; i++)  waitASec();
}

waitNSec(3);
console.log("Hello World");
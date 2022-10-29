function instaParMessageKia(replyNahiAaya) {
    console.log("Insta par message bheja");
    setTimeout(function () {
        console.log("Insta par message bheje 10 din ho gaye");
        replyNahiAaya(function(){
            console.log("Ab reply aa gaya!");
            console.log("Baatein shuru.....");
            setTimeout(function(){
                console.log("Setting bann gai");
            },3000);
        });
    }, 3000);
}

function replyNahiAaya(phirMessageKia){
    console.log("Katt gaya");
    console.log("UPSC ki tyaari shuru");
    setTimeout(function(){
        console.log("1 year later: UPSC clear, bhai DM bann gaya");
        phirMessageKia();
    },3000);
}



instaParMessageKia(replyNahiAaya);
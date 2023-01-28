$(()=>{
    console.log('inside script');
    $('.showDetails').click((ev)=>{
        ev.preventDefault();
        console.log(ev.target);
    })
})
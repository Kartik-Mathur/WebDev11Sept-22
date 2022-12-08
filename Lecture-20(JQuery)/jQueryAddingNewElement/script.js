let newMovie = $('#newMovie');
let btn = $('#btn');
let movieList = $('#movieList');

btn.click(()=>{
    // 1. Movie name ko read karo input box se
    let movieName = newMovie.val();
    // console.log(movieName);

    // 2. Ek li element banao, aur uske andar text 
    // daale movieName
    let li = $('<li>');
    li.text(movieName);

    // 3. li element ko list ke andar append karo
    li.appendTo(movieList);
    // movieList.append(li);
})
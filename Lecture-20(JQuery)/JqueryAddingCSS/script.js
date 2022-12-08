let newMovie = $('#newMovie');
let btn = $('#btn');
let movieList = $('#movieList');

btn.click(() => {
    // 1. Movie name ko read karo input box se
    let movieName = newMovie.val();
    // console.log(movieName);

    // 2. Ek li element banao, aur uske andar text 
    // daale movieName
    let li = $('<li>');
    li.text(movieName);
    li.attr('class','movie');
    // li.css('background-color','purple');
    li.css(
        {
            "background-color": "#ffe",
            "border-left": "5px solid #ccc"
        });
    // 3. li element ko list ke andar append karo
    li.appendTo(movieList);

    // movieList.append(li);

    // console.log($('ul').attr('id'));

})
$(() => {
    let btn = document.getElementById('btn');
    let tasklist = document.getElementById('tasklist');

    $(btn).click((ev) => {
        ev.preventDefault();
        $.post(
            '/addtask',
            {
                task: $('#task').val()
            },
            (data) => {
                tasklist.innerHTML = '';
                data.map((task) => {
                    console.log(task);
                    let li = $('<li>').text(task)
                    $('#tasklist').append(li);
                })
            })
    })
})
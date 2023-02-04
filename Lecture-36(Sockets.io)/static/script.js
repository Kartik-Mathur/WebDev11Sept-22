let socket = io();

socket.on('loggedIn', () => {
    console.log("Login Success");
    console.log(socket.id);
    $('#chatBox').show();
    $('#userDetails').hide();
})

$(() => {
    $('#chatBox').hide();
    $('#login').click((e)=>{
        socket.emit('login',{
            username: $('#username').val()
        })
    })
    let btn = $('#btn');
    btn.click((e)=>{
        socket.emit('message',{
            message: $('#message').val()
        })
    })

    socket.on('showmessage',(data)=>{
        let li =  $('<li>')
        li.text(data.userId + ': '+data.message);
        $('#messageList').append(li);
    })
})
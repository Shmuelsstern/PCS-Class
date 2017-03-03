(function () {
    'use strict';

    const socket = io(); // io.connect('localhost:80')

    // listen for 'message' events from server
    const messagesDiv = $('#messages');
    socket.on('message', msg => {
        console.log(msg);

        messagesDiv.append('<span>chatter ' + msg.name + ' says:' + msg.data + '</span><br/>');
    });

    // send a 'message' event to server
    // socket.emit('message', { msg: 'Hello Socket IO' });

    const messageInput = $('#message'),
        messageForm = $('#messageForm');
    messageForm.submit(e => {
        e.preventDefault();
        socket.emit('message', messageInput.val());
        messageInput.val('');
    });

    const nameInput = $('#name'),
        login = $('#login');
    login.submit(e => {
        e.preventDefault();
        if (nameInput.val()) {
            login.hide();
            $('#messages').show();
            messageForm.show();
            socket.emit('newChatter',nameInput.val());
        }
    });

}());
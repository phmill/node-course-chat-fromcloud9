var socket = io();
        
socket.on('connect', function () {
    console.log('Connected to server');
   
    socket.emit('createMessage', {
        from: 'henryTheFucker',
        text: 'season of the bitch level 2.'
    });
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on('newEmail', function(email) {
    console.log('New email received', email);
});

socket.on('newMessage', function(message) {
    console.log('New message received', message);
});
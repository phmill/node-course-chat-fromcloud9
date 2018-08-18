var socket = io();
        
socket.on('connect', function () {
    console.log('Connected to server');
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on('newEmail', function(email) {
    console.log('New email received', email);
});

socket.on('newMessage', function(message) {
    console.log('New message received', message);
    var li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);
    
    jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', function(e){
  e.preventDefault();
  
  socket.emit('createMessage', {
      from:'User',
      text: jQuery('[name=message]').val()
  }, function(){
      
  });
  
  
});
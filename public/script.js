const socket = io('/');

var state = false;

var timer = 0;

$('#upvote').click(function() {
    state = !state;

    if(state) {
        socket.emit('up');
    } else {
        socket.emit('down');
    }
});

$('#downvote').click(function() {
    $('#myPopup').css('display', 'inline');
    setTimeout(function() {
        $('#myPopup').css('display', 'none');
    }, 5000)
})

socket.on('vote_up', (value) => {
    $('#counter').html(value);  
});

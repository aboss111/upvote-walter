const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

var votes = 0;

io.on('connection', socket => {
    socket.emit('vote_up', votes);

    socket.on('up', () => {
        votes += 1;

        io.emit('vote_up', votes);
    });

    socket.on('down', () => {
        votes -= 1;

        io.emit('vote_up', votes);
    });
});

server.listen(process.env.PORT || 3030);
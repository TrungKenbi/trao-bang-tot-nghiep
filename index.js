module.exports = function(io) {
    var app = require('express');
    var router = app.Router();
    io.on('connection', function(socket) {
        console.log('User connection !!!');
        socket.on('disconnect', function () {
           console.log('User disconnection !');
        });
    });
    return router;
};
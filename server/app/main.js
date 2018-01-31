const http = require('http');
const io = require('socket.io');
const httpListener = require('./httpListener');
const sockets = require('./sockets');

// Create http server and assign httpListener
const server = http.createServer(httpListener);

// HTTP listen on port 3000
server.listen(3000);

// Create socket server and assign httpServer
io.listen(server);

// Pass io to socket listeners
sockets(io);
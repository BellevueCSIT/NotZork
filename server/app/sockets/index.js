const SOCKETS = [
    require('./emits/admin'),
    require('./emits/admin'),
    require('./routes/admin'),
    require('./routes/assets'),
    require('./routes/creator'),
    require('./routes/player'),
    require('./routes/player')
];

/**
 * Take Socket.io server and distribute it to children
 * @param io Socket.io server
 */
module.exports = (io) => {
    SOCKETS.forEach((s) => s(io));
};
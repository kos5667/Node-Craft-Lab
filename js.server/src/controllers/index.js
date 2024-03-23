/**
 *
 */
const {
    UserService,
    RoomService,
} = require('../services');
const UserController = new (require('./UserController'))(UserService);
const RoomController = new (require('./RoomController'))(RoomService);

module.exports = {
    UserController,
    RoomController,
};
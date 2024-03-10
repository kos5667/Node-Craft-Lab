/**
 *
 */
const {
    UserService,
    RoomService,
} = require('../services/index');
const UserController = new (require('./UserController'))(UserService);
const RoomController = new (require('./RoomController'))(RoomService);

module.exports = {
    UserController,
    RoomController,
};
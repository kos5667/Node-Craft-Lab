/**
 *
 */
const {
    UserService,
    RoomService
} = require('../services/index');

const UserController = require('./UserController')(UserService);
const RoomController = require('./RoomController')(RoomService);
// 추가 컨트롤러 초기화...

module.exports = {
    UserController,
    RoomController,
};
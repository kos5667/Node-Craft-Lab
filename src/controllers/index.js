/**
 *
 */
const {
    RoomServiceInstance
} = require('../services/index');
// const UserController = require('./UserController')(UserService);
const RoomController = require('./RoomController');

const RoomControllerInstance = new RoomController(RoomServiceInstance);

// module.exports = new RoomController(RoomService);

// 추가 컨트롤러 초기화...
module.exports = {
    // UserController,
    RoomControllerInstance,
};
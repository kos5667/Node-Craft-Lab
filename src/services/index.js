// const { User, Room } = require('../models/index');
const UserService = require('./UserService');

const RoomService = require('./RoomService');
const RoomServiceInstance = new RoomService();
// 추가 서비스 초기화...

module.exports = {
    // UserService,
    RoomServiceInstance,
    // 추가 서비스 내보내기...
};

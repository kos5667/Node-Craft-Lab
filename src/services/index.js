// const { User, Room } = require('../models/index');
const UserService = new (require('./UserService'));
const RoomService = new (require('./RoomService'));
// 추가 서비스 초기화...

module.exports = {
    UserService,
    RoomService,
    // 추가 서비스 내보내기...
};

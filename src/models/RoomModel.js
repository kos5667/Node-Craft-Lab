const mongoose = require('mongoose');

// export default class RoomModel {
// }

const RoomSchema = new mongoose.Schema({
    // 모델 스키마 정의
    room_name: String,
});

module.exports = mongoose.model('Room', RoomSchema);

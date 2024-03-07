const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    // 모델 스키마 정의
    username: String,
    email: String,
    password: String
});

module.exports = mongoose.model('User', UserSchema);

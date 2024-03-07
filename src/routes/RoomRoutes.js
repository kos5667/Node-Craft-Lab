const express = require('express');
const router = express.Router();

module.exports = (RoomController) => {
    router.post('/createRoom', RoomController.createRoom());

    // 추가 라우트 설정

    return router;
};

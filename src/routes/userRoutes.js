const express = require('express');
const router = express.Router();

module.exports = (UserController) => {
    router.post('/', UserController.createUser);

    // 추가 라우트 설정

    return router;
};

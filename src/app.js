/** Library */
const express = require('express');
const async = require('async');
const mongoose = require('mongoose');

/** Constant */
const PORT = process.env.PORT || 3000;

async.waterfall([
    /**
     * set global data.
     */
    function setGlobalData(callback) {
        global.runMocha = false;
        callback(null);
    },
    /**
     *
     */
    function initiateMongooseConnection(callback) {
        // MongoDB 연결 설정
        // mongoose.connect('mongodb://localhost/yourdb', { useNewUrlParser: true, useUnifiedTopology: true });
        callback(null);
    },
    /**
     * 모델 초기화.
     */
    function (callback) {
        callback(null);
    },
    /**
     * 서비스 초기화.
     */
    function (callback) {
        // require('./config/CoreInterface');
        callback(null);
    },
    /**
     * 컨트롤러 초기화.
     */
    function (callback) {
        // require('../src/controllers/RoomController');
        callback(null);
    },
    /**
     * Start Express.
     */
    function (callback) {
        const app = express();
        require('./routes/routes')(app);


        app.listen(PORT, () => {
            console.log(`Example app listening at http://localhost:${PORT}`);
        });
        callback(null);
    },
    /**
     *
     */
    function (callback) {
        callback(null);
    },
    /**
     *
     */
    function (callback) {
        callback(null);
    },
], function (err, result) {
    // 최종 콜백
    if (err) {
        throw `Failed to initialize application: ${err}`;
    }

    console.log('end...')
});
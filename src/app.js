/** Library */
const express = require('express');
const async = require('async');
const mongoose = require('mongoose');
const winston = require('winston');
require("dotenv").config({debug: true});


/** Constant */
const PORT = process.env.PORT || 3000;

async.waterfall([

    function (callback) {
        console.info('┌────────────────────────────────────────────────────────┐')
        console.info('│               Server is up and running!!               │')
        console.info('└────────────────────────────────────────────────────────┘')
        callback(null);
    },
    /**
     * Initialize Winston.
     * @param callback
     */
    function (callback) {
        callback(null);
    },
    /**
     *
     * @param callback
     */
    function loadConfiguration(callback) {
        // console.log('process', process.env);

        callback(null);
    },
    /**
     * load command parameter.
     * @param callback
     */
    function loadCommandParameter (callback) {
        global.options = {};
        for (let i = 2; i < process.argv.length; i++) {
            switch (process.argv[i]) {
                case '--mocha': global.options.runMocha = true; break;
                default:
                    break;
            }
        }
        callback(null);
    },
    /**
     * set global data.
     */
    function setGlobalData(callback) {
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

    if (global.options.runMocha) {
        console.info('┌────────────────────────────────────────────────────────┐')
        console.info('│                  Mocha Test Start!!!!                  │')
        console.info('└────────────────────────────────────────────────────────┘')
        require('../test/app')
    }
});
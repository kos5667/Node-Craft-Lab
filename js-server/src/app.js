/** Library */
const express = require('express');
const async = require('async');
const mongoose = require('mongoose');
const winston = require('winston');
require("dotenv").config({ debug: true });


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
     * load configuration
     * @param callback
     */
    function (callback) {
        // console.log('process', process.env);

        callback(null);
    },
    /**
     * load command parameter.
     * @param callback
     */
    function (callback) {
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
    function (callback) {
        callback(null);
    },
    /**
     * initiate Mongoose Connection
     */
    function initiateMongooseConnection(callback) {
        // MongoDB URI는 Atlas에서 제공하는 연결 문자열을 사용합니다.
        // 보안을 위해 실제 프로젝트에서는 환경 변수를 사용하는 것이 좋습니다.
        const mongoURI = "mongodb://localhost/mydatabase";

        /**
         * @deprecated
         * useNewUrlParser: 새로운 URL 파서를 사용하도록 설정합니다. 이 옵션은 URL 문자열 파싱 방식을 더 안전하게 만들어줍니다.
         * @deprecated
         * useUnifiedTopology: 새로운 서버 디스커버리와 모니터링 엔진을 사용하도록 설정합니다. 이것은 서버의 연결과 재연결 로직을 더 현대적이고 안정적으로 만들어줍니다.
         * useCreateIndex: MongoDB에서 기본적으로 제공하는 대신 Mongoose의 createIndex() 함수를 사용하여 인덱스를 생성합니다. 이 옵션은 경고 메시지를 방지하기 위해 설정할 수 있습니다.
         * useFindAndModify: 기본 MongoDB findOneAndUpdate() 대신에 Mongoose의 findAndModify() 함수를 사용합니다. false로 설정하면 이전 방식 대신 새로운 방식을 사용합니다.
         * autoIndex: 모델의 index 설정에 따라 자동으로 인덱스를 생성할지 여부를 결정합니다. 프로덕션 환경에서는 이 옵션을 끄는 것이 일반적입니다.
         * poolSize: MongoDB에 동시에 연결할 수 있는 최대 소켓(connection) 수를 지정합니다.
         * serverSelectionTimeoutMS: 데이터베이스 서버를 선택하는 데 실패하기 전에 기다릴 시간(밀리초)을 지정합니다.
         * socketTimeoutMS: 서버와의 연결 후 데이터를 보내거나 받는 동안 연결이 유지될 최대 시간을 설정합니다.
         * family: IP 버전을 강제로 선택할 때 사용합니다. 4는 IPv4, 6는 IPv6을 나타냅니다.
         * @type {{}}
         */
        const mongoOptions = {

        }

        mongoose.connect(mongoURI, {  })
            .then(() => console.log('MongoDB connected successfully'))
            .catch(err => console.error('MongoDB connection error:', err));
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
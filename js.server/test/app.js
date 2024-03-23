/*****************************************
 * MochaTest 자동화.
 * @description API Test는 서버가 기동되고 있어야 함으로 'node app.js --mocha'를 이용한 Mocha Test 진행.
 *****************************************/
const Mocha = require('mocha')
    , async = require('async');

// chai 사용 시 최초 "import('chai')"가 생성되기 전 (describe -> it)이 실행돼야 'chai'도 정상 실행됨.
const DONT_REMOVE = './test/example/mocha_init.js';

/**
 * Mocha 옵션
 * @type {Mocha.MochaOptions}
 */
const options = {
    // ui: 'tdd',
    // bail: true, // 첫 번째 테스트 실패 시 테스트 실행을 중단합니다.
    exit: true, // 테스트가 완료된 후 Mocha 프로세스를 강제로 종료합니다. 이 옵션은 비동기 작업이 완료되지 않았을 때 유용합니다.
    color: true,
}

/**
 * Mocha Test files.
 * @type {string[]}
 */
const mocha_files = [
    // 주석 및 삭제 금지. 'DONT_REMOVE'
    DONT_REMOVE,
    // './test/example/mocha_test.js',
    // './test/example/chai_test.js',
    './test/example/bind_test.js',
]

function runMocha () {
    const mocha = new Mocha(options);

    mocha_files.forEach(fc => { mocha.addFile(fc); });

    mocha.run((failures) => { console.log('failures: ',failures); });
}
runMocha();
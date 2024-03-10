/*****************************************
 * Test 자동화.
 *****************************************/
const Mocha = require('mocha')
    , async = require('async');

// Mocha 옵션 객체 생성
/**
 *
 * @type {Mocha.MochaOptions}
 */
const options = {
    // bail: true, // 첫 번째 테스트 실패 시 테스트 실행을 중단합니다.
    // exit: true, // 테스트가 완료된 후 Mocha 프로세스를 강제로 종료합니다. 이 옵션은 비동기 작업이 완료되지 않았을 때 유용합니다.
    // color: true,
}

// Mocha Test files.
const files = [
    './test/example/mocha_test.js',
    // './test/example/chai_test.js',
    './test/example/bind_test.js',
]

function runMocha () {
    const mocha = new Mocha(options);
    files.forEach(fc => { mocha.addFile(fc); });
    mocha.run((failures) => {
        // console.log('failures: ',failures);
    });
}
runMocha();
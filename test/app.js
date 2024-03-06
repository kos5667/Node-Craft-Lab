/*****************************************
 * Test 자동화.
 *****************************************/
const Mocha = require('mocha');

// Mocha 옵션 객체 생성
const options = {
}

// Mocha Test files.
const files = [
    './test/example/mocha_test.js',
    './test/example/chai_test.js',
]

function runMocha () {
    console.log('in...');
    const mocha = new Mocha(options);
    files.forEach(fc => { mocha.addFile(fc); });
    mocha.run();
}
runMocha();
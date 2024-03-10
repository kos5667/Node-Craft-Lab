/*****************************************
 * Test 자동화.
 *****************************************/
const Mocha = require('mocha')
    , async = require('async');

// Mocha 옵션 객체 생성
const options = {
}

// Mocha Test files.
const files = [
    // './test/example/mocha_test.js',
    // './test/example/chai_test.js',
    './test/example/bind_test.js',
]

function runMocha () {
    const mocha = new Mocha(options);
    files.forEach(fc => { mocha.addFile(fc); });
    mocha.run((failures) => {
        console.log('failures: ',failures);
    });
}
runMocha();
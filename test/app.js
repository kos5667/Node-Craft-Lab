/*****************************************
 * Test 자동화.
 *****************************************/
const Mocha = require('mocha');

// Mocha 옵션 객체 생성
const options = {
}

// Mocha Test files.
const mocha_files = [
    './test/example/exampleTest.js',
    './test/example/chai_test1.js'
]

function runMocha () {
    console.log('in...');
    const mocha = new Mocha(options);
    mocha_files.forEach(fc => {
        mocha.addFile(fc);
    })
    mocha.run()
}
runMocha();
/*****************************************
 * Test 자동화.
 *****************************************/
const Mocha = require('mocha');
const {runMocha} = require("mocha/lib/cli/run-helpers");

// Mocha 옵션 객체 생성
const mocha_options = {
}

// Mocha Test files.
const mocha_files = [
    './example/exampleTest.js'
]


runMocha(Mocha, mocha_options)
    .then(r => {
        console.log('in..')
    })
    .catch(e => {
        console.log(e);
    })


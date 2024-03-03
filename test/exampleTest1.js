// // test/exampleTest1.js
// ES 모듈 문법으로 Chai 비동기 로드
import('chai').then(mod => {
    const expect = mod.expect;

    console.log('test....');

    // 기본적인 단언(assertion) 테스트
    describe('String Test', function() {
        it('should return the correct length of a string', function() {
            let str = 'Hello, world';
            expect(str.length).to.equal(12);
        });
    });

    // 객체의 속성 검사
    describe('Object Property Test', function() {
        it('should have a property name', function() {
            let obj = { name: 'John', age: 30 };
            expect(obj).to.have.property('name');
            expect(obj).to.have.property('age').that.is.a('number');
        });
    });

    // Mocha는 비동기 테스트를 지원합니다. done 콜백을 사용하거나 Promise를 반환하면 됩니다.
    describe('Async Test', function() {
        it('should return a promise', function() {
            return new Promise((resolve) => resolve(2)).then(number => {
                expect(number).to.equal(2);
            });
        });
    });

    // 예외 처리 테스트 - 예외가 발생하는 경우를 테스트할 수 있습니다.
    function throwsError() {
        throw new Error('An error occurred');
    }

    describe('Exception Test', function() {
        it('should throw an error', function() {
            expect(throwsError).to.throw(Error, 'An error occurred');
        });
    });
});
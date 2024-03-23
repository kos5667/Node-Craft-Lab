/**
 * Chai
 */
import('chai').then(mod => {

    /**
     *
     * @type {Chai.ExpectStatic}
     */
    const expect = mod.expect;
    describe('### Chai Expect 스타일 예제', function() {
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

        // 배열과 요소 검사
        describe('Array Test', function() {
            it('should contain certain elements', function() {
                let arr = [1, 2, 3];
                expect(arr).to.be.an('array').that.includes(2);
                expect(arr).to.have.members([1, 2, 3]);
            });
        });

        // Expect 스타일 예제
        describe('Expect 스타일 예제', function() {
            it('값이 true인지 검사', function() {
                const isTrue = true;
                expect(isTrue).to.be.true;
            });

            it('객체의 속성 검사', function() {
                const obj = { name: 'John', age: 30 };
                expect(obj).to.have.property('name').with.lengthOf(4);
            });

            it('배열 내 요소 검사', function() {
                const arr = [1, 2, 3];
                expect(arr).to.include(2);
                expect(arr).to.have.members([1, 2, 3]);
            });
        });
    });

    /**
     *
     * @type {Chai.Should}
     */
    const should = mod.should();
    describe('### Chai Should 스타일 예제', function() {
        it('값이 true인지 검사', function() {
            const isTrue = true;
            isTrue.should.be.true;
        });

        it('객체의 속성 검사', function() {
            const obj = { name: 'John', age: 30 };
            obj.should.have.property('name').with.lengthOf(4);
        });

        it('배열 내 요소 검사', function() {
            const arr = [1, 2, 3];
            arr.should.include(2);
            arr.should.have.members([1, 2, 3]);
        });
    });

    /**
     *
     * @type {Chai.AssertStatic}
     */
    const assert = mod.assert;
    describe('### Chai Assert 스타일 예제', function() {
    });

});
## Chai란?
Chai는 Node.js 및 브라우저용 BDD(Behavior-Driven Development)/TDD(Test-Driven Development) assertion 라이브러리로, 개발자가 테스트 케이스를 보다 유연하고 직관적으로 작성할 수 있게 해줍니다. Chai는 `expect`, `should`, 그리고 `assert` 스타일의 assertions를 제공합니다.

### Chai 설치

프로젝트에 Chai를 설치하려면, 다음 npm 명령어를 실행합니다:

```bash
npm install chai --save-dev
```

### Chai 사용법

#### 1. **Expect 스타일**

`expect` 스타일은 BDD 스타일의 테스트 작성에 사용됩니다. 가독성이 높고, 체이닝을 통해 여러 단언을 연결할 수 있습니다.

```javascript
const expect = require('chai').expect;

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
```

#### 2. **Should 스타일**

`should` 스타일도 BDD 스타일의 테스트를 작성할 때 사용되며, `expect`와 유사하게 사용됩니다. 객체에 직접 `should` 프로퍼티를 추가하여 사용합니다.

```javascript
const chai = require('chai');
const should = chai.should();

describe('Should 스타일 예제', function() {
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
```

#### 3. **Assert 스타일**

`assert` 스타일은 TDD 스타일의 테스트를 작성할 때 사용되며, 함수 호출을 통해 단언을 진행합니다. `expect`나 `should`에 비해 좀 더 전통적인 방식입니다.

```javascript
const chai = require('chai');
const assert = chai.assert;

describe('Assert 스타일 예제', function() {
  it('값이 true인지 검사', function() {
    const isTrue = true;
    assert.isTrue(isTrue);
  });

  it('객체의 속성 검사', function() {
    const obj = { name: 'John', age: 30 };
    assert.property(obj, 'name');
    assert.lengthOf(obj.name, 4);
  });

  it('배열 내 요소 검사', function() {
    const arr = [1, 2, 3];
    assert.include(arr, 2);
    assert.sameMembers(arr, [1, 2, 3]);
  });
});
```

### 주요 API 메소드

BDD 스타일은 자연어와 유사한 구문을 사용하여 테스트의 의도를 명확하게 표현할 수 있도록 설계되었습니다. 이 스타일은 `.to`, `.be`, `.been`, `.is`, `.that`, `.which`, `.and`, `.has`, `.have`, `.with`, `.at`, `.of`, `.same`, `.but`, `.does`와 같은 체이닝 가능한 언어 체인을 제공합니다.

다음은 Chai BDD 스타일에서 자주 사용되는 몇 가지 주요 API 메소드의 예시입니다:

| 메소드                         | 설명                                                         |
| ------------------------------ | ------------------------------------------------------------ |
| `.not`                         | 체이닝을 통해 어떤 assertion이 거짓임을 선언합니다.          |
| `.deep`                        | 객체의 깊은 비교를 수행할 때 사용합니다.                     |
| `.any`                         | `.keys` 체크 시, 제공된 모든 키 중 하나라도 있으면 통과합니다. |
| `.all`                         | `.keys` 체크 시, 모든 키가 존재해야 합니다.                  |
| `.a(type)`                     | 주어진 타입이 맞는지 검사합니다.                             |
| `.include(value)`              | 배열이나 문자열, 객체에 특정 값이 포함되어 있는지 검사합니다. |
| `.ok`                          | 값이 truthy한지 검사합니다.                                  |
| `.true`                        | 값이 `true`인지 검사합니다.                                  |
| `.false`                       | 값이 `false`인지 검사합니다.                                 |
| `.null`                        | 값이 `null`인지 검사합니다.                                  |
| `.undefined`                   | 값이 `undefined`인지 검사합니다.                             |
| `.exist`                       | 값이 `null`이나 `undefined`가 아닌지 검사합니다.             |
| `.empty`                       | 객체, 배열, 문자열이 비어있는지 검사합니다.                  |
| `.equal(value)`                | 값이 주어진 값과 일치하는지 검사합니다 (`==`를 사용).        |
| `.eql(value)`                  | 값이 주어진 값과 깊은 비교로 일치하는지 검사합니다.          |
| `.above(value)`                | 숫자가 주어진 값보다 큰지 검사합니다.                        |
| `.least(value)`                | 숫자가 주어진 값 이상인지 검사합니다.                        |
| `.below(value)`                | 숫자가 주어진 값보다 작은지 검사합니다.                      |
| `.most(value)`                 | 숫자가 주어진 값 이하인지 검사합니다.                        |
| `.within(start, finish)`       | 숫자가 주어진 범위 내에 있는지 검사합니다.                   |
| `.instanceof(constructor)`     | 객체가 특정 생성자의 인스턴스인지 검사합니다.                |
| `.property(name, [value])`     | 객체에 주어진 이름의 속성이 있는지(옵션으로, 특정 값과 함께) 검사합니다. |
| `.own.property(name, [value])` | 객체에 주어진 이름의 자체 속성이 있는지(옵션으로, 특정 값과 함께) 검사합니다. |
| `.lengthOf(value)`             | 객체의 길이나 크기가 주어진 값과 일치하는지 검사합니다.      |
| `.match(regex)`                | 문자열이 정규 표현식과 일치하는지 검사합니다.                |
| `.string(substring)`           | 문자열이 특정 부분 문자열을 포함하는지 검사합니다.           |
| `.keys(key1, [key2], [...])`   | 객체가 주어진 키를 모두 가지고 있는지 검사합니다.            |
| `.throw(constructor)`          | 함수가 특정 예외를 던지는지 검사합니다.                      |
| `.respondTo(method)`           | 객체가 주어진 메소드를 가지고 있는지 검사합니다.             |
| `.itself`                      | 객체의 인스턴스 메소드가 아닌, 객체 자체의 메소드를 검사할 때 사용합니다. |
| `.satisfy(method)`             | 주어진 검사 함수를 만족하는지 검사합니다.                    |
| `.closeTo(expected, delta)`    | 숫자가 특정 범위 내에 있는지 검사합니다.                     |

Chai의 BDD 스타일 API는 매우 유연하고 강력하여, 다양한 종류의 데이터와 조건을 검사할 수 있게 해줍니다. 이를 통해 코드의 동작을 명확하게 기술하고, 의도된 대로 동작하는지 확실하게 검증할 수 있습니다.

<details>
  <summary>토글 접기/펼치기</summary>
  <div markdown="1">#</div>
</details>
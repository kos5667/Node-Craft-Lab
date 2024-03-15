# Node-Craft-Lab
*Node.js, Express, Javascript를 이용하여 다양한 기술들은 연구하는 공간.*

### 📌 기술 스택

#### Node.js

- **정의:** Node.js는 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임입니다. 이를 통해 개발자는 JavaScript를 사용하여 서버 측 애플리케이션을 개발할 수 있습니다. Node.js는 비동기 이벤트 주도 아키텍처를 사용하여 높은 처리량과 스케일러블한 네트워크 애플리케이션을 구현할 수 있게 해줍니다.
- **용도:** Node.js는 웹 서버, REST API 서버, 실시간 정보 처리 시스템 등 다양한 서버 사이드 애플리케이션 개발에 사용됩니다.

#### Express

- **정의:** Express는 Node.js를 위한 가장 인기 있는 웹 프레임워크 중 하나입니다. 이는 웹 애플리케이션 및 API 개발을 위한 간결하고 유연한 방법을 제공합니다. Express는 라우팅, 미들웨어 지원, 템플릿 엔진 통합 등과 같은 특징을 가지고 있어, 개발자가 웹 애플리케이션을 더 쉽고 빠르게 구축할 수 있게 돕습니다.
- **용도:** Express는 웹 애플리케이션의 구조를 설계하고, 웹 서버의 라우팅, 요청 처리 등의 복잡한 관리를 단순화하는 데 사용됩니다.

#### Mocha

- **정의**: Mocha는 JavaScript로 작성된 테스트 코드를 실행하기 위한 유연하고 기능이 풍부한 테스트 프레임워크입니다. 비동기 테스팅, 테스트 케이스 분류를 위한 유연한 보고 및 매핑 기능을 제공합니다.

- **용도**: Mocha는 Node.js 및 브라우저 환경에서 사용할 수 있으며, 단위 테스트와 통합 테스트를 포함한 광범위한 테스트 시나리오를 지원합니다. 개발자가 코드의 정확성을 검증하고, 예상대로 작동하는지 확인하기 위해 사용합니다. Mocha는 테스트 수행 과정을 구조화하고, 테스트 결과를 명확하게 보고하는 데 도움을 줍니다.

#### Chai

- **정의**: Chai는 BDD(Behavior-Driven Development) 및 TDD(Test-Driven Development)를 위한 assertion 라이브러리입니다. Chai는 `expect`, `should`, `assert` 등 다양한 스타일의 assertion을 제공하여, 개발자가 코드가 예상대로 동작함을 쉽게 선언할 수 있게 해줍니다.

- **용도**: Chai는 Mocha와 같은 테스트 프레임워크와 함께 사용되며, 코드의 동작을 검증하는 테스트 케이스를 작성하는 데 사용됩니다. Chai의 다양한 assertion 스타일은 개발자가 선호하는 방식으로 테스트 조건을 명시할 수 있게 해주며, 코드의 예상되는 동작을 표현하는데 유용합니다. Chai는 단언문을 통해 코드 테스트의 가독성과 유지보수성을 높여줍니다.

### 📌 진행 사항

<table style="text-align: center;">
    <thead>
        <tr>
            <th>제목</th>
            <th>설명</th>
            <th>비고</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><a href="doc/01_Create_Project.md"><strong>Create Project</strong></a></td>
            <td>Node.js와 Express를 이용한 Project생성.</td>
            <td>-</td>
        </tr>
        <tr>
            <td><a href="./doc/02_Node_초기화_기법.md"><strong>Node.js 초기화 기법</strong></a></td>
            <td>app.js에서 프로젝트를 초기화 하는 기법 </td>
            <td>-</td>
        </tr>
        <tr>
            <td rowspan="2"><a href="doc/03_TDD-Mocha.md"><strong>TDD-Mocha 사용법</strong></a></td>
            <td>Mocha를 이용하여 TDD환경 구축 및 사용방법 정리.</td>
            <td>-</td>
        </tr>
        <tr>
            <td>
                <a href="./doc/04_Mocha_사용법.md">Mocha</a> +
                <a href="./doc/05_Chai_사용법.md">Chai</a> 사용법.
            </td>
            <td>-</td>
        </tr>
        <tr>
            <td><a href="./doc/06_async-lib.md"><strong>async lib</strong></a></td>
            <td>async library 기능과 활용.</td>
            <td>-</td>
        </tr>
        <tr>
            <td><a href="./doc/07_body-parser.md"><strong>body-parser</strong></a></td>
            <td>body-parser 란?</td>
            <td>-</td>
        </tr>
        <tr>
            <td><a href="./doc/08_Redis_And_MongoDB.md"><strong>Redis And MongoDB</strong></a></td>
            <td>Redis And MongoDB 채택</td>
            <td>-</td>
        </tr>
        <tr>
            <td><a href="./doc/09_dotenv_사용법.md"><strong>dotenv 사용법</strong></a></td>
            <td>Dotenv로 서버 환변 세팅.</td>
            <td>-</td>
        </tr>
        <tr>
            <td><a href="./doc/10_winston_사용법.md"><strong>winston 사용법</strong></a></td>
            <td>winston을 활용한 Logging</td>
            <td>-</td>
        </tr>
        <tr>
            <td><a href="./doc/11_비동기_작업.md"><strong>비동기 작업</strong></a></td>
            <td>Callback vs Promise vs Async/Await</td>
            <td>-</td>
        </tr>
        <tr>
            <td><a href="./doc/12_즉시_실행_함수_표현식.md"><strong>즉시 실행 함수 표현식</strong></a></td>
            <td>Function 표현식</td>
            <td>-</td>
        </tr>
        <tr>
            <td><a href="#"><strong>#</strong></a></td>
            <td>#</td>
            <td>-</td>
        </tr>
	</tbody>
</table>

---

### 📌 참고 사항

- [TDD, BDD, DDD란?](https://github.com/kos5667/Document/blob/main/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%20%EA%B0%9C%EB%B0%9C%20%EB%B0%A9%EB%B2%95%EB%A1%A0/TDD%2CBDD%2CDDD%3F.md)
- [Mocha 사용법.](./doc/04_Mocha_사용법.md)

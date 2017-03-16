/**
 * Naver Javascript Coding convention
 * https://oss.navercorp.com/engineering/coding-convention
 * http://docs.navercorp.com/coding-convention/js.html
 */

module.exports = {
    "env": {
        "browser": true,
        "jquery": true,
        "amd": true
    },
    "globals": {
        "eg": true,
        "Hammer": true,
        "JSON": true
    },
    "rules": {
       
    }
};

// 2. 중괄호 (Brace)
// 2.1. 줄의 끝에서 중괄호 시작 (requireSpacesInFunction)
// 2.2. 조건/반복문/제어문에 중괄호 사용
// 3. 줄바꿈 (Line Wrapping)
// 3.1. 최대 줄 너비는 80 (18.12)
// 3.2. 줄
// 4. 주석(Comments) (17)
// 5. 빈 줄(Blank Lines)
// 5.1. 함수 선언 후 빈 줄 사용 지양
// 5.2. 함수 선언 간, 변수 선언 후 빈 줄 사용 준수
// 5.3. 명령문, 제어문간 빈 줄 사용 준수
// 6. 새 줄(New Lines)
// 6.1. 오브젝트 리터럴은 키와 값을 한 쌍으로 새 줄을 삽입한다.
// 6.2. else if, else, catch, finally, do 문 새 줄 사용 지양
// 6.3. 한 줄 명령문 새 줄 사용 준수
// 6.4. 함수의 빈 블록, 빈 몸체 새 줄 사용 준수(for, do..)
// 6.5. 파라미터, 닫는 괄호간 새 줄 사용 지양
// 7. 공백 (White spaces)
// 7.1. 공백은 탭을 사용한다.
// 7.2. 중괄호({})의 앞에 공백을 하나 넣는다.
// 7.3. 단항 연산자(!, ++..)와 피연산자 사이에 공백을 두지 않는다. (13.6에서 언급)
// 7.4. 산술 연산자, 비교 연산자 앞,뒤에 공백을 추가한다.(requireSpaceBeforeBinaryOperators, requireSpaceAfterBinaryOperators)
// 7.5. 종료 구분자(;) 앞에는 공백 사용 지양.
// 7.6. 콤마(,)은 뒤에 공백을 삽입한다.
// 7.7. 콜론(:)을 사용하는 경우에는 반드시 뒤에 공백을 삽입한다. (disallowSpaceAfterObjectKeys)
// 7.8. 괄호 안에 공백을 삽입하지 않는다.(disallowSpacesInsideArrayBrackets, disallowSpacesInsideObjectBrackets, disallowSpacesInsideParentheses)
// 7.9. 특정 키워드의 경우 뒤에 공백을 삽입한다. (requireSpaceAfterKeywords)
// 8. 이름(Names)
// 8.1. 공통 규칙
// 8.2. 네임스페이스 명명 규칙
// 8.3. 클래스명
// 8.4. 메서드명(Methods)
// 8.5. 변수명
// 8.6. 속성명
// 8.7. 상수 이름

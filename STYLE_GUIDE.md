# Naver JavaScript Style Guide

네이버 자바스크립트 스타일 가이드는 [Airbnb 자바스크립트 스타일 가이드](https://github.com/airbnb/javascript)를 기준으로 작성되었습니다.  

## Table of Contents

  1. [Types](#types)
  1. [References](#references)
  1. [Objects](#objects)
  1. [Arrays](#arrays)
  1. [Destructuring](#destructuring)
  1. [Strings](#strings)
  1. [Functions](#functions)
  1. [Arrow Functions](#arrow-functions)
  1. [Classes & Constructors](#classes--constructors)
  1. [Modules](#modules)
  1. [Iterators and Generators](#iterators-and-generators)
  1. [Properties](#properties)
  1. [Variables](#variables)
  1. [Hoisting](#hoisting)
  1. [Comparison Operators & Equality](#comparison-operators--equality)
  1. [Blocks](#blocks)
  1. [Comments](#comments)
  1. [Whitespace](#whitespace)
  1. [Commas](#commas)
  1. [Semicolons](#semicolons)
  1. [Type Casting & Coercion](#type-casting--coercion)
  1. [Naming Conventions](#naming-conventions)
  1. [Accessors](#accessors)
  1. [Events](#events)
  1. [jQuery](#jquery)

## Types
> [Airbnb](https://github.com/airbnb/javascript/blob/master/README.md#types)와 동일합니다.

  - [1.1](#1.1) <a name='1.1'></a> **Primitives**: primitive type은 그 값을 직접 조작합니다.
    + `string`
    + `number`
    + `boolean`
    + `null`
    + `undefined`

    ```javascript
    const foo = 1;
    let bar = foo;

    bar = 9;

    console.log(foo, bar); // => 1, 9
    ```

  - [1.2](#1.2) <a name='1.2'></a> **참조형**: 참조형(Complex)은 참조를 통해 값을 조작합니다.

    + `object`
    + `array`
    + `function`

    ```javascript
    const foo = [1, 2];
    const bar = foo;

    bar[0] = 9;

    console.log(foo[0], bar[0]); // => 9, 9
    ```

**[⬆ back to top](#table-of-contents)**

## References
> [Airbnb](https://github.com/airbnb/javascript/blob/master/README.md#references)와 동일합니다.

  - [2.1](#2.1) <a name='2.1'></a> 모든 참조는 `const` 를 사용하고, `var` 를 사용하지 마십시오.

    ```javascript
    // bad
    var a = 1;
    var b = 2;

    // good
    const a = 1;
    const b = 2;
    ```

  - [2.2](#2.2) <a name='2.2'></a> 참조를 재할당 해야한다면 `var` 대신 `let` 을 사용하십시오.

    ```javascript
    // bad
    var count = 1;
    if (true) {
      count += 1;
    }

    // good, use the let.
    let count = 1;
    if (true) {
      count += 1;
    }
    ```

  - [2.3](#2.3) <a name='2.3'></a> `let` 과 `const` 는 같이 블록스코프라는것을 유의하십시오.

    ```javascript
    // const 와 let 은 선언된 블록의 안에서만 존재합니다.
    {
      let a = 1;
      const b = 1;
    }
    console.log(a); // ReferenceError
    console.log(b); // ReferenceError
    ```

**[⬆ back to top](#table-of-contents)**

## Objects
> `3.6` 항목을 제외하고는 [Airbnb](https://github.com/airbnb/javascript/blob/master/README.md#objects)와 동일합니다.

  - [3.1](#3.1) <a name='3.1'></a> 오브젝트를 작성할때는, 리터럴 구문을 사용하십시오.
    ```javascript
    // bad
    const item = new Object();

    // good
    const item = {};
    ```

  - [3.2](#3.2) <a name='3.2'></a> 코드가 브라우저상의 스크립트로 실행될때 [예약어](http://es5.github.io/#x7.6.1)를 키로 이용하지 마십시오. IE8에서 작동하지 않습니다. [More info](https://github.com/airbnb/javascript/issues/61) 하지만 ES6 모듈안이나 서버사이드에서는 이용가능합니다.

    ```javascript
    // bad
    const superman = {
      default: {clark: "kent"},
      private: true,
    };

    // good
    const superman = {
      defaults: {clark: "kent"},
      hidden: true,
    };
    ```

  - [3.3](#3.3) <a name='3.3'></a> 예약어 대신 알기쉬운 동의어를 사용해 주십시오.

    ```javascript
    // bad
    const superman = {
      class: "alien",
    };

    // bad
    const superman = {
      klass: "alien",
    };

    // good
    const superman = {
      type: "alien",
    };
    ```

  - [3.4](#3.4) <a name='3.4'></a> 동적 프로퍼티명을 갖는 오브젝트를 작성할때, 계산된 프로퍼티명(computed property names)을 이용해 주십시오.

    ```javascript
    function getKey(k) {
      return a `key named ${k}`;
    }

    // bad
    const obj = {
      id: 5,
      name: "San Francisco",
    };
    obj[getKey("enabled")] = true;

    // good
    const obj = {
      id: 5,
      name: "San Francisco",
      ［getKey("enabled")]: true
    };
    ```

  - [3.5](#3.5) <a name='3.5'></a> 메소드의 단축구문을 이용해 주십시오.

    ```javascript
    // bad
    const atom = {
      value: 1,

      addValue: function (value) {
        return atom.value + value;
      },
    };

    // good
    const atom = {
      value: 1,

      addValue(value) {
        return atom.value + value;
      },
    };
    ```

  - [3.6](#objects--quoted-props) 속성명이 키워드(default, if, ...)일 경우에는 꼭 따옴표를 붙인다. 또한, `-`과 같이 속성명으로 지정할수 없는 경우에는 꼭 따옴표를 붙인다. eslint: [`quote-props`](http://eslint.org/docs/rules/quote-props.html)

    ```js
    // bad
    const bad = {
      foo: 3,
      default: 20,
      data-blah: 5
    };

    // good
    const good = {
      foo: 3,
      "default": 20,
      "data-blah": 5,
      10: "naver"
    };
    ```

  - [3.7](#3.7) <a name='3.7'></a> 프로퍼티의 단축구문은 오브젝트 선언의 시작부분에 그룹화 해주십시오.

    ```javascript
    const anakinSkywalker = "Anakin Skywalker";
    const lukeSkywalker = "Luke Skywalker";

    // bad
    const obj = {
      episodeOne: 1,
      twoJediWalkIntoACantina: 2,
      lukeSkywalker,
      episodeThree: 3,
      mayTheFourth: 4,
      anakinSkywalker,
    };

    // good
    const obj = {
      lukeSkywalker,
      anakinSkywalker,
      episodeOne: 1,
      twoJediWalkIntoACantina: 2,
      episodeThree: 3,
      mayTheFourth: 4,
    };
    ```

**[⬆ back to top](#table-of-contents)**

## Arrays
> [Airbnb](https://github.com/airbnb/javascript/blob/master/README.md#array)와 동일합니다.

  - [4.1](#4.1) <a name='4.1'></a> 배열을 작성 할 때는 리터럴 구문을 사용해 주십시오.

    ```javascript
    // bad
    const items = new Array();
    // good
    const items = [];
    ```

  - [4.2](#4.2) <a name='4.2'></a> 직접 배열에 항목을 대입하지 말고, Array#push를 이용해 주십시오.

    ```javascript
    const someStack = [];

    // bad
    someStack[someStack.length] = "abracadabra";

    // good
    someStack.push("abracadabra");
    ```

  - [4.3](#4.3) <a name='4.3'></a> 배열을 복사할때는 배열의 확장연산자 `...` 를 이용해 주십시오.

    ```javascript
    // bad
    const len = items.length;
    const itemsCopy = [];
    let i;

    for (i = 0; i < len; i++) {
      itemsCopy[i] = items[i];
    }

    // good
    const itemsCopy = [...items];
    ```

  - [4.4](#4.4) <a name='4.4'></a> array-like 오브젝트를 배열로 변환하는 경우는 Array#from을 이용해 주십시오.

    ```javascript
    const foo = document.querySelectorAll(".foo");
    const nodes = Array.from(foo);
    ```

**[⬆ back to top](#table-of-contents)**

## Destructuring
> [Airbnb](https://github.com/airbnb/javascript/blob/master/README.md#references)와 다르게 별도의 가이드를 제공하지 않습니다.

## Strings
> `6.1`,`6.2` 항목을 제외하고는 [Airbnb](https://github.com/airbnb/javascript/blob/master/README.md#strings)와 동일합니다.

  - [6.1](#strings--quotes) 따옴표는 쌍따옴표를 사용한다. 이스케이프한 경우는 예외로 홑따옴표를 사용할 수 있다. eslint: [`quotes`](http://eslint.org/docs/rules/quotes.html)

    ```javascript
    // bad
    var key = 'naver';
    var obj = {
      'key': '1'
    }

    // good
    var key = "naver";
    var obj = {
      "key": "1"
    }
    ```

  - [6.2](#strings--line-length) 문자열은 `100`자를 넘지 않는다.  `100`자가 넘는 긴 문자열인 경우 줄바꿈시 escape 문자(\)를 사용하지 않는다. escape문자 대신 `+` 연산자를 사용한다.

    ```javascript
    // bad
    const errorMessage = 'This is a super long error that was thrown because \
    of Batman. When you stop to think about how Batman had anything to do \
    with this, you would get nowhere \
    fast.';

    // good
    const errorMessage = 'This is a super long error that was thrown because ' +
      'of Batman. When you stop to think about how Batman had anything to do ' +
      'with this, you would get nowhere fast.';
    ```

  - [6.3](#6.3) <a name='6.3'></a> 주의: 문자연결을 과용하면 성능에 영향을 미칠 수 있습니다. [jsPerf](http://jsperf.com/ya-string-concat) & [Discussion](https://github.com/airbnb/javascript/issues/40).

    ```javascript
    // bad
    const errorMessage = "This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.";

    // bad
    const errorMessage = "This is a super long error that was thrown because \
    of Batman. When you stop to think about how Batman had anything to do \
    with this, you would get nowhere \
    fast.";

    // good
    const errorMessage = "This is a super long error that was thrown because " +
      "of Batman. When you stop to think about how Batman had anything to do " +
      "with this, you would get nowhere fast.";
    ```

  - [6.4](#6.4) <a name='6.4'></a> 프로그램에서 문자열을 생성하는 경우는 문자열 연결이 아닌 template strings를 이용해 주십시오.

    ```javascript
    // bad
    function sayHi(name) {
      return "How are you, " + name + "?";
    }

    // bad
    function sayHi(name) {
      return ["How are you, ", name, "?"].join();
    }

    // good
    function sayHi(name) {
      return `How are you, ${name}?`;
    }
    ```
  - [6.5](#6.5) <a name='6.5'></a> 절대로 `eval()` 을 이용하지 마십시오. 이것은 많은 취약점을 만들기 때문입니다.

**[⬆ back to top](#table-of-contents)**

## Functions
> `7.1 ~ 2`, `7.11 ~ 14` 항목을 제외하고는 [Airbnb](https://github.com/airbnb/javascript/blob/master/README.md#functions)와 동일합니다.

  - [7.1](#functions--declarations) 함수 스타일에 대해서는 별도의 스타일 가이드를 제공하지 않는다. eslint: [`func-style`](http://eslint.org/docs/rules/func-style) 

    ```javascript
    // type 1
    function foo() {
      // ...
    }

    // type 2
    const foo = function() {
      // ...
    };

    // type 3
    const foo = function bar() {
      // ...
    };
    ```
    
  - [7.2](#functions--iife) 즉시 실행함수는 함수를 괄호로 감싼다. eslint: [`wrap-iife`](http://eslint.org/docs/rules/wrap-iife.html)

    ```javascript
    // bad
    !function () {
      console.log("Welcome to the Internet. Please follow me.");
    }();

    // bad
    (function () {
      console.log("Welcome to the Internet. Please follow me.");
    }());

    // good
    (function () {
      console.log("Welcome to the Internet. Please follow me.");
    })();
    ```

  - [7.3](#7.3) <a name='7.3'></a> 함수이외의 블록 (if나 while같은) 안에서 함수를 선언하지 마십시오. 변수에 함수를 대입하는 대신 브라우저들은 그것을 허용하지만 모두가 다르게 해석합니다.

  - [7.4](#7.4) <a name='7.4'></a> **주의:** ECMA-262 사양에서는 `block` 은 statements의 일람으로 정의되어 있지만 함수선언은 statements 가 아닙니다. [Read ECMA-262's note on this issue](http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf#page=97).

    ```javascript
    // bad
    if (currentUser) {
      function test() {
        console.log("Nope.");
      }
    }

    // good
    let test;
    if (currentUser) {
      test = () => {
        console.log("Yup.");
      };
    }
    ```

  - [7.5](#7.5) <a name='7.5'></a> 절대 파라메터에 `arguments` 를 지정하지 마십시오. 이것은 함수스코프에 전해지는  `arguments` 오브젝트의 참조를 덮어써 버립니다.

    ```javascript
    // bad
    function nope(name, options, arguments) {
      // ...stuff...
    }

    // good
    function yup(name, options, args) {
      // ...stuff...
    }
    ```

  - [7.6](#7.6) <a name='7.6'></a> 절대 `arguments` 를 이용하지 마십시오. 대신에 rest syntax `...` 를 이용해 주십시오.

    ```javascript
    // bad
    function concatenateAll() {
      const args = Array.prototype.slice.call(arguments);
      return args.join('');
    }

    // good
    function concatenateAll(...args) {
      return args.join('');
    }
    ```

  - [7.7](#7.7) <a name='7.7'></a> 함수의 파라메터를 변이시키는 것보다 default 파라메터를 이용해 주십시오.

    ```javascript
    // really bad
    function handleThings(opts) {
      opts = opts || {};
      // ...
    }

    // still bad
    function handleThings(opts) {
      if (opts === void 0) {
        opts = {};
      }
      // ...
    }

    // good
    function handleThings(opts = {}) {
      // ...
    }
    ```

  - [7.8](#7.8) <a name='7.8'></a> side effect가 있을 default 파라메터의 이용을 피해 주십시오.

  ```javascript
  var b = 1;
  // bad
  function count(a = b++) {
    console.log(a);
  }
  count();  // 1
  count();  // 2
  count(3); // 3
  count();  // 3
  ```

  - [7.9](#7.9) <a name='7.9'></a> 항상 default 파라메터는 뒤쪽에 두십시오.

    ```javascript
    // bad
    function handleThings(opts = {}, name) {
      // ...
    }

    // good
    function handleThings(name, opts = {}) {
      // ...
    }
    ```

  - [7.10](#7.10) <a name='7.10'></a> 절대 새 함수를 작성하기 위해 Function constructor를 이용하지 마십시오.

  ```javascript
  // bad
  var add = new Function("a", "b", "return a + b");

  // still bad
  var subtract = Function("a", "b", "return a - b");
  ```

  - [7.11](#functions--signature-spacing) 익명함수는 function과 괄호 사이에 공백이 없다. 이름이 있는 함수는 함수이름과 괄호사이에 공백이 없다. async arrow function인 경우 async와 arrow function 사이에 공백이 있다. eslint: [`space-before-function-paren`](http://eslint.org/docs/rules/space-before-function-paren) [`space-before-blocks`](http://eslint.org/docs/rules/space-before-blocks)

    ```javascript
    // bad
    const f = function () {};
    const g = function a (){};
    const h = async(v,i) => {};

    // good
    const x = function() {};
    const y = function a() {};
    const z = async (v,i) => {};
    ```

  - [7.12](#functions--mutate-params) 가급적 mutate parameter는 사용하지 않는다. 하지만, 필요에 의해서는 주의하여 사용한다. eslint: [`no-param-reassign`](http://eslint.org/docs/rules/no-param-reassign.html)

    ```javascript
    // 권장하지 않음.
    function f1(obj) {
      obj.key = 1;
    }
    ```

  - [7.13](#functions--reassign-params) 파라미터를 재할당하지 마라. 단, 파라미터의 속성에 대해서는 재할당이 가능하다. eslint: [`no-param-reassign`](http://eslint.org/docs/rules/no-param-reassign.html)

    ```javascript
    // bad
    function f1(a) {
      a = 1;
      // ...
    }

    // bad
    function f2(a) {
      if (!a) { a = 1; }
      // ...
    }

    
    // good
    function f3(a) {
      const b = a || 1;
      // ...
    }

    // good
    function f4(a) {
      if (!a) { a.b = 1; }
      // ...
    }    

    ```

**[⬆ back to top](#table-of-contents)**

## Arrow Functions
> `8.2`, `8.4` 항목을 제외하고는 [Airbnb](https://github.com/airbnb/javascript/blob/master/README.md#arrow-functions)와 동일합니다.

  - [8.1](#8.1) <a name='8.1'></a> (익명함수를 전달하는 듯한)함수식을 이용하는 경우 arrow function 표기를 이용해 주십시오.

    ```javascript
    // bad
    [1, 2, 3].map(function (x) {
      const y = x + 1;
      return x * y;
    });

    // good
    [1, 2, 3].map(x => {
      const y = x + 1;
      return x * y;
    });
    ```

  - [8.2](#arrows--implicit-return) 함수의 몸체(body)가 단일 표현식이라면 대괄호를 생략하고, 묵시적으로 그 값은 반환값이 된다. eslint: [`arrow-parens`](http://eslint.org/docs/rules/arrow-parens.html), [`arrow-body-style`](http://eslint.org/docs/rules/arrow-body-style.html)

    ```javascript
    // bad
    [1, 2, 3].map(number => {
      const nextNumber = number + 1;
      `A string containing the ${nextNumber}.`;
    });

    // good
    [1, 2, 3].map(number => `A string containing the ${number}.`);

    // good
    [1, 2, 3].map(number => {
      const nextNumber = number + 1;
      return `A string containing the ${nextNumber}.`;
    });

    // good
    [1, 2, 3].map((number, index) => ({
      [index]: number,
    }));
    ```

  - [8.3](#8.3) <a name='8.3'></a> 식이 복수행에 걸쳐있을 경우는 가독성을 더욱 좋게하기 위해 소괄호()로 감싸 주십시오.

    ```js
    // bad
    [1, 2, 3].map(number => "As time went by, the string containing the " +
      "${number} became much longer. So we needed to break it over multiple " +
      "lines."
    );

    // good
    [1, 2, 3].map(number => (
      "As time went by, the string containing the ${number} became much " +
      "longer. So we needed to break it over multiple lines."
    ));
    ```

  - [8.4](#arrows--one-arg-parens) 함수가 단일 파라미터인 경우, 괄호는 생략한다.

    ```javascript
    // bad
    [1, 2, 3].map((x) => x * x);

    // good
    [1, 2, 3].map(x => x * x);

    // good
    [1, 2, 3].map(number => (
      `A long string with the ${number}. It’s so long that we don’t want it to take up space on the .map line!`
    ));

    // good
    [1, 2, 3].map(x => {
      const y = x + 1;
      return x * y;
    });

    // bad
    [1, 2, 3].map((x) => {
      const y = x + 1;
      return x * y;
    });
    ```

**[⬆ back to top](#table-of-contents)**

## Classes & Constructors
> [Airbnb](https://github.com/airbnb/javascript/blob/master/README.md#classes--constructors)와 동일합니다.

  - [9.1](#9.1) <a name='9.1'></a> `prototype` 을 직접 조작하는것을 피하고 항상 `class` 를 이용해 주십시오.

    ```javascript
    // bad
    function Queue(contents = []) {
      this._queue = [...contents];
    }
    Queue.prototype.pop = function() {
      const value = this._queue[0];
      this._queue.splice(0, 1);
      return value;
    }

    // good
    class Queue {
      constructor(contents = []) {
        this._queue = [...contents];
      }
      pop() {
        const value = this._queue[0];
        this._queue.splice(0, 1);
        return value;
      }
    }
    ```

  - [9.2](#9.2) <a name='9.2'></a> 상속은 `extends` 를 이용해 주십시오.

    ```javascript
    // bad
    const inherits = require("inherits");
    function PeekableQueue(contents) {
      Queue.apply(this, contents);
    }
    inherits(PeekableQueue, Queue);
    PeekableQueue.prototype.peek = function() {
      return this._queue[0];
    }

    // good
    class PeekableQueue extends Queue {
      peek() {
        return this._queue[0];
      }
    }
    ```

  - [9.3](#9.3) <a name='9.3'></a> 메소드의 반환값으로 `this` 를 반환하는 것으로 메소드채이닝을 할 수 있습니다.

    ```javascript
    // bad
    Jedi.prototype.jump = function() {
      this.jumping = true;
      return true;
    };

    Jedi.prototype.setHeight = function(height) {
      this.height = height;
    };

    const luke = new Jedi();
    luke.jump(); // => true
    luke.setHeight(20); // => undefined

    // good
    class Jedi {
      jump() {
        this.jumping = true;
        return this;
      }

      setHeight(height) {
        this.height = height;
        return this;
      }
    }

    const luke = new Jedi();

    luke.jump()
      .setHeight(20);
    ```


  - [9.4](#9.4) <a name='9.4'></a> 독자의 toString()을 작성하는것을 허용하지만 올바르게 동작하는지와 side effect 가 없는지를 확인해 주십시오.

    ```javascript
    class Jedi {
      constructor(options = {}) {
        this.name = options.name || "no name";
      }

      getName() {
        return this.name;
      }

      toString() {
        return `Jedi - ${this.getName()}`;
      }
    }
    ```

**[⬆ back to top](#table-of-contents)**

## Modules
> `10.5`, `10.9` 항목을 제외하고는 [Airbnb](https://github.com/airbnb/javascript/blob/master/README.md#modules)와 동일합니다.

  - [10.1](#10.1) <a name='10.1'></a> 비표준 모듈시스템이 아닌 항상 (`import`/`export`) 를 이용해 주십시오. 

    ```javascript
    // bad
    const AirbnbStyleGuide = require("./AirbnbStyleGuide");
    module.exports = AirbnbStyleGuide.es6;

    // ok
    import AirbnbStyleGuide from "./AirbnbStyleGuide";
    export default AirbnbStyleGuide.es6;

    // best
    import {es6} from "./AirbnbStyleGuide";
    export default es6;
    ```

  - [10.2](#10.2) <a name='10.2'></a> wildcard import 는 이용하지 마십시오.

    ```javascript
    // bad
    import * as AirbnbStyleGuide from "./AirbnbStyleGuide";

    // good
    import AirbnbStyleGuide from "./AirbnbStyleGuide";
    ```

  - [10.3](#10.3) <a name='10.3'></a> import 문으로부터 직접 export 하는것은 하지말아 주십시오.

    ```javascript
    // bad
    // filename es6.js
    export {es6 as default} from "./airbnbStyleGuide";

    // good
    // filename es6.js
    import {es6} from "./AirbnbStyleGuide";
    export default es6;
    ```

  - [10.4](#modules--no-duplicate-imports) import는 중복되지 않게 한 곳에서 import 한다.
 eslint: [`no-duplicate-imports`](http://eslint.org/docs/rules/no-duplicate-imports)

    ```javascript
    // bad
    import foo from "foo";
    // … some other imports … //
    import {named1, named2} from "foo";

    // good
    import foo, {named1, named2} from "foo";

    // good
    import foo, {
      named1,
      named2
    } from "foo";
    ```

  - [10.5](#modules--no-mutable-exports) mutable 객체를 export 하는 것에 대해 강제하지 않습니다.

  - [10.6](#modules--prefer-default-export) export가 하나일 경우, default export를 사용하라. 
 eslint: [`import/prefer-default-export`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md)

    ```javascript
    // bad
    export function foo() {}

    // good
    export default function foo() {}
    ```

  - [10.7](#modules--imports-first) 모든 `import`문은 상위에 위치한다.
 eslint: [`import/first`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md)
    > Why? Since `import`s are hoisted, keeping them all at the top prevents surprising behavior.

    ```javascript
    // bad
    import foo from "foo";
    foo.init();

    import bar from "bar";

    // good
    import foo from "foo";
    import bar from "bar";

    foo.init();
    ```

  - [10.8](#modules--multiline-imports-over-newlines) 멀티라인 imports 문은 배열이나 오브젝트의 literal과 같이 표현한다.

    ```javascript
    // bad
    import {longNameA, longNameB, longNameC, longNameD, longNameE} from "path";

    // good
    import {
      longNameA,
      longNameB,
      longNameC,
      longNameD,
      longNameE
    } from "path";
    ```

  - [10.9](#modules--no-webpack-loader-syntax) 웹팩 로더 문법 사용에 대해 강제하지 않습니다.

**[⬆ back to top](#table-of-contents)**

## Iterators and Generators
> [Airbnb](https://github.com/airbnb/javascript/blob/master/README.md#iterators-and-generators)와 다르게 별도의 가이드를 제공하지 않습니다.

## Properties
> [Airbnb](https://github.com/airbnb/javascript/blob/master/README.md#properties)와 동일합니다.

  - [12.1](#12.1) <a name='12.1'></a> 프로퍼티에 억세스하는 경우는 점 `.` 을 사용해 주십시오.

    ```javascript
    const luke = {
      jedi: true,
      age: 28,
    };

    // bad
    const isJedi = luke["jedi"];

    // good
    const isJedi = luke.jedi;
    ```

  - [12.2](#12.2) <a name='12.2'></a> 변수를 사용해 프로퍼티에 억세스하는 경우는 대괄호 `[]` 를 사용해 주십시오.

    ```javascript
    const luke = {
      jedi: true,
      age: 28,
    };

    function getProp(prop) {
      return luke[prop];
    }

    const isJedi = getProp("jedi");
    ```

**[⬆ back to top](#table-of-contents)**

## Variables
> `13.1`, `13.3` 항목을 제외하고는 [Airbnb](https://github.com/airbnb/javascript/blob/master/README.md#variables)와 동일합니다.
 
  - [13.1](#13.1) <a name='13.1'></a> 변수를 선언 할 때는 항상 `const` 를 사용해 주십시오. 그렇게 하지 않으면 글로벌 변수로 선언됩니다. 
    ```javascript
    // bad
    superPower = new SuperPower();

    // good
    const superPower = new SuperPower();
    ```

  - [13.2](#variables--one-const) 변수 선언은 변수당 하나씩 사용한다. eslint: [`one-var`](http://eslint.org/docs/rules/one-var.html)

    ```javascript
    // bad
    const items = getItems(),
        goSportsTeam = true,
        dragonball = "z";

    // bad
    // (compare to above, and try to spot the mistake)
    const items = getItems(),
        goSportsTeam = true;
        dragonball = "z";

    // good
    const items = getItems();
    const goSportsTeam = true;
    const dragonball = "z";
    ```

  - [13.3](#13.3) <a name='13.3'></a> 우선 `const` 를 그룹화하고 다음에 `let` 을 그룹화 해주십시오.

    ```javascript
    // bad
    let i, len, dragonball,
        items = getItems(),
        goSportsTeam = true;

    // bad
    let i;
    const items = getItems();
    let dragonball;
    const goSportsTeam = true;
    let len;

    // good
    const goSportsTeam = true;
    const items = getItems();
    let dragonball;
    let i;
    let length;
    ```

  - [13.4](#variables--define-where-used) `var`로 변수를 선언 하는 경우에는 상단에 변수를 선언한다.  `let`과 `const`을 사용할 때는 블럭 스코프 이기 때문에, 변수가 사용될 적당한 위치에 변수를 선언한다.

    ```javascript
    // bad
    function foo() {
      var i = 0;
      if (i > 0) {
        var j = 0;
      }
    }

    // good
    function foo() {
      var i = 0;
      var j = 0;
      if (i > 0) {
        j = 0;
      }
    }

    // bad - 불필요한 함수 호출
    function checkName(hasName) {
      const name = getName();

      if (hasName === 'test') {
        return false;
      }

      if (name === 'test') {
        this.setName('');
        return false;
      }

      return name;
    }

    // good
    function checkName(hasName) {
      if (hasName === 'test') {
        return false;
      }

      const name = getName();

      if (name === 'test') {
        this.setName('');
        return false;
      }

      return name;
    }
    ```

  - [13.6](#variables--unary-increment-decrement) ++, -- 연산자 사용이 가능하다. 연산자와 피연산자 사이에 공백을 두지 않는다. eslint [`no-plusplus`](http://eslint.org/docs/rules/no-plusplus)

    ```javascript
    // bad
    ++ i;
    i ++;

    // good
    ++i;
    i++;
    ```

**[⬆ back to top](#table-of-contents)**

## Hoisting
> [Airbnb](https://github.com/airbnb/javascript/blob/master/README.md#hoisting)와 동일합니다.


  - [14.1](#14.1) <a name='14.1'></a> `var` 선언은 할당이 없이 스코프의 선두에 hoist 됩니다. `const` 와 `let` 선언은[Temporal Dead Zones (TDZ)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Temporal_dead_zone_and_errors_with_let) 라고 불리는 새로운 컨셉의 혜택을 받고 있습니다.
    ```javascript
    // (notDefined 가 글로벌변수에 존재하지 않는다고 판정한 경우.)
    // 잘 동작하지 않습니다.
    function example() {
      console.log(notDefined); // => throws a ReferenceError
    }

    // 그 변수를 참조하는 코드의 뒤에서 그 변수를 선언한 경우
    // 변수가 hoist 된 상태에서 동작합니다..
    // 주의：`true` 라는 값 자체는 hoist 되지 않습니다.
    function example() {
      console.log(declaredButNotAssigned); // => undefined
      var declaredButNotAssigned = true;
    }

    // 인터프리터는 변수선언을 스코프의 선두에 hoist 합니다.
    // 위의 예는 다음과 같이 다시 쓸수 있습니다.
    function example() {
      let declaredButNotAssigned;
      console.log(declaredButNotAssigned); // => undefined
      declaredButNotAssigned = true;
    }

    // const 와 let 을 이용한 경우
    function example() {
      console.log(declaredButNotAssigned); // => throws a ReferenceError
      console.log(typeof declaredButNotAssigned); // => throws a ReferenceError
      const declaredButNotAssigned = true;
    }
    ```

  - [14.2](#14.2) <a name='14.2'></a> 익명함수의 경우 함수가 할당되기 전의 변수가 hoist 됩니다.

    ```javascript
    function example() {
      console.log(anonymous); // => undefined

      anonymous(); // => TypeError anonymous is not a function

      var anonymous = function() {
        console.log('anonymous function expression');
      };
    }
    ```

  - [14.3](#14.3) <a name='14.3'></a> 명명함수의 경우도 똑같이 변수가 hoist 됩니다. 함수명이나 함수본체는 hoist 되지 않습니다.

    ```javascript
    function example() {
      console.log(named); // => undefined

      named(); // => TypeError named is not a function

      superPower(); // => ReferenceError superPower is not defined

      var named = function superPower() {
        console.log('Flying');
      };
    }

    // 함수명과 변수명이 같은 경우도 같은 현상이 발생합니다.
    function example() {
      console.log(named); // => undefined

      named(); // => TypeError named is not a function

      var named = function named() {
        console.log('named');
      }
    }
    ```

  - [14.4](#14.4) <a name='14.4'></a> 함수선언은 함수명과 함수본체가 hoist 됩니다.

    ```javascript
    function example() {
      superPower(); // => Flying

      function superPower() {
        console.log("Flying");
      }
    }
    ```

**[⬆ back to top](#table-of-contents)**

## Comparison Operators & Equality
> [Airbnb](https://github.com/airbnb/javascript/blob/master/README.md#comparison-operators--equality)와 동일합니다.


  - [15.1](#15.1) <a name='15.1'></a> `==` 이나 `!=` 보다 `===` 와 `!==` 을 사용해 주십시오.

  - [15.2](#15.2) <a name='15.2'></a> `if` 문과 같은 조건식은 `ToBoolean` 메소드에 의한 강제형변환으로 평가되어 항상 다음과 같은 심플한 룰을 따릅니다.
    + **오브젝트** 는 **true** 로 평가됩니다.
    + **undefined** 는 **false** 로 평가됩니다.
    + **null** 은 **false** 로 평가됩니다.
    + **부울값** 은 **boolean형의 값** 으로 평가됩니다.
    + **수치** 는 **true** 로 평가됩니다. 하지만 **+0, -0, or NaN** 의 경우는 **false** 입니다.
    + **문자열** 은 **true** 로 평가됩니다. 하지만 빈문자 `""` 의 경우는 **false** 입니다.

    ```javascript
    if ([0]) {
      // true
      // 배열은 오브젝트이므로 true 로 평가됩니다.
    }
    ```

  - [15.3](#15.3) <a name='15.3'></a> 단축형을 사용해 주십시오.

    ```javascript
    // bad
    if (name !== "") {
      // ...stuff...
    }

    // good
    if (name) {
      // ...stuff...
    }

    // bad
    if (collection.length > 0) {
      // ...stuff...
    }

    // good
    if (collection.length) {
      // ...stuff...
    }
    ```

**[⬆ back to top](#table-of-contents)**

## Blocks
> [Airbnb](https://github.com/airbnb/javascript/blob/master/README.md#blocks)와 다른 가이드를 제공합니다.

  - [16.1](#blocks--braces) 중괄호는 클래스, 메서드, 제어문의 블럭을 구분한다.  중괄호는 클래스 선언, 메서드 선언, 조건/반복문/제어문,줄의 마지막에서 시작한다.

    ```javascript
    // bad
    const Empty = function()
    {
    }

    // good
    const Empty = function() {
    }

    switch (type) {
      case 0 :
        break;
      case 1 : {
        break;
      }
      default :
        common();
    }

    if (true) {
      return;
    } else if (false) {
      return;
    } else {
    }
    ```

  - [16.2](#blocks--cuddled-elses) 조건/반복문/제어문에 중괄호 사용한다. 조건/반복문/제어문이 한줄로 끝이라도 중괄호를 활용한다.

    ```javascript
    // bad
    if (exp == null) return false;
    for (var i in obj) if ( i === "key" ) return obj[i];

    // good
    if (exp == null) {
      return false;
    }

    for (var i in obj) {
      if ( i === "stop" ) {
        return obj[i];
      }
    }
    ```

**[⬆ back to top](#table-of-contents)**

## Comments
> [Airbnb](https://github.com/airbnb/javascript/blob/master/README.md#comments)와 동일합니다.

  - [17.1](#17.1) <a name='17.1'></a> 복수행의 코멘트는 `/** ... */` 을 사용해 주십시오. 그 안에는 설명과 모든 파라메터, 반환값에 대해 형이나 값을 기술해 주십시오.

    ```javascript
    // bad
    // make() returns a new element
    // based on the passed in tag name
    //
    // @param {String} tag
    // @return {Element} element
    function make(tag) {

      // ...stuff...

      return element;
    }

    // good
    /**
     * make() returns a new element
     * based on the passed in tag name
     *
     * @param {String} tag
     * @return {Element} element
     */
    function make(tag) {

      // ...stuff...

      return element;
    }
    ```

  - [17.2](#17.2) <a name='17.2'></a> 단일행 코멘트에는 `//` 을 사용해 주십시오. 코멘트를 추가하고 싶은 코드의 상부에 배치해 주십시오. 또한, 코멘트의 앞에 빈행을 넣어 주십시오.

    ```javascript
    // bad
    const active = true;  // is current tab

    // good
    // is current tab
    const active = true;

    // bad
    function getType() {
      console.log("fetching type...");
      // set the default type to "no type"
      const type = this._type || "no type";

      return type;
    }

    // good
    function getType() {
      console.log("fetching type...");

      // set the default type to "no type"
      const type = this._type || "no type";

      return type;
    }

    // also good
    function getType() {
      // set the default type to "no type"
      const type = this._type || "no type";

      return type;
    }
    ```

  - [17.3](#17.3) <a name='17.3'></a> 문제를 지적하고 재고를 촉구하는 경우나 문제의 해결책을 제안하는 경우 등, 코멘트의 앞에  `FIXME` 나 `TODO` 를 붙이는 것으로 다른 개발자의 빠른 이해를 도울수 있습니다. 이런것들은 어떤 액션을 따른다는 의미로 통상의 코멘트와는 다릅니다. 액션이라는 것은 `FIXME -- 해결이 필요` 또는 `TODO -- 구현이 필요` 를 뜻합니다.

  - [17.4](#17.4) <a name='17.4'></a> 문제에 대한 주석으로써 `// FIXME:` 를 사용해 주십시오.

    ```javascript
    class Calculator extends Abacus {
      constructor() {
        super();

        // FIXME: shouldn't use a global here
        total = 0;
      }
    }
    ```

  - [17.5](#17.5) <a name='17.5'></a> 문제의 해결책에 대한 주석으로 `// TODO:` 를 사용해 주십시오.

    ```javascript
    class Calculator extends Abacus {
      constructor() {
        super();

        // TODO: total 은 옵션 파라메터로 설정해야함.
        this.total = 0;
      }
    }
    ```

**[⬆ back to top](#table-of-contents)**

## Whitespace
`18.1`, `18.6`, `18. 11 ~ 13` 항목을 제외하고는 [Airbnb](https://github.com/airbnb/javascript/blob/master/README.md#whitespace)와 동일합니다.
 
  - [18.1](#whitespace--spaces) 공백은 탭을 사용한다. eslint: [`indent`](http://eslint.org/docs/rules/indent.html)

    ```javascript
    // bad
    function() {
    ∙∙∙∙var name;
    }

    // bad
    function() {
    ∙var name;
    }

    // good
    function() {
      var name;
    }
    ```


  - [18.2](#18.2) <a name='18.2'></a> 주요 중괄호 ({}) 앞에는 스페이스를 1개 넣어 주십시오.

    ```javascript
    // bad
    function test(){
      console.log("test");
    }

    // good
    function test() {
      console.log("test");
    }

    // bad
    dog.set("attr",{
      age: "1 year",
      breed: "Bernese Mountain Dog",
    });

    // good
    dog.set("attr", {
      age: "1 year",
      breed: "Bernese Mountain Dog",
    });
    ```

  - [18.3](#18.3) <a name='18.3'></a> 제어구문 (`if` 문이나 `while` 문 등) 의 소괄호 (()) 앞에는 스페이스를 1개 넣어 주십시오. 함수선언이나 함수호출시 인수리스트의 앞에는 스페이스를 넣지 마십시오.

    ```javascript
    // bad
    if(isJedi) {
      fight ();
    }

    // good
    if (isJedi) {
      fight();
    }

    // bad
    function fight () {
      console.log ("Swooosh!");
    }

    // good
    function fight() {
      console.log("Swooosh!");
    }
    ```

  - [18.4](#18.4) <a name='18.4'></a> 연산자 사이에는 스페이스를 넣어 주십시오.

    ```javascript
    // bad
    const x=y+5;

    // good
    const x = y + 5;
    ```

  - [18.5](#18.5) <a name='18.5'></a> 파일 끝에는 개행문자를 1개 넣어 주십시오.

    ```javascript
    // bad
    (function(global) {
      // ...stuff...
    })(this);
    ```

    ```javascript
    // bad
    (function(global) {
      // ...stuff...
    })(this);↵
    ↵
    ```

    ```javascript
    // good
    (function(global) {
      // ...stuff...
    })(this);↵
    ```

  - [18.6](#whitespace--chains) 메소드 체인이 2개 초과한 경우, 적절히 줄 바꿈을 하여 사용한다. 메서드 체이닝을 하여 줄바꿈을 할 때 마침표(.) 다음에 줄 바꿈을 한다. 줄 바꿈 후에는 가독성을 위하여 자동 들여쓰기를 한다.  eslint: [`newline-per-chained-call`](http://eslint.org/docs/rules/newline-per-chained-call) [`no-whitespace-before-property`](http://eslint.org/docs/rules/no-whitespace-before-property)

    ```javascript
    // bad
    $('#items').find('.selected').highlight().end().find('.open').updateCount();

    // bad
    $('#items').
      find('.selected').
        highlight().
        end().
      find('.open').
        updateCount();

    // good
    $('#items')
      .find('.selected')
        .highlight()
        .end()
      .find('.open')
        .updateCount();

    // bad
    const leds = stage.selectAll('.led').data(data).enter().append('svg:svg').classed('led', true)
        .attr('width', (radius + margin) * 2).append('svg:g')
        .attr('transform', `translate(${radius + margin},${radius + margin})`)
        .call(tron.led);

    // good
    const leds = stage.selectAll('.led')
        .data(data)
      .enter().append('svg:svg')
        .classed('led', true)
        .attr('width', (radius + margin) * 2)
      .append('svg:g')
        .attr('transform', `translate(${radius + margin},${radius + margin})`)
        .call(tron.led);

    // good
    const leds = stage.selectAll('.led').data(data);
    ```

  - [18.7](#18.7) <a name='18.7'></a> 문의 앞과 블록의 뒤에는 빈행을 남겨 주십시오.

    ```javascript
    // bad
    if (foo) {
      return bar;
    }
    return baz;

    // good
    if (foo) {
      return bar;
    }

    return baz;

    // bad
    const obj = {
      foo() {
      },
      bar() {
      },
    };
    return obj;

    // good
    const obj = {
      foo() {
      },

      bar() {
      },
    };

    return obj;

    // bad
    const arr = [
      function foo() {
      },
      function bar() {
      },
    ];
    return arr;

    // good
    const arr = [
      function foo() {
      },

      function bar() {
      },
    ];

    return arr;
    ```

  - [18.8](#18.8) <a name='18.8'></a> 블록에 빈행을 끼워 넣지 마십시오.

    ```javascript
    // bad
    function bar() {

      console.log(foo);

    }

    // also bad
    if (baz) {

      console.log(qux);
    } else {
      console.log(foo);

    }

    // good
    function bar() {
      console.log(foo);
    }

    // good
    if (baz) {
      console.log(qux);
    } else {
      console.log(foo);
    }
    ```

  - [18.9](#18.9) <a name='18.9'></a> 소괄호()의 안쪽에 스페이스를 추가하지 마십시오.

    ```javascript
    // bad
    function bar( foo ) {
      return foo;
    }

    // good
    function bar(foo) {
      return foo;
    }

    // bad
    if ( foo ) {
      console.log(foo);
    }

    // good
    if (foo) {
      console.log(foo);
    }
    ```

  - [18.10](#18.10) <a name='18.10'></a> 대괄호([])의 안쪽에 스페이스를 추가하지 마십시오.

    ```javascript
    // bad
    const foo = [ 1, 2, 3 ];
    console.log(foo[ 0 ]);

    // good
    const foo = [1, 2, 3];
    console.log(foo[0]);
    ```

  - [18.11](#whitespace--in-braces) 괄호 안에 공백을 삽입하지 않는다. eslint: [`object-curly-spacing`](http://eslint.org/docs/rules/object-curly-spacing.html)

    ```javascript
    // bad
    var obj = { };
    var obj = { "a": 2 };
    var arr = [ ];
    var arr = [ 1, 2 ];
    function foo( a, b ) {

    }

    // good
    var obj = {};
    var obj = {"a": 2};
    var arr = [];
    var arr = [1, 2];
    function foo(a, b) {

    }
    ```

  - [18.12](#whitespace--max-len) 최대 줄 너비는 `100` 이다. 
    고해상도 모니터(해상도 1280*1024)사용이 보편화 됨에 따라, 최대 줄 사용 너비는 100자까지 가능하다.
    eslint: [`max-len`](http://eslint.org/docs/rules/max-len.html)

    > Why? 가독성과 유지보수성을 높이는데 유용하다.

    ```javascript
    // bad
    const foo = jsonData && jsonData.foo && jsonData.foo.bar && jsonData.foo.bar.baz && jsonData.foo.bar.baz.quux && jsonData.foo.bar.baz.quux.xyzzy;

    // bad
    $.ajax({ method: 'POST', url: 'https://airbnb.com/', data: { name: 'John' } }).done(() => console.log('Congratulations!')).fail(() => console.log('You have failed this city.'));

    // good
    const foo = jsonData &&
      jsonData.foo &&
      jsonData.foo.bar &&
      jsonData.foo.bar.baz &&
      jsonData.foo.bar.baz.quux &&
      jsonData.foo.bar.baz.quux.xyzzy;
    ```

 
  - [18.13](#whitespace--operator-line) 연산식의 경우에는 연산자 후에 줄 바꿈을 한다. 상위 레벨의 깊이에 맞게 들여쓰기를 한다

    ```javascript
    // bad
    const sum = 100 + 200 + 300 
    + 400 + 500 + 600 + 700 + 800;

    // good
    const sum = 100 + 200 + 300 + 
         400 + 500 + 600 + 700 + 800;
    ```

**[⬆ back to top](#table-of-contents)**

## Commas
> [Airbnb](https://github.com/airbnb/javascript/blob/master/README.md#commas)와 동일합니다.

  - [19.1](#19.1) <a name='19.1'></a> 콤마는 뒤에 표기하세요

    ```javascript
    // bad
    const story = [
        once
      , upon
      , aTime
    ];

    // good
    const story = [
      once,
      upon,
      aTime,
    ];

    // bad
    const hero = {
        firstName: "Ada"
      , lastName: "Lovelace"
      , birthYear: 1815
      , superPower: "computers"
    };

    // good
    const hero = {
      firstName: "Ada",
      lastName: "Lovelace",
      birthYear: 1815,
      superPower: "computers"
    };
    ```

  - [19.2](#19.2) <a name='19.2'></a> 끝에 콤마를 넣어주세요

    ```javascript
    // bad - git diff without trailing comma
    const hero = {
         firstName: "Florence",
    -    lastName: "Nightingale"
    +    lastName: "Nightingale",
    +    inventorOf: ["coxcomb graph", "modern nursing"]
    };

    // good - git diff with trailing comma
    const hero = {
         firstName: "Florence",
         lastName: "Nightingale",
    +    inventorOf: ["coxcomb chart", "modern nursing"],
    };

    // bad
    const hero = {
      firstName: "Dana",
      lastName: "Scully"
    };

    const heroes = [
      "Batman",
      "Superman"
    ];

    // good
    const hero = {
      firstName: "Dana",
      lastName: "Scully",
    };

    const heroes = [
      "Batman",
      "Superman",
    ];
    ```

**[⬆ back to top](#table-of-contents)**

## Semicolons
> [Airbnb](https://github.com/airbnb/javascript/blob/master/README.md#semicolons)와 동일합니다.

  - [20.1](#20.1) <a name='20.1'></a> `;`은 문장의 끝에 표기합니다.

    ```javascript
    // bad
    (function() {
      const name = "Skywalker"
      return name
    })()

    // good
    (() => {
      const name = "Skywalker";
      return name;
    })();

    // good
    ;(() => {
      const name = "Skywalker";
      return name;
    })();
    ```

**[⬆ back to top](#table-of-contents)**

## Type Casting & Coercion
> [Airbnb](https://github.com/airbnb/javascript/blob/master/README.md#type-casting--coercion)와 동일합니다.

  - [21.1](#21.1) <a name='21.1'></a> 문의 선두에서 형의 강제를 행합니다.

  - [21.2](#21.2) <a name='21.2'></a> 문자열의 경우:

    ```javascript
    //  => this.reviewScore = 9;

    // bad
    const totalScore = this.reviewScore + "";

    // good
    const totalScore = String(this.reviewScore);
    ```

  - [21.3](#21.3) <a name='21.3'></a> 수치의 경우: `Number` 로 형변환하는 경우는 `parseInt` 를 이용하고, 항상 형변환을 위한 기수를 인수로 넘겨 주십시오.

    ```javascript
    const inputValue = "4";

    // bad
    const val = new Number(inputValue);

    // bad
    const val = +inputValue;

    // bad
    const val = inputValue >> 0;

    // bad
    const val = parseInt(inputValue);

    // good
    const val = Number(inputValue);

    // good
    const val = parseInt(inputValue, 10);
    ```

  - [21.4](#21.4) <a name='21.4'></a> 무언가의 이유로 인해 `parseInt` 가 bottleneck 이 되어, [성능적인 이유](http://jsperf.com/coercion-vs-casting/3)로 Bitshift를 사용할 필요가 있는 경우
  하려고 했던 것에 대해, 왜(why) 와 무엇(what)의 설명을 코멘트로 해서 남겨 주십시오.

    ```javascript
    // good
    /**
     * parseInt 가 원인으로 느렸음.
     * Bitshift를 통한 수치로의 문자열 강제 형변환으로
     * 성능을 개선시킴.
     */
    const val = inputValue >> 0;
    ```

  - [21.5](#21.5) <a name='21.5'></a> **주의:** bitshift를 사용하는 경우의 주의사항. 수치는 [64비트 값](http://es5.github.io/#x4.3.19)으로 표현되어 있으나 bitshift 연산한 경우는 항상 32비트 integer 로 넘겨집니다.

    ```javascript
    2147483647 >> 0 //=> 2147483647
    2147483648 >> 0 //=> -2147483648
    2147483649 >> 0 //=> -2147483647
    ```

  - [21.6](#21.6) <a name='21.6'></a> 부울값의 경우:

    ```javascript
    const age = 0;

    // bad
    const hasAge = new Boolean(age);

    // good
    const hasAge = Boolean(age);

    // good
    const hasAge = !!age;
    ```

**[⬆ back to top](#table-of-contents)**

## Naming Conventions
> `22.4 ~ 5`, `22.10 ~ 15` 항목을 제외하고는 [Airbnb](https://github.com/airbnb/javascript/blob/master/README.md#naming-conventions)와 동일합니다.

  - [22.1](#22.1) <a name='22.1'></a> 1문자의 이름은 피해 주십시오. 이름으로부터 의도가 읽혀질수 있게 해주십시오.

    ```javascript
    // bad
    function q() {
      // ...stuff...
    }

    // good
    function query() {
      // ..stuff..
    }
    ```

  - [22.2](#22.2) <a name='22.2'></a> 오브젝트, 함수 그리고 인스턴스에는 camelCase를 사용해 주십시오.

    ```javascript
    // bad
    const OBJEcttsssss = {};
    const this_is_my_object = {};
    function c() {}

    // good
    const thisIsMyObject = {};
    function thisIsMyFunction() {}
    ```

  - [22.3](#22.3) <a name='22.3'></a> 클래스나 constructor에는 PascalCase 를 사용해 주십시오.

    ```javascript
    // bad
    function user(options) {
      this.name = options.name;
    }

    const bad = new user({
      name: 'nope',
    });

    // good
    class User {
      constructor(options) {
        this.name = options.name;
      }
    }

    const good = new User({
      name: "yup",
    });
    ```

  - [22.4](#naming--leading-underscore) 함수명이나 속성명의 앞에 `_`가 있는 경우는 private을 의미한다.  외부에서 접근할 수 있는 경우, 사용하면 안되는 메서드명 또는 속성명은 `_`을 사용한다. 외부에서 접근할 수 없다면, 메서드명 이나 속성명에 `_`을 사용하지 않는다. eslint: [`no-underscore-dangle`](http://eslint.org/docs/rules/no-underscore-dangle.html)

    ```javascript
    // bad - 외부에서 접근할 수 있는 경우, 사용하면 안되는 메서드명 또는 속성명은 `_`을 사용한다.
    class User({
       constructor() {
          privateState: true
       }
       privateMethod() {
       }
       _publicMethod() {
       }
    }

    // good - 외부에서 접근할 수 있는 경우, 사용하면 안되는 메서드명 또는 속성명은 `_`을 사용한다.
    class User({
       constructor() {
          _privateState: true
       }
       _privateMethod() {
       }
       publicMethod() {
       }
    }

    // bad -  외부에서 접근할 수 없다면, 메서드명 이나 속성명에 `_`을 사용하지 않는다.
    (function(){
       var _privateState = true;
       function _privateMethod() {
       }
       function publicMethod() {
          _privateMethod();
       }
    })();

    // good -  외부에서 접근할 수 없다면, 메서드명 이나 속성명에 `_`을 사용하지 않는다.
    (function() {
       var privateState = true;
       function privateMethod() {
       }
       function publicMethod() {
           privateMethod();
       }
    })();
    ```

  - [22.5](#naming--self-this) 가능한 this를 캐싱하지 않는다. arrow functions 또는 [Function#bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)를 사용하라. jQuery를 사용하는 경우라면, $.proxy(http://api.jquery.com/jQuery.proxy)를 사용하라.
  만약, this의 참조를 저장하는 경우라면 self 를 사용한다.

    ```javascript
    // bad
    function foo() {
      const self = this;
      return function () {
        console.log(self);
      };
    }

    // bad
    function foo() {
      const that = this;
      return function () {
        console.log(that);
      };
    }

    // good
    function foo() {
      return () => {
        console.log(this);
      };
    }
    ```

  - [22.6](#22.6) <a name='22.6'></a> 파일을 1개의 클래스로 export 하는 경우, 파일명은 클래스명과 완전히 일치시키지 않으면 안됩니다.

    ```javascript
    // file contents
    class CheckBox {
      // ...
    }
    export default CheckBox;

    // in some other file
    // bad
    import CheckBox from "./checkBox";

    // bad
    import CheckBox from "./check_box";

    // good
    import CheckBox from "./CheckBox";
    ```

  - [22.7](#22.7) <a name='22.7'></a> Default export가 함수일 경우, camelCase를 이용해 주십시오. 파일명은 함수명과 동일해야 합니다.

    ```javascript
    function makeStyleGuide() {
    }

    export default makeStyleGuide;
    ```

  - [22.8](#22.8) <a name='22.8'></a> singleton / function library / 빈오브젝트를 export 하는 경우, PascalCase를 이용해 주십시오.

    ```javascript
    const AirbnbStyleGuide = {
      es6: {
      }
    };

    export default AirbnbStyleGuide;
    ```

  - [22.9](#naming--Acronyms-and-Initialisms) 약어 및 이니셜은 항상 모두 대문자이거나 모두 소문자이어야 한다.

    ```javascript
    // bad
    import SmsContainer from "./containers/SmsContainer";

    // bad
    const HttpRequests = [
      // ...
    ];

    // good
    import SMSContainer from "./containers/SMSContainer";

    // good
    const HTTPRequests = [
      // ...
    ];

    // best
    import TextMessageContainer from "./containers/TextMessageContainer";

    // best
    const Requests = [
      // ...
    ];
    ```

  - [22.10](#naming-eng) 영문 사용
    소스의 변수명, 클래스명 등에는 영문 이외의 언어를 사용하지 않는다.

  - [22.11](#naming-no-korea) 한글 발음 사용 금지
    한글 발음을 그대로 사용하지 않는다.

    ```javascript
    // ''무형자산''이라는 의미의 변수를 선언한 예.
    // bad
    const moohyungJasan;

    // good
    const intangibleAssets;
    ```

  - [22.12](#naming-no-special) 특수 문자 사용 금지
   클래스, 메소드 등의 이름에는 특수 문자를 사용하지 않는다. jQuery변수의 경우 $을 사용하는 것은 예외사항으로 한다.

    ```js
    // bad
    funtion $some() {

    }
    ```
 
  - [22.13](#naming-class-name) 클래스명과 변수명은 명사 사용을 준수한다.
  - [22.14](#naming-method-name) 메소드명은 동사 사용을 준수한다.
  - [22.15](#naming-const-name) 상수명은 대문자를 사용하고, 단어와 단어사이는 _로 연결한다.

    ```js
    // bad
    const firefox = 1;
    const is_left = true;

    // good
    const FIREFOX = 1;
    const IS_LEFT = true;
    ```
  

**[⬆ back to top](#table-of-contents)**

## Accessors
> [Airbnb](https://github.com/airbnb/javascript/blob/master/README.md#accessors)와 동일합니다.

  - [23.1](#23.1) <a name='23.1'></a> 프로퍼티를 위한 억세서 (Accessor) 함수는 필수는 아닙니다.

  - [23.2](#23.2) <a name='23.2'></a> 억세서 함수가 필요한 경우, `getVal()` 이나 `setVal('hello')` 로 해주십시오.

    ```javascript
    // bad
    dragon.age();

    // good
    dragon.getAge();

    // bad
    dragon.age(25);

    // good
    dragon.setAge(25);
    ```

  - [23.3](#23.3) <a name='23.3'></a> 프로퍼티가 `boolean` 인 경우, `isVal()` 이나 `hasVal()` 로 해주십시오.

    ```javascript
    // bad
    if (!dragon.age()) {
      return false;
    }

    // good
    if (!dragon.hasAge()) {
      return false;
    }
    ```

  - [23.4](#23.4) <a name='23.4'></a> 일관된 경우, `get()` 과 `set()` 으로 함수를 작성해도 좋습니다.

    ```javascript
    class Jedi {
      constructor(options = {}) {
        const lightsaber = options.lightsaber || "blue";
        this.set('lightsaber', lightsaber);
      }

      set(key, val) {
        this[key] = val;
      }

      get(key) {
        return this[key];
      }
    }
    ```

**[⬆ back to top](#table-of-contents)**


## Events
> [Airbnb](https://github.com/airbnb/javascript/blob/master/README.md#events)와 다르게 별도의 가이드를 제공하지 않습니다.

## jQuery
> [Airbnb](https://github.com/airbnb/javascript/blob/master/README.md#jquery)와 동일합니다.


  - [25.1](#25.1) <a name='25.1'></a> jQuery오브젝트의 변수는 선두에 `$` 를 부여해 주십시오.

    ```javascript
    // bad
    const sidebar = $(".sidebar");

    // good
    const $sidebar = $(".sidebar");

    // good
    const $sidebarBtn = $(".sidebar-btn");
    ```

  - [25.2](#25.2) <a name='25.2'></a> jQuery의 검색결과를 캐시해 주십시오.

    ```javascript
    // bad
    function setSidebar() {
      $('.sidebar').hide();

      // ...stuff...

      $(".sidebar").css({
        "background-color": "pink"
      });
    }

    // good
    function setSidebar() {
      const $sidebar = $(".sidebar");
      $sidebar.hide();

      // ...stuff...

      $sidebar.css({
        "background-color": "pink"
      });
    }
    ```

  - [25.3](#25.3) <a name='25.3'></a> DOM 검색에는 `$(".sidebar ul")` 이나 `$(".sidebar > ul")` 와 같은 Cascading 을 사용해 주십시오. [jsPerf](http://jsperf.com/jquery-find-vs-context-sel/16)

  - [25.4](#25.4) <a name='25.4'></a> 한정된 jQuery 오브젝트 쿼리에는 `find` 를 사용해 주십시오.

    ```javascript
    // bad
    $("ul", ".sidebar").hide();

    // bad
    $(".sidebar").find("ul").hide();

    // good
    $(".sidebar ul").hide();

    // good
    $(".sidebar > ul").hide();

    // good
    $sidebar.find("ul").hide();
    ```

**[⬆ back to top](#table-of-contents)**
// 모듈
// 모듈은 대게 클래스 하나 혹은 특정한 목적을 가진 복수의 함수로 구성된 라이브러리 하나로 구성됨.
// 모듈에 export 와  import를 적용하면 다른 모듈을 불러올수 있음.
// export를 변수나 함수 앞에 붙이면 외부 모듈에서 해당 변수나 함수에 접근 가능
// import를 사용하면 외부 모듈의 기능을 가져올 수 있음.

// sayHi.js
export function sayHi(user) {
    alert(`Hello ${user}`)
}

// main.js
import {sayHi} from "./sayHi.js";

sayHi('John'); // Hello, John!


// export
// 한번에 내보내기

let months = ['Jan', 'Feb', 'Mar', 'Apr'];

const YEAR = 2015;

class User {
    constructor(name){
        this.name = name;
    }
}

export {months, YEAR, User}

// import

import {months, YEAR, User} from "경로"

// import 'as' 이름 바꾸기 
import * as say from "경로"
say.User
say.months

// export default
// 모듈은 크게 두가지로 나뉨
// 1. 복수의 함수가 있는 라이브러리 형태의 모듈
// 2. 개체 하나만 선언되어있는 모듈
// export default는 '해당 모듈에는 개체가 하나만 있다'는 사실을 명확히 나타내는 것

export default class User2 {
    constructor(name) {
        this.name = name;
    }
}

// default를 붙여서 모듈을 내보내면 {} 없이 import 가능

//default name
//default 키워드는 기본 내보내기를 참조하는 용도로 종종 사용됨.

function sayHi(user){
    alert(`Hello ${user}`)
}

export {sayHi as default};

// default export 하나와 다수의 named export가 있는 경우 import 하는 방법

export default class User3 {
    constructor(name){
        this.name = name;
    }
}

export function sayHi(user){
    alert(`Hello ${user}`);
}

import {default as User3, sayHi} from "경로"

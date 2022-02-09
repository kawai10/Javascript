// 심볼형 Symbol()
// 자바스크립트는 객체 property key 로 오직 문자형과 심볼형만 가능
// 심볼은 유일한 식별자를 만들고 싶을 때 사용

let id = Symbol();

// 심볼 id에는 "id"라는 설명이 붙음
let id = Symbol("id");

// 설명이 동일한 심볼을 여러 개 만들어도 각 심볼값은 다름

let id1 = Symbol("id")
let id2 = Symbol("id")

console.log(id1 == id2) // false

// 심볼형 값은 다른 자료형으로 자동 형 변환이 일어나지 않음
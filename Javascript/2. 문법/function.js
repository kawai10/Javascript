// 함수 (function)

// 함수 선언
function showMessage() {
    console.log("안녕")
}

// 함수 호출
showMessage();

// 지역 변수
// 함수 내에서 선언한 지역 변수는 함수 내에서만 접근 가능함

function localVariable() {
    let message = "안녕"
    console.log(message)
}

localVariable(); // 안녕
console.log(message); //Error

// 전역변수
// 함수 외부에 선언된 변수에 대해서는 함수 내에서 접근 가능
// 전역변수는 최소한으로 사용하는것이 좋음

let a = "hello world"
function variable() {
    console.log(a) // hello world
    a = "hi"
    console.log(a) // hi
}

// 매개변수 (parameter)

function plus(a, b) {
    console.log(a + b)   
}

plus(1,2) // 3
plus(3,4) // 7

// 기본값 매개변수에 값을 전달하지 않을 경우 기본값이 설정됨

function minus(a, b=1) {
    console.log(a - b)
}

minus(3,2) // 1
minus(5) // 4

// 반환 return

function sum(a, b) {
    return a+b
}

let result = sum(3,5)
console.log(result); // 8

// 함수 선언할때 이름 짓는 좋은 방법
// 함수는 어떤 동작을 수행하기 위한 코드를 모아놓은것
// 따라서 동사로 간결하고 명확하게 지어야함.
// 하나의 함수는 하나의 동작만 실행해야함.
// 독립적인 두 개의 동작은 독립된 함수 두 개에서 실행되어야함
//객체로서의 함수와 기명 함수 표현식
// 자바스크립트에서 함수는 값으로 취급됨.
// 함수의 자료형은 객체임
// 함수는 호출 가능한 행동 객체
// 함수를 호출할 수 있을뿐만 아니라 객체처럼 함수에 프로퍼티를 추가, 제거하거나 참조를 통해 전달할 수 있음.

// name 프로퍼티

function sayHi() {
    alert("Hi")
}

alert(sayHi.name) // sayHi


//length 프로퍼티
//length 는 함수 매개변수의 개수를 반환함.

function f1(a){}
function f2(a,b){}
function many(a, b, ...more){}

alert(f1.length); // 1
alert(f2.length); // 2
alert(many.length); // 2

// 나머지 매개변수는 개수에 포함되지 않음

//커스텀 프로퍼티
// 함수에 자체적으로 만든 프로퍼티를 추가할 수 있음

function sayHi2(){
    alert("hi")

    sayHi2.counter++;
}
sayHi2.counter = 0; // 초기값

sayHi2(); // Hi
sayHi2(); // Hi

alert(sayHi2.counter) // 2

//프로퍼티는 변수가 아님.
//함수에 프로퍼티를 할당해도 함수 내에 지역변수 counter가 만들어지지 않음.

//기명 함수 표현식
// 이름이 있는 함수표현식을 나타내는 용어

let sayHi3 = function func(who){
    alert('hello')
}

// func과 같은 이름을 붙이면 두 가지 변화가 생김
// 1. 이름을 사용해 함수 표현식 내부에서 자기 자신을 참조할 수 있음.
// 2. 기명 함수 표현식 외부에서는 그 이름을 사용할 수 없음.

// 함수 선언문에는 내부 이름을 지정할 수 없음. 함수 표현식에만 사용 가능
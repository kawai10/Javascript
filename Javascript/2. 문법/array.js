//배열

//배열 선언

let arr = new Array();

let arr = [];

let fruits = ["apple", "orange", "banana"]

console.log(fruits[0]) // apple
console.log(fruits[1]) // orange
console.log(fruits[2]) // banana

// 요소 수정

fruits[2] = "tomato"

console.log(fruits[2]) // tomato

// 요소 추가

fruits[3] = "remon"

console.log(fruits[3]) // remon

console.log(fruits.length) // 4

// 배열 요소의 자료형에는 제약이 없음

let arr = ["string", 1, {name:"name"}, true, 
            function(){
                console.log("hi")
            }]

console.log(arr[2].name) // name

arr[4]() // hi

// Stack and Queue

// Stack
// 후입선출 LIFO
// push - 요소를 스택 끝에 집어넣음
// pop - stack 끝 요소를 추출함

fruits.pop() // 배열에서 remon을 제거
fruits.push("remon"); // 배열 끝에 remon을 추가

// Queue
// 선입선출 FIFO
// push - 맨 끝에 요소를 추가
// shift - 맨 앞 요소를 제거하고 반환한 후 남아있는 요소들을 앞으로 밀어줌

fruits.shift(); // 배열에서 apple을 제거하고 반환
fruits.unshift(); // 배열 맨 앞에 apple 추가

// 주의
// 배열은 순서가 있는 자료를 저장하는 용도로 만들어진 특수한 자료구조
// 임의의 키를 사용해야 한다면 배열보다는 일반 객체 {}가 적합한 자료구조일수 있음
//나머지 매개변수와 스프레드 문법
// 상당수의 자바스크립트 내장 함수는 인수의 개수에 제약을 두지 않음

// 나머지 매개변수 ...
// ... 은 '남아있는 매개변수들을 한데 모아 배열에 집어넣어라' 는 것을 의미

function sumAll(...args) {
    let sum = 0;

    for (let arg of args) sum += arg;

    return sum;
}

alert(sumAll(1));
alert(sumAll(1, 2));
alert(sumAll(1,2,3));


function showName(firstName, lastName, ...titles){
    alert(firstName + ' ' + lastName);

    alert(titles[0]) // Software Engineer
    alert(titles[1]) // Researcher
    alert(titles.length); // 2
}

showName("Bora", "Lee", "Software Engineer", "Researcher");

// 나머지 매개변수는 항상 마지막에 있어야 함



//스프레드 문법
//배열을 통째로 매개변수에 넘겨주는 방법

let arr = [3,5,1];

alert(Math.max(arr)); // NaN

alert(Math.max(...arr)); // 5 (스프레드 문법이 배열을 인수 목록으로 바꿔줌)

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

alert(Math.max(...arr1, ...arr2)); // 8
alert(Math.max(1, ...arr1, 2, ...arr2, 25)); // 25

let arr3 = [1,3,5]
let arr4 = [2,4,6]
let merged = [0, ...arr3,7, ...arr4]; 
alert(merged) // 0,1,3,5,7,2,4,6

//문자열을 문자 배열로 변환이 가능함

let str = 'Hello';
alert([...str]); // H,e,l,l,o
// Array.from은 이터러블을 배열로 바꿔줌
alert(Array.from(str)); // H,e,l,l,o
// Array.from 은 유사 배열 객체와 이터러블 객체 둘 다에 사용할 수 있음
// 스프레드 문법은 이터러블 객체에만 사용할 수 있음

// ...이 함수 매개변수의 끝에 있으면 인수 목록의 나머지를 배열로 모아주는 나머지 매개변수임.
// ...이 함수 호출 시 사용되거나 기타 경우엔 배열을 목록으로 확장해주는 스프레드 문법임
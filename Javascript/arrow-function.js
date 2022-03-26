//화살표 함수

let func1 = function(arg1, arg2){
    return expression;
}

// 화살표 함수를 이용한 축약버전
let func = (arg1, arg2) => expression(표현식)

// -----------------------------------------

let sum = function plus(a, b) {
    return a+b;
}

let sum = (a, b) => a+b;

console.log(sum(1, 2)) // 3

// 인수가 하나밖에 없는경우 괄호 생략 가능

let argument = n => n+2;

console.log(argument(2)) // 4

//인수가 하나도 없을 경우에는 괄호 생략 불가

let hello = () => console.log("hi")

hello(); // hi


//-------------------------------

let plus = (a,b) => {
    let result = a + b;
    return result;
}

//화살표 함수에는 this가 없음 (super도 없음)

let group = {
    title : "1모둠",
    students : ["보라", "호진", "지민"],

    showList(){
        this.students.forEach(
            student => alert(this.title + ': ' + student) // 1모둠 : 보라 ....
        )
    }
}

group.showList();
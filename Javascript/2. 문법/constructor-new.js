// new 연산자와 생성자 함수
// 유사한 객체를 여러개 만들어야 할 경우에는 new 연산자와 생성자 함수를
// 사용하면 유용함

// 생성자 함수
// 생성자 함수는 다음의 관례를 따름
// 1. 함수 이름의 첫 글자는 대문자로 시작
// 반드시 new 연산자를 붙여 실행함

function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("함수");
let user2 = new User("철수");

console.log(user.name) // 함수
console.log(user2.name) // 철수


// 재사용이 필요없는 복잡한 객체를 만들경우 익명 생성자 함수를 이용하면 유용함
// 익명 생성자 함수는 어디에도 저장되지 않고 한번만 호출되며 재사용 불가

let user = new function () {
    this.name = "Joel",
    this.age = 20;
}
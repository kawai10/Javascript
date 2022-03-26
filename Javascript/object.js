//객체
// 자바스크립트에는 8가지 자료형이 있음
// 이중 7개는 primitive type
// 나머지 1개가 객체
// 객체는 {} 이용해 만듬
// {} 안에는 키, 값이 쌍으로 구성된 property를 여러개 넣을수 있음
// 키 는 문자형, 값에는 모든 자료형이 허용됨

let user = new Object(); // '객체 생성자' 문법
let user = {}; // '객체 리터럴' 문법
let user = {
    name : "Joel",
    age : 20
};

console.log(user.name); // Joel
console.log(user.age); // 20

// property 추가

user.isAdmin = true;

console.log(user.isAdmin) // true

// property 삭제

delete user.age;

// 원래 상수는 수정이 불가하지만 상수 객체인 경우 내부의 키 값은 수정될 수 있음

//대괄호 표기법

let user = {
    "like angel" : true
};

console.log(user["like angel"]) // true

// computed property
let fruit;

let bag = {
    [fruit]: 5, // 변수 fruit에서 property 이름을 동적으로 받아옴
}

// 단축 property

function makeUser(name, age) {
    return {
        name, //name: name 과 같음
        age, //age : age 과 같음
    }
}

// 변수 이름에는 for, let, return 과 같은 예약어를 사용할수 없지만
// 객체 property에서는 사용 가능함
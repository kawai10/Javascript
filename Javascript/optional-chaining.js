//옵셔널 체이닝 (?.)

let user = {} // 주소 정보가 없는 사용자

console.log(user.address.street) // TypeEorror

// ?. 은 ?. 앞의 평가 대상이 undefined 나 null 이면 평가를 멈추고
// undefined 를 반환함.

let user = {}

console.log(user?.address?.street); // undefined

// user가 null 이나 undefined가 아니고 실제 값이 존재하는 경우에는
// 반드시 user.address property가 있어야 함. 그렇지 않으면 에러 발생

//단락 평가
// ?. 은 왼쪽 평가대상에 값이 없으면 즉시 평가를 멈춤

let user = null;
let x = 0;

user?.sayHi(x++); // 아무 일도 일어나지 않음

console.log(x) // 0;


// obj?.property - obj가 존재하면 obj.property를 반환하고 그렇지 않다면 undefined를 반환
// obj?.[property] - obj가 존재하면 obj[property] 반환, 그렇지 않다면 undefined 반환
// obj?.method() - obj가 존재하면 obj.method를 호출하고 그렇지 않다면 undefined 반환
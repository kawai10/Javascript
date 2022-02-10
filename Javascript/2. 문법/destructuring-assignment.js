//구조 분해 할당

// 배열 분해하기

let arr = ["John", "Tom"]

let [firstname, secondname] = arr;

console.log(firstname) // John
console.log(secondname) // Tom

// 쉼표를 사용하여 요소 무시하기

let [firstname, , thirdname] = ["John","Tom","Harry"]

console.log(thirdname) //Harry

// 할당 연산자 우측에는 모든 이터러블이 올수 있음

let [a, b, c] = "abc" // ["a", "b", "c"]
let [one, two, three] = new Set([1,2,3])

// 할당 연산자 좌측에는 뭐든지 올 수 있음
let user = {};

[user.name, user.surname] = "Harry potter".split(' ')


// ...로 나머지 요소 가져오기

let [name1, name2, ...array] = ["Tom", "John", "Harry", "Joel", "andre"]

//rest는 배열임
console.log(array[0]) // Harry


// 기본값
// = 을 이용하면 할당할 값이 없을 때 기본으로 할당해 줄 값인 기본값을 설정할 수 있음

let [name1 = "Tom", surname1 = "Harry"] = ["Ceaser"]
console.log(name1) // Ceaser
console.log(surname1) // Harry

// 객체 분해하기

let options = {
    title : "menu",
    width : 100,
    height : 200
}

let {title , width, height} = options;

console.log(title) // menu
console.log(width) // 100
console.log(height) // 200
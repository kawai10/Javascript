//배열 - 메소드

// splice 요소 추가,삭제,교체

//삭제
let arr = ["I", "study", "javascript"]

arr.splice(1, 1) // 인덱스 1부터 요소 1개 제거

console.log(arr); // ["I", "javascript"]

//-------------------------------

let arr = ["I", "study", "javascript", "right", "now"]

arr.splice(0,3, "Let's", "dance") // 인덱스 0부터 3개를 지우고 다른 요소로 대체

console.log(arr) // ["Let's", "dance", "right", "now"]

//----------------------------------

//splice는 삭제된 요소를 반환함

let arr = ["I", "study", "javascript", "right", "now"]

let removed = arr.splice(0,2)

console.log(removed) // ["I", "study"]

// slice 요소를 복사한 새로운 배열을 반환

let arr = ["t","e","s","t"]

arr.slice(1, 3); // e,s (인덱스가 1인 요소부터 인덱스가 3인 요소까지를 복사 (인덱스 3 제외))

//---------------------------------------------------------

// concat 기존 배열의 요소를 사용해 새로운 배열을 만들거나 기존 배열에 요소를 추가할때 사용
// 인수에는 배열이나 값이 올수 있음

let arr = [1, 2];

arr.concat([3, 4]) // [1,2,3,4]
arr.concat([3, 4], [5, 6]) // [1,2,3,4,5,6]
arr.concat([3, 4], 5, 6) // [1,2,3,4,5,6]

let arr = [1, 2];

let arrayLike = {
  0: "something",
  length: 1
};

arr.concat(arrayLike); // [1,2.[object Object]]

//----------------------------------

// forEach (반복)

arr.forEach(function(item, index, array) {
    ////
})

// for each element call alert
["a", "b","c"].forEach(alert);

["a", "b","c"].forEach((item, index, array)=>{
    alert(`${item} is at index ${index} in ${array}`)
});


//-----------------------------------------

// 배열 탐색 (indexOf, lastIndexOf, includes)

arr.indexOf(item, from) // 인덱스 from 부터 시작해 item(요소)을 찾음. 요소를 발견하면 해당 요소의 인덱스를 반환하고, 없으면 -1 을 반환
arr.lastIndexOf(item, from) // 위 메소드와 동일하지만 검색을 끝에서부터 시작
arr.includes(item, from) // 인덱스 from부터 시작해 item이 있는지 검색, 있으면 true 반환

let arr = [1, 2, true]

arr.indexOf(2); // 1
arr.indexOf(true) // 2
arr.indexOf(null); // -1
arr.includes(1) // true

// -------------------------------

// find
// 특정 조건에 부합하는 객체를 배열내에서 찾을때 사용

let result = arr.find(function(item,index,array){
    // true가 반환되면 반복이 멈추고 해당 요소를 반환
    // 조건에 해당하는 요소가 없으면 undefined 반환
})

let users = [
    {id: 1, name : "John" },
    {id: 2, name : "John2" },
    {id: 3, name : "John3" },
];

let user = users.find(item => item.id == 1);
user.name // John

// ----------------------------------

// filter
// 조건에 맞는 요소 전체를 담은 배열을 반환

let users = [
    {id: 1, name : "John" },
    {id: 2, name : "John2" },
    {id: 3, name : "John3" },
];

let someUsers = users.filter(item => item.id < 3);

someUsers.length // 2

// -------------------------------------

// map
// 배열 요소 전체를 대상으로 함수를 호출하고, 함수 호출 결과를 배열로 반환

// 각 요소(문자열)의 길이를 출력함
let lengths = ["abc", "bcde", "cdefg"].map(item =>item.length)
console.log(lengths) // 3,4,5 

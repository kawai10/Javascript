// 맵 (map) - 맵은 삽입 순서를 기억함
// 주요 메서드와 프로퍼티
new Map() // 맵을 만듬
map.set(key, value) // key 를 이용해 value를 저장
map.get(key) // key에 해당하는 값을 반환. key가 존재하지 않으면 undefined를 반환
map.has(key) // key가 존재하면 true, 존재하지 않으면 false
map.delete(key) // key에 해당하는 값을 삭제
map.clear() // 맵 안의 모든 요소 제거
map.size // 요소의 개수를 반환


// 주의 map[key]는 Map을 쓰는 바른 방법이 아님
// 위 방법은 map을 일반 객체처럼 취급하게 됨
// 따라서 map을 사용할때는 map 전용 메서드인 set,get 등을 사용하는게 좋음


//맵은 키로 객체를 허용, 객체는 객체를 키로 사용할수 없음

let john = {name : "John"};

let visitsCountMap = new Map();

visitsCountMap.set(john, 123);

visitsCountMap.get(john) // 123

//체이닝
//map.set 을 호출할 때마다 맵 자신이 반환됨 따라서 체이닝 가능

map.set('1', 'str1')
   .set(1, 'num1')
   .set(true, 'bool1')


// 맵의 요소에 반복 작업하기
// 다음 메소드를 통해 맵의 각 요소에 반복작업이 가능
// 1. map.keys() - 각 요소의 키를 모은 이터러블 객체를 반환
// 2. map.values() - 각 요소의 값을 모은 이터러블 객체를 반환
// 3. map.entries() - 요소의 [키, 값]을 한 쌍으로 하는 이터러블 객체 반환 

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50],
]);

for (let vegetable of recipeMap.keys()){
    console.log(vegetable) // cucumber, tomatoes, onion
}

for (let amount of recipeMap.values()){
    console.log(amount) // 500, 350, 50
}

for (let entry of recipeMap){
    console.log(entry) //cucumber,500 ...
}



// 셋(set) 중복을 허용하지 않는 값을 모아놓은 특별한 컬렉션
// 셋에 키가 없는 값이 저장됨.
// 주요 메서드
new Set(iterable) // 셋을 만듬
set.add(value) // 값을 추가하고 셋 자신을 반환
set.delete // 값을 제거, 제거에 성공하면 true 반환, 아니면 false 반환
set.has(value) // 셋 내에 값이 존재하면 true, 아니면 false
set.clear() // 셋을 비움
set.size

let set = new Set();

let john = {name : "John"}
let pete = {name : "Pete"}
let mary = {name : "Mary"}

set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

console.log(set.size) // 3

for (let user of set){
    console.log(user.name) // John, Pete, Mary
}
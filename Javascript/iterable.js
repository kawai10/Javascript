// iterable 객체
// 이터러블 객체는 배열을 일반화한 객체

// range를 반복 가능한 객체로 만들어주는 코드

let range = {
    from : 1,
    to :5
};

// 1. for of 최초 호출 시 , Symbol.iterator가 호출됨.
range[Symbol.iterator] = function () {
    
    // Symbol.iterator는 이터레이터 객체를 반환함.
    // 2. 이후 for of는 반환된 이터레이터 객체만을 대상으로 동작, 이때 다음 값도 정해짐
    
    return {
        current : this.from,
        last : this.to,

        // 3. for of 반복문에 의해 반복마다 next()가 호출됨
        next(){
            // 4. next()는 값을 객체 {done:.., value:..}형태로 반환해야 함
            if (this.current <= this.last){
                return {done: false, value : this.current++}
            } else {
                return {done : true};
            }
        }
    }
}


for (let num of range){
    console.log(num) // 1, then 2, 3, 4, 5
}


//문자열은 이터러블임

for (let char of "test"){
    console.log(char); // t, e ,s t
}

// Array.from
// 이터러블이나 유사 배열을 받아 진짜 Array를 만들어줌

let arrayLike = {
    0: "hello",
    1: "World",
    length: 2
};

let arr = Array.from(arrayLike);
console.log(arr.pop()) // World
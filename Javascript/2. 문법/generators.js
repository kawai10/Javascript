//제너레이터
// 일반 함수는 하나의값 또는 0개의 값만 반환함.
// 제너레이터를 사용하면 여러 개의 값을 필요에 따라 하나씩 반환할 수 있음

//제너레이터 함수

function* generateSequence(){
    yield 1;
    yield 2;
    return 3;
}

// 제너레이터 함수를 호출하면 코드가 실행되지 않고 제너레이터 객체가 반환됨.

let generator = generateSequence();
alert(generator); // [object Generator]

//next()는 제너레이터의 주요 메서드
//next()를 호출하면 가장 가까운 yield <value>문을 만날 때까지 실행이 지속됨
//이후 yield <value>문을 만나면 실행이 멈추고 value가 바깥 코드에 반환됨
// next()는 항상 아래 두 프로퍼티를 가진 객체를 반환함
// 1. value : 산출 값, done : 실행이 끝났으면 true, 아니라면 false

let one = generator.next();
alert(JSON.stringify(one)); // {"value":1,"done":false}
let two = generator.next();
alert(JSON.stringify(two)); // {"value":2,"done":false}
let three = generator.next();
alert(JSON.stringify(three)); // {"value":3,"done":true}

// 제너레이터와 이터러블
// 제너레이터는 이터러블임.
// for..of 반복문 사용 가능

for(let value of generator){
    alert(value); // 1,2 출력
}

//for..of는 이터레이션이 done:true일 때 마지막 value를 무시함
//논리 연산자

// || (OR)

result = a || b // a 와 b 둘 중 하나라도 true이면 true 반환

let hour = 9;

if(hour < 10 || hour > 13){
    console.log("True")
}

// || 연산자의 알고리즘
// 왼쪽부터 오른쪽으로 평가함. 따라서 가장 왼쪽이 true인 경우에는 if문을 실행함. (true 뒤의 값을 평가하지 않음)


// && (AND)
// 두개 이상의 연산자가 모두  True 일때 True 반환

console.log( true && true) //true
console.log( true && false) //false
console.log( false && false) //false

// AND 연산자도 OR 연산자와 마찬가지이지만 가장 왼쪽이 false일 경우 if문을 탈출함

// AND 연산자가 OR 연산자 보다 우선순위가 높음

// ! (NOT) 모든 논리 연산자 중에서 우선순위가 가장 높음

console.log( !true); //false

// !! 불린형으로 변환
console.log( !!"string") //true

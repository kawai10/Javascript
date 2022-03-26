// 형 변환

//문자형으로 변환
let value = true;
value = String(value) // 문자열 "true"가 저장됨

//숫자형으로 변환
let divide = "6" / "2" // 3 문자열이 숫자형으로 자동변환 된 후 연산 실행
let str = "123";
str = Number(str);

let age = Number("문자열 123"); // 숫자 이외의 글자가 들어가 있는 문자열을 숫자형을 변환하려는 경우 NaN
typeof age// NaN 

//숫자형으로 변환 시 적용되는 규칙
// undefined --> NaN
// null --> 0
// true --> 1, false --> 0 


//boolean형으로 변환
let charm = Boolean(1)

//규칙
//1 --> true, 0 --> false
//"hello" --> true, "" --> false
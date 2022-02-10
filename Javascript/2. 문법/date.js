// Date 객체와 날짜

//객체 생성

let now = new Date();
console.log(now); // 현재 날짜 및 시간이 출력됨
alert("a")

// new Date(year, month, date, hours, minutes, seconds, ms)
// year는 반드시 네자리 숫자여야 함
// month 0(1월)부터 11(12월) 사이의 숫자여야함
// date는 일, 값이 없는 경우에는 1일로 처리
// housrs/minutes/seconds/ms 에 값이 없는 경우에는 0으로 처리

new Date(2011, 0, 1, 0, 0, 0, 0) //2011 년 1월 1일, 00시 00분 00초

// 날짜 구성요소 얻기
getFullYear() // 연도(네자리수)를 반환
getMonth() // 월을 반환 (0~11)
getDate() // 일을 반환 (1~31)
getHours()
getMinutes()
getSeconds()
getMilliseconds()
getDay() // 요일 반환 일요일(0) 부터 토요일(6)을 반환(숫자로 반환함)
getTime() // 주어진 일시와 1970년 1월 1일 00시 00분 00초 사이의 간격인 타임스탬프를 반환

// 날짜 구성요소 설정하기

setFullyear(year, [month], [date])
setMonth(month, [date])
setDate(date)

// Date 객체를 숫자로 변경하기
// Date 객체를 숫자형으로 변경하면 타임스탬프(date.getTime()을 호출시 반환되는 값)가 됨.

let date = new Date();
alert(+date)

// Date.new()
// Date 객체를 만들지 않고 현재 타임스탬프를 반환함.

let start = Date.new();

// Date.parse와 문자열
// date.parse(str) 을 이용하면 문자열에서 날짜를 읽어올수 있음
// 단 문자열의 형식은 YYYY-MM-DDTHH:mm:ss.sssZ 처럼 생겨야 함
// YYYY-MM-DD (연-월-일)
// "T" - 구분 기호
// HH:mm:ss.sss - 시:분:초.밀리초
// Z(옵션)
// YYYY-MM-DD, YYYY-MM, YYYY 도 가능
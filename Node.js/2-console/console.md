# console

console.log('로그출력');
console.clear() <- 모든 로그 삭제

# log level

- log level에 따라 브라우저 console에서 출력이 다름
- python의 logger와 비슷
  console.log('log'); // 개발 시 사용
  console.info('info'); // 중요한 정보
  console.warn('warn'); // 경보
  console.error('error'); // 치명적, 사용자 에러, 시스템 에러

# assert

- assert는 첫번째 인자가 true 가 아닐때만 로그로 출력
  console.assert(2 === 3, 'not same!');
  console.assert(2 === 3, 'same!');

# object 출력방법

const student = {name : 'hun', age : 20}
console.log(student);
console.table(student); <- 테이블 형태로 출력
console.dir(student); <- 두번째 인자로 옵션을 지정할수 있음
option : showHidden, colors, depth

# 시간 측정

- 시작과 끝 사이 시간 측정
  console.time('for loop'); <-시작
  for (let i = 0; i< 10; i++){
  i++;
  }
  console.timeEnd('for loop'); <- 끝

# 카운팅

- 함수가 몇번 호출되었는지 카운팅
  function a() {
  console.count('function');
  }
  a();
  a();
- 카운트 초기화
  console.countReset('function');

# trace

- 디버깅 할때 유용함

function f1(){
f2();
}

function f2(){
f3();
}

function f3(){
console.log('print');
console.trace();
}

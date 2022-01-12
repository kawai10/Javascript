# global

- 자바스크립트 런타임 환경에서는 window 가 글로벌 객체
- Node 에서는 global이 글로벌 객체

global.hello = () > {
global.console.log('hello'); <- console 도 global.console 이지만 global이 생략된것
}

global.hello();
hello(); <- 글로벌은 생략 가능

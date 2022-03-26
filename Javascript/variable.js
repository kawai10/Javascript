"use strict";
// 변수

// 변수는 한번만 선언해야함.
let variable; // 변수 선언

variable = 'Hello'; //문자열 저장

variable = 'Hello2'; //새로운 값으로 변경 가능

let variable2 = 'Hi'; //한줄로도 가능

let number = 1; //숫자 저장

// 변수명에는 오직 문자와 숫자, $, _ 만 들어갈 수 있다.
// 첫 글자는 숫자가 될 수 없다.
// 표기법은 카멜케이스

let varyLongVariable;

//자바스크립트는 대소문자를 구별한다.
let apple;
let Apple;

//예약어는 변수명으로 올수 없음
let let;
let class;
let return;
let function;

// 상수 (변하지 않는 값)
const age = 10;
age = 11; //error

// 대문자 상수 (보통 값이 변하지 않는 하드코딩하는 값들을 만들때 사용)
const COLOR_RED = '#F00'

//변수명을 만들때 중요하게 생각하는 것들
// 1. 사람이 읽을 수 있는 이름을 사용
// 2. 줄임말이나 a,b,c와 같은 짧은 단어는 사용금지
// 3. 자신만의 규칙이나 소속된 회사의 규칙을 따르기
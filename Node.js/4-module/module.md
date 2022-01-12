# module

- 연관되어 있는 기능끼리 한 file 내에 module별로 관리하는것이 좋음

# count.js

let count = 0;

function increase() {
count++;
}

function getCount(){
return count;
}

- 다른 곳에서 사용하기 위하여 exports 해줘야 함
  module.exports.getCount = getCount;
  module.exports.increase = increase;
  exports.increase = increase;
- module 은 생략가능
- 생략 가능한 이유는 exports가 module을 참조하고 있기 때문
- 그러나 exports에 다른 값을 할당하면 module을 참조하지 않음 \*주의

# app.js

const counter = require('./counter.js');

counter.increase();
counter.getCount();

# this

- 브라우저에서 사용하는 this 와 node 에서 사용하는 this는 다르다
- 함수 안에서 this를 호출하면 global
- 클래스에서 this는 클래스 자기자신을 가리킴 python의 cls와 비슷
  function hello(){
  console.log(this === global); <- true
  }

class A {
constructor(num){
this.num = num;
}
memberFunction(){
console.log(this === global); <- false
}
}

const a = new A(1);
a.memberFunction();

console.log(this === module.exports); <- true

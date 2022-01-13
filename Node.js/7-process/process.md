# process

const process = require('process');

setTimeout(() =>{
console.log('setTimeout');
}, 0);

process.nextTick(() => {
console.log('nextTick'); 다른 콜백함수가 있어도 nextTick 콜백함수가 가장 우선순위로 실행됨
});

for (let i = 0; i < 100; i++){
console.log('for loop')
}

console

for loop
for loop
for loop
for loop
for loop
....
nextTick
setTimeout

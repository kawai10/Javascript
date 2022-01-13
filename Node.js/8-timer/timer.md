# timer

let num = 1;
const interval = setInterval(() => {
console.log(num++); <- 따로 중지하지 않는 이상 취소되지 않음
}, 1000);

setTimeout(() => {
console.log('Timeout');
clearInterval(interval); <- interval 취소
}, 6000);

실행 우선순위
process.nextTick -> setTimeout 0초 == setImmediate

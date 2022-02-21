//프라미스 API

//Promise.all
// 요소 전체가 프라미스인 배열을 받고 새로운 프라미스로 반환

Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)),
    new Promise(resolve => setTimeout(() => resolve(2), 2000)),
    new Promise(resolve => setTimeout(() => resolve(3), 1000))
]).then(alert);

//위 Promise.all 은 3초 후에 처리되고 반환되는 프라미스의 result는 배열 [1,2,3]이 됨
// 배열 result의 요소 순서는 Promise.all 에 전달되는 프라미스 순서와 상응한다는 점
// Promise.all 에 전달되는 프라미스 중 하나라도 거부되면,
// Promise.all 이 반환하는 프라미스는 에러와 함께 바로 거부됨.
// 에러가 발생하면 다른 프라미스는 무시됨.

// 이터러블 객체가 아닌 일반 값도 Promise.all에 넘길수 있음

Promise.all([
    new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(1),1000)
    }),
    2,
    3
]).then(alert); //1,2,3
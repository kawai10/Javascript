//프라미스 체이닝
// 스크립트를 불러오는 것과 같이 순차적으로 처리해야 하는 비동기 작업이 여러 개 있을 경우 체이닝 이용하면 됨

new Promise(function(resolve, reject){

    setTimeout(()=> resolve(1), 1000)
}).then(function(result){
    alert(result) // 1
    return result * 2
}).then(function(result){
    alert(result)// 2
    return result * 2
}).then(function(result){
    alert(result)// 4
    return result * 2
})

// 프라미스 체이닝이 가능한 이유는 promise.then을 호출하면 프라미스가 반환되기 때문임/
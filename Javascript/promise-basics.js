//promise

//제작 코드 - 원격에서 스크립트를 불러오는 것 같은 시간이 걸리는 일을 함.
//소비 코드 - 제작코드의 결과를 기다렸다가 이를 소비함. 이때 소비 주체(함수)는 여럿이 될 수 있음.
//프라미스 - 제작 코드와 소비 코드를 연결해 주는 특별한 자바스크립트 객체.
//프라미스는 시간이 얼마나 걸리든 상관없이 약속한 결과를 만들어 내는 제작 코드가 준비되었을 때,
//모든 소비 코드가 결과를 사용할수 있도록 해줌

let promise = new Promise(function(resolve, reject) {
    //executor
})

// resolve와 reject는 자바스크립트에서 자체 제공하는 콜백임.
// 개발자는 신경 쓰지 않고 executor 안 코드를 작성하면 됨
// 단 두개 중 하나를 반드시 호출해야 함
// resolve(value) - 일이 성공적으로 끝난 경우 그 결과를 나타내는 value와 함께 호출
// reject(error) - 에러 발생 시 에러 객체를 나타내는 error와 함께 호출


let promise = new Promise(function(resolve, reject){

    setTimeout(()=> resolve("done"), 1000)
})

// 소비자 : then,catch,finally
// 프라미스 객체는 executor(제작 코드)와 결과나 에러를 받을 수 있는 소비함수를 이어주는 역할을 함
// 소비함수는 .then, .catch, .finally 메서드를 사용해 등록됨.

//then

promise.then(
    function(result){/*결과를 다룸*/},
    function(error){/*에러를 다룸*/}
);


let promise = new Promise(function(resolve, reject){

    setTimeout(()=> resolve("done"), 1000)
})

promise.then(
    result => alert(result), // 1초 후 done을 출력
    error => alert(error) // 실행 X
)

// .catch
// 에러를 처리해야되는 경우에는 .catch 사용


// .finally
// try-catch의 finally와 비슷
// finally에는 인수가 없음. 프라미스가 이행되었는지 거부되었는지 상관이 없음
// finally는 자동으로 다음 핸들러에 결과와 에러를 전달
// finally는 프라미스 결과를 처리하기 위하여 만들어 진게 아님.
// 프라미스 결과를 finaaly를 통과해서 전달됨.
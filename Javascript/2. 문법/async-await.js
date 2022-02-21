//async

async function f(){
    return 1;
}

f().then(alert); // 1 
// function 앞에 async를 붙이면 해당 함수는 항상 프라미스를 반환함
// 프라미스가 아닌 것은 프라미스로 감싸 반환함.


//await
// await는 async 함수 안에서만 동작함.
// await 키워드를 만나면 프라미스가 처리될 때까지 기다림. 결과는 그 이후 반환됨.

async function f2() {
    let promise = new Promise((resolve, reject)=>{
        setTimeout(()=>resolve("완료!"),1000)
    });

    let result = await promise; // 프라미스가 이행될 때까지 기다림. 프라미스 객체의 result값이 변수 result에 할당됨.

    alert(result);
}

f2();


//await는 최상위 레벨 코드에서 작동하지 않음
let value = await promise; // 문법 에러 발생.



//async 클래스 메서드
class Waiter {
    async wait() {
        return await Promise.resolve(1);
    }
}

new Waiter()
.wait()
.then(alert); // 1
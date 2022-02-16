//try-catch

//에러가 발생하면 스크립트는 즉시 중단되고 콘솔에 에러가 출력됨
// 그러나 try-catch 문법을 사용하면 스크립트가 죽는 걸 방지하고, 에러를 잡음

try{
    //코드
} catch(err){
    // 에러 핸들링
}

//1. try 안의 코드가 실행
//2. 에러가 없다면 catch블록은 건너뜀
//3. 에러가 있다면 try 안 코드의 실행이 중단되고 catch 블록으로 제어 흐름이 넘어감

try {
    alert('try 블록')
} catch (error) {
    alert('에러가 없으므로, catch는 무시됨')
}

try {
    variable; //에러
} catch (error) {
    alert('에러 발생')
}

//try-catch는 오직 런타임 에러에만 동작함
//try-catch는 동기적으로 동작함 - 스케줄 된 코드에서 발생한 예외는 잡아낼 수 없음.


//선택적 catch 바인딩
// 에러에 대한 자세한 정보가 필요없다면 catch에서 생략 가능
try{

} catch {

}


// throw 연산자
// throw 연산자는 에러를 생성함.

let json = '{"age: 30}'

try {
    let user = JSON.parse(json)

    if(!user.name){
        throw new SyntaxError("불완전한 데이터")
    }
    alert(user.name)
} catch (e) {
    alert(e.message)
}

//에러 다시 던지기

let json2 = '{"age":30}'

try {
    let user = JSON.parse(json)

    if(!user.name){
        throw new SyntaxError("불완전한 데이터")
    }

    blabla(); // 예상치 못한 에러
} catch (e) {

    if(e instanceof SyntaxError){
        alert("JSON Error")
    }else{
        throw e; // 에러 다시 던지기
    }
}

//다시 던져진 에러는 try-catch 밖으로 던저짐. 이때 바깥에 try-catch가 없으면 스크립트는 죽음

try {
    readData();
} catch (error) {
    alert("External catch got")
}

//try-catch-finally
//finally 안의 코드는 에러가 발생하든 안하든 상관없이 항상 실행됨
//finally 절은 try-catch절을 빠져나가는 어떤 경우에도 실행됨
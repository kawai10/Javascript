//콜백

function loadScript(src) {
    // <script>태그를 만들고 페이지에 태그를 추가함
    // 태그가 페이지에 추가되면 src에 있는 스크립트를 로딩하고 실행함
    let script = document.createElement('script')
    script.src = src;
    document.head.append(script);
}

//함수 loadScript는 <script>태그를 동적으로 만들고 일르 문서에 추가함

loadScript('/my/script.js')
// 이때 스크립트는 비동기적으로 실행. 로딩은 지금 당장 시작되더라도 실행은 함수가 끝난 후에야 됨.
// 따라서 loadSciprt() 아래에 있는 코드들은 스크립트 로딩이 종료되는걸 기다리지 않고 실행됨

// 스크립트 로딩이 끝난 후 함수를 실행하여야 할 경우 콜백 함수를 추가함.

function loadScript(src, callback) {
    let script = document.createElement('script')
    script.src = src;

    script.onload = () => callback(script);

    document.head.append(script);
}

loadScript('my/script.js', function(){
    newFunction();
})

// 두 번째 인수로 전달된 함수(대체적으로 익명 함수)는 원하는 동작이 완료되었을 때 실행됨
// 이런 방식을 콜백 기반 비동기 프로그래밍이라고 함
// 무언가를 비동기적으로 수행하는 함수는 함수 내 동작이 모두 처리된 후 실행되어야 하는 함수가 들어갈 콜백을 인수로 반드시 제공해야함.
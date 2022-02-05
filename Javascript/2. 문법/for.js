// for 반복문

for(begin; condition; step){
    // 반복문 본문
}

for (let i = 0; i <3; i++){
    console.log(i)          // 0, 1, 2
}

// break 와 continue의 차이

// break는 반복문 자체를 종료시키고 다음 라인을 실행
// continue는 지금 실행중인 이터레이션을 멈추고 다음 이터레이션 실행
// break와 continue는 삼항 연산자인 ? 에서는 사용할 수 없음.


// 중첩 반복문을 한번에 빠져나오는 방법 (lable 이용)

outer : for(let i =0; i <10; i++){
    for (let j = 0; j<10; j++){
        break outer;
    }
}
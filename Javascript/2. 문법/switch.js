// switch 문

// switch 문은 하나 이상의 case문으로 구성
// case 문안에 break가 없는 경우에는 조건에 부합하는지 여부를 따지지 않고 다음 case문을 실행
// switch 문은 자료형의 일치가 중요함.
// 조건 값과 비교하려는 case문의 값의 자료형이 같아야 해당 case문이 실행됨
let a = 2 + 2;

switch (a) {
    case 3:
        console.log("a 보다 값이 작음");
        break;
    case 4:
        console.log("a 값과 일치");
        break;
    case 5:
        console.log(("a 보다 값이 큼"));
        break;
    default:
        console.log("a 값을 모르겠음");
        break;
}

// 복수의 case 문이 올수 있음

switch (a) {
    case 3:
    case 4:
        console.log("a 가 3과 4일때 이 메시지를 출력함");
        break;
    case 5:
        console.log(("a 보다 값이 큼"));
        break;
    default:
        console.log("a 값을 모르겠음");
        break;
}
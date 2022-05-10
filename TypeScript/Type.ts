// 타입 선언
// 타입스크립트는 타입을 엄격히 지켜야함. 타입이 잘못된 경우 컴파일 과정에서 오류가 발생

const str: string = "hi";
const num: number = 1;

// 타입을 다르게 지정한 경우 에러 발생
const notString: string = 2;

// Array
const arr: number[] = [1, 2, 3];
// 제네릭 사용가능
const arr2: Array<number> = [1, 2, 3];

// tuple(배열의 길이가 고정, 각 요소의 타입이 지정되어 있음.)
const tuple: [string, number] = ["1", 2];

// 모든 타입을 허용하는 any
const any: any = "hi" + 1 + 2;

// Void 변수에는 undefined와 null만 할당가능, 함수에는 반환 값을 설정할수 없다는 타입
const useful: void = undefined;
const nul: void = null;

function notreturn(): void {
  console.log("not return");
}

// 함수의 인자 갯수에 맞게 함수를 호출해야함. 부족하거나 많으면 에러 발생
function sum(a: number, b: number): number {
  return a + b;
}

// ?는 해당 인자가 있어도 되고 없어도 되는것 옵션의 개념
function minus(a: number, b: number, c?: number): number {
  return a - b - c;
}

//둘 다 가능
minus(5, 4, 3);
minus(5, 3);

// call signatures
type Add = (a: number, b: number) => number;
const add: Add = (a, b) => a + b;

// Polymorphism
type SuperPrint = {
  <T, V>(arr: T[], b: V): T;
};

const SuperPrint: SuperPrint = (arr) => arr[0];

const a = SuperPrint([1, 2, 3], 2);
const b = SuperPrint([true, false, true], true);
const c = SuperPrint(["1", "2", "3"], "4");
const d = SuperPrint([1, 2, true, "a"], true);

// 다른 사용 방법
function SuperPrint2<T>(arr: T[]) {
  return a[0];
}

const a2 = SuperPrint2([1, 2, 3]);
const b2 = SuperPrint2([true, false, true]);
const c2 = SuperPrint2(["1", "2", "3"]);
const d2 = SuperPrint2([1, 2, true, "a"]);

// 제네릭 확장

type Player<E> = {
  name: string;
  extraInfo: E;
};

type NicoExtra = {
  FavFood: string;
};

type NicoPlayer = Player<NicoExtra>;

const nico: NicoPlayer = {
  name: "nico",
  extraInfo: {
    FavFood: "kimchi",
  },
};

const lynn: Player<null> = {
  name: "lynn",
  extraInfo: null,
};

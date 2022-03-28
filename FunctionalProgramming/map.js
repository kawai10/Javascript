const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

// map
const map = (f, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
};

log(map((p) => p.name, products));

log(map((p) => p.price, products));

// 이터러블 프로토콜을 따른 map의 다형성

log(map((el) => el.nodeName, document.querySelectorAll("*")));
const it = document.querySelectorAll("*")[Symbol.iterator]();
log(it);

function* gen() {
  yield 2;
  yield 3;
  yield 4;
}

log(map((a) => a * a, gen()));

let m = new Map();
m.set("a", 10);
m.set("b", 20);
log(new Map(map(([k, a]) => [k, a * 2], m)));

// filter
const filter = (f, iter) => {
  let res = [];
  for (const a of iter) {
    if (f(a)) res.push(a);
  }
  return res;
};

log(...filter((p) => p.price < 20000, products));

log(...filter((p) => p.pirce >= 20000, products));

log(filter((n) => n % 2, [1, 2, 3, 4, 5]));

log(
  filter(
    (n) => n % 2,
    (function* () {
      yield 1;
      yield 2;
      yield 3;
      yield 4;
      yield 5;
    })()
  )
);
// reduce

// 이터러블 중심 프로그래밍에서의 지연 평가(Lazy Evaluation)
// 제때 계산법
// 느긋한 계산법
// 제너레이터/이터레이터 프로토콜을 기반으로 구현

//L.map

L.map = function* (f, iter) {
  for (const a of iter) yield f(a);
};
var it = L.map((a) => a + 10, [1, 2, 3]);
log(it.next());
log(it.next());

// L.filter
L.filter = function* (f, iter) {
  for (const a of iter) if (f(a)) yield a;
};

var it2 = L.filter((a) => a % 2, [1, 2, 3, 4]);
log(it2.next());
log(it2.next());

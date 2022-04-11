// 결과를 만드는 함수 reduce, take

// reduce

const join = curry((sep = ",", iter) =>
  reduce((a, b) => `${a}${sep}${b}`, iter)
);

const queryStr = pipe(
  Object.entries,
  map(([k, y]) => `${k}=${v}`),
  join("&")
);
log(queryStr({ limit: 10, offset: 10, type: "notice" }));

function* a() {
  yield 10;
  yield 11;
  yield 12;
  yield 13;
}

a().join(","); // X 불가
log(joing(" - ", a())); // 10 - 11 - 12 - 13

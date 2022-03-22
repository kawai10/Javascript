### ES6에서의 리스트 순회

- for i++
- for of

```javascript
const list = [1, 2, 3];
for (const a of list) {
  log(a);
}
```

### Array

- Array는 arr[0], arr[1] 이런식으로 접근 가능, 하지만 set과 map은 안됨

```javascript
const arr = [1, 2, 3];
for (const a of arr) loga(a);
```

### Set

```javascript
const set = new Set([1, 2, 3]);
for (const a of set) log(a);
```

### Map

```javascript
const map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
for (const a of map) log(a);
for (const a of map.keys()) loga(a);
for (const a of map.values()) log(a);
for (const a of map.entries()) log(a);
```

### 이터러블/이터레이터 프로토콜

- 이터러블 : 이터레이터를 리턴하는 [Symbol.iterator]()를 가진 값
- 이터레이터 : { value, done} 객체를 리턴하는 next()를 가진 값
- 이터러블/이터레이터 프로토콜 : 이터러블을 for...of, 전개 연산자 등과 함께 동작하도록한 규약

### 사용자 정의 이터러블을 통해 알아보기

```javascript
const iterable = {
  [Symbol.iterator]() {
    let i = 3;
    return {
      next() {
        return i == 0 ? { done: true } : { value: i--, done: false };
      },
    };
  },
};
let iterator = iterable[Symbol.iterator]();
for (const a of iterable) log(a);
```

### 전개 연산자

```javascript
const a = [1, 2];
log(...a, ...[3, 4]);
log(...a, ...arr);
log(...a, ...set, ...map.keys());
log(...a, ...map);
```

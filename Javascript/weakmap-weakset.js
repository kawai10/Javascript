//weakmap
// 맵에서 객체를 키로 사용한 경우 객체를 참조하는 것이 아무것도 없다고 해도
// 맵이 메모리에 남아있는 한 객체도 메모리에 존재
// 그러나 위크맵은 다름
// 위크맵은 키로 쓰인 객체가 가비지 컬렉션의 대상이 됨.
// 맵과 위크맵의 차이는 위크맵의 키는 반드시 객체여야함.
// 위크맵은 반복 작업과 keys(), values(), entries() 메서드를 지원하지 않음
// 지원하는 매서드는 get(key), set(key, value), delete(key), has(key)
let weakMap = new WeakMap();

let ojb = {};

weakMap.set(obj, "ok");

weakMap.set("test", "fail") // Error
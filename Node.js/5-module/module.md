# module

- 연관되어 있는 기능끼리 한 file 내에 module별로 관리하는것이 좋음

# count.js

let count = 0;

export function increase() {
count++;
}

export function getCount(){
return count;
}

# app.js

import {increase, getCount} from './counter.js';

increase();
getCount();

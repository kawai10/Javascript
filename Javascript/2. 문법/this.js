// this
// 모든 함수에 this 사용 가능
// this 값은 런타임에 결정됨


let user = {
    name : "John",
    age : 20,

    sayHi(){
        // this는 현재 객체를 나타냄
        console.log(this.name)
    }
};

//------------------------------------------

function sayHi() {
    console.log(this.name)
}

let user = {name : "John"};
let admin = {name : "Admin"};

function sayHi() {
    console.log(this.name);
}


// 별개의 객체에서 동일한 함수 사용
user.f = sayHi;
admin.f = sayHi;

// this는 점(.) 앞의 객체를 참조하기 때문에 this가 가리키는 값이 다름
user.f(); // John
admin.f(); // Admin
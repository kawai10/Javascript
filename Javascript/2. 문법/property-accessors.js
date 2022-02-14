//프로퍼티 getter와 setter

// getter와 setter

let obj = {
    get propName(){
        // getter, obj.propName을 실행할 때 실행되는 코드
    },

    set propName(value){
        // setter, obj.propName = value를 실행할 때 실행되는 코드
    }
}

let user = {
    name : "John",
    surname: "Smith",

    get fullName(){
        return `${this.name} ${this.surname}`
    },

    set fullName(value){
      [this.name, this.surname] = value.split(" ")
    }
}

user.fullName = "Alice Cooper"
alert(user.name) // Alice
alert(user.surname) // Cooper

//접근자 프로퍼티 설명자
// 접근자 프로퍼티엔 설명자 value와 writable이 없는 대신에 get과 set이라는 함수가 있음
// get - 인수가 없는 함수로, 프로퍼티를 읽을 때 동작함
// set - 인수가 하나인 함수로, 프로퍼티에 값을 쓸 때 호출됨
// enumerable - 데이터 프로퍼티와 동일
// configurable - 데이터 프로퍼티와 동일

let user2 = {
    name : "John",
    surname : "Smith"
};

Object.defineProperty(user2, "fullName", {
    get() {
        return `${this.name} ${this.surname}`;
    },

    set(value){
        [this.name, this.surname] = value.split(" ");
    }
});

alert(user2.fullName); //John Smith

for(let key in user2) alert(key); //name, surname

// 프로퍼티는 접근자 프로퍼티(get/set 메서드)나 데이터 프로퍼티(value를 가짐) 중 한종류에만 속하고 둘 다에 속할 수 없음.


//getter와 setter를 똑똑하게 활용하기

let user3 = {
    get name(){
        return this._name
    },

    set name(value){
        if(value.length < 4){
            alert("4자리 이상")
            return;
        }
        this._name = value;
    }
}

user3.name = "Peter"
alert(user3.name) // Peter

user3.name = "" // 4자리 이상


//호환성을 위해 사용하기

function User(name, birthday){
    this.name = name;
    this.birthday = birthday;

    // age는 현재 날짜와 생일을 기준으로 계산됨
    Object.defineProperty(this, "age", {
        get(){
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        }
    });
}

let john = new User("John", new Date(1993, 5, 10));

alert(john.birthday);
alert(john.age)
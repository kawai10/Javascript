//클래스는 OOP에서 특정 객체를 생성하기 위해 변수와 메소드를 정의하는 일종의 틀로, 객첼르 정의하기 위한 상태(변수)와 메소드로 구성된다.


// 기본 문법

class MyClass{
    constructor(){}
    method1(){}
    method2(){}
}


class User{
    constructor(name){
        this.name = name;
    }

    get name(){
        return this._name
    }

    set name(value){
        this._name = value;
    }

    sayHi(){
        alert(this.name)
    }
}

let user = new User("John");
user.sayHi();
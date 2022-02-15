//private, protected

// 내부 인터페이스와 외부 인터페이스
// 내부 인터페이스 - 동일한 클래스 내의 다른 메서드에서는 접근할 수 있지만, 클래스 밖에서는 접근할 수 없는 프로퍼티와 메서드
// 외부 인터페이스 - 클래스 밖에서도 접근 간으한 프로퍼티와 메서드

//프로퍼티 보호하기

//protected - protected 프로퍼티 명 앞에는 _ 가 붙음

class CoffeMachine {
    _waterAmount = 0;

    set waterAmout(value){
        if (value <0) {
            throw new Error("Error")
        } else {
            this._waterAmount = value;
        }
    }

    get waterAmout(){
        return this._waterAmount;
    }

    constructor(power){
        this._power = power;
    }
}

let coffemachine = new CoffeMachine(100);

// private 프로퍼티
// private 프로퍼티와 메서드는 #으로 시작함


class CoffeeMachine{
    #waterLimit = 200;

    #checkWater(value){
        alert(value)
    }

}

let coffeeMachine = new CoffeeMachine();

coffeeMachine.#checkWater(); // Error
coffeeMachine.#waterLimit() = 1000; // Error
//직접 접근 불가능. getter와 setter로 접근해야함

class CoffeeMachine2{
    #waterAmount = 0;

    getWaterAmount(){
        return this.#waterAmount;
    }

    setWaterAmount(value){
        this.#waterAmount = value;
    }
}
let coffeeMachine2 = new CoffeeMachine2();
coffeeMachine2.setWaterAmount(100)
alert(coffeeMachine2.getWaterAmount())
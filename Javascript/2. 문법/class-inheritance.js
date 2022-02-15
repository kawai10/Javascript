//클래스 상속

// extends

class Animal{
    constructor(name){
        this.speed = 0;
        this.name = name;
    }

    run(speed){
        this.speed = speed;
        alert(`${this.name} 은 속도 ${this.speed}로 달립니다.`)
    }

    stop(){
        this.speed = 0;
        alert(`${this.name} 가 멈췄습니다.`)
    }
}

let animal = new Animal("동물");


class Rabbit extends Animal {
    hide(){
        alert(`${this.name}가 숨었습니다.`)
    }
}

let rabbit = new Rabbit("토끼");
rabbit.run(5);
rabbit.hide();

//메서드 오버라이딩
// 자식은 부모의 메서드를 그대로 상속받지만 동일 메서드를 자체적으로 정의하면 자체 메서드를 사용
// super.method()는 부모 클래스에 정의된 method를 호출
// super(...) 은 부모 생성자를 호출함. 자식 생성자 내부에서만 사용 가능
class Rabbit2 extends Animal {
    hide(){
        alert(`${this.name}가 숨었습니다.`)
    }

    stop() {
        super.stop(); // 부모 클래스의 stop 메서드 호출
        this.hide();
    }
}
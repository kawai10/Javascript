//정적 메서드와 정적 프로퍼티

//정적 메서드 (static)

class User {
    static staticMethod(){
        alert(this === User)
    }
}

User.staticMethod(); // true
//User.staticMehod() 가 호출될 때 this의 값은 클래스 생성자인 User 자체가 됨.
//정적 메서드는 어떤 특정한 객체가 아닌 클래스에 속한 함수를 구현하고자 할 때 주로 사용.


//정적 프로퍼티

class Article {
    static publisher = "Ilya Kantor"
}

alert(Article.publisher); // Ilya Kantor
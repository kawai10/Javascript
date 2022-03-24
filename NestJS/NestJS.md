## NestJS란?

- NestJS는 효율적이고, 확장성이 뛰어난 서버측 애플리케이션을 구축하기 위한 프레임워크임
  Express 기반으로 만들어졌으며 기본적으로 타입스크립트를 지원하며 자바스크립트로 애플리케이션을 작성하는것도 가능하다. 그러나 타입스크립트를 사용하는 것을 권장하고 있음.
  또한 NestJS는 OOP(Object Oriented Programming), FP(Functional Programming), FRP(Functional Reactive Programming)를 지원함.

## 기본 구조

- NestJs에서는 각 기능마다 모듈화를 하며 각 모듈마다 module, Provider, Controller로 구분하여 작성한다. Spring의 MVC 패턴과 비슷하다.
  각 모듈의 Controller, Provider를 module로 합치고 그 모듈들을 최종적으로 app.module에 합쳐서 사용한다. (app.module은 모든 것의 루트 모듈 역할을 함.)
  ![](https://media.vlpt.us/images/funnysunny08/post/e0cd9e12-a8b6-484b-80b1-58337ce7fcc2/nestjs.png)

- NestJS는 Singleton 패턴을 지향하기 때문에 인스턴스를 직접 생성하지 않고 모듈을 통해 Injection 하는 패턴을 권장하고 있음.

- Singleton 패턴: 전역 변수를 사용하지 않고 객체를 하나만 생성 하도록 하며, 생성된 객체를 어디에서든지 참조할 수 있도록 하는 패턴

1. Controller

Contoroller는 url로부터 받은 요청을 해당하는 함수로 매핑하여 함수를 실행하는 역할을 한다. 실질적인 로직을 작성하는것을 지양함. Provider 내부의 함수를 호출함.

2. Provider

Provider는 거의 모든 데이터 처리 및 비즈니스 로직을 담당함.
다만 역할에 따라 이름이 달라짐.
사용자 인증 : Guards,
데이터 필터링 : Pipes,
비즈니스 로직 : Service or Handler,
예외처리 : Exception Filters,
위에 해당하지 않는 무언가를 하고 싶을 때 : Interceptor,
미들웨어 : Express의 Middleware와 동일

3. Module

Module은 Provider와 Controller를 합치는 역할을 함.
또한 다른 Module이 Provider를 사용할 수 있게 export 처리를 하거나 필요한 Provider가 있는 모듈을 import해서 사용할 수 있게 해줌.

4. DTO

계층간 데이터 교환을 위한 객체.  
DB에서 데이터를 얻어 Service나 Controller 등으로 보낼 때 사용하는 객체.  
DTO는 데이터가 네트워크를 통해 전송되는 방법을 정의하는 객체.

interface나 class를 이용해서 정의 될 수 있음.

## NestJS의 장점

1. 효율성 : 타입스크립트의 적극적인 도입, DI, IOC, Module을 통한 구조화 등의 기술을 통해 생산적인 개발이 용이함. Express의 경우 상대적으로 자유롭기 때문에 개발자마다 스타일과 선호하는 구조가 다르기 때문에 대규모 프로젝트에는 그다지 적합하지 않음.

2. 안정적 : 컴파일 언어인 타입스크립트를 도입함으로써 서버 개발 시 발생할 수 있는 오류들을 사전에 방지할 수 있고 모듈 별로 테스트 코드를 작성하기도 용이함.

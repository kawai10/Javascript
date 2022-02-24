## npm이란?

- npm은 Node Package Manager로 자바스크립트 패키지 매니저이고 NodeJS에서 사용할 수 있는 모듈들을 패키지화하여 모아둔 저장소 역할을 하며 설치/관리를 수행 할 수 있는 CLI를 제공함.

## 패키지 설치

- npm i <패키지명> 명령어로 패키지를 설치할수 있음. 설치에는 local install 과 global install이 있는데 기본은 local임.
  local은 해당 프로젝트에서만 사용가능.
  global install은 npm i -g <패키지명> 으로 설치 가능하고 모든 프로젝트에서 공용으로 사용할 수 있음.

## package.json

- package.json 에는 사용하고 있는 패키지들의 명세가 작성되어 있기 때문에 프로젝트를 다른 사람에게 공유하고 싶다면 package.json을 공유해서 개발 환경을 빠르게 구축할 수 있음.
  Maven의 pom.xml과 비슷한 역할
  npm init -y 명령어로 생성할 수 있음.
  개발 단계에서만 사용하려는 패키지를 설치하려는 경우에는 npm i -D <패키지명>으로 설치하면 됨.
  package.json은 보통 프로젝트 루트에서 생성함.

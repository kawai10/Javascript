// Express 미들웨어
// 미들웨어란?
// 미들웨어는 간단하게 말해서 클라이언트에게 요청이 오고 서버에서 응답을 보내기 전에 어떤 처리를 위해 거쳐가는 함수라고 할수있다.

// 1. 어플리케이션 레벨 미들웨어
// app.use() 및 app.METHOD()함수를 이용하여 app 오브젝트의 인스턴스에 바운드 시킴.
// 미들웨어를 어플리케이션 영역에서 지정한 path대로 처리 가능하게 하도록 함.

app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
});

// 특정 경로나 http method에 대해서만 적용할 수도 있음.


// 모든 /user/:id 요청에 대해 작동
app.use('/user/:id', function (req, res, next) {
    console.log('Request Type:', req.method);
    next();
});

// /user/:id인 GET 요청에 대해서만 응답
    app.get('/user/:id', function (req, res, next) {
    res.send('USER');
});

// 하나의 경로를 통해 2개 이상의 미들웨어 함수를 처리할수 있는 방법
app.use('/user/:id', function(req, res, next) {
    console.log('Request URL:', req.originalUrl);
    next();
    }, function (req, res, next) {
        console.log('Request Type:', req.method);
        next();
    });

// 라우터 레벨 미들웨어
// 라우터 레벨 미들웨어는 express.Router() 인스턴스에 바인드 된다는 점을 제외하고는 어플리케이션 레벨 미들웨어와 동일한 방식으로 작동함.
// router 를 사용하는 이유는 특정 root url을 기점으로 기능이나 로직별로 라우팅을 나눠서 관리할 수 있단느 점.



// express.json() 과 express.urlencoded()

// 클라이언트에서 body에 값을 담아서 서버로 보낼때 서버에서 그냥 받을수 없음

// example

import express from "express";
const app = express();

app.post('/', (req,res,next)=>{
    console.log(req.body); // req.body = undefined
})

// 따라서 다음과 같이 미들웨어를 사용하여 파싱을 해줘야 함.

import express from "express";
const app2 = express();
// json() 과 urlencoded 목적은 같지만
// content-type이 application/json으로 넘어오는 경우에는 json()으로 파싱해줘야 하고
// x-www-form-urlencoded 인 경우에는 urlencoded로 파싱해야 함.
app.use(express.json()) // or
app.use(express.urlencoded({extended:false}))
// extended false 와 true 차이는 false 경우에는 NodeJs에 기본으로 내장된 querystring 모듈을 사용하고
// true 인 경우에는 추가로 설치가 필요한 qs 모듈을 사용함.

app.post('/', (req,res,next)=>{
    console.log(req.body); // req.body = undefined
})

// 추가로 express.raw() 와 express.text도 있음.
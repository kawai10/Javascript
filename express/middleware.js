// Express 미들웨어
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
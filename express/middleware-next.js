import express from "express";
const app = express();
// middleware에서의 next()
// 미들웨어는 request, reponse, next, error 4가지 파라미터변수가 있음.
// 이 중에서 next에 대해서 다뤄볼려고 함.
// 위에서 언급한 대로 미들웨어는 요청과 응답 사이에서 어떤 처리를 하기 위한 것임.
// 중간에 거쳐가는 함수로 next가 없으면 다음 함수를 실행할수가 없음.

//Example
// 처음에 무조건 실행되어야 하는 미들웨어는 가장 최상단에 위치시켜야 함.
// app.use(logger);

// 미들웨어를 여러개 넣을수도 있음.
app.get("/", home1, home2);

function home1() {
  console.log("home1");
}

function home2() {
  console.log("home2");
}

function logger(req, res, next) {
  console.log("Log");
  // logger 함수에 next()가 있기 때문에 home1 함수가 실행되지만 home1에는 next가 없어서 home2 함수가 실행되지 않음.
  next();
}

// next를 사용할때 조심해야하는 부분
app.get("/user", user1, user2);

function user1(req, res, next) {
  if (req.query.user === "auth") {
    res.send("hihi");
    return;
  }
  next();
  console.log("return이 없을경우");
  // return이 없는 경우에는 response를 보낸 다음에 next()가 실행되어 user2 함수가 실행되고
  // 다시 되돌아와서 console.log()까지 실행이 됨.
  // 그러나 return이 있는 경우에는 실행되지 않음.
  // 아니면 else를 써줘야 함.
}

function user2(req, res) {
  console.log("uesr2");
}

app.listen(8080);

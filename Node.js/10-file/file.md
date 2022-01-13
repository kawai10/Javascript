# file

const fs = require('fs') file system

- 모든 api는 3가지 형태로 제공

// rename(...... , callback(error, data)) <- 비동기
// try {renameSync(.......) } catch(e) {} <- 콜백함수 X, 동기, 사용하지 않는 것이 좋음
// promise.rename().then().catch(0)

- 비동기
  const fs = require('fs').promises;

// readFile <- Buffer 형태로 읽어옴
fs.readFile('./text.txt').then(data => console.log(data))
.catch(console.error)

// writeFile <- 내용 수정 시 기존 내용을 덮어씀
fs.writerFile('./file.txt', 'hello')
.catch()

// appendFile <- 기존 내용 뒤에 생성됨
fs.appendFile('./file.txt', 'hi')

// copyFile
fs.copyFile('./file.txt', './file2.txt')

// create folder
fs.mkdir('sub-folder').catch();

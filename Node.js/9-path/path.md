# path

- 파일 시스템에 접근하기 위한 path(경로)
- 운영체제 별로 경로 표기법이 다를수 있으니 하드코딩은 절대 금지

const path = require('path');

console.log(**dirname); <-현재 디렉토리를 가리킴
console.log(**filename); <- 현재 디렉토리의 파일을 가리킴

// 경로 구분자
path.sep

// 환경변수 구분자
path.delimiter

// basename (파일 이름)
path.basename(\_\_filename)

// 확장자 제거
path.basename(\_\_filename, '.js')

// dirname (디렉토리)
path.dirname(\_\_filename)

// extension (확장자)
path.extname(\_\_filename)

// parse string -> object
path.parse(\_\_filename)

// format object -> string
path.format()

// isAbsolute (절대경로 확인)
path.isAbsolute
return boolean

// normalize (경로상에 에러가 있거나 이상하면 알아서 고쳐줌)
path.normalize()

// join (2개 이상의 인자를 받아서 경로를 합치는것)
path.join(arg, arg)

## Response Status Code란?

- 클라이언트가 서버에 어떠한 요청을 할 경우, 서버에서 요청에 대한 응답이 어떠한 상태인지 코드번호로 알려주는 것.

# Information - 100번대

1. 100 - Continue
   - 서버에서 request header는 받았고, 클라이언트가 request body 부분을 보내고 있는 상태
2. 101 - Switching Protocols
   - 요청자가 서버에게 Switching Protocolㅇ르 묻는 상태
3. 102 - Processiong
   - 요청자에 의해 서버가 요청을 수신하였으며 이를 처리했지만, 응답이 없는 상태
4. 103 - Checkpoint
   - 중단된 Put과 Post 요청을 재개할 목적으로 되찾을 수 있는 request를 사용하는 상태

# Successful - 200번대

1. 200 - Ok
   - 에러 없이 전송이 성공된 상태
2. 201 - Created
   - request가 되었고, 새로운 자원이 만들어진 상태
3. 202 - Accepted
   - 서버가 request를 전송받았으나 현재 완전하게 처리되지 않은 상태
4. 203 - Non-authoritative Information
   - 서버가 클라이언트 요구 중 일부만 전송한 상태
5. 204 - No Content
   - 서버가 클라이언트 요구를 처리했으나 전송할 데이터가 없는 상태
6. 205 - Reset Content
   - No Content 상태라서 요청자의 document view의 reset이 필요한 상태
7. 206 - Partial Content
   - 클라이언트의 header 범위 문제로 서버가 자원의 일부만 전달받은 상태
8. 207 - Multi-Status
   - 다수의 리소스가 여러 개의 상태 코드인 상황이 적절한 경우에 해당되는 정보를 서비스에 전달한 상태
9. 226 - IM Used
   - 서버가 GET요청에 대한 리소스를 처리했으며, 응답이 하나 또는 그 이상의 인스턴스 조작이 현재 인스턴스에 적용이 되었음을 알리는 상태

# Redirection : 300번대

1. 300 - Multiple Choices
   - 최대 다섯 개의 링크를 골라서 이동할 수 있는 상태
2. 301 - Moved Permanently
   - 요청된 페이지가 새 URL로 옮겨진 상태
3. 302 - Found
   - 요청된 페이지가 일시적으로 새 URL로 옮겨진 상태
4. 303 - See Other
   - 요청된 페이지는 다른 URL에서 찾을 수 있는 상태
5. 304 - Not Modified
   - 마지막 요청 이후 수정되지 않은 상태
6. 305 - Use Proxy
   - location field에 proxy의 url을 사용하는 상태

# Client Error : 400번대

1. 400 - Bad Request
   - 요청사항에 문법적인 오류가 있어서 서버가 이해할 수 없는 상태
2. 401 - Unauthorized
   - 해당 요청에 대한 권한이 없는 상태
3. 402 - Payment Required
4. 403 - Forbidden
   - 금지된 요청을 허가하지 않는 상태
5. 404 - Not Found
   - 요청한 페이지를 찾을 수 없는 상태
6. 405 - Method Not Allowed
   - request에 명시된 요청 Method가 제공되지 않은 상태
7. 406 - Not Acceptable
   - request에서 accept header에 not acceptable의 내용을 가진 자원을 요청한 상태
8. 407 - Proxy Authentication Required
   - 프록시 서버에게 해당 요청이 수행되도록 인증을 받아야 하는 상태
9. 408 - Request Timeout
   - 요청 대기 시간이 지난 상태
10. 409 - Conflict
    - request 충돌로 인하여 요청이 완료되지 않은 상태
11. 410 - Gone
    - 요청 페이지는 더 이상 사용할 수 없는 상태
12. 411 - Length Required
    - Content-Length 부분이 빠져서 요청을 허가하지 않은 상태
13. 412 - Precondition Failed
    - request 헤더 필드에 선결 조건에 대한 값이 서버에서 false가 나온 경우
14. 413 - Request entity too large
    - 요청 엔티티를 서버가 처리하기에 너무 큰 상태
15. 414 - Request-URI Too Long
    - 요청 URI가 너무 긴 상태
16. 415 - Unsupported Media Type
    - 지원하지 않는 미디어 타입을 요청한 상태
17. 416 - Requested Range Not Satisfiable
    - 클라이언트가 파일의 일부를 요청했을 때 서버가 지원하지 않는 상태
18. 417 - Expectation Failed
    - Expect request-header 필드의 요구를 서버가 충족시킬 수 없는 상태
19. 422 - Unprocessable Entity
    - 요청은 잘 전달 됐지만 문법 오류가 난 상태
20. 429 - Too Many Requests
    - 사용자가 지정된 시간에 너무 많은 요청을 보낸 상태

# Server Error - 500번대

1. 500 - Internal Server Error
   - 일반적인 서버 에러 메세지로 요청 사항을 이행할 수 없는 상태
2. 501 - Not Implemented
   - 서버가 해당 요청 메소드를 인식 못하거나, 이행할 능력이 없는 상태
3. 502 - Bad Gateway
   - 게이트웨이나 프록시의 상태가 나쁘거나 과부하인 상태
4. 503 - Service Unavailable
   - 일시적인 과부하나 서비스 중단 상태
5. 504 - Gateway Timeout
   - 과부하 등의 이유로 게이트웨이나 프록시의 한계 대기 시간이 지난 상태
6. 505 - HTTP Version Not Supported
   - request에서 사용한 HTTP 프로토콜을 서버가 지원하지 않는 상태
7. 511 - Network Authentication Required
   - 클라이언트의 접근을 위한 네트워크 인증이 필요한 상태

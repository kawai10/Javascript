// 커스텀 에러

class ValidationError extends Error {
    constructor(message){
        super(message)
        this.name = "ValidationError"
    }
}

function test(){
    throw new ValidationError("에러 발생")
}

try {
    test();
} catch (error) {
    alert(error.message)
    alert(error.name)
    alert(error.stack)
}
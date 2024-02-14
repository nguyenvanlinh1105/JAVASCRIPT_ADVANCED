# apply: kế thừa từ prototype // tương tự call
 - Nhận đối số là một mảng 
 ==> Phương thức này cho phép gọi một hàm với một this(bind) và tuyển đối số cho hàm góc dưới dạng mảng 
 -- Ví dụ: 
    const teacher  = {
        firstName :'Minh',
        lastName :'Thu'
    }
    function great(greeting, message){
        return `${greeting} ${this.firstName} ${this.lastName}.${message}`
    }
    let 
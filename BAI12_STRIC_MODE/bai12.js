// "use strict";
// fullName ="Nguyen Van Linh"
function testFunc(){
    "use strict";
   var age = 19;
}
testFunc()
// console.log(fullName);
// console.log(age)

const student ={
    fullName :'Nguyễn Văn Linh'
}// thuộc tính không thể ghi đè  writable = false 

student.fullName="Lyly"
console.log(student)


const linh = {}
Object.defineProperty(linh,'ten',{
    value :'An chó',
    writable:false
})
console.log(linh)

delete student// không xóa được 
console.log(student)



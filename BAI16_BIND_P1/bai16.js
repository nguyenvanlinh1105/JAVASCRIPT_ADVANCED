// bind : ràng buộc , từ khóa this thành một đối tượng khác tùy í 


this.firstName ='Minh'
this.lastName ='Thu'
const teacher= {
    firstName :'Minh',
    lastName :'Thảo',
    getFullName (){
        console.log(`${this.firstName} ${this.lastName}`)
    }

}
// Case 1:
console.log(teacher.getFullName())// Minh Thao 

// Case 2: 
 const getTeacherName = teacher.getFullName;
 console.log(getTeacherName())// Minh Thu 


// case 3:
const getTeacherName1 = teacher.getFullName.bind(teacher);// Minh Thao
// Bind không thay đổi từ khóa this 
// case 4: 
const btn = document.querySelector('button')
btn.onclick = function(){
    teacher.getFullName();
}

btn.onclick = teacher.getFullName.bind(teacher)
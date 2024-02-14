function random(){
    console.log(Math.random()*100)
}

random()


const teacher ={
    firstName :'Minh',
    lastName:'Thu',

}

const me ={
    firstName :'Linh',
    lastName :'Nguyễn',
    showFullName(){
        console.log(this.lastName+' '+this.firstName)
    }
}


me.showFullName.call(teacher)// gọi là kĩ thuật mượn hàm 

function animal(name, weight){
    this.name = name;
    this. weight = weight
}
// kế thừa thuộc tính của call()
function chicken(name, weight, legs){
    animal.call(this)
    // animal.call(this, name, weight)// hoặc có thể dùng cách này 
    this.name = name;
    this.weight=weight
    this.legs = legs;
}

const linhnguyen=new chicken("Linh Nguyen", 20,58)
console.log(linhnguyen)


console.log(1,2,3,4,5)
function logger(){
    Array.prototype.forEach.call(arguments,item=>{
        console.log(item)
    })
    Array.from(arguments).forEach(function(e){
        console.log(e)
    })

}

logger(1,2,3,4,5)
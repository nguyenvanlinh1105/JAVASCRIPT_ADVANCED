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


me.showFullName.call(this)// gọi là kĩ thuật mượn hàm 

function animal(name, weight){
    this.name = name;
    this. weight = weight
}
// kế thừa thuộc tính của call()
function chicken(name, weight, legs){
    this.legs = legs;
}

const linhnguyen=new chicken("Linh Nguyen", 20,58)
console.log(linhnguyen)
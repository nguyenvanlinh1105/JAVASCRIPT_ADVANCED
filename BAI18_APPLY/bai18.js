const teacher ={
    firstName :'Minh',
    lastName :'Thu'
}


function great(greeting, message){
    return `${greeting} ${this.firstName} ${this.lastName}.${message}`
}


let result = great.apply(teacher,['Anh chào em', 'Em đã có người yêu hay chưa'])

console.log(result)



// Kĩ thuật mượn hàm 


const me ={
    firstName:'Kim',
    lastName:'Ngan',
    isOnline:false,
    goOnline (){
        this.isOnline= true;
        console.log(`${this.firstName} ${this.lastName} is Online`)
    },
    goOffline (){
        this.isOnline= true;
        console.log(`${this.firstName} ${this.lastName} is Online`)
    }
}

const linh={
    firstName:'Linh',
    lastName:'Nguyen',
    isOnline :false,
}
console.log('Teacher: ', me.isOnline)
me.goOnline()
console.log('Teacher: ', me.isOnline)

console.log('Teacher: ', linh.isOnline)
me.goOnline.apply(linh)
console.log('Teacher: ', linh.isOnline)


// Kế thừa 

function Animal(name, weight){
    this.name = name ;
    this.weight= weight
}
function Parrot(){
    Animal.apply(this,arguments)
    this.speak=function(){
        console.log('Nha co khach')
    }
}


const conVet = new Parrot('Cho',300)
conVet.speak()





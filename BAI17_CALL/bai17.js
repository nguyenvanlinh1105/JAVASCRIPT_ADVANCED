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
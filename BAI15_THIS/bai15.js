const samsung={
    name:'sam sung a10 ',
    color:'pink',
    weight:'300g',
    takephoto(){
        console.log("Take photo screen")
    },
    objchild:{
        ram:'12GB',
        methodChild(){
            console.log(this)
        }
    }

}
console.log(samsung.objchild.methodChild())


function Car(name, color, weight){
    this.name = name
    this.color = color
    this.weight = weight
    this.run = function(){
        console.log('run on the road',this)
    }
}

const  merc = new Car('Mercedes E150', 'blue','300')
console.log(merc.run())

const button = document.querySelector('button')
button.onclick = function(e){
    console.log(e)
    console.log(this)
    console.dir(this)// in dưới dạng obj 
}


// một số trường hợp ngoại lệ 

console.log(this)// tham chiếu đến đối tượng window hay là đối tượng global 
function myFunc(){
    console.log(this)
}
myFunc()
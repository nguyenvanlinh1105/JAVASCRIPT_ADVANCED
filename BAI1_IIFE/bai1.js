console.log('linh nguyen')
let i = 0

;(function myFunction(){
    i++
    console.log(i);
    if(i<10){
        myFunction()
    }

})('Chào bạn')

// Ko gọi lại myfunction vì nó private 
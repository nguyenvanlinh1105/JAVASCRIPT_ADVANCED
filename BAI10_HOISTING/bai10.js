// Hoisting với var, function declaration 

// var 
console.log(age);
// console.log(fullName)
var age = 23

// function declaration 
console.log(sum(4,5))
function sum(a,b){
    return a+b
}
// trường hợp khác 

{
    console.log(heo)
    let heo = 'linnh nguuyen'
}


// Hoisting với let và const
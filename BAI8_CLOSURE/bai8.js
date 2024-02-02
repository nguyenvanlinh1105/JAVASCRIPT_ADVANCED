function createCounter(){
    let counter = 0 ;
    function increase(){
        return ++ counter;
    }
    return increase;
}



const counter1 = createCounter();
console.log(counter1())
console.log(counter1())
console.log(counter1())
console.log(counter1())
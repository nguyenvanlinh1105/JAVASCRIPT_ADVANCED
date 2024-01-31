const app={
    cars: [],
    add(car){
        this.cars.push(car)
    },
    edit(index, car){
        this.cars[index]=car;
    },
    delete(index){
        this.cars.splice(index,1)
    }
    // làm như cách này thi không đảm bảo được tính toàn vẹn dữ liệu 
};
const xe = (function(){
    // cách này có thể đảm bảo được tính toàn vẹn dữ liệu 
    const cars =[]
    return {
        get(index){
            return cars[index]
        },
        add(car){
            cars.push(car)
        },
        edit(index, car){
            cars[index]=car;
        }
    }
})()


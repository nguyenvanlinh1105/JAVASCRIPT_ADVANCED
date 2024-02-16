import html from './core.js'
const cars =['BMW','Porsche','Mercedes']
console.log(cars)

const isSuccess = false
const output =html`
    <h1>${null&&'Thành công'}</h1>
    <ul>
        ${cars.map(function(car){
           return `<li>${car}</li>`
        }).join('')}
    </ul>
`
console.log(output)
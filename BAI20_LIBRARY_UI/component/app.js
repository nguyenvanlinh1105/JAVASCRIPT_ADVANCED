import html from '../core.js'
import {connect} from '../store.js'
const connector = connect(state=>({cars:state.cars}));
/// connector là hàm trả về của connect vì thế nó có thể nhận luôn component
function app({cars}){
    return html
    `<ul>
        ${cars.map(car => `<li>${car}</li>`)}
    </ul>
    <button onclick ="dispatch('ADD','Mercedes-benz')">Add car</button>
    `
}

export default connector(app) 
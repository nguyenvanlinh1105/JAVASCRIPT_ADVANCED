import {createStore} from 'https://cdn.skypack.dev/redux';
// Reducer 
const initState = 0;
function reducer(state=initState,action){
    switch(action.type){
        case 'deposit':
            return state+action.payload;
        case 'withdraw':
            return state-action.payload
        default:
            return state;
    }
}
// store 
const store= window.store =createStore(reducer)

// action 
function actionDeposit(payload){
    return{
        type:'deposit',
        payload
    }
}
function actionWithdraw(payload){
    return{
        type:'withdraw',
        payload
    }
}
// DOM event 
const deposit = document.querySelector('#deposit')
const withdraw = document.querySelector('#widthdraw')

// event handler
deposit.onclick = function(){
    store.dispatch(actionDeposit(10))
}
withdraw.onclick = function(){
    store.dispatch(actionWithdraw(10))

}
// listener 
store.subscribe(()=>{
    console.log('State vừa  update xong !')
})

function render (){
    const output = document.querySelector('#output')
    output.innerText = store.getState()
}
render()




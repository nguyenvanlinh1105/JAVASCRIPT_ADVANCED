// import {createStore} from 'https://cdn.skypack.dev/redux';
// MY REDUX

function createStore(reducer){
    let state = reducer(undefined,{});
    const subcribers = []
    return {
        getState(){
            return state
        },
        dispatch(action){
            state=reducer(state,action)
            subcribers.forEach(subcriber=>{
                subcriber();
            })
        },
        subscribe(subcriber){
            subcribers.push(subcriber)
        }
    }
}




///////////////MY APP///////
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
    render()
})

function render (){
    const output = document.querySelector('#output')
    output.innerText = store.getState()
}
render()




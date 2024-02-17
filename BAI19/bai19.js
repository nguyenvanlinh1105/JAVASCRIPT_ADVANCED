import {createStore} from 'https://cdn.skypack.dev/redux';

const initState = 0
function reducer(state = initState, action){
    switch(action.type){
        case 'deposit':
            return state +action.payload
        case 'withdraw':
            return state - action.payload
        default :
            return state;
    }
}


// create store :
const store = window.store= createStore(reducer);
// create action :
    //- deposit 
function actionDeposit(payload){
    return {
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

// Dom event 
const deposit  = document.querySelector('#deposit');
const withdraw = document.querySelector('#withdraw');

// event handler 
 deposit.onclick = function(){
    store.dispatch(actionDeposit(10))
 }
withdraw.onclick = function(){
    store.dispatch(actionWithdraw(10))
}

// listener 
store.subscribe(()=>{
    console.log('State vừa update xong!')
    render()
})

function render (){
    const ouput= document.querySelector('#output')
    output.innerText = store.getState()
}
export default function html([first, ...strings], ...values){
    return values.reduce((acc,curr)=>acc.concat(curr, strings.shift()),
    [first])
    .filter(x=>x&&x!==true||x===0)// lọc và trả về một mảng thỏa mãn điều kiện 
    .join('')
}
export function createStore(reducer){
    let state = reducer()
    const roots  = new Map();// nó là object và có tính chất lặp qua// key là dom element - value : component
    function render (){
        for(const [root, component] of roots){
            // component là một function và return ra chuỗi html 
            const output  = component();
            root.innerHTML =output
        }
    }
    return {
        // attach nhận view và đẩy ra root
        attach(component,root){
            roots.set(root,component)
            render()
        },
        connect(selector=state=>state){// connect nhận một selector là một hàm và nhận một state và đối số trả về 1state
            return component=>(props,...args)=>
                component(Object.assign({}, props,selector(state),...args))
                // đẩy ngược state vào lại trong component => gọi là props 
        },
        dispatch(action,...args){
            state=reducer(state,action,args)
            render()
        }

        }
    }


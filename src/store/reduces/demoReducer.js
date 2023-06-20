const productData = {
    name:'demo',
    details:'from demo reducer'
}

function demoReducer (state = productData, action){
    if(action.type==="DEMO"){
        return {...state, name:'vamshi'}
    }
    return {...state};
}

export function selectDemo (state){
    return state.demo
}
export default demoReducer;
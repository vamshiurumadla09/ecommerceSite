import axios from 'axios';
//demo component
export function demo() {
    return {
        type: 'DEMO'
    }
};

//countries api
export function getAllCountries() {
    return (dispatch)=>{
        fetch("https://restcountries.com/v2/all")
        .then((res) => {
          return res.json()
        })
        .then((data) => {
            return dispatch({
                type: 'GETCOUNTRIES',
                payload:data
            })
        })
    }
};

//products api

export function getAllProducts(){
    return (dispatch)=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            return dispatch({type:'GETPRODUCTS', payload:res.data})
        })
        .catch((e)=>{
            console.log(e)
        })
    }
}
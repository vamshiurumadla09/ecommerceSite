import {React, useEffect} from 'react'
import {  connect } from 'react-redux';
import { selectProductState } from '../store/reduces/productsApiReducer';
import { getAllProducts } from '../store/actions';


function ProductApi(props) {
    console.log('productAPI :'+props.products)
    useEffect(()=>{
        props.getProducts()
      },[])
  return (
    <div className='betterview'>
        <h3>ProductApi</h3>
        <ul>
            {props.products.map((product,i)=>{
                return (
                    <li key={i}>{product.title}</li>
                )
            })}
        </ul>
    </div>
  )
}

function mapStateToProps(store){
    return selectProductState(store);
}
function mapDispatchToProps(dispatch){
    return{
        getProducts:()=>{
            dispatch(getAllProducts())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductApi)
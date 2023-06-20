import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { demo } from '../store/actions';
import { selectDemo } from '../store/reduces/demoReducer';


function DemoComponent(props) {
  console.log('demo :'+props.name)
  return (
    <div className='betterview'>
      <h1>DemoComponent</h1>
      <h4>{props.name}</h4>
      <button onClick={props.changeName}>change name</button>
    </div>
  )
}
function mapStateToProps(store) {
  return selectDemo(store)
}

function mapDispatchToProps(dispatch) {
  return {
    changeName: () => {
      dispatch(demo())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DemoComponent)
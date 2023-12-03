import React from 'react'
import {  useDispatch } from 'react-redux';
import {increaseCart,decreaseCart,removeCart, changeSelectCart} from '../State/actions'
import { toast } from 'react-toastify';
export default function Cartcard({item}) {
  const dispatch = useDispatch();
  const increase=()=>{
    dispatch(increaseCart(item._id))
  }
  const decrease=()=>{
    dispatch(decreaseCart(item._id))
  }
  const remove=()=>{
    toast("item removed")
    dispatch(removeCart(item._id))
  }
  return (
    <>
    
    <div className="card mb-3" style={{"max-width": "840px"}}>
    
    <div className="row g-0">
        <div className="col-md-1">
        <input type="checkbox" checked={item.selected} onClick={()=>{dispatch(changeSelectCart(item._id))}}/>
        </div>
    
      <div className="col-md-3">
        <img src={item.Image} className="img-fluid rounded-start" alt="..." />
      </div>
      <div className="col-md-7">
        <div className="card-body">
          <h5 className="card-title">{item.Title}</h5>
          <p className="card-text">{item.Description}</p>
          <p>price: {item.Price}</p>
          <button onClick={decrease}>-</button> {item.quantity} <button onClick={increase}>+</button>
          <br/>
          <button onClick={remove}>remove</button>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

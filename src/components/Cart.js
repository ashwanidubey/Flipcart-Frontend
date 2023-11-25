import React, { useEffect } from 'react'
import Cartcard from './Cartcard'
import {useNavigate} from 'react-router-dom';
import { paymentDetails,unsetIsHome} from '../State/actions';
import {  useDispatch , useSelector } from 'react-redux';
import { selectedItemList} from '../Functions/CartItems'

export default function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems=useSelector((state) => state.cartItems) 
  const selectedCart=useSelector((state) => state.numbercart)
  const priceCart=useSelector((state) => state.cartprice)
  const isHome =  useSelector((state) => state.isHome);
  useEffect(()=>{
    if(isHome)
    dispatch(unsetIsHome())
  },[])
  const handleOrder=()=>{
    const paymentdetailsobject={
      paymentPrice:priceCart,
      paymentItems: selectedItemList()
    }
    //console.log(selectedCart)
    dispatch(paymentDetails(paymentdetailsobject))
    localStorage.setItem("payment","true")
    navigate('/checkout');
  }
  return (
    <>
    { cartItems.length>0?
      <div className="d-flex flex-row  container ">
        <div  className="col-md-6 row mx-3" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
          {cartItems.map((item) => { 
            
            return <Cartcard item={item} />})}
        </div>
        <div>
          <div className="col-md-6 card mx-3 my-5" style={{ "width": "22rem" , "height":"250px"}}>
            <div class="card-header">
              PRICE DETAILS
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Price ({selectedCart} items) ₹{priceCart} </li>
              <li class="list-group-item">Discount ₹{priceCart/10}</li>
              <li class="list-group-item">Delivery Charges ₹60</li>
              <li class="list-group-item">Secured Packaging Fee ₹58</li>
            </ul>
            <div class="card-footer">
              Total Amount
              ₹{priceCart-priceCart/10+60+58}
            </div>
          </div>
          <button onClick={handleOrder}>Place Order</button>
        </div>
      </div>:<>NO item</>
}
    </>
  )
}

import React,{useEffect, useState} from 'react'
import OrderCard from './OrderCard';
import { useSelector, useDispatch } from 'react-redux';
import {unsetIsHome} from '../State/actions'
import { useNavigate } from 'react-router-dom';
export default function Orders() {
  const host = process.env.REACT_APP_HOST
  const state=useSelector((state) => state)
  const isLoggedin = state.isLoggedin;
  const mycredentials = state.credentials; 
  const isHome =  state.isHome;
  const dispatch = useDispatch();
  const[MyOrders,setMyOrders]=useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    if(isHome)
       dispatch(unsetIsHome())
   if(!isLoggedin)  {navigate('/');}

    fetch(`${host}/orders/findorder`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "token": mycredentials?mycredentials.token : ""
        }
    })
    .then((data)=>data.json())
    .then((data)=>{
    
      data && data.productlist ?  setMyOrders(data.productlist) : setMyOrders(x=>x)
    })
  },[])
  return (
    <div className='py-3 mx-auto'>
      {
        MyOrders.map(
          (order)=>{
          
            return <OrderCard Image={order.product.Image} title={order.product.Title} date={order.orderDate} status={order.status} orderId={order.orderId} MyOrders={MyOrders} setMyOrders={setMyOrders}/>}
        )
        
      }
      {MyOrders.length==0 && <h1>no order found</h1>}
    </div>
  )
}

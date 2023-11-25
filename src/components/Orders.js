import React,{useEffect, useState} from 'react'
import OrderCard from './OrderCard';
import {useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {unsetIsHome} from '../State/actions'

export default function Orders() {
  const state=useSelector((state) => state)
  const isLoggedin = state.isLoggedin;
  const mycredentials = state.credentials; 
  const isHome =  state.isHome;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
    if(isHome)
       dispatch(unsetIsHome())
   //if(!isLoggedin)  {navigate('/');}
    console.log(mycredentials.token)
    console.log(isLoggedin)
    fetch('http://localhost:5050/orders/findorder', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "token": mycredentials?mycredentials.token : ""
        }
    }).
    then((data)=>data.json()).
    then((data)=>{
      console.log(data)
      data && data.productlist ?  setMyOrders(data.productlist) : setMyOrders(x=>x)
    })
  },[])
  const[MyOrders,setMyOrders]=useState([]);
  return (
    <div>
      {
        MyOrders.map(
          (order)=><OrderCard image={order.product.image} title={order.product.Title} date={order.orderDate} status={order.status} />
        )
      }
    </div>
  )
}

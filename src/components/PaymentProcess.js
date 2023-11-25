import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FcCheckmark } from "react-icons/fc";
import {  useDispatch , useSelector } from 'react-redux';
import makepayment from '../Functions/payment'
export default function PaymentProcess() {
  const navigate = useNavigate();
  const [payment,setPayment]=useState(false);
  const paymentPrice=useSelector((state) => state.paymentPrice) 
  const paymentItems=useSelector((state) => state.paymentItems) 
  const credentials=useSelector((state) => state.credentials) 
  useEffect(() => {
    placeOrder()
    setTimeout(() => {
      navigate('/');
    }, 9000)
    setTimeout(() => {
      setPayment(true)
    }, 6000)
  },[])
  const placeOrder=async ()=>{
    //alert("payment "+localStorage.getItem("payment")+(localStorage.getItem("payment")=="false"))

    if(localStorage.getItem("payment")=="false") return ;
   localStorage.setItem("payment","false");
     paymentItems.map((items)=>{
       makepayment(items,credentials.token,credentials.id)
     })
  } 
  return (
    <div  className=" my-5 py-5" >
     {payment?<h1>Payment Done of {paymentPrice}</h1>: <h1>please wait while we are doing payment</h1>}
    {payment?<><FcCheckmark size={100}/></>
    :  <div className="spinner-border text-primary my-5 py-5" role="status" style={{ "width": "15rem", "height": "15rem" }}>
        <h1 className="visually-hidden">Loading...</h1>
      </div>}
    </div>
  )
}

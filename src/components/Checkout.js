import React, { useState } from 'react'
import {  useDispatch , useSelector } from 'react-redux';
import { FcCheckmark } from "react-icons/fc";
import Showaddress from './Showaddress';
import CardPayment from './CardPayment';
import UpiPayment from './UpiPayment';
import PaymentProcess from './PaymentProcess';
import {useNavigate} from 'react-router-dom';

export default function Checkout() {
  //const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate();
  const isLoggedIn=useSelector((state) => state.isLoggedin) 
  const paymentPrice=useSelector((state) => state.paymentPrice) 
  const paymentItems=useSelector((state) => state.paymentItems) 
  const isHome =  useSelector((state) => state.isHome);

  const [addresses, setAddress] = useState([{ address: "Address1" }, { address: "Address2" }])
  const [checkedAddress, setCheckedAddress] = useState("");
  const [isAddressSelected, setIsAddressSelected] = useState(false)
  const [checkedPayment, setCheckedPayment] = useState("");
  const [isPaymentSelected, setIsPaymentSelected] = useState(false)
  const[process,setProcess]=useState(false)
  const handleLogin = () => {
    //setIsLoggedIn(true)
    navigate('/login')
  }

  return (
    <>
    { !process ?
    <>

      <div>
      <h1>{paymentPrice}</h1>
    <h1>{paymentItems.length}</h1>
        <h1>login{isLoggedIn && < FcCheckmark />}</h1>
        {!isLoggedIn && <button onClick={handleLogin}>login</button>}
      </div>
      <div>
        <h1>Address {isAddressSelected && < FcCheckmark />}</h1>
        {
          (isLoggedIn && !isAddressSelected) &&
          <>
            {addresses.map((address) => {
              address.show = false;
              return (
                <div onClick={() => { setCheckedAddress(address) }}>
                  <Showaddress address={address} show={checkedAddress === address} setIsAddressSelected={setIsAddressSelected} />
                </div>)
            }
            )
            }
            <button>Add new address</button>
          </>
        }
      </div>
      <div>
        <h1>payemnt  {isPaymentSelected && < FcCheckmark />}</h1>
        {
          (isAddressSelected && !isPaymentSelected) &&
          <>
            <div onClick={() => { setCheckedPayment("card") }}>
              <input type="checkbox" checked={checkedPayment === "card"} />Card
              {
                checkedPayment === "card" && <CardPayment setIsPaymentSelected={setIsPaymentSelected} />
              }
            </div>
            <div onClick={() => { setCheckedPayment("upi") }}>
              <input type="checkbox" checked={checkedPayment === "upi"} /> UPI
              {
                checkedPayment === "upi" && <UpiPayment setIsPaymentSelected={setIsPaymentSelected} />
              }
            </div>
            <div onClick={() => { setCheckedPayment("cod") }}>
              <input type="checkbox" checked={checkedPayment === "cod"} /> COD
            </div>


          </>

        }
      </div>
      <div>
        {isPaymentSelected && <button onClick={()=>{setProcess(true)}}>Place Order</button>}
      </div>
      </> :
      <div className=" my-5 py-5">
          <PaymentProcess />
      </div>
      }
      
    </>
  )
}

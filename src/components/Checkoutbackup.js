import React, { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux';
import { FcCheckmark } from "react-icons/fc";
import Showaddress from './Showaddress';
import CardPayment from './CardPayment';
import UpiPayment from './UpiPayment';
import PaymentProcess from './PaymentProcess';
import { useNavigate } from 'react-router-dom';
import Checkoutcard from './Checkoutcard';
import Adress from './Adress';
import { toast } from 'react-toastify';

export default function Checkout() {
  //const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.isLoggedin)
  const paymentPrice = useSelector((state) => state.paymentPrice)
  const paymentItems = useSelector((state) => state.paymentItems)
  

  const [addresses, setAddress] = useState([{ address: "Address1" }, { address: "Address2" }])
  const [showAdressForm, setShowAdressForm] = useState(false);
  const [checkedAddress, setCheckedAddress] = useState("");
  const [isAddressSelected, setIsAddressSelected] = useState(false)
  const [checkedPayment, setCheckedPayment] = useState("");
  const [isPaymentSelected, setIsPaymentSelected] = useState(false)
  const [process, setProcess] = useState(false)
  useEffect(()=>{
    const storedAddresses = JSON.parse(localStorage.getItem('addresses')) || [];
    setAddress(storedAddresses)
  },[])
  const handleLogin = () => {
    //setIsLoggedIn(true)
    navigate('/login')
  }

  return (
    <>
      {!process ?
        <>

          <div className='d-flex flex-row  container'>

            <div className="col-md-6 row mx-3" style={{ maxHeight: '80vh', overflowY: 'auto' , textAlign: 'left' }} >
              <h1>login{isLoggedIn && < FcCheckmark />}</h1>
              {!isLoggedIn && <button onClick={handleLogin}>login</button>}

              <div>
                <h1>Address {isAddressSelected && < FcCheckmark />}</h1>
                {
                  (isLoggedIn && !isAddressSelected) &&
                  <>
                    {addresses && addresses.length>0 && addresses.map((address) => {
                      address.show = false;
                      return (
                        <div onClick={() => { setCheckedAddress(address) }}>
                          <Showaddress address={address} show={checkedAddress === address} setIsAddressSelected={setIsAddressSelected}  setAddress={setAddress} addresses={addresses}/>
                        </div>)
                    }
                    )
                    }
                   {!showAdressForm? <button onClick={()=>{setShowAdressForm(true)}}>Add new address</button>:
                   <>
                     <Adress addresses={addresses} SetAddress={setAddress} setShowAdressForm={setShowAdressForm}/>
                   </>
                   }
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
                    <div onClick={() => { setCheckedPayment("cod"); setIsPaymentSelected(true); }}>
                      <input type="checkbox" checked={checkedPayment === "cod"} /> COD
                    </div>


                  </>

                }
              </div>
              <div>
                {isPaymentSelected && <button onClick={() => { setProcess(true); toast("please wait while payment is in process")}}>Place Order</button>}
              </div>
            </div>
            <div className="row my-3" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
              <div className="col-md-6" style={{ textAlign: 'left' }}>
                <h2>Price: {paymentPrice}</h2>
                <h2>Item: {paymentItems.length}</h2>

              </div>
              {paymentItems.map((product) => <Checkoutcard product={product} />)}
            </div>
          </div>
        </> :
        <div className=" my-5 py-5">
          <PaymentProcess />
        </div>
      }

    </>
  )
}

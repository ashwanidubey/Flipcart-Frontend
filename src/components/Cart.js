import React, { useState } from 'react'
import Cartcard from './Cartcard'
import {useNavigate} from 'react-router-dom';

export default function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([{
    "_id": "645b2edfc7627f4aab2845c3",
    "Title": "APPLE iPhone 13 (Starlight, 128 GB)",
    "Ratings": 210341,
    "Reviews": 11165,
    "Price": 58999,
    "Quantity": 40,
    "Image": "https://rukminim1.flixcart.com/image/416/416/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg?q=70",
    "Stars": 4.5,
    "Description": "iPhone 13. boasts an advanced dual-camera system that allows you to click mesmerising pictures with immaculate clarity. Furthermore, the lightning-fast A15 Bionic chip allows for seamless multitasking, elevating your performance to a new dimension. A big leap in battery life, a durable design, and a bright Super Retina XDR display facilitate boosting your user experience.",
    "Category": "Mobiles",
    "Sub_Category": "Electronics"
  }, {
    "_id": "645b2edfc7627f4aab2845c3",
    "Title": "APPLE iPhone 13 (Starlight, 128 GB)",
    "Ratings": 210341,
    "Reviews": 11165,
    "Price": 58999,
    "Quantity": 40,
    "Image": "https://rukminim1.flixcart.com/image/416/416/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg?q=70",
    "Stars": 4.5,
    "Description": "iPhone 13. boasts an advanced dual-camera system that allows you to click mesmerising pictures with immaculate clarity. Furthermore, the lightning-fast A15 Bionic chip allows for seamless multitasking, elevating your performance to a new dimension. A big leap in battery life, a durable design, and a bright Super Retina XDR display facilitate boosting your user experience.",
    "Category": "Mobiles",
    "Sub_Category": "Electronics"
  }, {
    "_id": "645b2edfc7627f4aab2845c3",
    "Title": "APPLE iPhone 13 (Starlight, 128 GB)",
    "Ratings": 210341,
    "Reviews": 11165,
    "Price": 58999,
    "Quantity": 40,
    "Image": "https://rukminim1.flixcart.com/image/416/416/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg?q=70",
    "Stars": 4.5,
    "Description": "iPhone 13. boasts an advanced dual-camera system that allows you to click mesmerising pictures with immaculate clarity. Furthermore, the lightning-fast A15 Bionic chip allows for seamless multitasking, elevating your performance to a new dimension. A big leap in battery life, a durable design, and a bright Super Retina XDR display facilitate boosting your user experience.",
    "Category": "Mobiles",
    "Sub_Category": "Electronics"
  }, {
    "_id": "645b2edfc7627f4aab2845c3",
    "Title": "APPLE iPhone 13 (Starlight, 128 GB)",
    "Ratings": 210341,
    "Reviews": 11165,
    "Price": 58999,
    "Quantity": 40,
    "Image": "https://rukminim1.flixcart.com/image/416/416/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg?q=70",
    "Stars": 4.5,
    "Description": "iPhone 13. boasts an advanced dual-camera system that allows you to click mesmerising pictures with immaculate clarity. Furthermore, the lightning-fast A15 Bionic chip allows for seamless multitasking, elevating your performance to a new dimension. A big leap in battery life, a durable design, and a bright Super Retina XDR display facilitate boosting your user experience.",
    "Category": "Mobiles",
    "Sub_Category": "Electronics"
  }]);
  const handleOrder=()=>{
    navigate('/checkout');
  }
  return (
    <>
      <div className="d-flex flex-row  container ">
        <div  className="col-md-6 row mx-3" style={{ maxHeight: '80vh', overflowY: 'auto' }}>{cartItems.map((item) => <Cartcard item={item} />)}</div>
        <div>
          <div className="col-md-6 card mx-3 my-5" style={{ "width": "22rem" , "height":"250px"}}>
            <div class="card-header">
              PRICE DETAILS
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Price (5 items) ₹98,769 </li>
              <li class="list-group-item">Discount ₹20,650</li>
              <li class="list-group-item">Delivery Charges ₹160</li>
              <li class="list-group-item">Secured Packaging Fee ₹158</li>
            </ul>
            <div class="card-footer">
              Total Amount
              ₹78,277
            </div>
          </div>
          <button onClick={handleOrder}>Place Order</button>
        </div>
      </div>

    </>
  )
}

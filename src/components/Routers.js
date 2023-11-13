
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../State/actions';
import Signup from "./Signup";
import Footer from "./Footer";
import Home from "./Home";
import CardDesc from "./CardDesc";
import Checkout from "./Checkout";
import Cart from "./Cart";
import PaymentProcess from "./PaymentProcess";


function Routers() {
  const count = useSelector((state) => state);
  const dispatch = useDispatch(); 
  //onClick={() => dispatch(increment())} 
  return (
      <BrowserRouter>      
      <Navbar />
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carddesc" element={<CardDesc />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/construction" element={<h1>Page Under Construction , we are very sorry for inconvenience</h1>} />
            <Route path="/testing" element={<PaymentProcess />} />
          </Routes>
        </div>
      <Footer />  
      </BrowserRouter>
  );
}

export default Routers;

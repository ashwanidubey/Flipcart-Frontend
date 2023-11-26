import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../State/actions';
import Signup from "./Signup";
import Footer from "./Footer";
import Home from "./Home";
import CardDesc from "./CardDesc";
import Checkout from "./Checkout";
import Cart from "./Cart";
import PaymentProcess from "./PaymentProcess";
import Orders from "./Orders";
import MyToast from "./MyToast";
import Categories from "./Categories";
import Filter from "./Filter";
import { useEffect, useState } from "react";

function Routers() {


  const[filter,setFilter]=useState({categories:"All",rating:0,sortby:"Title",order:"ascending"})
  const isHome = useSelector((state) => state.isHome);
  useEffect(()=>{
    console.log(filter)
  })
  return (
    <BrowserRouter>
      <Navbar />
      {isHome && <Categories filter={filter} setFilter={setFilter}/>}
      

        {isHome ? (
          <div className='row'>
            <div className="col-md-6  my-3" style={{ "width": "13rem" }}>
              <Filter filter={filter} setFilter={setFilter}/>
            </div>
            <div className="col-md-6 row mx-3" style={{ maxHeight: '100vh',"width": "53rem", overflowY: 'auto' }}>
              <Routes>
                <Route path="/" element={<Home filter={filter} setFilter={setFilter}/>} />
                <Route path="/carddesc" element={<CardDesc />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/construction" element={<h1>Page Under Construction , we are very sorry for inconvenience</h1>} />
                <Route path="/testing" element={<Filter />} />
              </Routes>
            </div>
          </div>
        ):
        <div className='container'>
        <Routes>
          <Route path="/" element={<Home filter={filter} setFilter={setFilter}/>} />
          <Route path="/carddesc" element={<CardDesc />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/construction" element={<h1>Page Under Construction , we are very sorry for inconvenience</h1>} />
          <Route path="/testing" element={<Filter />} />
        </Routes>
      </div>}
      <Footer />
    </BrowserRouter>
  );
}

export default Routers;
